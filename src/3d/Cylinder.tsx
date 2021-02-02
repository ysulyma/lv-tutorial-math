import * as React from "react";
import {useCallback, useContext, useMemo, useRef} from "react";

// THREE
import * as THREE from "three";
import {DoubleSide, Mesh, Plane} from "three";

// R3F
import type * as R3F from "react-three-fiber";

import {Utils, usePlayer, useMarkerUpdate} from "ractive-player";
const {constrain} = Utils.misc,
      {anyHover} = Utils.mobile;

import {R3FContext, useDraggable, intercept} from "@lib/ThreeFiber";

const TWOPI = 2 * Math.PI;

export default function Cylinder() {
  const {script} = usePlayer();
  const radius = 3;
  const height = 8;

  const cylinder = useRef<Mesh>();
  const slider = useRef<Mesh>();
  const fat = useRef<Mesh>();

  const api = useContext(R3FContext);

  /* dragging */
  const plane = useRef<Plane>(new Plane());

  const move = useCallback((e: PointerEvent) => {
    // set plane
    // const intersections = raycaster.intersectObject(cylinder.current);
    // const int = intersections.find(_ => _.object.name === "cylinder");
    // if (int) {
    //   const normalMatrix = new THREE.Matrix3().getNormalMatrix(int.object.matrixWorld);
    //   const normal = int.face.normal;
    //   normal.applyMatrix3(normalMatrix).normalize();

    //   plane.current.setFromNormalAndCoplanarPoint(
    //     normal,
    //     int.point
    //   ).normalize();
    // }

    const pos = api.screenToScene(e.clientX, e.clientY, plane.current);
    const h = constrain(-height/2, pos.z, height/2);
    slider.current.position.setZ(h);
    if (!anyHover)
      fat.current.position.setZ(h);
  }, []);

  const down = useCallback((e: R3F.PointerEvent) => {
    const int = e.intersections.find(_ => _.object.name === "cylinder");
    if (!int)
      return;

    const normalMatrix = new THREE.Matrix3().getNormalMatrix(int.object.matrixWorld );
    const normal = int.face.normal;
    normal.applyMatrix3(normalMatrix).normalize();

    plane.current.setFromNormalAndCoplanarPoint(
      normal,
      int.point
    ).normalize();
  }, []);

  const events = useDraggable(move, down);

  /* visibility */
  const index = useMemo(() => script.markerNumberOf("3d/drag"), []);
  useMarkerUpdate(() => {
    slider.current.visible = script.markerIndex >= index;
    if (fat.current) {
      fat.current.visible = script.markerIndex >= index;
    }
  }, []);

  return (
    <>
      <mesh
        name="cylinder" ref={cylinder}
        position={[-6, 0, 0]} rotation={[TWOPI/4, 0, 0]}
        {...intercept}
      >
        <cylinderBufferGeometry args={[radius, radius, height, 32, 1, true]}/>
        <meshPhongMaterial color={0xAE81FF} side={DoubleSide} clipShadows={true}/>
      </mesh>
      <mesh name="slider" position={[-6, 0, 0]} ref={slider} {...events} visible={script.markerIndex >= index}>
        <torusBufferGeometry args={[radius, 0.1, 8, 32]}/>
        <meshBasicMaterial color={0xFFAA00}/>
      </mesh>
      {anyHover ? null : <mesh name="fat-slider" position={[-6, 0, 0]} ref={fat} {...events} visible={script.markerIndex >= index}>
        <torusBufferGeometry args={[radius, 0.5, 8, 32]}/>
        <meshBasicMaterial opacity={0} transparent={true}/>
      </mesh>}
    </>
  );
}
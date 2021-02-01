import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef} from "react";

// THREE
import * as THREE from "three";
import {DoubleSide, Mesh, Plane} from "three";

// R3F
import {useFrame, useResource, useThree, useUpdate, ReactThreeFiber} from "react-three-fiber";
import type * as R3F from "react-three-fiber";

import {Player, Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {animate} = Utils.animation,
      {during, from} = Utils.authoring,
      {between, constrain, range} = Utils.misc,
      {anyHover} = Utils.mobile;

import {R3FContext, ThreeScene, useDraggable, intercept} from "@lib/ThreeFiber";

import * as BezierEasing from "bezier-easing";
import {easeInCubic} from "@lib/easings";

const TWOPI = 2 * Math.PI;

export default function Sphere() {
  const {script} = usePlayer();

  const ref = useRef<Mesh>();

  const grow = useMemo(() => animate({
    duration: 1000,
    easing: BezierEasing(...easeInCubic),
    endValue: 3,
    startTime: script.parseStart("3d/anim"),
  }), []);

  const last = useRef(0);

  useTimeUpdate(t => {
    const r = grow(t);
    if (last.current === r)
      return;

    last.current = r;

    if (r === 0) {
      ref.current.visible = false;
    } else {
      ref.current.visible = script.markerName.startsWith("3d/");
      ref.current.geometry = new THREE.SphereBufferGeometry(r, 64, 64);
    }
  }, []);

  return (
      <mesh name="sphere" position={[0, 8, 0]} ref={ref} visible={false}>
        <sphereBufferGeometry args={[0, 64, 64]}/>
        <meshPhongMaterial color={0x1BBB68} side={DoubleSide}/>
      </mesh>
  );
}

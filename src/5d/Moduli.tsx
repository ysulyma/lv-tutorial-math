import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef} from "react";

// THREE
import * as THREE from "three";
import type {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// R3F
import {useFrame, useResource, useThree, useUpdate} from "react-three-fiber";

// our imports
import {Player, Utils, usePlayer, useMarkerUpdate, useTimeUpdate} from "ractive-player";
const {during, from} = Utils.authoring,
      {anyHover} = Utils.mobile;

// @lib
import {marchingCubes} from "@lib/graphics";
import Link from "@lib/Link";
import {R3FContext, ThreeScene} from "@lib/ThreeFiber";

/* camera */
function CameraControls() {
  const $three = useThree();
  const context = useContext(R3FContext);

  const {
    camera,
    gl: {domElement}
  } = $three;
  (domElement as any).$three = $three;

  // point camera
  camera.up.set(0, 0, 1);

  // controls
  const controls = useResource<OrbitControls>();
  useFrame((state) => controls.current.update());
  useEffect(() => {
    context.controls = controls.current;
  }, [controls.current]);

  // point camera
  useEffect(() => {
    camera.position.set(4.3, -9.5, 6);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    // camera.up.set(0, 0, 1);
  }, []);

  return (
    <orbitControls ref={controls} args={[camera, domElement]}/>
  );
}

interface Props {
  a: number;
  b: number;
}

export default function Moduli(props: Props) {
  const {script} = usePlayer();

  const geometry = useMemo(() => 
    marchingCubes((x, y, z) => y ** 2 - x ** 3 - z * x - props.b, -5, 5, 64)
  , [props.b]);

  /*
  const edges = marchingSquares(
    -5, 5, -5, 5,
    (x, y) => y ** 2 - x ** 3 - this.props.a * x - this.props.b + this.props.a,
    this.props.a,
    64
  ) as [number, number, number][];

  var lineGeometry = new THREE.LineSegmentsGeometry().setPositions( edges.reduce((a,b)=> a.concat(b)) );

  var lineMaterial = new THREE.LineMaterial( { color: 0xAF1866, linewidth: 6 } );

  lineMaterial.resolution.set( window.innerWidth, window.innerHeight ); // important, for now...

  var linePavement = new THREE.LineSegments2( lineGeometry, lineMaterial );

  scene.add( linePavement );
  this.fiber = linePavement;*/

  return (
    <ThreeScene id="moduli">
      {/* lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* camera */}
      {<CameraControls/>}

      <mesh geometry={geometry}>
        <meshPhongMaterial color={0x1BBB68e} side={THREE.DoubleSide}/>
      </mesh>
    </ThreeScene>
  );
}

import * as React from "react";
import {useContext, useEffect, useMemo} from "react";

// THREE
import * as THREE from "three";
import type {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// R3F
import {useFrame, useResource, useThree} from "react-three-fiber";

// @lib
import {marchingCubes, marchingSquares} from "@lib/graphics";
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
  useFrame(() => controls.current.update());
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
  /*
  The marchingCubes algorithm we use relies on THREE.Geometry, which is deprecated,
  and removed in r125. I haven't had time to figure out how to update it.
  */
  const moduliGeometry = useMemo(() => 
    marchingCubes((x, y, z) => y ** 2 - x ** 3 - z * x - props.b, -5, 5, 32)
  , [props.b]);

  const section = useMemo(() => {
    const edges = marchingSquares(
      -5, 5, -5, 5,
      (x, y) => y ** 2 - x ** 3 - props.a * x - props.b + props.a,
      props.a,
      64
    ) as number[][];

    const lineGeometry = new THREE.LineSegmentsGeometry().setPositions( edges.reduce((a,b)=> a.concat(b)) );

    const lineMaterial = new THREE.LineMaterial({ color: 0xFF0070, linewidth: 6});

    lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // important, for now...

    const linePavement = new THREE.LineSegments2(lineGeometry, lineMaterial );
    return linePavement;
  }, [props.a, props.b]);

  return (
    <ThreeScene>
      {/* lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* camera */}
      {<CameraControls/>}

      <mesh geometry={moduliGeometry}>
        <meshPhongMaterial color={0x1BBB68} side={THREE.DoubleSide}/>
      </mesh>
      <primitive object={section}/>
    </ThreeScene>
  );
}

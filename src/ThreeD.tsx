import * as React from "react";
import {useContext, useEffect, useMemo, useRef} from "react";

// it's better to call this in index.tsx
import "@lib/r3f";

// THREE extensions
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// R3F
import {useFrame, useResource, useThree} from "react-three-fiber";

// our imports
import {Utils, usePlayer, useMarkerUpdate, useTimeUpdate} from "ractive-player";
const {during, from} = Utils.authoring,
      {between} = Utils.misc;

// @lib
import Link from "@lib/Link";
import {R3FContext, ThreeScene} from "@lib/ThreeFiber";

// resources
import {ThreeDScript} from "./prompts";

// scene pieces
import Arrow from "./3d/Arrow";
import Cylinder from "./3d/Cylinder";
import Parametric from "./3d/Parametric";
import Sphere from "./3d/Sphere";

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

export default function Scene() {
  const {playback, script} = usePlayer();

  // axes helper
  const arrowIndex = useMemo(() => script.markerNumberOf("3d/svg"), []);
  const helperRef = useRef<THREE.Mesh>();
  useMarkerUpdate(() => {
    if (!helperRef.current)
      return;
    helperRef.current.visible = (script.markerIndex < arrowIndex);
  }, []);

  // pausing
  const m = React.useMemo(() => script.parseStart("3d/pause"), []);
  const prev = React.useRef(playback.currentTime);
  const EPSILON = 300;
  useTimeUpdate(t => {
    if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
      playback.pause();
    }
    prev.current = t;
  }, []);

  return (
    <figure id="three-d" {...during("3d/")}>
      <aside id="three-explain" {...from("3d/three", "3d/hide")}>
        <p><Link href="https://threejs.org/docs/">THREE.js</Link> for 3d graphics</p>

        <p {...from("3d/r3f")}><Link href="https://github.com/react-spring/react-three-fiber/">react-three-fiber</Link> for use with React</p>
      </aside>
      <ThreeScene>
        {/* lights */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* camera */}
        {<CameraControls/>}

        <axesHelper args={[5]} ref={helperRef}/>

        {/* action */}
        <Cylinder/>
        <Sphere/>
        <Parametric/>
        <Arrow/>
      </ThreeScene>
      <ThreeDScript/>
    </figure>
  );
}

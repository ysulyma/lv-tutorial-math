// resources
import {ThreeDPrompt} from "@env/prompts";
import Link from "@lib/Link";
import {APIHelper, useApi} from "@lib/ThreeFiber";
import {Canvas} from "@liqvid/react-three";
import {useFrame, useThree} from "@react-three/fiber";
import {useMarkerUpdate, useTime, Utils} from "liqvid";
import {useEffect, useRef} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Arrow from "./3d/Arrow";
import Cylinder from "./3d/Cylinder";
import Parametric from "./3d/Parametric";
import Sphere from "./3d/Sphere";
import {playback, script} from "./markers";

const {from} = Utils.authoring,
  {between} = Utils.misc;

/* camera */
function CameraControls() {
  const $three = useThree();
  const context = useApi();

  const {
    camera,
    gl: {domElement}
  } = $three;
  (domElement as any).$three = $three;

  // point camera
  camera.up.set(0, 0, 1);

  // controls
  const controls = useRef<OrbitControls>();
  useFrame(() => controls.current?.update());
  useEffect(() => {
    context.controls = controls.current;
  }, [controls.current]);

  // point camera
  useEffect(() => {
    camera.position.set(4.3, -9.5, 6);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.up.set(0, 0, 1);
  }, []);

  return (
    <orbitControls ref={controls} args={[camera, domElement]} />
  );
}

const m = script.parseStart("3d/pause");
const arrowIndex = script.markerNumberOf("3d/svg");

export default function Scene() {
  // axes helper
  const helperRef = useRef<THREE.Mesh>();
  useMarkerUpdate(() => {
    if (!helperRef.current)
      return;
    helperRef.current.visible = (script.markerIndex < arrowIndex);
  }, []);

  // pausing
  const prev = useRef(playback.currentTime);
  const EPSILON = 300;
  useTime(t => {
    if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
      playback.pause();
    }
    prev.current = t;
  }, []);

  return (
    <figure id="three-d" data-during="3d/">
      <aside id="three-explain" {...from("3d/three", "3d/hide")}>
        <p><Link href="https://threejs.org/docs/">THREE.js</Link> for 3d graphics</p>

        <p {...from("3d/r3f")}><Link href="https://docs.pmnd.rs/react-three-fiber/">@react-three/fiber</Link> for use with React</p>
      </aside>
      <Canvas>
        <APIHelper>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          {/* camera */}
          <CameraControls />

          <axesHelper args={[5]} ref={helperRef} />

          {/* action */}
          <Cylinder />
          <Sphere />
          <Parametric />
          <Arrow />
        </APIHelper>
      </Canvas>
      <ThreeDPrompt />
    </figure>
  );
}

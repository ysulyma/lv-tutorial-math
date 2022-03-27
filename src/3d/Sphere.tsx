import {useTime, Utils} from "liqvid";
import {useRef} from "react";
import * as THREE from "three";
import {DoubleSide, Mesh} from "three";
import {script} from "../markers";

const {animate, bezier, easings} = Utils.animation;

const grow = animate({
  duration: 1000,
  easing: bezier(...easings.easeInCubic),
  endValue: 3,
  startTime: script.parseStart("3d/anim"),
});

export default function Sphere() {
  const ref = useRef<Mesh>();

  useTime(r => {
    if (r === 0) {
      ref.current.visible = false;
    } else {
      ref.current.visible = script.markerName.startsWith("3d/");
      ref.current.geometry = new THREE.SphereBufferGeometry(r, 64, 64);
    }
  }, grow, []);

  return (
    <mesh name="sphere" position={[0, 8, 0]} ref={ref} visible={false}>
      <sphereBufferGeometry args={[0, 64, 64]}/>
      <meshPhongMaterial color={0x1BBB68} side={DoubleSide}/>
    </mesh>
  );
}

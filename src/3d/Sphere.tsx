import * as React from "react";
import {useMemo, useRef} from "react";

// THREE
import * as THREE from "three";
import {DoubleSide, Mesh} from "three";

import {Utils, usePlayer, useTime} from "liqvid";
const {animate, bezier, easings} = Utils.animation;

export default function Sphere() {
  const {script} = usePlayer();

  const ref = useRef<Mesh>();

  const grow = useMemo(() => animate({
    duration: 1000,
    easing: bezier(...easings.easeInCubic),
    endValue: 3,
    startTime: script.parseStart("3d/anim"),
  }), []);

  const last = useRef(0);

  useTime(t => {
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

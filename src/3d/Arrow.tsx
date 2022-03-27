import extrudeSvg from "@lib/svg-extrude";
import {useThree} from "@react-three/fiber";
import {useMarkerUpdate} from "liqvid";
import {useEffect, useRef} from "react";
import * as THREE from "three";
import {script} from "../markers";
import {MEDIA_URL} from "@env/media-url";

const arrowIndex = script.markerNumberOf("3d/svg");

export default function Arrow() {
  const {scene} = useThree();
  const ref = useRef<THREE.Group>();

  useEffect(() => {
    extrudeSvg(`${MEDIA_URL}/img/arrow.svg`).then(group => {
      group.rotation.set(Math.PI/2,0,0);
      const box = new THREE.Box3().setFromObject(group);
      const size = new THREE.Vector3();
      box.getSize(size);
      group.position.set(-size.x/2,0,size.z);

      ref.current = group;
      group.visible = (script.markerIndex >= arrowIndex);
      scene.add(group);
    });

    // extrudeSvg(`${MEDIA_URL}/img/i.svg`).then(group => {
    //   group.rotation.set(Math.PI/2,0,0);
    //   const box = new THREE.Box3().setFromObject(group);
    //   const size = new THREE.Vector3();
    //   box.getSize(size);
    //   group.position.set(-size.x/2 - 10,0,size.z)
    //   scene.add(group);
    // });
  }, []);

  useMarkerUpdate(() => {
    if (!ref.current)
      return;
    ref.current.visible = (script.markerIndex >= arrowIndex);
  }, []);

  return null;
}
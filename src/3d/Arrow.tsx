import * as React from "react";
import {useEffect, useMemo, useRef} from "react";

import * as THREE from "three";
import {useThree} from "react-three-fiber";

import {useMarkerUpdate, usePlayer} from "ractive-player";

import extrudeSvg from "@lib/svg-extrude";

import {MEDIA_URL} from "../media-url";

export default function Arrow() {
  const {scene} = useThree();
  const ref = useRef<THREE.Group>();

  useEffect(() => {
    extrudeSvg(`${MEDIA_URL}/img/arrow.svg`).then(group => {
      group.rotation.set(Math.PI/2,0,0);
      const box = new THREE.Box3().setFromObject(group);
      const size = new THREE.Vector3();
      box.getSize(size);
      group.position.set(-size.x/2,0,size.z)

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

  const {script} = usePlayer();
  const arrowIndex = useMemo(() => script.markerNumberOf("3d/svg"), []);
  useMarkerUpdate(() => {
    if (!ref.current)
      return;
    ref.current.visible = (script.markerIndex >= arrowIndex);
  }, []);

  return null;
}
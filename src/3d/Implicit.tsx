import * as React from "react";
import {useContext, useEffect, useMemo, useRef} from "react";

// THREE
import * as THREE from "three";
import {DoubleSide, Mesh, Plane} from "three";

import {Player, Utils, usePlayer, useMarkerUpdate} from "ractive-player";

import {marchingCubes} from "@lib/graphics";

const TWOPI = 2 * Math.PI;

export default function Implicit() {
  const b = 3;

  const geometry = useMemo(() =>
    marchingCubes((x, y, z) => y ** 2 - x ** 3 - z * x - b, -5, 5, 64)
  , []);
  const ref = useRef<Mesh>();
  const {script} = usePlayer();
  const index = useMemo(() => script.markerNumberOf("3d/implicit"), []);
  useMarkerUpdate(() => {
    ref.current.visible = script.markerIndex >= index;
  }, []);

  return (
    <mesh geometry={geometry} ref={ref}>
      <meshPhongMaterial color={0xAF1866} side={DoubleSide}/>
    </mesh>
  );
}
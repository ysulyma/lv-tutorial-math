import {useMarkerUpdate} from "liqvid";
import {useCallback, useRef} from "react";
// THREE
import {DoubleSide, Mesh} from "three";
import {script} from "../markers";

const {cos, sin} = Math;
const r = 2;
const TWOPI = 2 * Math.PI;

const index = script.markerNumberOf("3d/parametric");

export default function Parametric() {
  // trefoil knot parametrization
  const curve = useCallback((u, v, dest) => {
    u = -TWOPI/2 + u * 2 * TWOPI;
    v = -TWOPI/2 + v * 2 * TWOPI;
    const x = r * sin(3 * u) / (2 + cos(v));
    const y = r * (sin(u) + 2 * sin(2 * u)) / (2 + cos(v + TWOPI / 3));
    const z = r / 2 * (cos(u) - 2 * cos(2 * u)) * (2 + cos(v)) * (2 + cos(v + TWOPI / 3)) / 4;
    dest.set(x, y, z);
    return dest;
  }, []);

  // show/hide
  const ref = useRef<Mesh>();
  
  useMarkerUpdate(() => {
    ref.current.visible = script.markerIndex >= index;
  }, []);

  return (
    <mesh ref={ref} position={[8, 0, 0]} rotation={[0, 0, TWOPI/4]} visible={script.markerIndex >= index}>
      <parametricGeometry args={[curve, 100, 100]}/>
      <meshPhongMaterial color={0x1a69b5} side={DoubleSide}/>
    </mesh>
  );
}
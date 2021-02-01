import * as React from "react";
import {useContext, useEffect, useMemo, useRef} from "react";

import * as THREE from "three";
import {Canvas} from "react-three-fiber";

import {Player, Utils} from "ractive-player";
const {anyHover} = Utils.mobile;

// import {OrbitControls as $OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, ReactThreeFiber } from "react-three-fiber";
import type * as R3F from "react-three-fiber";

// main export
interface Api {
  activeListener: null;
  controls: any;
  dragging: boolean;
  meshes: {
    [key: string]: THREE.Mesh;
  };
  $three: R3F.SharedCanvasContext;
  screenToNDC(x: number, y: number): THREE.Vector2;
  screenToScene(x: number, y: number, plane: THREE.Plane): THREE.Vector3;
}

export const R3FContext = React.createContext<Api>(undefined);

export function ThreeScene(props: React.ComponentProps<typeof Canvas>) {
  const {children, ...attrs} = props;
  const player = useContext(Player.Context);

  return (
    <Canvas touch-action="none" onMouseUp={Player.preventCanvasClick} {...attrs}>
      <Player.Context.Provider value={player}>
        <APIHelper>
          {...children}
        </APIHelper>
      </Player.Context.Provider>
    </Canvas>
  );
}

export function APIHelper(props: React.ComponentProps<typeof Canvas>) {
  const $three = useThree();
  $three.gl.localClippingEnabled = true;

  const api = useMemo(() => ({
    activeListener: null,
    controls: null,
    dragging: false,
    meshes: {},
    $three,
    screenToNDC(x: number, y: number) {
      const rect = $three.gl.domElement.getBoundingClientRect();

      return new THREE.Vector2(
        (x - rect.left) / rect.width * 2 - 1,
        -(y - rect.top) / rect.height * 2 + 1
      );
    },
    screenToScene(x: number, y: number, plane: THREE.Plane) {
      const rect = $three.gl.domElement.getBoundingClientRect();
      const ndc = api.screenToNDC(x, y),
            mouse = new THREE.Vector3(ndc.x, ndc.y, 0);

      mouse.unproject($three.camera);

      const dir = mouse.sub($three.camera.position).normalize();

      const distance = -plane.distanceToPoint($three.camera.position) / Math.cos(dir.angleTo(plane.normal));

      return $three.camera.position.clone().add(dir.multiplyScalar(distance));
    }
  }), [$three]);

  // bind drag helpers
  useEffect(() => {
    const {domElement} = $three.gl;

    domElement.addEventListener("pointermove", e => {
      if (api.activeListener)
        api.activeListener(e);
    });

    // bind pointerup
    domElement.addEventListener("pointerup", e => {
      if (api.controls) {
        api.controls.enabled = true;
      }
      api.dragging = false;
      api.activeListener = null;
      domElement.classList.remove("dragging");
    });
  }, []);

  return (
    <R3FContext.Provider value={api}>
      {...props.children}
    </R3FContext.Provider>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // 'orbitControls': R3F.ReactThreeFiber.Object3DNode<$OrbitControls, typeof $OrbitControls>;
    }
  }
}

export function useDraggable(
  move: (e: PointerEvent) => void,
  down?: (e: R3F.PointerEvent) => void,
  up?: (e: R3F.PointerEvent) => void
) {
  const {
    gl: {domElement}
  } = useThree();
  const state = useContext(R3FContext);

  // add CSS class on hover to enable "draggable" cursor; desktop-only
  const events = useMemo(() => {
    return {
      onPointerOver: (e: R3F.PointerEvent) => {
        if (e.intersections[0].object !== e.eventObject)
          return;
        domElement.classList.add("draggable");
      },
      onPointerOut: (e: R3F.PointerEvent) => {
        /*if (e.intersections[0]?.object !== e.eventObject)
          return;*/
        domElement.classList.remove("draggable");
      },
      onPointerDown: (e: R3F.PointerEvent) => {
        if (e.intersections[0].object !== e.eventObject)
          return;

        if (state.controls) {
          state.controls.enabled = false;
        }
        state.dragging = true;
        state.activeListener = move;
        domElement.classList.add("dragging");

        down?.(e);
      }
    };
  }, [move]);

  return events;
}

export const intercept = {
  onPointerOver: () => {},
  onPointerDown: () => {},
  onPointerOut: () => {}
};

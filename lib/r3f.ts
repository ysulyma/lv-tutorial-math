import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

/* argh, necessary for react-three-fiber */
import {ResizeObserver} from "@juggle/resize-observer";

if (!("ResizeObserver" in window)) {
  (window as any).ResizeObserver = ResizeObserver;
}

import {extend, ReactThreeFiber} from "react-three-fiber";

// TypeScript for THREE stuff
extend({OrbitControls});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "orbitControls": ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

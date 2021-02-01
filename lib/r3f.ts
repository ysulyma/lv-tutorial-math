import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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

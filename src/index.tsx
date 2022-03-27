import * as ReactDOM from "react-dom";

// slides
import FiveD from "./FiveD";
import Intro from "./Intro";
import KaTeXSlide from "./KaTeX";
import MathJaxSlide from "./MathJax";
import ThreeD from "./ThreeD";
import TwoD from "./TwoD";
import XyJaxSlide from "./XyJax";

import {UI} from "@env/controls";
import {LoadingScreen} from "@lib/LoadingScreen";

function Lesson() {
  return (
    <UI>
      <LoadingScreen/>
      <Intro/>
      <KaTeXSlide/>
      <MathJaxSlide/>
      <XyJaxSlide/>
      <TwoD/>
      <ThreeD/>
      <FiveD/>
    </UI>
  );
}

ReactDOM.render(<Lesson />, document.querySelector("main"));

/* Typescript for Three/R3F */
import type {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import type {Object3DNode} from "@react-three/fiber";
import type {ParametricGeometry} from "three/examples/jsm/geometries/ParametricGeometry";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
      parametricGeometry: Object3DNode<ParametricGeometry, typeof ParametricGeometry>;
    }
  }

  namespace THREE {
    const LineMaterial: any;
    const LineSegments2: any;
    const LineSegmentsGeometry: any;
  }
}

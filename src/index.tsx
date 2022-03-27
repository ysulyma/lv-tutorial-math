import {Audio, Player} from "liqvid";
import * as ReactDOM from "react-dom";

// slides
import FiveD from "./FiveD";
import Intro from "./Intro";
import KaTeXSlide from "./KaTeX";
import MathJaxSlide from "./MathJax";
import ThreeD from "./ThreeD";
import TwoD from "./TwoD";
import XyJaxSlide from "./XyJax";

import {controls} from "@env/controls";
import {MEDIA_URL} from "@env/media-url";
import {LoadingScreen} from "@lib/LoadingScreen";

import {highlights, script} from "./markers";

function Lesson() {
  const thumbs = {
    frequency: 1,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} script={script}>
      {<LoadingScreen/>}
      <Audio>
        <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
        <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
      </Audio>
      <Intro/>
      <KaTeXSlide/>
      <MathJaxSlide/>
      <XyJaxSlide/>
      <TwoD/>
      <ThreeD/>
      <FiveD/>
    </Player>
  );
}

ReactDOM.render(<Lesson/>, document.querySelector("main"));

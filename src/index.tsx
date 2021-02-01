import * as React from "react";
import * as ReactDOM from "react-dom";

import {Audio, Controls, Script, Player} from "ractive-player";
// import {RecordingControl} from "rp-recording";
// import ThumbCapture from "rp-thumb-capture";

// @lib
// import HelpControl from "@lib/HelpControl";
import LoadingScreen from "@lib/LoadingScreen";
import ShowMarkerName from "@lib/ShowMarkerName";
import rebindArrowKeys from "@lib/rebind-arrow-keys";
//import rememberVolumeSettings from "@lib/remember-volume";
import seekOnLoad from "@lib/seekonload";

// resources
import {MEDIA_URL} from "./media-url";
import markers from "./markers";

// slides
import Intro from "./Intro";
import KaTeXSlide from "./KaTeX";
import MathJaxSlide from "./MathJax";
import XyJaxSlide from "./XyJax";
import TwoD from "./TwoD";
import ThreeD from "./ThreeD";
import FiveD from "./FiveD";

import ThreeDControls from "./3d/HelpControl";

const controls = (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    {<ShowMarkerName/>}

    {/* generate thumbnails */}
    {/*<ThumbCapture/>*/}

    {/* record audio, markers, cursor */}
    {/*<RecordingControl/>*/}

    <ThreeDControls/>
    {Player.defaultControlsRight}
  </div>
</>);

function Ractive() {
  const playerRef = React.useRef<Player>();

  React.useEffect(() => {
    const player = playerRef.current;

    rebindArrowKeys(player);
    // rememberVolumeSettings(player.playback);

    player.canPlay.then(() => {
      // use this when working on a particular section
      player.playback.seek(player.script.parseStart("5d/"));

      // seek to time if URL includes e.g. ?t=1:11
      seekOnLoad(player.playback);
      player.ready();
    });
  }, []);

  const script = new Script(markers);
  const ps = script.parseStart;

  const highlights = [
    {title: "KaTeX", time: ps("ktx/")},
    {title: "MathJax", time: ps("mjx/")},
    {title: "XyJax", time: ps("xyjx/")},
    {title: "2D graphics", time: ps("2d/")},
    {title: "3D graphics", time: ps("3d/")}
  ];

  const thumbData = {
    cols: 5,
    rows: 5,
    height: 100,
    width: 160,
    frequency: 4,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} ref={playerRef} script={script} thumbs={thumbData}>
      {<LoadingScreen/>}
      {/*<Audio start={0}>
        <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
        <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
      </Audio>*/}
      {/*<Intro/>
      <KaTeXSlide/>
      <MathJaxSlide/>
      <XyJaxSlide/>
      <TwoD/>*/}
      {<ThreeD/>}
      {<FiveD/>}
    </Player>
  );
}

ReactDOM.render(<Ractive/>, document.querySelector("main"));

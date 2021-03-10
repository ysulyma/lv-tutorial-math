import * as React from "react";
import {Player} from "ractive-player";

/**
  Display a loading screen while ractive-player is not-ready.
*/
export default function LoadingScreen() {
  return (
    <div className="rp-loading-screen" onMouseUp={Player.preventCanvasClick}>
      <div className="rp-loading-spinner"/>
    </div>
  );
}

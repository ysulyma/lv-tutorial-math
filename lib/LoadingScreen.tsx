import {Player} from "liqvid";

/**
  Display a loading screen while Liqvid is not-ready.
*/
export function LoadingScreen() {
  return (
    <div className="rp-loading-screen" data-affords="click">
      <div className="rp-loading-spinner"/>
    </div>
  );
}

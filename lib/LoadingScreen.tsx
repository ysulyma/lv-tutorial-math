import {Player} from "liqvid";

/**
  Display a loading screen while Liqvid is not-ready.
*/
export function LoadingScreen() {
  return (
    <div className="lv-loading-screen" data-affords="click">
      <div className="lv-loading-spinner"/>
    </div>
  );
}

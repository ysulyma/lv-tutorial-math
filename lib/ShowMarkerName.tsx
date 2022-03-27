import {usePlayer, Utils} from "liqvid";
import {useEffect} from "react";

const {anyHover} = Utils.mobile;
const {useForceUpdate} = Utils.react;

export default function ShowMarkerName() {
  if (!anyHover)
    return null;
  const {script} = usePlayer();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    script.on("markerupdate", forceUpdate);
  }, []);

  const style: React.CSSProperties = {
    backgroundColor: "#1A69B5",
    fontFamily: `"Roboto Slab", sans-serif`,
    lineHeight: "36px",
    padding: "0 .5em",
    userSelect: "all",
    verticalAlign: "top"
  };

  return (
    <span className="rp-marker-name" key="show-marker-name" style={style}>
      {script.markerName}
    </span>
  );
}

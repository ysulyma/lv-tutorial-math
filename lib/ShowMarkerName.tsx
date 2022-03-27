import {usePlayer, Utils} from "liqvid";
import {useEffect} from "react";

const {anyHover} = Utils.mobile;
const {useForceUpdate} = Utils.react;

const style: React.CSSProperties = {
  backgroundColor: "#1A69B5",
  fontFamily: `"Roboto Slab", sans-serif`,
  lineHeight: "36px",
  padding: "0 .5em",
  userSelect: "all",
  verticalAlign: "top"
};

export default function ShowMarkerName() {
  if (!anyHover)
    return null;
  const {script} = usePlayer();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    script.on("markerupdate", forceUpdate);

    return () => {
      script.off("markerupdate", forceUpdate);
    };
  }, []);

  return (
    <span className="lv-marker-name" key="show-marker-name" style={style}>
      {script.markerName}
    </span>
  );
}

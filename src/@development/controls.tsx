import {Player} from "liqvid";
import {RecordingControl} from "rp-recording";
import ThreeDControls from "../3d/HelpControl";
import {script} from "../markers";

const controls = [<RecordingControl/>, <ThreeDControls/>]

export const UI: React.FC = (props) => {
  return (
    <Player controls={controls} script={script}>
      {props.children}
    </Player>
  );
};

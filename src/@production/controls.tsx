import {Audio, Player} from "liqvid";
import ThreeDControls from "../3d/HelpControl";
import {highlights, script} from "../markers";
import {MEDIA_URL} from "./media-url";

export const controls = [<ThreeDControls/>];

export const UI: React.FC = (props) => {
  const thumbs = {
    frequency: 1,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} script={script} thumbs={thumbs}>
      <Audio>
        <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
        <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
      </Audio>
      {props.children}
    </Player>
  );
};

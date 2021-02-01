import * as React from "react";
import {useMemo, useRef, useState} from "react";

import {Utils, useMarkerUpdate, usePlayer} from "ractive-player";
const {anyHover, onClick} = Utils.mobile;

export default function HelpControl() {
  const {script} = usePlayer();

  const classNames = ["rp-3d-help-wrap"];

  // open/close dialog
  const [open, setOpen] = useState(true);
  const events = useMemo(() => onClick(() => {
    setOpen(prev => !prev);
  }), []);

  if (open)
    classNames.push("open");

  // show/hide control
  const ref = useRef<HTMLDivElement>();
  useMarkerUpdate(() => {
    ref.current.classList.toggle("relevant", script.markerName.startsWith("3d/"));
  }, []);

  if (script.markerName.startsWith("3d/"))
    classNames.push("relevant");

  // desktop/mobile controls
  const controls = anyHover ? [
    ["Left mouse", "Orbit"],
    ["Scroll wheel", "Zoom"],
    ["Right mouse", "Pan"]
  ] : [
    ["Swipe", "Orbit"],
    ["Pinch", "Zoom"],
    ["Two fingers", "Pan"],
  ];

  return (
    <div className={classNames.join(" ")} ref={ref}>
      <aside className="rp-3d-help">
        <table>
          <caption>3d controls</caption>
          <tbody>
            {controls.map(([key, action]) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </aside>
      <svg className="rp-controls-help" viewBox="0 0 20 20" {...events}>
        <path
          d="m 10.896484,3.8652344 c -1.2309996,0 -1.7499996,0.8536094 -1.7499996,1.4746094 -0.026,0.737 0.39525,1.1816406 1.2812496,1.1816406 1.059,0 1.679688,-0.7171875 1.679688,-1.4921875 0,-0.621 -0.274938,-1.1640625 -1.210938,-1.1640625 z"
          fill="#FFF"
          stroke="none"
        />
        <path
          d="m 10.847656,8.0332031 c -0.765,0 -2.5524216,0.7615469 -4.1074216,2.0605469 l 0.3183594,0.523438 c 0.49,-0.33 1.3207187,-0.664063 1.5117187,-0.664063 0.148,0 0.127,0.193734 0,0.677734 L 7.8378906,13.65625 c -0.447,1.705 0.020156,2.09375 0.6601563,2.09375 0.639,0 2.2877811,-0.58175 3.8007811,-2.09375 L 11.9375,13.169922 c -0.618,0.487 -1.247453,0.71875 -1.439453,0.71875 -0.149,0 -0.2115,-0.19386 -0.0625,-0.75586 l 0.839844,-3.179687 c 0.319,-1.164 0.212265,-1.9199219 -0.427735,-1.9199219 z"
          fill="#FFF"
          stroke="none"
        />
      </svg>
    </div>
  );
};

import {MJX} from "@liqvid/mathjax";
import {tob52, useAnimateArrows} from "@liqvid/xyjax";
import {Utils} from "liqvid";
import {useRef} from "react";
import {script} from "../markers";
const {animate, bezier, easings} = Utils.animation;

const fadeTail = animate({
  startTime: script.parseStart("xyjx/arrows/anim"),
  duration: 800,
  easing: bezier(...easings.easeOutCubic)
});

const fadeHead = animate({
  startTime: script.parseStart("xyjx/arrows/anim") + 500,
  duration: 200,
  easing: bezier(...easings.easeOutCubic)
});

const {raw} = String;

export function AnimatedArrows() {
  const ref = useRef();

  useAnimateArrows({
    head: "*[data-anim] path",
    tail: "*[data-anim] line",
    label: ".fade",
    ref,
    headFn: fadeHead,
    tailFn: fadeTail,
    labelFn: fadeHead
  });

  const line = "\"anim\":true";

  return (
    <MJX reparse resize ref={ref} data-during="xyjx/arrows">{raw`
      ${"\\"}xymatrix{
        {*} \ar[d]_-0 \ar[r]^-{t_0} & \mathbb R \ar[d]^- p\\
        I \ar[r]_-{\alpha} \ar@[data${tob52(line)}]@{..>}[ur]^-{\class{fade}{\exists!\ \widetilde\alpha}} & S^1
      }
    `}</MJX>
  );
}

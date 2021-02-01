import * as React from "react";

interface Props extends React.SVGAttributes<SVGCircleElement> {
  dur: string;
  r1: number;
  r2: number;
}

export default function GlowOrb(props: Props) {
  const {r1, r2, dur, ...attrs} = props;

  return (
    <circle
      r={r1}
      fill="transparent"
      pointerEvents="none"
      {...attrs}
    >
      <animate
        attributeName="r"
        from={r1}
        to={r2}
        dur={dur}
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="opacity"
        from="1"
        to="0"
        dur={dur}
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  );
}

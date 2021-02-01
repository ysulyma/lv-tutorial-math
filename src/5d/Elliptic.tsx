import * as React from "react";

import {marchingSquares} from "@lib/graphics";

interface Props {
  a: number;
  b: number;
}

export default function Elliptic(props: Props) {
  const edges = marchingSquares(
    -5, 5, -5, 5,
    (x, y) => y ** 2 - x ** 3 - props.a * x - props.b,
    0,
    128
  ) as [number, number, number][];

  const path = [];
  for (let i = 0; i < edges.length; i += 2) {
    path.push(`M ${edges[i][0]} ${edges[i][1]}`);
    path.push(`L ${edges[i+1][0]} ${edges[i+1][1]}`);
  }
  const curve = path.join(" ");

  return (
    <svg viewBox="-5 -5 10 10">
      <line x1="0" x2="0" y1="-5" y2="5" stroke="#EEE" strokeWidth="0.01"/>
      <line x1="-5" x2="5" y1="0" y2="0" stroke="#EEE" strokeWidth="0.01"/>
      <path d={curve} fill="none" stroke="#FF0070" strokeWidth="0.1"/>
    </svg>
  );
}

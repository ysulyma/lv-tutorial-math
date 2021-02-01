import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {Player, Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {during, from} = Utils.authoring,
      {dragHelperReact} = Utils.interactivity,
      {between, constrain, range} = Utils.misc,
      {anyHover} = Utils.mobile;

import {Definition} from "@lib/Block";
import FatFingers from "@lib/FatFingers";
import GlowOrb from "@lib/GlowOrb";
import Input from "@lib/Input";
import Link from "@lib/Link";
import {graph, screenToSVG} from "@lib/svg-utils";

import {MEDIA_URL} from "./media-url";
import {TwoDScript} from "./prompts";

import {KTX} from "rp-katex";

const {raw} = String;

const a = -4, b = 4;
const minX = -5, maxX = 5;

// there must be a better way to do this
const negF = (x: number) => [x, 2-x*x] as [number, number];
const f = (x: number) => [x, x*x-2] as [number, number];
const df = (x: number) => 2 * x;

const numIterations = 10;
const iterationTime = 1000;

type MoveArgs = Parameters<Parameters<typeof dragHelperReact>[0]>;

export default function TwoD() {
  const player = usePlayer();

  const [x, setX] = useState(1);

  const svgRef = useRef<SVGSVGElement>();

  // dragging
  const [showOrb, setShowOrb] = useState(true);

  useEffect(() => {
    // ???
    for (const target of Array.from(svgRef.current.querySelectorAll("circle"))) {
      target.addEventListener("touchstart", e => e.preventDefault(), {passive: false});
    }
  }, [svgRef.current]);

  const onDown = useCallback((e: React.MouseEvent<SVGCircleElement>) => {
    setShowOrb(false);
    document.body.classList.add("dragging");
  }, []);

  const onUp = useCallback(() => {
    document.body.classList.remove("dragging");
  }, []);

  const onMoveA = useCallback((...[e, hit]: MoveArgs) => {
    const [svgX, svgY] = screenToSVG(svgRef.current, hit.x, hit.y);
    setX(constrain(a, closestPoint(svgX, -svgY), b));
  }, [svgRef]);

  // equation of tangent line
  const A = f(x);

  const slope = df(x),
        intercept = A[1] - slope * A[0];
  let tangentEqn;
  if (slope === 0) {
    tangentEqn = fmt(intercept);
  } else {
    tangentEqn = fmt(slope) + "x";

    if (intercept > 0) {
      tangentEqn += "+" + fmt(intercept);
    } else if (intercept < 0) {
      tangentEqn += fmt(intercept);
    }
  }

  // input
  const inputA = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const val = parseFloat(e.currentTarget.value);
    if (!isNaN(val))
      setX(constrain(a, val, b));
  }, []);

  return (
    <section id="sec-2d" {...during("2d/")}>
      <svg id="tangent-demo" ref={svgRef} viewBox={"-5.3 -5.3 10.6 10.6"} onMouseUp={Player.preventCanvasClick}>
        <CartesianGrid/>
        <path className="plot" d={graph(negF, a, b, 200)}/>

        <line className="tangent-line" x1={minX} y1={-(minX * slope + intercept)} x2={maxX} y2={-(maxX * slope + intercept)}/>

        <FatFingers className="draggable point-A" cx={A[0]} cy={-A[1]} r="0.1" fatR="0.4" {...dragHelperReact(onMoveA, onDown, onUp)}/>

        {showOrb && <GlowOrb className="glow" cx={A[0]} cy={-A[1]} dur="1s" r1={0.1} r2={0.3}/>}
      </svg>

      <div id="explain" onMouseUp={Player.preventCanvasClick}>
        <KTX display id="defn">{raw`
          \begin{aligned}
            \htmlClass{plot}{y} &\htmlClass{plot}{= x^2-2}\\
            \htmlClass{tangent-line}{y} &\htmlClass{tangent-line}{= ${tangentEqn}}
          \end{aligned}
        `}
        </KTX>

        <table>
          <tbody>
            <tr>
              <td><KTX id="val-c">{raw`\htmlClass{pt1}{c =}`}</KTX></td>
              <td><Input key={x} onChange={inputA} type="text" value={fmt(x).toString()}/></td>
            </tr>
          </tbody>
        </table>

        <p>Try moving the point on the graph with your {anyHover ? "mouse" : "finger"}.</p>

        <h3 {...from("2d/consider")}>Considerations</h3>

        <ul>
          <li {...from("2d/signify")}>use consistent signifiers to indicate interactive components</li>

          <li {...from("2d/fat")}>need larger hit area for mobile (<code>fat-fingers</code> in the code)</li>
        </ul>
      </div>
      <TwoDScript/>
    </section>
  );
}

function CartesianGrid() {
  const minY = -5,
        maxY = 5;

  return (
    <g>
      {range(minX, maxX + 1).map(n => n !== 0 && (
        <React.Fragment key={`x_${n}`}>
          <line className="gridline" x1={n} x2={n} y1={-maxY} y2={-minY}/>
          <line className="axis-tick" x1={n} x2={n} y1="-0.15" y2="0.15"/>
          <text className="axis-label" x={n} y={0} dx={0.15} dy={.5}>{n.toString().replace("-", "–")}</text>
        </React.Fragment>
      ))}

      <text className="axis-label" x={0} y={0} dx={0.25} dy={0.4}>0</text>

      {range(minY, maxY + 1).map(n => n !== 0 && (
        <React.Fragment key={`y-${n}`}>
          <line className="gridline" x1={minX} x2={maxX} y1={-n} y2={-n}/>
          <line className="axis-tick" x1={-.15} x2={.15} y1={-n} y2={-n}/>
          <text className="axis-label" x={0} y={-n} dx={0.4}>{n.toString().replace("-", "–")}</text>
        </React.Fragment>
      ))}

      <line className="major-axis" x1={minX} x2={maxX} y1="0" y2="0"/>
      <line className="major-axis" x1="0" x2="0" y1={-minY} y2={-maxY}/>
    </g>
  );
}

function fmt(x: number, l = 4) {
  return parseFloat(x.toFixed(l));
}

function closestPoint(x0: number, y0: number) {
  const minX = a,
        maxX = b;
  const samples = 1000;

  const dx = (maxX - minX) / samples;
  // let best = minX,
  //     minVal = Math.abs(df(best) + (best - x0) / (f(best)[1] - y0));

  // for (let i = 1; i <= samples; ++i) {
  //   const xi = minX + i * dx;
  //   const val = Math.abs(df(xi) + (xi - x0) / (f(xi)[1] - y0));
  //   if (val < minVal) {
  //     minVal = val;
  //     best = xi;
  //   }
  // }

  let best = minX,
      minVal = (x0 - best) ** 2 + (y0 - f(best)[1]) ** 2;

  for (let i = 1; i <= samples; ++i) {
    const xi = minX + i * dx;
    const val = (x0 - xi) ** 2 + (y0 - f(xi)[1]) ** 2;
    if (val < minVal) {
      minVal = val;
      best = xi;
    }
  }

  return best;
}

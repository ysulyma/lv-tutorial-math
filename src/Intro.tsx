import * as React from "react";
import {useMemo} from "react";

import {Player, Utils, usePlayer} from "ractive-player";
const {during, from} = Utils.authoring,
      {onClick} = Utils.mobile,
      {formatTime} = Utils.time;

import Link from "@lib/Link";

import {IntroScript} from "./prompts";

export default function Intro() {
  const {playback, script} = usePlayer();

  const seek = useMemo(() => onClick<HTMLTableRowElement>((e) => {
    e.preventDefault();
    
    // this is not great lol
    playback.seek(e.currentTarget.getAttribute("href").slice(3));
  }), []);

  const contents = useMemo(() => [
    ["Introduction", script.parseStart("intro/toc")],
    ["KaTeX", script.parseStart("ktx/")],
    ["MathJax", script.parseStart("mjx/")],
    ["XyJax", script.parseStart("xyjx/")],
    ["2D graphics", script.parseStart("2d/")],
    ["3D graphics", script.parseStart("3d/")]
  ] as const, []);

  return (
    <section id="sec-intro" {...during("intro/")}>
      <h1>Ractive-Player math tutorial</h1>
      {/* table of contents */}
      <table className="toc" {...during("intro/toc")}>
        <tbody>
          {contents.map((row, i) => (
            <tr key={row[0]} onMouseUp={Player.preventCanvasClick}>
              <th>{i+1}.</th>
              <td className="name">
                <a href={`?t=${formatTime(row[1])}`} {...seek}>{row[0]}</a>
              </td>
              <td className="time">
                <a href={`?t=${formatTime(row[1])}`} {...seek}>{formatTime(row[1])}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section {...from("intro/main")}>
        <p>
          <Link href="https://ractive-player.org/">General-purpose tutorial</Link>

          <ul>
            <li {...from("intro/explain")}>explains what ractives are, how to write and record them</li>

            <li {...from("intro/codebooth")}>coding plugin</li>

            <li {...from("intro/paint")}>freehand drawing plugin</li>
          </ul>
        </p>
        <p {...from("intro/clone")}>
          Clone this tutorial: <Link href="https://github.com/ysulyma/rp-tutorial-math">https://github.com/ysulyma/rp-tutorial-math</Link>
        </p>

        <h3 {...from("intro/links")}>Links</h3>
        <ul>
          <li {...from("intro/js")}><Link href="https://javascript.info/">Javascript.info course</Link></li>
          <li {...from("intro/ts")}><Link href="https://www.typescriptlang.org/">TypeScript documentation</Link></li>
          <li {...from("intro/react")}><Link href="https://reactjs.org/">React documentation</Link></li>
          <li {...from("intro/node")}><Link href="https://nodejs.org/en/">Node.js</Link></li>
          <li {...from("intro/lmqm")}>Inspiration: <Link href="https://lmqm.xyz/">La mer qui monte</Link></li>
        </ul>
      </section>

      {<IntroScript/>}
    </section>
  );
}

import {IntroPrompt} from "@env/prompts";
import Link from "@lib/Link";
import {Utils} from "liqvid";
import {useMemo} from "react";
import {playback, script} from "./markers";

const {during, from} = Utils.authoring,
  {onClick} = Utils.mobile,
  {formatTime, formatTimeMs} = Utils.time;

const contents = [
  ["Introduction", script.parseStart("intro/toc")],
  ["KaTeX", script.parseStart("ktx/")],
  ["MathJax", script.parseStart("mjx/")],
  ["XyJax", script.parseStart("xyjx/")],
  ["2D graphics", script.parseStart("2d/")],
  ["3D graphics", script.parseStart("3d/")]
] as [string, number][];

export default function Intro() {
  const seek = useMemo(() => onClick<HTMLAnchorElement>((e) => {
    e.preventDefault();

    // this is not great lol
    playback.seek(e.currentTarget.getAttribute("href").slice(3));
  }), []);

  return (
    <section id="sec-intro" {...during("intro/")}>
      <h1>Liqvid math tutorial</h1>
      {/* table of contents */}
      <table className="toc" {...during("intro/toc")}>
        <tbody>
          {contents.map((row, i) => (
            <tr key={row[0]} data-affords="click">
              <th>{i + 1}.</th>
              <td className="name">
                <a href={`?t=${formatTimeMs(row[1])}`} {...seek}>{row[0]}</a>
              </td>
              <td className="time">
                <a href={`?t=${formatTimeMs(row[1])}`} {...seek}>{formatTime(row[1])}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section {...from("intro/main")}>
        <p>
          <Link href="https://liqvidjs.org/">General-purpose tutorial</Link>
        </p>
        <ul>
          <li {...from("intro/explain")}>explains what ractives are, how to write and record them</li>

          <li {...from("intro/codebooth")}>coding plugin</li>

          <li {...from("intro/paint")}>freehand drawing plugin</li>
        </ul>

        <p {...from("intro/clone")}>
          Clone this tutorial: <Link href="https://github.com/ysulyma/rp-tutorial-math">https://github.com/ysulyma/rp-tutorial-math</Link>
        </p>

        <h3 {...from("intro/links")}>Links</h3>
        <ul>
          <li {...from("intro/js")}><Link href="https://javascript.info/">Javascript.info course</Link></li>
          <li {...from("intro/ts")}><Link href="https://www.typescriptlang.org/">TypeScript documentation</Link></li>
          <li {...from("intro/react")}><Link href="https://reactjs.org/">React documentation</Link></li>
          <li {...from("intro/node")}><Link href="https://nodejs.org/en/">Node.js</Link></li>
          <li {...from("intro/epiplexis")}>Inspiration: <Link href="https://epiplexis.xyz/">Epiplexis</Link></li>
        </ul>
      </section>

      <IntroPrompt />
    </section>
  );
}

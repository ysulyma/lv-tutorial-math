import {Utils} from "liqvid";
const {from} = Utils.authoring;

import Link from "@lib/Link";

import {KaTeXPrompt} from "@env/prompts";
import {Definition, Example} from "@lib/Block";

import {KTX} from "@liqvid/katex";

const {raw} = String;

export default function KaTeXSlide() {
  const m1 = raw`\htmlData{from-first=ktx/align-1}`;
  const m2 = raw`\htmlData{from-first=ktx/align-2}`;
  const m3 = raw`\htmlData{from-first=ktx/align-3}`;

  return (
    <section id="sec-katex" data-during="ktx/">
      <Definition blockTitle="Derivative of a function">
        The <dfn>derivative of <KTX>f</KTX> at <KTX>x</KTX>,</dfn> denoted <KTX>f'(x),</KTX> is
        <KTX display {...from("ktx/display")}>{raw`f'(x) := \lim_{\epsilon\to0}\frac{f(x+\epsilon)-f(x)}{\epsilon}.`}</KTX>
      </Definition>

      <Example blockTitle={<>The derivative of <KTX>x^2</KTX></>} {...from("ktx/ex")}>
        <KTX display reparse>{raw`\begin{aligned}
        \lim_{\epsilon\to0}\frac{(x+\epsilon)^2-x^2}{\epsilon}
        &${m1}{= \lim_{\epsilon\to0}\frac{(x^2 + 2\epsilon x + \epsilon^2)-x^2}{\epsilon}}\\[1em]
        &${m2}{= \lim_{\epsilon\to0}\Big(2x + \epsilon\Big)}\\[1em]
        &${m3}{= 2x.}
      \end{aligned}`}</KTX>
      </Example>

      <Example {...from("ktx/macros")}>
        <p>Can load macros from file: <KTX>{raw`\THH(R;\Z_p)`}</KTX></p>

        <p {...from("ktx/docs")}>
          <Link href="https://katex.org/">KaTeX documentation</Link>
        </p>
      </Example>

      {/* <KaTeXPrompt/> */}
    </section>
  );
}

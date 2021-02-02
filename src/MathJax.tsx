import * as React from "react";

import {Utils} from "ractive-player";
const {from, during} = Utils.authoring;

import Link from "@lib/Link";

import {MathJaxScript} from "./prompts";
import {Definition, Example} from "@lib/Block";

import {MJX} from "rp-mathjax";

const {raw} = String;

export default function MathJaxSlide() {
  const m1 = raw`\data{"fromFirst":"mjx/align-1"}`;
  const m2 = raw`\data{"fromFirst":"mjx/align-2"}`;
  const m3 = raw`\data{"fromFirst":"mjx/align-3"}`;

  return (
    <section id="sec-mathjax" {...during("mjx/")}>
      <Definition blockTitle="Derivative of a function">
        The <dfn>derivative of <MJX>f</MJX> at <MJX>x</MJX>,</dfn> denoted <MJX>f'(x),</MJX> is
        <MJX display {...from("mjx/display")}>{raw`f'(x) := \lim_{\epsilon\to0}\frac{f(x+\epsilon)-f(x)}{\epsilon}.`}</MJX>
      </Definition>

      <Example blockTitle={<>The derivative of <MJX>x^2</MJX></>} {...from("mjx/ex")}>
        <MJX display>{raw`\begin{aligned}
        \lim_{\epsilon\to0}\frac{(x+\epsilon)^2-x^2}{\epsilon}
        &${m1}{= \lim_{\epsilon\to0}\frac{(x^2 + 2\epsilon x + \epsilon^2)-x^2}{\epsilon}}\\[1em]
        &${m2}{= \lim_{\epsilon\to0}\Big(2x + \epsilon\Big)}\\[1em]
        &${m3}{= 2x.}
      \end{aligned}`}</MJX>

        <p {...from("mjx/extn")}><code>\data</code> command provided by MathJax extension <Link href="https://github.com/ysulyma/mathjax-annotations">annotations.js</Link></p>
      </Example>

      <Example {...from("mjx/macros")}>
        <p>Can load macros from file: <MJX>{raw`\THH(R;\Z_p)`}</MJX></p>

        <p {...from("mjx/docs")}>
          <Link href="https://docs.mathjax.org/en/v2.7-latest/">MathJax 2.7 documentation</Link>
        </p>
      </Example>

      <MathJaxScript/>
    </section>
  );
}

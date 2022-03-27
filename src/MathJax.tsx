import {MathJaxPrompt} from "@env/prompts";
import {Definition, Example} from "@lib/Block";
import Link from "@lib/Link";
import {Handle, MJX} from "@liqvid/mathjax";
import {Utils} from "liqvid";
import {useRef} from "react";

const {from} = Utils.authoring;
const {raw} = String;

export default function MathJaxSlide() {
  const m1 = raw`\data{from-first="mjx/align-1"}`;
  const m2 = raw`\data{from-first="mjx/align-2"}`;
  const m3 = raw`\data{from-first="mjx/align-3"}`;

  const ref = useRef<Handle>();

  return (
    <section id="sec-mathjax" data-during="mjx/">
      <Definition blockTitle="Derivative of a function">
        The <dfn>derivative of <MJX>f</MJX> at <MJX>x</MJX>,</dfn> denoted <MJX>f'(x),</MJX> is
        <MJX className="goose" display {...from("mjx/display")} reparse>{raw`f'(x) := \lim_{\epsilon\to0}\frac{f(x+\epsilon)-f(x)}{\epsilon}.`}</MJX>
      </Definition>

      <Example blockTitle={<>The derivative of <MJX>x^2</MJX></>} {...from("mjx/ex")}>
        <MJX display reparse ref={ref}>{raw`\begin{aligned}
        \lim_{\epsilon\to0}\frac{(x+\epsilon)^2-x^2}{\epsilon}
        &${m1}{= \lim_{\epsilon\to0}\frac{(x^2 + 2\epsilon x + \epsilon^2)-x^2}{\epsilon}}\\[1em]
        &${m2}{= \lim_{\epsilon\to0}\Big(2x + \epsilon\Big)}\\[1em]
        &${m3}{= 2x.}
      \end{aligned}`}</MJX>

        <p {...from("mjx/extn")}><code>\data</code> command provided by MathJax extension <Link href="https://github.com/ysulyma/mathjax-extensions/">annotations.js</Link></p>
      </Example>

      <Example {...from("mjx/macros")}>
        <p>Can load macros from file: <MJX>{raw`\THH(R;\Z_p)`}</MJX></p>

        <p {...from("mjx/docs")}>
          <Link href="https://docs.mathjax.org/en/latest/">MathJax documentation</Link>
        </p>
      </Example>

      <MathJaxPrompt/>
    </section>
  );
}

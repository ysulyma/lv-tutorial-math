// @lib
import {Remark} from "@lib/Block";
import Link from "@lib/Link";
import {MJX} from "@liqvid/mathjax";
import {xyEncodeColor} from "@liqvid/xyjax";
import {AnimatedArrows} from "./xyjax/AnimatedArrows";
import {Brouwer} from "./xyjax/Brouwer";

// MJX.defaultProps = {span: true};

// it's better to call this in index.tsx
// extendXY();

// resources
import {XyJaxPrompt} from "@env/prompts";

const {raw} = String;

// slide
export default function XyJaxSlide() {
  return (
    <section id="sec-xyjax" data-during="xyjx/">
      <Remark>
        <p>commutative diagrams (<code>xymatrix</code> syntax) using <Link href="https://sonoisa.github.io/xyjax-v3/xyjax-v3.html">XyJax</Link></p>
      </Remark>

      <aside id="xyjax-demos">
        {/*
        - Even with raw, it's not good to write \x

        - Since XyJax is SVG and measures things, need resize attributes
        */}
        <MJX data-during="xyjx/diagram" reparse>{raw`${"\\"}xymatrix{
          A \ar[r] \ar[d] & B \ar[d]\\
          C \ar[r] & D
        }`}</MJX>

        <MJX data-during="xyjx/pullback" reparse>{raw`
          \vcenter{${"\\"}xymatrix{
            X \times_Z Y \pullback \ar[r] \ar[d] & Y \ar[d]\\\
            X \ar[r] & Z
          }}
          \quad
          \vcenter{${"\\"}xymatrix{
            Z \ar[d] \ar[r] & Y \ar[d]\\\
            X \ar[r] & X\cup_Z Y \pushout
          }}
          `}</MJX>

        <MJX data-during="xyjx/color" reparse>{raw`
        ${"\\"}xymatrix{
          H_n(X,A) \ar@[color${xyEncodeColor("AF1866")}][r]^-{\color{#AF1866} \partial} & H_{n-1}(A)
        }
        `}</MJX>

        <AnimatedArrows/>
        <Brouwer/>
      </aside>

      <XyJaxPrompt/>
    </section>
  );
}

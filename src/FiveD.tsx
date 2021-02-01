import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

// our imports
import {Player, Utils, usePlayer, useMarkerUpdate, useTimeUpdate} from "ractive-player";
const {during, from} = Utils.authoring,
      {anyHover, onClick} = Utils.mobile;

import {KTX} from "rp-katex";

// @lib
import Link from "@lib/Link";
import {R3FContext, ThreeScene} from "@lib/ThreeFiber";

// resources
import {FiveDScript} from "./prompts";

// scene pieces
import Elliptic from "./5d/Elliptic";
import Moduli from "./5d/Moduli";

export default function FiveD() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);

  const onChangeA = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseFloat(e.currentTarget.value));
  }, []);

  const onChangeB = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseFloat(e.currentTarget.value));
  }, []);

  return (
    <section id="sec-5d" {...during("5d/")}>
      <figure id="elliptic">
        <Elliptic {...{a,b}}/>
      </figure>

      <table>
        <caption><KTX>y^2 = x^3 + ax + b</KTX></caption>
        <tbody>
          <tr>
            <td><KTX>a</KTX></td>
            <td><input onChange={onChangeA} type="number" value={a}/></td>
          </tr>
          <tr>
            <td><KTX>b</KTX></td>
            <td><input onChange={onChangeB} type="number" value={b}/></td>
          </tr>
        </tbody>
      </table>

      <figure id="moduli">
        <Moduli {...{a,b}}/>
      </figure>
      <FiveDScript/>
    </section>
  );
}


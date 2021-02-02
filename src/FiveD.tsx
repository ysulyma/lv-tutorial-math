import * as React from "react";
import {useCallback, useState} from "react";

// our imports
import {Player, Utils} from "ractive-player";
const {during} = Utils.authoring;

import {KTX} from "rp-katex";

// @lib
import Input from "@lib/Input";

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
      <figure id="elliptic" onMouseUp={Player.preventCanvasClick}>
        <Elliptic {...{a,b}}/>
      </figure>

      <div id="fived-controls" onMouseUp={Player.preventCanvasClick}>
        <table>
          <caption><KTX>y^2 = x^3 + ax + b</KTX></caption>
          <tbody>
            <tr>
              <td><KTX>a</KTX></td>
              <td>
                <input
                  min={-5} max={5} step="0.01" type="range"
                  onChange={onChangeA} value={a.toString()}/>
              </td>
              <td>
                <Input
                  min={-5} max={5} step="0.01" type="number"
                  onChange={onChangeA} value={a.toString()}/>
              </td>
            </tr>
            <tr>
              <td><KTX>b</KTX></td>
              <td>
                <Input
                  min={-5} max={5} step="0.01" type="range"
                  onChange={onChangeB} value={b.toString()}/>
              </td>
              <td>
                <Input
                  min={-5} max={5} step="0.01" type="number"
                  onChange={onChangeB} value={b.toString()}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure id="moduli">
        <Moduli {...{a,b}}/>
      </figure>
      <FiveDScript/>
    </section>
  );
}


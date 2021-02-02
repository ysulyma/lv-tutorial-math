/*************************************************************
 *
 *  MathJax/extensions/TeX/brutalnewcommand.js
 *
 *  \brutalnewcommand force-expands macros at the preprocessing stage for better compatibility with XyJax.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2020 Yuri Sulyma <yuri@lmqm.xyz>.
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(() => {

MathJax.Extension.brutalnewcommand = {version: "1.1"};

const beginGroupReady = new Promise((resolve, reject) => {
  MathJax.Hub.Register.StartupHook("TeX begingroup Ready", resolve);
});

MathJax.Hub.Register.StartupHook("TeX Jax Ready", async () => {
  const TEX = MathJax.InputJax.TeX,
        TEXDEF = TEX.Definitions;

  const brutalMap = {};

  TEX.prefilterHooks.Add((data) => {
    for (const cmd in brutalMap) {
      data.math = data.math.replace(new RegExp(cmd.replace(/\\/g, "\\\\"), "g"), brutalMap[cmd]);
    }
  });
  
  // register \brutalnewcommand
  TEXDEF.Add({
    macros: {
      brutalnewcommand: "brutalnewcommand"
    }
  }, null, true);

  // provide \brutalnewcommand
  TEX.Parse.Augment({
    brutalnewcommand(name) {
      const cmd = this.GetArgument(name),
            defn = this.GetArgument(name);

      brutalMap[cmd] = defn;
    }
  });
});

MathJax.Ajax.loadComplete("[Extra]/brutalnewcommand.js");

})();

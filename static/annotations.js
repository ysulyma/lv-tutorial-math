/*************************************************************
 *
 *  MathJax/extensions/TeX/annotations.js
 *
 *  Implements annotations for MathJax
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2013 Yuri Sulyma <yuri@epiplexis.xyz>.
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
  const {Configuration} = MathJax._.input.tex.Configuration;
  const {CommandMap} = MathJax._.input.tex.SymbolMap;
  const NodeUtil = MathJax._.input.tex.NodeUtil.default;

  const AnnotateMethods = {};
  const symbol = Symbol("mathjax-annotations");

  /**
   * Implements \Annotate[type]{command}{annotation}
   * @param {TexParser} parser The calling parser.
   * @param {string} name The macro name.
   */
  AnnotateMethods.Annotate = (parser, name) => {
    const type = parser.GetBrackets(name);
    const macro = parser.GetArgument(name);
    const annotation = parser.GetArgument(name);

    // existing macro definition
    const def = parser.configuration.handlers.retrieve("new-Command").map.get(macro.slice(1));

    // create annotation intercept
    if (!def[symbol]) {
      def[symbol] = {};
      const old = def.func;

      // this is ugly but I couldn't figure out a slicker way to do it
      def._func = (parser, name, expansion, ...args) => {
        const keys = Object.keys(def[symbol]);
        const annotations = keys.map((key) => "{" + def[symbol][key] + "}").join("");
        old(parser, name, `\\annotate[${keys.join(",")}]{${expansion}}${annotations}`, ...args)
      };
    }

    // add annotation
    def[symbol][type] = annotation;
  };

  /**
   * Implements \annotate[type]{content}{...annotations}
   * @param {TexParser} parser The calling parser.
   * @param {string} name The macro name.
   */
  AnnotateMethods.annotate = (parser, name) => {
    const types = parser.GetBrackets(name).split(",");
    const content = GetArgumentMML(parser, name);
    for (const type of types) {
      const annotation = parser.GetArgument(name);
      NodeUtil.setAttribute(content, `data-annotation_${type}`, annotation);
    }
    parser.Push(content);
  };

  /**
   * Implements \data{dataset}{content}
   * @param {TexParser} parser The calling parser.
   * @param {string} name The macro name.
   */
  AnnotateMethods.data = (parser, name) => {
    const dataset = parser.GetArgument(name);
    const arg = GetArgumentMML(parser, name);
    for (const [prop, val] of splitTokens(dataset)) {
      NodeUtil.setAttribute(arg, `data-${prop}`, val);
    }
    parser.Push(arg);
  };

  /**
   *  The mapping of control sequence to function calls
   */
  new CommandMap("annotateMap", {
    Annotate: ["Annotate"],
    annotate: ["annotate"],
    data: ["data"]
  }, AnnotateMethods);

  /**
   * The configuration used to enable the MathML macros
   */
  Configuration.create("annotate", {
    handler: {macro: ["annotateMap"]}
  });

  /**
   * Parses the math argument of the above commands and returns it as single
   * node (in an mrow if necessary). The HTML attributes are then
   * attached to this element.
   * @param {TexParser} parser The calling parser.
   * @param {string} name The calling macro name.
   * @return {MmlNode} The math node.
   */
  let GetArgumentMML = function (parser, name) {
    let arg = parser.ParseArg(name);
    if (!NodeUtil.isInferred(arg)) {
      return arg;
    }
    let children = NodeUtil.getChildren(arg);
    if (children.length === 1) {
      return children[0];
    }
    const mrow = parser.create("node", "mrow");
    NodeUtil.copyChildren(arg, mrow);
    NodeUtil.copyAttributes(arg, mrow);
    return mrow;
  };
  
  function splitTokens(str) {
    const matches = Array.from(str.matchAll(/\b([A-Za-z0-9_-]+)=(['"])(.+?)\2/g));
    return matches.map(([, name, , val]) => [name, val]);
  }
})();

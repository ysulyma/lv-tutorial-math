/*************************************************************
 *
 *  MathJax/extensions/TeX/annotations.js
 *
 *  Implements annotations for MathJax
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013 Yuri Sulyma <yuri@lmqm.xyz>.
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

MathJax.Extension.annotations = {version: "2.0"};

const beginGroupReady = new Promise((resolve, reject) => {
  MathJax.Hub.Register.StartupHook("TeX begingroup Ready", resolve);
});

/* \Annotations command */
MathJax.Hub.Register.StartupHook("TeX Jax Ready", async () => {
  const MML = MathJax.ElementJax.mml,
        TEX = MathJax.InputJax.TeX,
        TEXDEF = TEX.Definitions;

  const beginGroupActive = !!MathJax.Extension["TeX/begingroup"];
  if (beginGroupActive) {
    await beginGroupReady;
    TEX.eqnStack.stack[TEX.eqnStack.top - 1].annotations = {};
    TEX.rootStack.stack[TEX.rootStack.top - 1].annotations = {};
  } else {
    TEXDEF.annotations = {};
  }
  
  // register the \Annotate command
  TEXDEF.Add({
    macros: {
      Annotate: "Annotate",
      annotate: "annotate",
      data: "data"
    }
  }, null, true);

  TEX.Parse.Augment({
    // expand macros without screwing up the string
    ExpandMacro(name, macro, argcount, def) {
      const args = [];
      if (argcount) {
        if (def) {
          const optional = this.GetBrackets(name);
          args.push(optional || def);
        }

        for (let i = args.length; i < argcount; ++i)
          args.push(this.GetArgument(name));
          
        macro = this.SubstituteArgs(args, macro);
      }

      return [macro, args];
    },

    // provide the \Annotate command
    Annotate(name) {
      const type = this.GetBrackets(name, ""),
            cmd = this.GetArgument(name).match(/^\\(.+)$/)[1],
            annotation = this.GetArgument(name);
      
      const macro = this.csFindMacro(cmd);
      if (!macro) return;
      
      // modify the macro
      if (!macro.annotated) {
        // redefine the command to include the annotations
        const args = ["\\" + cmd].concat(macro.slice(1));

        this.setDef(cmd, function(name) {
          // get the original definition
          const [str, params] = TEX.Parse("", {}).ExpandMacro.apply(this, args);

          // stick that into a <semantics> element
          const math = TEX.Parse(str, this.stack.env).mml(),
                mml = MML.semantics(math);

          const annotations =
            beginGroupActive ?
              csFindAnnotations(cmd, TEX.eqnStack, TEX.rootStack) :
              TEXDEF.annotations[cmd];

          // now, add the annotations...
          for (const type in annotations) {
            // expand
            const annotation = this.SubstituteArgs(params, annotations[type]).replace(/\\#/g, "#");

            mml.Append(MML.annotation(annotation).With({name: type, isToken: true}));
          }

          this.Push(mml);
        });

        this.csFindMacro(cmd).annotated = true;
      }

      // add the annotation
      if (beginGroupActive) {
        const stack =
          (TEX.eqnStack.top > 1) ?
            TEX.eqnStack.stack[TEX.eqnStack.top - 1] :
            TEX.rootStack.stack[TEX.rootStack.top - 1];

        if (!stack.annotations)
          stack.annotations = {};
        if (!stack.annotations[cmd])
          stack.annotations[cmd] = {};
        stack.annotations[cmd][type] = annotation;
      } else {
        if (!TEXDEF.annotations[cmd])
          TEXDEF.annotations[cmd] = {};
        TEXDEF.annotations[cmd][type] = annotation;
      }
    },

    // provide the \annotate command
    annotate(name) {
      // parse the args
      const types = this.GetBrackets(name, "").split(","),
            expr = this.GetArgument(name),
            annotations = {};

      for (const type of types)
        annotations[type] = this.GetArgument(name).replace(/\\#/g, "#");
        
      // render the math
      const math = TEX.Parse(expr, this.stack.env).mml(),
            mml = MML.semantics(math);
      
      for (const type in annotations) {
        const annotation = annotations[type];
        mml.Append(MML.annotation(annotation).With({name: type, isToken: true}));
      }
      
      this.Push(mml);
    },

    // provide the \data command
    data(name) {
      // parse the args
      const dataset = this.GetArgument(name),
            expr = this.GetArgument(name);
      
      // render the math
      const math = TEX.Parse(expr, this.stack.env).mml(),
            mml = MML.semantics(math);

      mml.Append(MML.annotation().With({dataset: JSON.parse(`{${dataset}}`), isToken: true}));
      
      this.Push(mml);
    }
  });
});

/* output jaxes */
MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", () => {
  const MML = MathJax.ElementJax.mml,
        MML_semantics_toHTML = MML.semantics.prototype.toHTML;

  MML.semantics.Augment({
    toHTML(span, HW, D) {
      span = MML_semantics_toHTML.call(this, span, HW, D);

      // add the annotations
      for (let i = 1; i < this.data.length; ++i) {
        const d = this.data[i];
        if (d !== null && d.type === "annotation") {
          if (d.hasOwnProperty("name")) {
            const attr = "data-annotation" + (d.name ? `_${d.name}` : "");
            span.setAttribute(attr, d.data[0]);
          } else if (d.hasOwnProperty("dataset")) {
            span.classList.add("dataset");
            span.classList.remove("semantics");
            Object.assign(span.dataset, d.dataset);
          }
        }
      }

      return span;
    }
  });
});

MathJax.Hub.Register.StartupHook("SVG Jax Ready", () => {
  const MML = MathJax.ElementJax.mml,
        SVG = MathJax.OutputJax.SVG;
        MML_semantics_toSVG = MML.semantics.prototype.toSVG;
  
  MML.semantics.Augment({
    toSVG() {
      const svg = MML_semantics_toSVG.call(this);
      
      // add the annotations
      for (let i = 1; i < this.data.length; ++i) {
        const d = this.data[i];
        if (d !== null && d.type === "annotation") {
          if (d.hasOwnProperty("name")) {
            this.class = "semantics";
            const attr = "data-annotation" + (d.name ? `_${d.name}` : "");
            svg.element.setAttribute(attr, d.data[0]);
          } else if (d.hasOwnProperty("dataset")) {
            this.class = "dataset";
            Object.assign(svg.element.dataset, d.dataset);
          }
        }
      }

      // rectangular click region
      SVG.addElement(svg.element, "rect", {
        fill: "none",
        height: svg.h + svg.d,
        "pointer-events": "all",
        stroke: "none",
        width: svg.w,
        y: -svg.d
      });
                                 
      this.SVGsaveData(svg);
      
      // don't taint the object
      this.class = null;
      return svg;
    }
  });
});

function csFindAnnotations(name, eqnStack, rootStack) {
  for (let i = eqnStack.top-1; i >= 0; i--) {
    const def = eqnStack.stack[i].annotations && eqnStack.stack[i].annotations[name];
    if (def) return def;
  }
  for (let i = rootStack.top-1; i >= 0; i--) {
    const def = rootStack.stack[i].annotations && rootStack.stack[i].annotations[name];
    if (def) return def;
  }
  return {};
}

MathJax.Ajax.loadComplete("[Extra]/annotations.js");

})();

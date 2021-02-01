"use strict";

(() => {

MathJax.Ajax.config.path["Extra"] = "/r/rp-tutorial-math/mathjax";
MathJax.Ajax.config.path["img"] = "https://cdn.rawgit.com/pkra/mathjax-img/1.0.0/";

MathJax.Hub.Config({
  // make mostly transparent
  showProcessingMessages: false,
  messageStyle: "none",
  showMathMenu: false,
  showMathMenuMSIE: false,

  skipStartupTypeset: true,

  // configure jaxes
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [['\\(','\\)']],
    displayMath: [["\\[", "\\]"]]
  },
  TeX: {
    equationNumbers: {
      autoNumber: "AMS"
    },
    extensions: [
      "AMSmath.js", "AMSsymbols.js", "action.js", "begingroup.js", "cancel.js", "color.js",
      "[img]/img.js",
      "[Extra]/xypic.js",
      "[Extra]/annotations.js",
      "[Extra]/brutalnewcommand.js",
      "[Extra]/forminput.js"
    ]
  },
  "HTML-CSS": {
    availableFonts: ["TeX"], // STIX fonts (really anything other than TeX) are absolutely hideous
    EqnChunk: 50,
    EqnChunkFactor: 1.5,
    EqnChunkDelay: 100
  }
});
MathJax.Hub.config.extensions.push("[Extra]/load-head.js");

MathJax.Hub.processSectionDelay = 0;

MathJax.Ajax.loadComplete("[Extra]/config.js");

})();

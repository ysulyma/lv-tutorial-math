(() => {
  window.MathJax = {
    loader: {
      load: [
        "[test]/annotations.js", "[custom]/brutalnewcommand.js", "[test]/load-head.js",
        "[tex]/color", "[tex]/html",
        "[test]/xypic.js"
      ],
      paths: {
        test: ".",
        custom: "https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions@latest/",
        xyjax: "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/"
      }
    },
    startup: {
      typeset: false // don't perform initial typeset
    },
    tex: {
      packages: {"[+]": ["annotate", "brutalnewcommand", "color", "html", "load-head", "xypic"]}
    }
  };

})();

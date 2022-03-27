(() => {
  const scripts =
    Array.from(document.querySelectorAll("head > script[type='math/tex']"))
      .map(script => fetch(script.src).then(res => {
        // script.remove();
        if (res.ok) return res.text();
        throw new Error(`${res.status} ${res.statusText}: ${script.src}`);
      }));

      
  if (scripts.length > 0) {
    MathJax.startup.promise = Promise.all([MathJax.startup.promise, ...scripts]).then(([, ...results]) => {
      const div = document.createElement("div");
      div.style.display = "none";
      div.style.whiteSpace = "pre";
      div.innerHTML = "\\[" + results.join("\n") + "\\]";
      document.body.prepend(div);

      MathJax.typeset([div]);
      document.body.removeChild(div);
    });
  }

})();

import {Handle, MJX} from "@liqvid/mathjax";
import {Utils, useTime} from "liqvid";
import {useEffect, useRef} from "react";
import {playback, script} from "../markers";
const {from} = Utils.authoring;

/* animations */
const dur = {
  piFadeIn: 300,
  fadeOut: 400,
  fadeIn: 400
};

const times = {
  piFadeIn: script.parseStart("xyjx/pi1"),
  fadeOut: script.parseStart("xyjx/apply"),
  contradiction: script.parseStart("xyjx/contradiction"),
};

const piFadeIn = () => playback.newAnimation(
  [{opacity: 0}, {opacity: 1}],
  {
    delay: times.piFadeIn,
    duration: dur.piFadeIn,
    easing: "ease-in",
    fill: "both"
  }
);

const fadeOut = () => playback.newAnimation(
  [{opacity: 1}, {opacity: 0}],
  {
    delay: times.fadeOut,
    duration: dur.fadeOut,
    easing: "ease-out",
    fill: "forwards"
  }
);

const fadeIn = () => playback.newAnimation(
  [{opacity: 0}, {opacity: 1}],
  {
    delay: times.fadeOut + dur.fadeOut * 2 / 3,
    duration: dur.fadeIn,
    easing: "ease-in",
    fill: "backwards"
  }
);

const {raw} = String;

export function Brouwer() {
  const ref = useRef<Handle>();

  // fade effects
  useEffect(() => {
    ref.current.ready.then(() => {
      const node = ref.current.domElement;

      for (const term of getDelimiters(node, "pi")) {
        piFadeIn()(term);
      }

      for (const term of getDelimiters(node, "out")) {
        fadeOut()(term);
      }

      for (const term of getDelimiters(node, "in")) {
        fadeIn()(term);
      }
    });
  }, []);

  // contradiction
  useTime<boolean>(val => ref.current.domElement.classList.toggle("contradiction", val), t => (t >= times.contradiction), []);

  return (
    <MJX ref={ref} {...from("xyjx/brouwer")}>{raw`
      \class{pi-l}{}\pi_1\left(\class{pi-r}{}
      \vcenter{${"\\"}xymatrix@=1.5em{
        \class{out-l}{}S^1\class{out-r}{} \class{in-l}{}\hspace{-.8em}\Z\class{in-r}{} \ar@{=}[rr] \ar[ddr] &&
        \class{out-l}{}S^1\class{out-r}{} \class{in-l}{}\hspace{-1.15em}\Z\class{in-r}{}\\
        \\
        & \class{out-l}{}D^2\class{out-r}{} \class{in-l}{}\hspace{-1em}0\class{in-r}{} \hspace{.2em} \ar[uur]
      }}
      \hspace{.2em}
      \class{pi-l}{}\right)\class{pi-r}{}
    `}</MJX>
  );
}

function getDelimiters(node: Element, name: string): Element[] {
  const nodes: Element[] = [];
  const delimiters = Array.from(node.getElementsByClassName(`${name}-l`));

  for (const delimL of delimiters) {
    let next = delimL.nextElementSibling;
    while (true) {
      if (next.classList.contains(`${name}-r`)) {
        break;
      }

      if (next.childElementCount > 0) {
        next = next.firstElementChild;
      }
      nodes.push(next);

      // iteration
      let parent = next;
      while (!parent.nextElementSibling) {
        parent = parent.parentElement;
        if (parent === document.body) {
          throw new Error(`Could not find matching delimiter for ${name}`);
        }
      }
      next = parent.nextElementSibling;
    }
  }

  return nodes;
}

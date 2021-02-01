import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {Player, Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {animate} = Utils.animation,
      {from, during} = Utils.authoring,
      {between} = Utils.misc;

import * as BezierEasing from "bezier-easing";
import {MJX} from "rp-mathjax";
import {tob52, extendXY, xyEncodeColor, useAnimateArrows} from "rp-xyjax";

// it's better to call this in index.tsx
extendXY();

// @lib
import {Remark} from "@lib/Block";
import * as easings from "@lib/easings";
import Link from "@lib/Link";

// resources
import {MEDIA_URL} from "./media-url";
import {XyJaxScript} from "./prompts";

const {raw} = String;

// slide
export default function XyJaxSlide() {
  return (
    <section id="sec-xyjax" {...during("xyjx/")}>
      <Remark>
        <p>commutative diagrams (<code>xymatrix</code> syntax) using <Link href="https://sonoisa.github.io/xyjax/xyjax.html">XyJax</Link></p>
      </Remark>

      <aside id="xyjax-demos">
        {/*
        - Even with raw, it's not good to write \x

        - Since XyJax is SVG and measures things, need resize attributes
        */}
        <MJX {...during("xyjx/diagram")} resize>{raw`${"\\"}xymatrix{
          A \ar[r] \ar[d] & B \ar[d]\\
          C \ar[r] & D
        }`}</MJX>

        <MJX {...during("xyjx/pullback")} resize>{raw`
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

        <MJX {...during("xyjx/color")} resize>{raw`
        ${"\\"}xymatrix{
          H_n(X,A) \ar@[color${xyEncodeColor("AF1866")}][r]^-{\color{#AF1866} \partial} & H_{n-1}(A)
        }
        `}</MJX>

        <AnimatedArrows/>
        <Brouwer/>
      </aside>

      <XyJaxScript/>
    </section>
  );
}

function AnimatedArrows() {
  const {script} = usePlayer();
  const ref = useRef();

  const fadeTail = useMemo(() => animate({
    startTime: script.parseStart("xyjx/arrows/anim"),
    duration: 800,
    easing: BezierEasing(...easings.easeOutCubic)
  }), []);

  const fadeHead = useMemo(() => animate({
    startTime: script.parseStart("xyjx/arrows/anim")+500,
    duration: 200,
    easing: BezierEasing(...easings.easeOutCubic)
  }), []);

  useAnimateArrows({
    head: "*[data-anim] path",
    tail: "*[data-anim] line",
    label: ".fade",
    ref,
    headFn: fadeHead,
    tailFn: fadeTail,
    labelFn: fadeHead
  });

  const line = `"anim":true`;

  return (
    <MJX resize ref={ref} {...during("xyjx/arrows")}>{raw`
      ${"\\"}xymatrix{
        {*} \ar[d]_-0 \ar[r]^-{t_0} & \mathbb R \ar[d]^- p\\
        I \ar[r]_-{\alpha} \ar@[data${tob52(line)}]@{..>}[ur]^-{\class{fade}{\exists!\ \widetilde\alpha}} & S^1
      }
    `}</MJX>
  );
}

function Brouwer() {
  const player = usePlayer();
  const {script} = player;

  const ref = useRef<MJX>();

  const dur = {
    piFadeIn: 300,
    fadeOut: 400,
    fadeIn: 400
  };

  const times = useMemo(() => ({
    piFadeIn: script.parseStart("xyjx/pi1"),
    fadeOut: script.parseStart("xyjx/apply"),
    contradiction: script.parseStart("xyjx/contradiction"),
  }), []);

  const piFadeIn = useMemo(() => animate({
    startTime: times.piFadeIn,
    duration: dur.piFadeIn,
    easing: BezierEasing(...easings.easeInSine)
  }), []);

  const fadeOut = useMemo(() => animate({
    startTime: times.fadeOut,
    duration: dur.fadeOut,
    startValue: 1,
    endValue: 0,
    easing: BezierEasing(...easings.easeOutSine)
  }), []);

  const fadeIn = useMemo(() => animate({
    startTime: times.fadeOut+dur.fadeOut * 2/3,
    duration: dur.fadeIn,
    easing: BezierEasing(...easings.easeInSine)
  }), []);

  useTimeUpdate(t => {
    const node: HTMLSpanElement = ref.current.domElement;

    for (const term of getDelimiters(node, "pi")) {
      term.style.opacity = (t < times.fadeOut ? piFadeIn : fadeOut)(t).toString();
    }

    for (const term of getDelimiters(node, "out")) {
      term.style.opacity = fadeOut(t).toString();
    }
    for (const term of getDelimiters(node, "in")) {
      term.style.opacity = fadeIn(t).toString();
    }
    node.classList.toggle("contradiction", t >= times.contradiction);
  });

  return (
    <MJX resize ref={ref} {...from("xyjx/brouwer")}>{raw`
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

function getDelimiters(node: HTMLElement, name: string) {
  const nodes = [];
  const delimiters = Array.from(node.querySelectorAll(`span.${name}-l`));

  for (const delimL of delimiters) {
    for (let next = delimL.nextElementSibling; next; next = next.nextElementSibling || next.parentNode.nextElementSibling) {
      if (next.classList.contains(`${name}-r`)) {
        break;
      }
      if (next.childElementCount > 0) {
        next = next.firstElementChild;
      }
      nodes.push(next);
    }
  }

  return nodes;
}

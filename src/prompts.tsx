/*
  Do not confuse this file with the Script class in ractive-player!

  This provides a teleprompt to be used when recording. For the "production" build,
  it is commented out. You could choose to leave it in though, e.g. for accessibility.
*/

import * as React from "react";
import {Prompt, Cue} from "rp-prompt";

type P = typeof Prompt extends (props: infer T) => JSX.Element ? T : never;

// development
/*export const IntroScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="intro/toc">
      Ractive-Player is a tool for creating interactive videos out of HTML. In this video, I'm going to demonstrate how to achieve various effects that you might want when using this tool for mathematical content.
    </Cue>
    <Cue on="intro/main">
      This supplements the general-purpose tutorial; you might want to watch that first. That's a link that you can click on. That'll
    </Cue>
    <Cue on="intro/explain">
      explain what this library is, the main concepts behind ractives and how to record them. In particular, if you want to
    </Cue>
    <Cue on="intro/codebooth">
      include coding activities, or if <Cue on="intro/paint"/> you want to write out formulas by hand, the general purpose tutorial covers the plugins for doing that. Here we're going to focus on rendered formulas and on graphics.
    </Cue>
    <Cue on="intro/clone">
      The way to use this tutorial is to clone the repository, and then you can follow along in the source code to see how I achieved various things.
      </Cue>
    <Cue on="intro/links">
      Some other helpful links: this does require a pretty solid command of frontend web development, so
    </Cue>
    <Cue on="intro/js">
      here's a Javascript course that I like. This is actually written in
    </Cue>
    <Cue on="intro/ts">
      TypeScript, which is a superset of Javascript that adds more typing. And it's built on top of
    </Cue>
    <Cue on="intro/react">
      software called React, which makes it a lot easier to do dynamic things with HTML. So here's the documentation for that.
    </Cue>
    <Cue on="intro/node">
      To transpile Typescript and React into normal Javascript, you'll need to install Node.js.
      <br/>
      These tools are all pretty standard in web development, but not as familiar to mathematicians.
    </Cue>
    <Cue on="intro/lmqm">
      Finally, you can see examples of this used for actual math lessons on my website.
    </Cue>
  </Prompt>
);

export const KaTeXScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="ktx/">
      So let's get started. These formulas are rendered using KaTeX; you can use inline
    </Cue>
    <Cue on="ktx/display">
      or display equations. If you want to
    </Cue>
    <Cue on="ktx/ex">
      successively reveal parts of an equation, you can use ractive-player's built-in show/hiding functionality, but you'll see in the source that you kind of have to attach it by hand.
    </Cue>
    <Cue on="ktx/macros">
      The library also provides a way to load macro definitions from a file; this is intended to make it easy to reuse macros across a lot of diferent videos. So here THH was a macro defined in the file symbols.tex.
    </Cue>
    <Cue on="ktx/docs">
      Finally, here's the KaTeX documentation.
    </Cue>
  </Prompt>
);

export const MathJaxScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="mjx/">
      You can also render your formulas using MathJax. Again you've got inline
    </Cue>
    <Cue on="mjx/display">
      or display equations, you can do equation reveals;
    </Cue>
    <Cue on="mjx/extn">
      unlike KaTeX, you do need a MathJax extension to do the equation-revealing, but that's provided in the source for this video.
    </Cue>
    <Cue on="mjx/macros">
      MathJax will load macros from the same file as KaTeX, you can use them side by side.
    </Cue>
    <Cue on="mjx/docs">
    And then here's the documentation for MathJax. Note this is not the latest version of MathJax.
    <br/>
    So, I usually use KaTeX for my formulas, because it's faster (partly because of the older version). But there are some complicated formulas that only MathJax can render, in particular, commutative diagrams.
    </Cue>
  </Prompt>
);

export const XyJaxScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="xyjx/">
      So there's an amazing MathJax package called XyJax that lets you use xymatrix in MathJax. Here's
    </Cue>
    <Cue on="xyjx/diagram">
      a basic commutative diagram. Now, doing effects with XyJax, even some things that would be easy to do in normal xymatrix, is really hard. It's much harder than the 2d / 3d animation that we'll cover next. But it can be done.
    </Cue>
    <Cue on="xyjx/pullback">
      So here are some diagrams using macros for pullback and pushout decorations.
    </Cue>
    <Cue on="xyjx/color">
      Here's a diagram with colored arrows.
    </Cue>
    <Cue on="xyjx/arrows">
      Here's how to animate arrows in a diagram.
    </Cue>
    <Cue on="xyjx/brouwer">
      And then here's a fade animation: so this is supposed to be a proof of the Brouwer fixed point theorem: S^1 can't be a retract of D^2, because if it were,
    </Cue>
    <Cue on="xyjx/pi1">
      you could apply \pi_1
    </Cue>
    <Cue on="xyjx/apply">
       and get this diagram in the category of abelian groups, which is
    </Cue>
    <Cue on="xyjx/contradiction">
      clearly nonsensical.
      <br/>
      So that's how you do formulas; now let's talk about graphics.
    </Cue>
  </Prompt>
);

export const TwoDScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="2d/">
      Here's an example of 2d graphics, using SVG. You can move the point on the parabola and it'll show the tangent line and the equation for that tangent line. You can also set the position using the textbox.
    </Cue>
    <Cue on="2d/consider">
      Now, one of the challenges of using this format is, most of the time clicking on the video will pause it, so how do you signify to the user which parts are interactive?
    </Cue>
    <Cue on="2d/signify">
      Here I used an orange pulse to signify that the point is movable, and I've also provided explicit instuctions. And I've got the controls on these gray panels that won't pause the video when clicked. So you want to try to establish and stick to some visual conventions.
    </Cue>
    <Cue on="2d/fat">
      Another thing you have to watch out for is, on mobile, it's very hard to precisely hit the circle with your finger. So you have to make a transparent circle with a much larger radius to increase the clickable area. Any time you see "fat-fingers" in the code, that's what it's referring to.
    </Cue>
  </Prompt>
);

export const ThreeDScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="3d/">
      Now for 3d graphics. Here we have an interactive scene, so the controls are listed down there. You can close the help dialog if you want.
    </Cue>
    <Cue on="3d/three">
      This is done using an amazing Javascript library called THREE.js, and you will definitely want to bookmark the documentation for that. 
    </Cue>
    <Cue on="3d/r3f">
      And here I'm also using a library called react-three-fiber, which lets you create scenes in a much more declarative way.
      <br/>
      Anyway,
    </Cue>
    <Cue on="3d/hide">
      here we have a cylinder. And now,
    </Cue>
    <Cue on="3d/drag">
      here's an example of a movable object. So you can try moving the orange ring. I'll pause so you can try that out.
    </Cue>
    <Cue on="3d/pause">
      And then here's an example of animating a shape: <Cue on="3d/anim"/>
    </Cue>
    <Cue on="3d/parametric">
      Then here's a parametric surface, this is a trefoil knot.
    </Cue>
    <Cue on="3d/svg">
       Then here's an example of combining 2d formulas with 3d graphics. You render your LaTeX formulas to SVG, and then you can import them into a 3d scene.
    </Cue>
  </Prompt>
);

export const FiveDScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="5d/">
      Finally, here's an example of mixing 2d and 3d graphics. So this is supposed to be illustrating the moduli stack of elliptic curves, to first approximation. So you can adjust the values of a and b, we've really got a 4-dimensional space and then we get elliptic curves as 2-dimensional cross sections of it. This example shows how to use graph implicit equations in two or three dimensions.

      So hopefully that's helpful for getting up and running; I look forward to seeing what you create with this tool.
    </Cue>
  </Prompt>
);*/

// production
export const IntroScript = () => null;

export const KaTeXScript = () => null;

export const MathJaxScript = () => null;

export const XyJaxScript = () => null;

export const TwoDScript = () => null;

export const ThreeDScript = () => null;

export const FiveDScript = () => null;

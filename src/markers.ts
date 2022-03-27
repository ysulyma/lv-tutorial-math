import {Script} from "liqvid";

export const markers = [
  ["intro/toc", "0:12.475"],
  ["intro/main", "0:08.619"],
  ["intro/explain", "0:06.572"],
  ["intro/codebooth", "0:02.740"],
  ["intro/paint", "0:08.239"],
  ["intro/clone", "0:09.802"],
  ["intro/links", "0:05.315"],
  ["intro/js", "0:03.866"],
  ["intro/ts", "0:04.530"],
  ["intro/react", "0:07.922"],
  ["intro/node", "0:12.258"],
  ["intro/epiplexis", "0:05.510"],

  ["ktx/", "0:05.211"],
  ["ktx/display", "0:02.478"],
  ["ktx/ex", "0:01.233"],
  ["ktx/align-1", "0:00.805"],
  ["ktx/align-2", "0:01.690"],
  ["ktx/align-3", "0:08.769"],
  ["ktx/macros", "0:19.377"],
  ["ktx/docs", "0:04.313"],

  ["mjx/", "0:04.922"],
  ["mjx/display", "0:02.389"],
  ["mjx/ex", "0:00.834"],
  ["mjx/align-1", "0:00.263"],
  ["mjx/align-2", "0:00.714"],
  ["mjx/align-3", "0:00.982"],
  ["mjx/extn", "0:11.211"],
  ["mjx/macros", "0:06.839"],
  ["mjx/docs", "0:19.265"],

  ["xyjx/", "0:07.763"],
  ["xyjx/diagram", "0:15.260"],
  ["xyjx/pullback", "0:05.948"],
  ["xyjx/color", "0:03.396"],
  ["xyjx/arrows", "0:02.146"],
  ["xyjx/arrows/anim", "0:02.407"],
  ["xyjx/brouwer", "0:08.851"],
  ["xyjx/pi1", "0:02.191"],
  ["xyjx/apply", "0:03.569"],
  ["xyjx/contradiction", "0:05.652"],

  ["2d/", "0:13.371"],
  ["2d/consider", "0:12.590"],
  ["2d/signify", "0:15.475"],
  ["2d/fat", "0:17.716"],

  ["3d/", "0:11.866"],
  ["3d/three", "0:08.654"],
  ["3d/r3f", "0:08.660"],
  ["3d/hide", "0:03.719"],
  ["3d/drag", "0:10.377"],
  ["3d/pause", "0:03.587"],
  ["3d/anim", "0:02.586"],
  ["3d/parametric", "0:05.215"],
  ["3d/svg", "0:11.541"],
  
  ["5d/", "0:43.52"]
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;

// playback.seek(script.parseStart("xyjx/arrows/anim"));

export const highlights = [
  {title: "KaTeX", time: script.parseStart("ktx/")},
  {title: "MathJax", time: script.parseStart("mjx/")},
  {title: "XyJax", time: script.parseStart("xyjx/")},
  {title: "2D graphics", time: script.parseStart("2d/")},
  {title: "3D graphics", time: script.parseStart("3d/")}
];
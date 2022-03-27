// liqvid.config.ts
import type {LiqvidConfig} from "@liqvid/cli";

const os = require("os");

const scripts = {
  "katex": {
    "crossorigin": "anonymous",
    "defer": true,
    "integrity": "sha384-0fdwu/T/EQMsQlrHCCHoH10pkPLlKA1jL5dFyUOvB3lfeT2540/2g6YgSi2BL14p",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.js", 
    "production": "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js"
  },
  "mathjax": {
    "defer": true,
    "development": "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
    "production": "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
  },
  "three": {
    "development": "https://unpkg.com/three@0.138.0/build/three.js",
    "production": "https://unpkg.com/three@0.138.0/build/three.min.js"
  }
};

const styles = {
  "katex": {
    "crossorigin": "anonymous",
    "integrity": "sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.css",
    "production": "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
  }
};

const config: LiqvidConfig = {
  audio: {
    transcribe: {
      "input": "./dist/audio/audio.webm",
      "captions": "./dist/captions.vtt",
      "transcript": "./dist/transcript.json",
      "apiKey": "ho6IutFyHawhFGGID3vU2PEz7_46-WKHTr6zhPNDU7e_",
      "apiUrl": "https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/ad816af7-c138-4671-8c42-7e4e7fdd5151"
    }
  },
  build: {
    scripts,
    styles
  },
  render: {
    audioFile: "./dist/audio/audio.webm",
    concurrency: os.cpus().length,
    imageFormat: "png"
  },
  thumbs: {
    url: "http://localhost:3000/dist",
    browserHeight: 800,
    browserWidth: 1280,
    concurrency: os.cpus().length,
    frequency: 1,
    imageFormat: "png",
    // make sure the output pattern matches the imageFormat
    output: "./dist/thumbs/%s.png"
  },
  serve: {
    port: 3000,
    scripts, styles
  }
};

module.exports = config;

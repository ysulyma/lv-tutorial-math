// liqvid.config.ts
import type {LiqvidConfig} from "@liqvid/cli";

const os = require("os");

const scripts = {
  "katex": {
    "crossorigin": "anonymous",
    "defer": true,
    "integrity": "sha384-pK1WpvzWVBQiP0/GjnvRxV4mOb0oxFuyRxJlk6vVw146n3egcN5C925NCP7a7BY8",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.js", 
    "production": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js"
  },
  "mathjax": {
    "defer": true,
    "development": "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
    // "production": "//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-AMS-MML_HTMLorMML,/mathjax/config.js",
    "production": "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
  },
  "three": {
    "development": "https://unpkg.com/three@0.137.5/build/three.js",
    "production": "https://unpkg.com/three@0.137.5/build/three.min.js"
  },
  "liqvid": {
    "crossorigin": true,
    "development": "https://unpkg.com/liqvid@2.1.0-beta.3/dist/liqvid.js",
    "production": "https://unpkg.com/liqvid@2.1.0-beta.3/dist/liqvid.min.js"
  }
};

const styles = {
  "liqvid": {
    "development": "https://unpkg.com/liqvid@2.1.0-beta.3/dist/liqvid.css",
    "production": "https://unpkg.com/liqvid@2.1.0-beta.3/dist/liqvid.min.css"
  },
  "katex": {
    "crossorigin": "anonymous",
    "integrity": "sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.css",
    "production": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
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
    port: 3002,
    scripts, styles
  }
};

module.exports = config;
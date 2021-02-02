const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    filename: "bundle.js",
    path: process.cwd()
  },

  externals: {
    "katex": "katex",
    "ractive-player": "RactivePlayer",
    "rp-recording": "RPRecording",
    "rangetouch": "RangeTouch",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-three-fiber": "R3F",
    "three": "THREE",
    "three/examples/jsm/controls/FlyControls": "THREE.FlyControls",
    "three/examples/jsm/controls/OrbitControls": "THREE.OrbitControls",
    "three/examples/jsm/lines/Line2": "THREE.Line2",
    "three/examples/jsm/lines/LineGeometry": "THREE.LineGeometry",
    "three/examples/jsm/lines/LineMaterial": "THREE.LineMaterial",
    "three/examples/jsm/loaders/SVGLoader": "THREE.SVGLoader",
    "three/examples/jsm/objects/MarchingCubes": "THREE.MarchingCubes",
    "three/examples/jsm/utils/GeometryUtils": "THREE.GeometryUtils"
  },

  mode: process.env.NODE_ENV,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "ts-loader"
      }
    ],
  },

  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@lib": `${__dirname}/lib`,
    }
  }
};

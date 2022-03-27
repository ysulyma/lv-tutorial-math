const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    filename: "bundle.js",
    path: path.join(process.cwd(), "static")
  },

  externals: {
    "katex": "katex",
    "liqvid": "Liqvid",
    "rangetouch": "RangeTouch",
    "react": "React",
    "react-dom": "ReactDOM",
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

  mode: env,

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
      "@env": path.join(__dirname, "src", "@" + env),
      "@src": path.join(__dirname, "src")
    }
  },

  resolveLoader: {
    modules: [
      path.join(__dirname, "node_modules")
    ]
  },

  snapshot: {
    managedPaths: []
  }
};

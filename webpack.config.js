const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
};

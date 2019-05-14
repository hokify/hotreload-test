const SlowDownPlugin = require("./slow-down");
// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      enforce: "pre",
      test: /\.(js|vue|ts)$/,
      loader: "eslint-loader",
      options: {
        cache: true // beware, if eslint file changes you have to remove "node_modules/.cache" directory
      },
      exclude: /(node_modules)/
    });

    config.plugins.push(new SlowDownPlugin({ options: true }));
  }
};

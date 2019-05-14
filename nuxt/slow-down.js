class SlowDownPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("Slowdown Plugin", (compilation, callback) => {
      console.log("calm down... for 10 seconds");
      setTimeout(() => {
        console.log("slowness completed");
        callback();
      }, 10000);
    });
  }
}

module.exports = SlowDownPlugin;

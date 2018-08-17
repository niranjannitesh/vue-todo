module.exports = {
  css: {
    sourceMap: true
  },

  baseUrl: process.env.NODE_ENV === "production" ? "/vue-todo/" : "/",
  outputDir: "docs",
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
};

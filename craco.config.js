module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@use "src/style/global-mixin" as *;`
      }
    }
  }
};

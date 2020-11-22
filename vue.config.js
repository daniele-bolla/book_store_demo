module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/variables.scss";`
      }
    },
    publicPath: "/book_store_demo/"
  }
};

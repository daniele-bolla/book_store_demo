import Vue from "vue";
import Vuex from "vuex";

import books from "./modules/books";
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  modules: {
    books
  }
});
export default store;

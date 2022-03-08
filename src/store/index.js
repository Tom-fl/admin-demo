/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-01 16:22:36
 * @LastEditTime: 2022-03-01 16:42:24
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\store\index.js
 * @Environment: Win 10
 * @Description:
 */

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";

Vue.use(Vuex);

let modules = {};
const files = require.context("./module", false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    changeLoading(state, payload) {
      state.loading = payload;
    },
  },
  modules,
  plugins: [
    createPersistedState({
      key: "vueData",
      reducer: (val) => {
        return {
          user: val.user,
        };
      },
      // storage: {
      //   getItem: (key) => ls.get(key),
      //   setItem: (key, value) => ls.set(key, value),
      //   removeItem: (key) => ls.remove(key),
      // },
    }),
  ],
});

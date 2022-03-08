/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 15:52:22
 * @LastEditTime: 2022-03-01 16:46:14
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\main.js
 * @Environment: Win 10
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "@/plugins/elementUI";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

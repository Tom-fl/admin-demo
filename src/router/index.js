/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 16:17:24
 * @LastEditTime: 2022-03-07 16:20:14
 * @Email: str-liang@outlook.com
 * @FilePath: \admin-demo\kkk\src\router\index.js
 * @Environment: Win 10
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const About = () => import("../views/About.vue");

const list1 = () => import("../views/modules/list1.vue");
const list2 = () => import("../views/modules/list2.vue");
const list3 = () => import("../views/modules/list3.vue");
const list4 = () => import("../views/modules/list4.vue");

import data from "@/data/data";

store.commit("nav/SAVE_NAV_LIST", data);

function fun(arrVal) {
  return arrVal.map((item) => {
    let component = "";
    if (item.pid == 0) {
      component = Home;
    } else {
      component = (resolve) => {
        require([`@/views/modules/${item.url}.vue`], resolve);
      };
    }

    let obj = {
      path: item.url,
      name: item.name,
      meta: {
        title: item.name,
      },
      component,
    };
    if (item.children.length > 0) {
      obj.children = fun(item.children);
    }

    return obj;
  });
}
let resData = fun(data);
console.log(resData);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      { path: "list1", name: "list1", component: list1 },
      { path: "list2", name: "list2", component: list2 },
      { path: "list3", name: "list3", component: list3 },
      { path: "list4", name: "list4", component: list4 },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [
      { path: "/about/list1", name: "list1", component: list1 },
      { path: "/about/list2", name: "list2", component: list2 },
      { path: "/about/list3", name: "list3", component: list3 },
      { path: "/about/list4", name: "list4", component: list4 },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.addRoutes(resData);

export default router;

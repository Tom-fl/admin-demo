/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-07 15:39:12
 * @LastEditTime: 2022-03-07 15:47:51
 * @Email: str-liang@outlook.com
 * @FilePath: \admin-demo\kkk\src\store\module\nav.js
 * @Environment: Win 10
 * @Description:
 */
const nav = {
  namespaced: true,
  state: {
    navList: [],
  },
  getters: {
    getNavList: ({ navList }) => navList,
  },
  mutations: {
    SAVE_NAV_LIST(state, payload) {
      console.log(payload);
      state.navList = payload;
    },
  },
};

export default nav;

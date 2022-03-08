/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-01 16:26:31
 * @LastEditTime: 2022-03-01 17:05:00
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\store\module\content.js
 * @Environment: Win 10
 * @Description:
 */

const content = {
  namespaced: true,
  state: {
    tabList: [],
  },
  getters: {
    gettabList: ({ tabList }) => tabList,
  },
  mutations: {
    SAVE_TAB_LIST(state, payload) {
      let arr = [];
      arr.push(payload);
      console.log(arr);
      state.tabList = payload;
    },
  },
};

export default content;

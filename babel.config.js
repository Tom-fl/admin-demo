/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 15:52:22
 * @LastEditTime: 2022-03-01 09:24:22
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\babel.config.js
 * @Environment: Win 10
 * @Description: 
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      { libraryName: "element-ui", styleLibraryName: "theme-chalk" },
    ],
  ],
};

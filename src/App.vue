<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 15:52:22
 * @LastEditTime: 2022-02-28 17:36:58
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\App.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./assets/css/base.css";
</style>

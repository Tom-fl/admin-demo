<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 17:42:12
 * @LastEditTime: 2022-03-01 09:40:26
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\views\Login.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <h3>Login</h3>
    <el-button @click="handleSubmit">点击登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    handleSubmit() {
      console.log("x");
    },
  },
};
</script>

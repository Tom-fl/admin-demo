<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-28 16:27:20
 * @LastEditTime: 2022-03-01 17:02:46
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\views\Home.vue
 * @Environment: Win 10
 * @Description: 
-->

<template>
  <div class="box">
    <div class="content">
      <div class="content_left">
        <ContentLeft />
      </div>
      <div class="content_right">
        <div class="content_header">
          <ContentHeader />
        </div>
        <ContentRight />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentHeader, ContentLeft, ContentRight } from "./content/index.js";

export default {
  name: "Home",
  components: { ContentHeader, ContentLeft, ContentRight },
};
</script>

<style lang="less" scoped>
.box {
  height: 100vh;

  .content {
    width: 100%;
    height: 95%;
    display: flex;
    .content_left {
      width: 20%;
      border: 1px solid #000;
    }
    .content_right {
      width: 80%;
      .content_header {
        border: 1px solid red;
      }
    }
  }
}
</style>

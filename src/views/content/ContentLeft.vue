<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-01 09:37:16
 * @LastEditTime: 2022-03-07 16:18:55
 * @Email: str-liang@outlook.com
 * @FilePath: \admin-demo\kkk\src\views\content\ContentLeft.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="handleAdd('list1')"
            >选项1</el-menu-item
          >
          <el-menu-item index="1-2" @click="handleAdd('list2')"
            >选项2</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3" @click="handleAdd('list3')"
            >选项3</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="handleAdd('list2')">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title" @click="handleAdd('list4')">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ContentLeft",
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapGetters("content", []),
  },
  methods: {
    ...mapMutations("content", ["SAVE_TAB_LIST"]),
    ...mapMutations("nav", ["SAVE_NAV_LIST"]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$router.options.routes);
      this.$store.commit("nav/SAVE_NAV_LIST", []);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleAdd(key) {
      let tab = { index: key, name: `/home/${key}`, closable: true };
      this.$router.push(tab.name);
      this.SAVE_TAB_LIST(tab);
    },
  },
};
</script>

<style></style>

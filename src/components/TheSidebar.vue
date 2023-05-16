<template>
  <header>
    <el-button
      :icon="sidebarStore.isCollapseIcon"
      @click="sidebarStore.toggleSidebar"
      circle
    />
  </header>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="sidebarStore.isCollapse"
    @open="sidebarStore.handleOpen"
    @close="sidebarStore.handleClose"
    router="true"
  >
    <el-menu-item index="1" route="/">
      <el-icon><icon-menu /></el-icon>
      <template #title>
          Dashboard
      </template>
    </el-menu-item>
    <el-menu-item index="2" route="/customers">
      <el-icon><setting /></el-icon>
      <template #title>
          Profile
      </template>
    </el-menu-item>
    <el-menu-item index="3" route="/sites">
      <el-icon><icon-menu /></el-icon>
      <template #title>
          Sites
      </template>
    </el-menu-item>
    <el-menu-item index="4" route="/meters">
      <el-icon><setting /></el-icon>
      <template #title>
        Meters
      </template>
    </el-menu-item>
    <el-menu-item index="5" route="/circuits">
      <el-icon><setting /></el-icon>
      <template #title>
          Circuits
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

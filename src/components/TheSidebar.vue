<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>
        <RouterLink to="/">Dashboard</RouterLink>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><setting /></el-icon>
      <template #title>
        <RouterLink to="/customers">Customers</RouterLink>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <template #title>
        <RouterLink to="/sites">Sites</RouterLink>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>
        <RouterLink to="/meters">Meters</RouterLink>
      </template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <template #title>
        <RouterLink to="/circuits">Circuits</RouterLink>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo {
  width: 200px;
  min-height: 400px;
}
</style>

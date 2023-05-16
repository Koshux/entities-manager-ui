<template>
  <div class="container">
    <TheSidebar  />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
</script>

<style scoped>
.container {
  display: flex;
}

main {
  flex-grow: 1;
  margin: 2em;
}
</style>

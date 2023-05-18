<template>
  <el-container>
    <el-aside width="350px">
      <TheSidebar />
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
  <!-- <div class="container"> -->
    <!-- <TheSidebar  />
    <main>
      <RouterView />
    </main> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
import { useCircuitsStore } from '@/stores/circuits';
import { onMounted } from 'vue';
import { useProfileStore } from './stores/profile';
import { useSitesStore } from './stores/sites';
import { useMetersStore } from './stores/meters';

onMounted(async () => {
  // This will be the selected customer ID from the dropdown of customers
  // loaded from /profile. Eventually, it can be the ID of the logged in user.
  const mockedId = 1
  await useProfileStore().fetchProfile(mockedId)
  await useSitesStore().fetchSites()
  await useCircuitsStore().fetchCircuits()
  await useMetersStore().fetchMeters()

})
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

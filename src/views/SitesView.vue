<template>
  <div class="about">
    <TheSites />
  </div>
</template>

<script lang="ts" setup>
import TheSites from '@/components/TheSites.vue'
import { useSitesStore } from '@/stores/sites';
import { onMounted } from 'vue';

onMounted(async () => {
  await useSitesStore().fetchSites()
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

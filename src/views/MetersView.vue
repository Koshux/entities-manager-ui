<template>
  <div class="about">
    <TheMeters />
  </div>
</template>

<script lang="ts" setup>
import type TheMeters from '@/components/Meters/TheMeters.vue'
import { useMetersStore } from '@/stores/meters';
import { onMounted } from 'vue';

onMounted(async () => {
  await useMetersStore().fetchMeters()
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

<template>
  <div class="about">
    <TheCircuits />
  </div>
</template>

<script lang="ts" setup>
import type TheCircuits from '@/components/Circuits/TheCircuits.vue'
import { useCircuitsStore } from '@/stores/circuits';
import { onMounted } from 'vue';

onMounted(async () => {
  await useCircuitsStore().fetchCircuits()
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

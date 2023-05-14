<template>
  <div class="about">
    <TheCircuits />
  </div>
</template>

<script lang="ts" setup>
import type TheCircuits from '@/components/TheCircuits.vue'
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

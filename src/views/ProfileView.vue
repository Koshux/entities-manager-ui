<template>
  <div class="about">
    <TheProfile />
  </div>
</template>

<script lang="ts" setup>
import TheProfile from '@/components/TheProfile.vue';
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

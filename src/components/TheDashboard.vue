<template>
  <main>
    <TheWelcome />
    <div>
      <h2>Sites</h2>
      <p>{{ sitesStore.sitesCount }}</p>
    </div>
    <div>
      <h2>Meters</h2>
      <p>{{ metersStore.metersCount }}</p>
    </div>
    <div>
      <h2>Circuits</h2>
      <p>{{ circuitsStore.circuitCount }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCircuitsStore } from '@/stores/circuits';
import { useMetersStore } from '@/stores/meters';
import { useSitesStore } from '@/stores/sites';

const circuitsStore = useCircuitsStore()
const metersStore = useMetersStore()
const sitesStore = useSitesStore()
</script>

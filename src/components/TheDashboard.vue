<template>
  <main>
    <TheWelcome />
    <div>
      <h2>Sites</h2>
      <p>{{ siteCount }}</p>
    </div>
    <div>
      <h2>Meters</h2>
      <p>{{ meterCount }}</p>
    </div>
    <div>
      <h2>Circuits</h2>
      <p>{{ circuitCount }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import fetchCustomerData from '@/api/profile';
import { useCircuitsStore } from '@/stores/circuits';
import { useMetersStore } from '@/stores/meters';
import { useSitesStore } from '@/stores/sites';
import { ref, onMounted } from 'vue'
// import { useStore } from 'pinia'
// const store = useStore()
const sitesStore = useSitesStore()
const metersStore = useMetersStore()
const circuitsStore = useCircuitsStore()

const siteCount = ref(0)
const meterCount = ref(0)
const circuitCount = ref(0)

onMounted(async () => {
  await fetchCustomerData()
  await sitesStore.fetchSites()
  await metersStore.fetchMeters()
  await circuitsStore.fetchCircuits()
  siteCount.value = sitesStore.sites.length
  meterCount.value = metersStore.meters.length
  circuitCount.value = circuitsStore.circuits.length
  // // Update the counts based on the customer data
  // siteCount.value = customerData.sites.length

  // meterCount.value = customerData.sites.reduce((count, site) => {
  //   return count + site.meters.length
  // }, 0)

  // circuitCount.value = customerData.sites.reduce((count, site) => {
  //   const siteCircuitCount = site.meters.reduce((circuitCount, meter) => {
  //     return circuitCount + meter.circuits.length
  //   }, 0)

  //   return count + siteCircuitCount
  // }, 0)
})
</script>

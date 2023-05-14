<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'pinia'
import fetchCustomerData from '@/api/customers'

const store = useStore()
const siteCount = ref(0)
const meterCount = ref(0)
const circuitCount = ref(0)

onMounted(async () => {
  const customerData = await fetchCustomerData() // Replace with your API call to fetch customer data

  // Update the counts based on the customer data
  siteCount.value = customerData.sites.length
  meterCount.value = customerData.sites.reduce((count, site) => count + site.meters.length, 0)
  circuitCount.value = customerData.sites.reduce((count, site) => {
    const siteCircuitCount = site.meters.reduce((circuitCount, meter) => circuitCount + meter.circuits.length, 0)
    return count + siteCircuitCount
  }, 0)
})

return {
  siteCount,
  meterCount,
  circuitCount
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

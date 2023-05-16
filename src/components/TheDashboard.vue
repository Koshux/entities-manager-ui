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
import { ref, onMounted } from 'vue'
// import { useStore } from 'pinia'
import fetchCustomerData from '@/api/profile'

// const store = useStore()
const siteCount = ref(0)
const meterCount = ref(0)
const circuitCount = ref(0)

onMounted(async () => {
  const customerData = await fetchCustomerData() // Replace with your API call to fetch customer data

  // Update the counts based on the customer data
  siteCount.value = customerData.sites.length

  meterCount.value = customerData.sites.reduce((count, site) => {
    return count + site.meters.length
  }, 0)

  circuitCount.value = customerData.sites.reduce((count, site) => {
    const siteCircuitCount = site.meters.reduce((circuitCount, meter) => {
      return circuitCount + meter.circuits.length
    }, 0)

    return count + siteCircuitCount
  }, 0)
})
</script>

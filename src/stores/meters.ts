import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meter } from '@/interfaces/Meter'

export const useMetersStore = defineStore('meters', () => {
  const meters = ref<Meter[]>([])
  const selectedMeter = ref<Meter | null>(null)

  const fetchMeters = async () => {
    const response = await fetch('http://localhost:3333/meters')
    meters.value = await response.json()
  }

  const fetchMeter = async (id: number) => {
    const response = await fetch(`http://localhost:3333/meters/${id}`)
    selectedMeter.value = await response.json()
  }

  const createMeter = async (meter: Meter) => {
    const response = await fetch('http://localhost:3333/meters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meter)
    })
    meters.value = [...meters.value, await response.json()]
  }

  const updateMeter = async (meter: Meter) => {
    const response = await fetch(`http://localhost:3333/meters/${meter.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meter)
    })

    meters.value = meters.value.map((m) => (m.id === meter.id ? meter : m))

    if (selectedMeter.value?.id === meter.id) {
      selectedMeter.value = meter
    }
  }

  const deleteMeter = async (id: number) => {
    await fetch(`http://localhost:3333/meters/${id}`, {
      method: 'DELETE'
    })
    meters.value = meters.value.filter((m: Meter) => m.id !== id)

    if (selectedMeter.value?.id === id) {
      selectedMeter.value = null
    }
  }

  return {
    meters,
    selectedMeter,
    fetchMeters,
    fetchMeter,
    createMeter,
    updateMeter,
    deleteMeter
  }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meter } from '@/interfaces/Meter'
import { createNewMeter, fetchAllMeters, fetchMeter, removeMeter, saveMeter } from '@/api/meters'

export const useMetersStore = defineStore('meters', () => {
  const meters = ref<Meter[]>([])
  const selectedMeter = ref<Meter | null>(null)

  const fetchMeters = async () => {
    const response = await fetchAllMeters()
    meters.value = response ? await response.json() : []
  }

  const fetchMeterById = async (id: number) => {
    const response = await fetchMeter(id)
    selectedMeter.value = response ? await response.json() : []
  }

  const createMeter = async (meter: Meter) => {
    const response = await createNewMeter(meter)

    meters.value = [
      ...meters.value,
      response ? await response.json() : []
    ]
  }

  const updateMeter = async (meter: Meter) => {
    const response = await saveMeter(meter)

    meters.value = meters.value.map((m) => (m.id === meter.id ? meter : m))

    if (selectedMeter.value?.id === meter.id) {
      selectedMeter.value = meter
    }
  }

  const deleteMeter = async (id: number) => {
    await removeMeter(id)
    meters.value = meters.value.filter((m: Meter) => m.id !== id)

    if (selectedMeter.value?.id === id) {
      selectedMeter.value = null
    }
  }

  return {
    meters,
    selectedMeter,
    fetchMeters,
    fetchMeterById,
    createMeter,
    updateMeter,
    deleteMeter
  }
})

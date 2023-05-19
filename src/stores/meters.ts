import { ref, type ComputedRef, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Meter } from '@/interfaces/Meter'
import { createNewMeter, fetchAllMeters, fetchMeter, removeMeter, saveMeter } from '@/api/meters'

export const useMetersStore = defineStore('meters', () => {
  const addMeterDialogFormVisible = ref<boolean>(false)
  const meters = ref<Meter[]>([])
  const selectedMeter = ref<Meter | null>(null)

  const metersCount: ComputedRef<number> = computed(() => meters.value.length)

  const setAddMeterDialogFormVisible = (state: boolean): void => {
    addMeterDialogFormVisible.value = state
  }

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
    await saveMeter(meter)
    meters.value = meters.value.map((m) => (m.id === meter.id ? meter : m))

    if (selectedMeter.value?.id === meter.id) {
      selectedMeter.value = meter
    }
  }

  const deleteMeter = async (meter: Meter) => {
    await removeMeter(meter)
    meters.value = meters.value.filter((m: Meter) => m.id !== meter.id)

    if (selectedMeter.value?.id === meter.id) {
      selectedMeter.value = null
    }

    await fetchMeters()
  }

  return {
    addMeterDialogFormVisible,
    createMeter,
    deleteMeter,
    fetchMeters,
    fetchMeterById,
    meters,
    metersCount,
    selectedMeter,
    setAddMeterDialogFormVisible,
    updateMeter
  } as const
})

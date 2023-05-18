import { computed, ref, type ComputedRef } from 'vue'
import type { Circuit } from '@/interfaces/Circuit'
import { defineStore } from 'pinia'
import { createNewCircuit, fetchAllCircuits, fetchCircuit, removeCircuit, saveCircuit } from '@/api/circuits'

export const useCircuitsStore = defineStore('circuits', () => {
  const addCircuitDialogFormVisible = ref<boolean>(false)
  const circuits = ref<Circuit[]>([])
  const selectedCircuit = ref<Circuit | null>(null)

  const circuitCount: ComputedRef<number> = computed(() => circuits.value.length)

  const setAddCircuitDialogFormVisible = (state: boolean): void => {
    addCircuitDialogFormVisible.value = state
  }

  const setSelectedCircuit = (circuit: Circuit | null): void => {
    selectedCircuit.value = circuit
  }

  const fetchCircuits = async () => {
    const response = await fetchAllCircuits()
    circuits.value = response ? await response.json() : []
  }

  const fetchCircuitById = async (id: number) => {
    const response = await fetchCircuit(id)
    selectedCircuit.value = response ? await response.json() : []
  }

  const createCircuit = async (circuit: Circuit) => {
    const response = await createNewCircuit(circuit)
    circuits.value = [
      ...circuits.value,
      response ? await response.json() : []
    ]
    setAddCircuitDialogFormVisible(false)
  }

  const updateCircuit = async (circuit: Circuit | null) => {
    await saveCircuit(circuit)

    circuits.value = circuits.value.map((c) => (c.id === circuit?.id ? circuit : c))

    if (selectedCircuit.value?.id === circuit?.id) {
      selectedCircuit.value = circuit
    }
  }

  const deleteCircuit = async (circuit: Circuit | null) => {
    await removeCircuit(circuit)
    circuits.value = circuits.value.filter((c: Circuit) => c.id !== circuit.id)

    if (selectedCircuit.value?.id === circuit.id) {
      selectedCircuit.value = null
    }

    await fetchCircuits()
  }

  return {
    addCircuitDialogFormVisible,
    circuits,
    circuitCount,
    createCircuit,
    deleteCircuit,
    fetchCircuits,
    fetchCircuitById,
    selectedCircuit,
    setAddCircuitDialogFormVisible,
    setSelectedCircuit,
    updateCircuit,
  } as const
})

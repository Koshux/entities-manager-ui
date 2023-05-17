import { ref } from 'vue'
import type { Circuit } from '@/interfaces/Circuit'
import { defineStore } from 'pinia'
import { createNewCircuit, fetchAllCircuits, fetchCircuit, removeCircuit, saveCircuit } from '@/api/circuits'

export const useCircuitsStore = defineStore('circuits', () => {
  const circuits = ref<Circuit[]>([])
  const selectedCircuit = ref<Circuit | null>(null)

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
  }

  const updateCircuit = async (circuit: Circuit) => {
    await saveCircuit(circuit)

    circuits.value = circuits.value.map((c) => (c.id === circuit.id ? circuit : c))

    if (selectedCircuit.value?.id === circuit.id) {
      selectedCircuit.value = circuit
    }
  }

  const deleteCircuit = async (id: number) => {
    await removeCircuit(id)
    circuits.value = circuits.value.filter((c: Circuit) => c.id !== id)

    if (selectedCircuit.value?.id === id) {
      selectedCircuit.value = null
    }
  }

  return {
    circuits,
    selectedCircuit,
    fetchCircuits,
    fetchCircuitById,
    createCircuit,
    updateCircuit,
    deleteCircuit
  }
})

import { ref } from 'vue'
import type { Circuit } from '@/interfaces/Circuit'
import { defineStore } from 'pinia'

export const useCircuitsStore = defineStore('circuits', () => {
  const circuits = ref<Circuit[]>([])
  const selectedCircuit = ref<Circuit | null>(null)

  const fetchCircuits = async () => {
    const response = await fetch('http://localhost:3333/circuits')
    console.log('RESPONSE', response)
    circuits.value = await response.json()
  }

  const fetchCircuit = async (id: number) => {
    const response = await fetch(`http://localhost:3333/circuits/${id}`)
    selectedCircuit.value = await response.json()
  }

  const createCircuit = async (circuit: Circuit) => {
    const response = await fetch('http://localhost:3333/circuits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(circuit)
    })
    circuits.value = [...circuits.value, await response.json()]
  }

  const updateCircuit = async (circuit: Circuit) => {
    const response = await fetch(`http://localhost:3333/circuits/${circuit.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(circuit)
    })

    circuits.value = circuits.value.map((c) => (c.id === circuit.id ? circuit : c))

    if (selectedCircuit.value?.id === circuit.id) {
      selectedCircuit.value = circuit
    }
  }

  const deleteCircuit = async (id: number) => {
    await fetch(`http://localhost:3333/circuits/${id}`, {
      method: 'DELETE'
    })
    circuits.value = circuits.value.filter((c: Circuit) => c.id !== id)

    if (selectedCircuit.value?.id === id) {
      selectedCircuit.value = null
    }
  }

  return {
    circuits,
    selectedCircuit,
    fetchCircuits,
    fetchCircuit,
    createCircuit,
    updateCircuit,
    deleteCircuit
  }
})

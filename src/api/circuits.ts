// Implement the circuits API the same way as @/api/sites, @/api/meters, and @/api/profile but for the Circuit API7
// Path: src\api\circuits.ts

import type { Circuit } from '@/interfaces/Circuit'

const createNewCircuit = async (circuit: Circuit): Promise<void | Response> => {
  return await fetch('http://localhost:3333/circuits', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(circuit)
  }).catch(error => {
    console.error(error)
  })
}

const fetchCircuits = async (circuit: Circuit): Promise<void | Response> => {
  return await fetch('http://localhost:3333/circuits').catch(error => {
    console.error(error)
  })
}

const updateCircuit = async (circuit: Circuit): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/circuits/${circuit.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(circuit)
    }).catch(error => {
      console.error(error)
    })
}

const fetchCircuit = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/circuits/${id}`).catch(error => {
    console.error(error)
  })
}

const deleteCircuit = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/circuits/${id}`, {
    method: 'DELETE'
  }).catch(error => {
    console.error(error)
  })
}

export default {
  createNewCircuit,
  fetchCircuits,
  fetchCircuit,
  updateCircuit,
  deleteCircuit
}

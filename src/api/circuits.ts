// Implement the circuits API the same way as @/api/sites, @/api/meters, and @/api/profile but for the Circuit API7
// Path: src\api\circuits.ts

import type { Circuit } from '@/interfaces/Circuit'

export const createNewCircuit = async (circuit: Circuit): Promise<void | Response> => {
  return await fetch('/v1/circuits', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(circuit)
  }).catch(error => {
    console.error(error)
  })
}

export const fetchAllCircuits = async (): Promise<void | Response> => {
  return await fetch('/v1/circuits').catch(error => {
    console.error(error)
  })
}

export const saveCircuit = async (circuit: Circuit): Promise<void | Response> => {
  return await fetch(`/v1/circuits/${circuit.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(circuit)
    }).catch(error => {
      console.error(error)
    })
}

export const fetchCircuit = async (id: number): Promise<void | Response> => {
  return await fetch(`/v1/circuits/${id}`).catch(error => {
    console.error(error)
  })
}

export const removeCircuit = async (id: number): Promise<void | Response> => {
  return await fetch(`/v1/circuits/${id}`, {
    method: 'DELETE'
  }).catch(error => {
    console.error(error)
  })
}

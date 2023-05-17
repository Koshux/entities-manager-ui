import type { Meter } from '@/interfaces/Meter'

const createNewMeter = async (meter: Meter): Promise<void | Response> => {
  return await fetch('http://localhost:3333/meters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(meter)
  }).catch(error => {
    console.error(error)
  })
}

const fetchMeters = async (meter: Meter): Promise<void | Response> => {
  return await fetch('http://localhost:3333/meters').catch(error => {
    console.error(error)
  })
}

const updateMeter = async (meter: Meter): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/meters/${meter.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meter)
    }).catch(error => {
      console.error(error)
    })
}

const fetchMeter = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/meters/${id}`).catch(error => {
    console.error(error)
  })
}

const deleteMeter = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/meters/${id}`, {
    method: 'DELETE'
  }).catch(error => {
    console.error(error)
  })
}

export default {
  createNewMeter,
  fetchMeters,
  fetchMeter,
  updateMeter,
  deleteMeter
}

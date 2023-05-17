import type { Meter } from '@/interfaces/Meter'

export const createNewMeter = async (meter: Meter): Promise<void | Response> => {
  return await fetch('/v1/meters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(meter)
  }).catch(error => {
    console.error(error)
  })
}

export const fetchAllMeters = async (): Promise<void | Response> => {
  return await fetch('/v1/meters').catch(error => {
    console.error(error)
  })
}

export const saveMeter = async (meter: Meter): Promise<void | Response> => {
  return await fetch(`/v1/meters/${meter.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meter)
    }).catch(error => {
      console.error(error)
    })
}

export const fetchMeter = async (id: number): Promise<void | Response> => {
  return await fetch(`/v1/meters/${id}`).catch(error => {
    console.error(error)
  })
}

export const removeMeter = async (id: number): Promise<void | Response> => {
  return await fetch(`/v1/meters/${id}`, {
    method: 'DELETE'
  }).catch(error => {
    console.error(error)
  })
}

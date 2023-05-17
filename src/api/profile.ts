import type { Customer } from '@/interfaces/Customer'

export const fetchAllProfiles = async (): Promise<Response> => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch('/v1/profile', options)
}

export const fetchProfileData = async (id: number): Promise<Response> => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch(`/v1/profile/${id}`, options)
}

export const updateCustomerData = async (payload: Customer): Promise<Response> => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }

  return await fetch(`/v1/profile/${payload.id}`, options)
}

import type { Customer } from '@/interfaces/Customer'

export const fetchAllProfiles = async (): Promise<Response> => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch('/profile', options)
}

export const fetchProfileData = async (id: number): Promise<Response> => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch(`/profile/${id}`, options)
}

export const updateCustomerData = async (payload: Customer): Promise<Response> => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }

  return await fetch(`/profile/${payload.id}`, options)
}

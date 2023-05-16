import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Customer } from '@/interfaces/Customer'

export const useProfileStore = defineStore('profile', () => {
  const customerProfile = ref<Customer | null>(null)

  const fetchProfile = async () => {
    const response = await fetch('http://localhost:3333/profile')
    customerProfile.value = await response.json()
  }

  const updateProfile = async (profile: Customer) => {
    const response = await fetch(`http://localhost:3333/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    })

    customerProfile.value = profile
  }

  return {
    customerProfile,
    fetchProfile,
    updateProfile
  }
})

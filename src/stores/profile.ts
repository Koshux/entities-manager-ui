import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchProfileData, updateCustomerData } from '@/api/profile'
import type { Customer } from '@/interfaces/Customer'

export const useProfileStore = defineStore('profile', () => {
  const customerProfile = ref<Customer | null>(null)

  const fetchProfile = async (id: number) => {
    const response = await fetchProfileData(id)
    customerProfile.value = await response.json()
  }

  const updateProfile = async (profile: Customer) => {
    const response = await updateCustomerData(profile)
    customerProfile.value = await response.json()
  }

  return {
    customerProfile,
    fetchProfile,
    updateProfile
  }
})

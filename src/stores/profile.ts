import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllProfiles, fetchProfileData, updateCustomerData } from '@/api/profile'
import type { Customer, CustomerPayload } from '@/interfaces/Customer'

export const useProfileStore = defineStore('profile', () => {
  const customerProfile = ref<Customer | null>(null)
  const customers = ref<Customer[]>([])
  const selectedCustomer = ref<Customer | null>(null)

  const setSelectedCustomer = (customer: Customer): void => {
    selectedCustomer.value = customer
  }

  const fetchProfile = async (id: number) => {
    const response = await fetchProfileData(id)
    customerProfile.value = await response.json()
  }

  const fetchProfiles = async () => {
    const response = await fetchAllProfiles()
    customers.value = await response.json()
  }

  const updateProfile = async (profile: CustomerPayload) => {
    const response = await updateCustomerData(profile)
    customerProfile.value = await response.json()
  }

  return {
    customers,
    customerProfile,
    fetchProfile,
    fetchProfiles,
    setSelectedCustomer,
    updateProfile
  } as const
})

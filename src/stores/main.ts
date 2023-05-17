import { ref } from 'vue'
import { defineStore } from 'pinia'
import fetchCustomerData from '@/api/profile'

export const useMainStore = defineStore('main', () => {
  const profile = ref({})

  const fetchUserData = fetchCustomerData()

  return {
    fetchUserData,
    profile
  }
})

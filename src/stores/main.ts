import { ref } from 'vue'
import { defineStore } from 'pinia'
// import fetchProfileData from '@/api/profile'

export const useMainStore = defineStore('main', () => {
  const profile = ref({})

  // const fetchUserData = fetchProfileData()

  return {
    // fetchUserData,
    profile
  }
})

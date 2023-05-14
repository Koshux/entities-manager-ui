// import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const profile = ref({})

  const fetchUserData = (): Promise<void|object> => {
    const options = {
      method: 'GET',
      contentType: 'application/json'
    }

    return window.fetch('/app/v1/profile', options)
      .then(response => response.json())
      .then(data => {
        console.log('user data:', data)
        profile.value = data
      })
  }

  return {
    fetchUserData,
    profile
  }
})

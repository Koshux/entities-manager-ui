import { createNewSite, getSite, getSites, removeSite } from '@/api/sites'
import type { Site } from '@/interfaces/Site'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSitesStore = defineStore('sites', () => {
  const sites = ref<Site[]>([])
  const selectedSite = ref<Site | null>(null)

  // Create a method to fetch all sites with a GET request and application/json header with typescript
  const fetchSites = async () => {
    const response = await getSites()
    sites.value = response ? await response.json() : []
  }

  const fetchSite = async (id: number) => {
    const response = await getSite(id)
    selectedSite.value = response ? await response.json() : []
  }

  const createSite = async (site: Site) => {
    const response = await createNewSite(site)
    sites.value = [...sites.value, response ? await response.json() : []]
  }

  const updateSite = async (site: Site) => {
    await updateSite(site)
    sites.value = sites.value.map((s: Site) => (s.id === site.id ? site : s))

    // If the selected site is the one we updated, update it
    if (selectedSite.value?.id === site.id) {
      selectedSite.value = site
    }
  }

  // Create a method to delete a site
  const deleteSite = async (id: number) => {
    await removeSite(id)

    sites.value = sites.value.filter((s) => s.id !== id)

    // If the selected site is the one we deleted, clear the selected site
    if (selectedSite.value?.id === id) {
      selectedSite.value = null
    }
  }

  // Return the methods and reactive variables
  return {
    sites,
    selectedSite,
    fetchSites,
    fetchSite,
    createSite,
    updateSite,
    deleteSite
  } as const
})

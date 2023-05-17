import type { Site } from '@/interfaces/Site'

export const createNewSite = async (site: Site): Promise<void | Response> => {
  return await fetch('http://localhost:3333/sites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(site)
  }).catch(error => {
    console.error(error)
  })
}

export const getSites = async (): Promise<void | Response> => {
  return await fetch('http://localhost:3333/sites').catch(error => {
    console.error(error)
  })
}

export const patchSite = async (site: Site): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/sites/${site.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(site)
    }).catch(error => {
      console.error(error)
    })
}

export const getSite = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/sites/${id}`).catch(error => {
    console.error(error)
  })
}

export const removeSite = async (id: number): Promise<void | Response> => {
  return await fetch(`http://localhost:3333/sites/${id}`, {
    method: 'DELETE'
  }).catch(error => {
    console.error(error)
  })
}



import type { Site } from './Site'

export interface Customer {
  id: number
  name: string
  email: string
  vatNumber: string
  createdAt: Date
  updatedAt: Date
  site: Site[]
}


import type { Circuit } from './Circuit'

export interface Meter {
  id: number
  name: string
  serialNumber: string
  installationDate: Date
  createdAt: Date
  updatedAt: Date
  circuits: Circuit[]
}

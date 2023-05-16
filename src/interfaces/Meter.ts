import type { Circuit } from './circuit'

export interface Meter {
  id: number
  name: string
  serialNumber: string
  installationDate: Date
  createdAt: Date
  updatedAt: Date
  circuits: Circuit[]
}

import type { Meter } from './Meter'

export interface Site {
  id: number
  name: string
  coordinates: string
  address: string
  postCode: string
  createdAt: Date
  updatedAt: Date
  meters: Meter[]
}

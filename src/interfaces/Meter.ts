import type { DateTime } from 'luxon'

export interface Meter {
  id?: number
  name: string
  serialNumber: string
  installationDate: DateTime
  createdAt?: Date
  updatedAt?: Date
  siteId?: number | null
}

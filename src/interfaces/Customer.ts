import type { DateTime } from 'luxon'
import type { Site } from './Site'

export interface Customer {
  id: number
  name: string
  email: string
  vat_number: string
  created_at: DateTime
  updated_at: DateTime
}


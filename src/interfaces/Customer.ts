import type { DateTime } from 'luxon'

export interface Customer {
  id: number
  name: string
  email: string
  vat_number: string
  created_at: string
  updated_at: string
}
export interface CustomerPayload {
  id: number
  name: string
  email: string
  vatNumber: string
}

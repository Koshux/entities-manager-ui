
export interface Site {
  id?: number
  name: string
  coordinates: string
  address: string
  postCode: string
  createdAt?: Date
  updatedAt?: Date
  customerId?: number | null
}

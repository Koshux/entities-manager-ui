import type { DateTime } from "luxon"

export interface Circuit {
  id?: number
  name: string
  installationDate: DateTime
  isMain: boolean
  circuitId?: number | null
  meterId?: number
  createdAt?: DateTime
  updatedAt?: DateTime
}


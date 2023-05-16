export interface Circuit {
  id: number
  name: string
  installationDate: Date
  isMain: boolean
  createdAt: Date
  updatedAt: Date
  circuits: Circuit[]
}


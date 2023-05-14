import type { RouteRecordNormalized } from "vue-router"

export interface Route extends RouteRecordNormalized {
  path: string
  name: string
  icon: string
}

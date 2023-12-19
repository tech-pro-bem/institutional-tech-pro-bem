import { Tables } from '@/app/protocols'

export interface Impact {
  result: string
  description: string
}

export interface ImpactContent {
  title: string
  values: Tables<Impact>[]
}

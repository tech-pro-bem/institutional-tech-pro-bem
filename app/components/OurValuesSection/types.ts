import { ImageType, Tables } from '@/app/protocols'

export interface Values {
  title: string
  description: string
  symbol: ImageType
}

export interface ValuesContent {
  title: string
  values: Tables<Values>[]
}

import { Tables } from '@/app/protocols'

export interface Values {
  title: string
  description: string
  symbol: {
    fields: {
      file: {
        url: string
        details: {
          image: {
            width: number
            height: number
          }
        }
      }
    }
  }
}

export interface ValuesContent {
  title: string
  values: Tables<Values>[]
}

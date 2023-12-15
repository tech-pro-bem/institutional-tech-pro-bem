import { Tables } from '@/app/protocols'

export interface imageType {
  fields: {
    title: string
    description: string
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

export interface testimonialsType {
  name: string
  office: string
  testimony: string
  image: imageType
}

export interface testimonialsContentType {
  title: string
  description: string
  quotationMark: imageType
  testimonials: Tables<testimonialsType>[]
}

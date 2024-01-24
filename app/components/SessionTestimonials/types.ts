import { ImageType, Tables } from '@/app/protocols'

export interface testimonialsType {
  name: string
  office: string
  testimony: string
  image: ImageType
}

export interface testimonialsContentType {
  title: string
  description: string
  quotationMark: ImageType
  testimonials: Tables<testimonialsType>[]
}

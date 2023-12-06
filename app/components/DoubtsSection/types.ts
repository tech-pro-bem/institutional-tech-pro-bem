import { Tables } from '@/app/protocols'

export interface FAQType {
  question: string
  answer: string
}

export interface DoubtsType {
  category: string
  faq: Tables<FAQType>[]
}

export interface DoubtsContentType {
  title: string
  description: string
}

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

// Seção Depoimentos - Título e subtítulo
// ID da seção na tabela: testimonialsContent.
// EntryTitle: Somente para identificar o conteúdo no Contentful. Retornará na API como 'id'.
// Título principal da seção: Retornará na API como 'title'.
// Subtítulo: Retornará na API como 'description'.
// Imagem das aspas: Retornará na API como 'quotationMark'.

// Seção Depoimentos - Voluntários e depoimentos
// ID da seção na tabela: testimonials.
// Nome do voluntário: Retornará na API como 'name'.
// Foto do voluntário: Retornará na API como 'image'.
// Cargo: Retornará na API como 'office'.
// Depoimento: Retornará na API como 'testimony'.

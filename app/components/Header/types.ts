export interface HeaderValues {
  id: string
  section: string[]
  about: string
  logo: {
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
}

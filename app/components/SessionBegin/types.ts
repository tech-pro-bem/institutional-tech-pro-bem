export interface BeginValues {
  id: string
  title: string
  about: string
  image: {
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

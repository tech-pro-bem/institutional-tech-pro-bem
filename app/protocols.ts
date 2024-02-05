export interface Tables<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: T | any
}

export interface ImageType {
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

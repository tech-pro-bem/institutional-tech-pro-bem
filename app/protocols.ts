export interface Tables<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: T | any
}

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

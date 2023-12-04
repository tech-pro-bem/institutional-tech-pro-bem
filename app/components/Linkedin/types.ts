export interface LinkedinValues {
  id: string
  title: string
  description: string
  buttonText: string
  arrow: {
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

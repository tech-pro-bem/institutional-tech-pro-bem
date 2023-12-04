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
  linkLinkedIn: string
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

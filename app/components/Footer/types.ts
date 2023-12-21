export interface FooterValues {
  id: string
  textTalk: string
  inviteTalk: string
  emailTech: string
  linkedinTech: string
  instagramTech: string
  textPartnership: string
  invitePartnership: string
  emailPartnership: string
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

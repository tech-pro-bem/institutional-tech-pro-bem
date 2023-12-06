import styles from './style.module.css'

import Image from 'next/image'

import { Tables } from '@/app/protocols'
import { idFactory } from '@/app/utils/idFactory'
import { FooterValues } from './types'

interface FooterProps {
  values: Tables<FooterValues>[]
}

export const Footer: React.FC<FooterProps> = async ({ values }) => {
  return (
    <>
      {values.map((value: Tables<FooterValues>) => (
        <footer
          key={value.fields.id}
          id={idFactory(value.fields.id)}
          className={styles.footer}
        >
          <div className={`${styles.infoContainer} container`}>
            <div>
              <p className={`${styles.infoSubtitle} regular-text`}>
                {value.fields.textTalk}
              </p>
              <h4 className="title title--extra-small">
                {value.fields.inviteTalk}
              </h4>
              <address>
                <p className={styles.infoField}>
                  <Image
                    src={`https:${value.fields.MailIcon.fields.file.url}`}
                    width={
                      value.fields.MailIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.MailIcon.fields.file.details.image.height
                    }
                    alt={value.fields.MailIcon.fields.description}
                  />
                  {value.fields.emailTech}
                </p>
                <a
                  href={`https://${value.fields.linkedinTech}`}
                  target="_blank"
                  rel="noopener"
                  className={styles.infoField}
                >
                  <Image
                    src={`https:${value.fields.LinkedInIcon.fields.file.url}`}
                    width={
                      value.fields.LinkedInIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.LinkedInIcon.fields.file.details.image.height
                    }
                    alt={value.fields.LinkedInIcon.fields.description}
                  />
                  {value.fields.linkedinTech}
                </a>
                <a
                  href={`https://www.instagram.com/${value.fields.instagramTech}`}
                  target="_blank"
                  rel="noopener"
                  className={styles.infoField}
                >
                  <Image
                    src={`https:${value.fields.InstagramIcon.fields.file.url}`}
                    width={
                      value.fields.InstagramIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.InstagramIcon.fields.file.details.image
                        .height
                    }
                    alt={value.fields.InstagramIcon.fields.description}
                  />
                  @{value.fields.instagramTech}
                </a>
              </address>
            </div>

            <div>
              <p className={`${styles.infoSubtitle} regular-text`}>
                {value.fields.textPartnership}
              </p>
              <h4 className="title title--extra-small">
                {value.fields.invitePartnership}
              </h4>
              <address>
                <p className={styles.infoField}>
                  <Image
                    src={`https:${value.fields.MailIcon.fields.file.url}`}
                    width={
                      value.fields.MailIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.MailIcon.fields.file.details.image.height
                    }
                    alt={value.fields.MailIcon.fields.description}
                  />
                  {value.fields.emailPartnership}
                </p>
              </address>
            </div>
          </div>

          <div className={styles.logoContainer}>
            <Image
              className={styles.tpblogo}
              src={`https:${value.fields.logo.fields.file.url}`}
              width={value.fields.logo.fields.file.details.image.width}
              height={value.fields.logo.fields.file.details.image.height}
              alt={value.fields.logo.fields.description}
            />
          </div>
        </footer>
      ))}
    </>
  )
}

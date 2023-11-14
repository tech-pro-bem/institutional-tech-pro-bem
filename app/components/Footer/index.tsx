import styles from './style.module.css'

import Image from 'next/image'

import InstagramIcon from '../../../public/InstagramIcon.svg'
import LinkedinIcon from '../../../public/LinkedinIcon.svg'
import MailIcon from '../../../public/MailIcon.svg'

import { FooterValues } from './types'
import { Tables } from '@/app/protocols'

interface FooterProps {
  values: Tables<FooterValues>[]
}

export const Footer: React.FC<FooterProps> = async ({ values }) => {
  return (
    <>
      {values.map((value: Tables<FooterValues>) => (
        <footer
          key={value.fields.id}
          id={value.fields.id}
          className={styles.footer}
        >
          <div className={`${styles.infoContainer} container`}>
            <div>
              <p className={`${styles.infoSubtitle} regular-text`}>
                {value.fields.textTalk}
              </p>
              <h4 className={`${styles.infoTitle} title--extra-small`}>
                {value.fields.inviteTalk}
              </h4>
              <address>
                <p className={styles.infoField}>
                  <Image
                    src={MailIcon}
                    alt="Ícone de um envelope representando um e-mail"
                  />
                  {value.fields.emailTech}
                </p>
                <a
                  href="https://www.linkedin.com/company/techprobem/"
                  target="_blank"
                  rel="noopener"
                  className={styles.infoField}
                >
                  <Image src={LinkedinIcon} alt="Ícone do LinkedIn" />
                  {value.fields.linkedinTech}
                </a>
                <a
                  href="https://www.instagram.com/techprobem/"
                  target="_blank"
                  rel="noopener"
                  className={styles.infoField}
                >
                  <Image src={InstagramIcon} alt="Ícone do Instagram" />
                  {value.fields.instagramTech}
                </a>
              </address>
            </div>

            <div>
              <p className={`${styles.infoSubtitle} regular-text`}>
                {value.fields.textPartnership}
              </p>
              <h4 className={`${styles.infoTitle} title--extra-small`}>
                {value.fields.invitePartnership}
              </h4>
              <address>
                <p className={styles.infoField}>
                  <Image
                    src={MailIcon}
                    alt="Ícone de um envelope representando um e-mail"
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
              alt="Logo da Tech Pro Bem"
            />
          </div>
        </footer>
      ))}
    </>
  )
}

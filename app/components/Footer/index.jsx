import styles from './style.module.css'

import Image from 'next/image'

import tpblogo from '../../../public/tpblogo.svg'
import InstagramIcon from '../../../public/InstagramIcon.svg'
import LinkedinIcon from '../../../public/LinkedinIcon.svg'
import MailIcon from '../../../public/MailIcon.svg'

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={`${styles.infoContainer} container`}>
        <div>
          <p className={`${styles.infoSubtitle} regular-text`}>
            Vamos conversar?
          </p>
          <h4 className={`${styles.infoTitle} title--extra-small`}>
            Entre em contato com a Tech Pro Bem
          </h4>
          <address>
            <p className={styles.infoField}>
              <Image src={MailIcon} alt="Logo da Tech Pro Bem" />
              techprobem@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/company/techprobem/"
              target="_blank"
              rel="noopener"
              className={styles.infoField}
            >
              <Image src={LinkedinIcon} alt="Logo da Tech Pro Bem" />
              linkedin.com/company/techprobem
            </a>
            <a
              href="https://www.instagram.com/techprobem/"
              target="_blank"
              rel="noopener"
              className={styles.infoField}
            >
              <Image src={InstagramIcon} alt="Logo da Tech Pro Bem" />
              @techprobem
            </a>
          </address>
        </div>

        <div>
          <p className={`${styles.infoSubtitle} regular-text`}>
            Quer ser nosso parceiro e apoiar a comunidade?
          </p>
          <h4 className={`${styles.infoTitle} title--extra-small`}>
            Envie um email com sua proposta
          </h4>
          <address>
            <p className={styles.infoField}>
              <Image src={MailIcon} alt="Logo da Tech Pro Bem" />
              parceiros@techprobem.com.br
            </p>
          </address>
        </div>
      </div>

      <div className={styles.logoContainer}>
        <Image
          className={styles.tpblogo}
          src={tpblogo}
          alt="Logo da Tech Pro Bem"
        />
      </div>
    </footer>
  )
}

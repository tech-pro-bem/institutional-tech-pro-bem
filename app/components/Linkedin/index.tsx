import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/linkedinlogo.svg'
import linkedin from '../../assets/linkedin.svg'
import style from './style.module.css'

export function Linkedin() {
  return (
    <section className={style.section__container}>
      <div className={`${style.section__container_linkedin} container`}>
        <div className={style.section__container_text}>
          <h2 className="title">Acompanhe</h2>
          <p className="regular-text">
            Seguindo a Tech Pro Bem no <strong>Linkedin</strong> você fica
            sabendo do próximo processo seletivo e outras novidades. Nós vemos
            lá?
          </p>
          <div className={style.link}>
            <Link href="https://www.linkedin.com/company/techprobem/">
              Seguir a Tech Pro Bem
            </Link>
            <Image src={logo} alt="" />
          </div>
        </div>
        <Image src={linkedin} alt="" className={style.image__logo} />
      </div>
    </section>
  )
}

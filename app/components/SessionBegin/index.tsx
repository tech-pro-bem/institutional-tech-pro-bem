import Image from 'next/image'
import inicioLogo from '../../../public/inicio.svg'
import styles from './style.module.css'

export function SessionBegin() {
  return (
    <section className={styles.begin}>
      <div className={`${styles.layout_begin} container`}>
        <div className={styles.text}>
          <h1 className={`${styles.title} text-h1`}>
            Impulsionamos pessoas, carreiras e projetos sociais
          </h1>
          <p className={styles.description}>
            Somos uma comunidade de profissionais voluntários e acreditamos que
            a tecnologia é um meio poderoso para transformar vidas.
          </p>
        </div>
        <Image
          src={inicioLogo}
          alt="Ilustração com tema de cores monocromático com base na cor lilás de uma equipe três pessoas em um cenário abstrato representando um espaço de trabalho de construção de uma página web. A mulher pinta com um rolo de tinta a parede enquanto dois homens conversam, um com uma placa representando uma linguagem de código e o outro com um laptop no colo."
        />
      </div>
    </section>
  )
}

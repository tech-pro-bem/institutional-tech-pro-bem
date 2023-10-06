import Image from 'next/image'
import inicioLogo from '../../../public/inicio.svg'
import styles from './style.module.css'

export function Inicio() {
  return (
    <section className={styles.inicio}>
      <div className={`${styles.container} container`}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Impulsionamos pessoas, carreiras e projetos sociais
          </h1>
          <p className={styles.description}>
            Somos uma comunidade de profissionais voluntários e acreditamos que
            a tecnologia é um meio poderoso para transformar vidas.
          </p>
        </div>
        <Image src={inicioLogo} alt="Logo Inicio" />
        {/* onde salvar as imagens, qual alt utilizar */}
        {/* a div com o gradiente entra aqui ou vem da proxima sessão */}
      </div>
    </section>
  )
}

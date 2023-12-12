import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import imgVoluntario from '../../../../public/voluntario.png'
import imgAspas from '../../../../public/aspas.svg'

interface CardData {
  nome: string
  cargo: string
  depoimento: string
}

interface CardProps {
  depoiment: CardData
}
export const Card: React.FC<CardProps> = ({ depoiment }) => {
  return (
    <div className={`${styles.card} `}>
      <Image
        className={styles.employee}
        src={imgVoluntario}
        alt="imagem do voluntario"
      />
      <p className={`text2 ${styles.name}`}>{depoiment.nome}</p>
      <p className={`text2 ${styles.department}`}>{depoiment.cargo}</p>
      <Image className={styles.aspas} src={imgAspas} alt="aspas" />
      <p className={`regular-text ${styles.text_depoiment}`}>
        {depoiment.depoimento}
      </p>
    </div>
  )
}

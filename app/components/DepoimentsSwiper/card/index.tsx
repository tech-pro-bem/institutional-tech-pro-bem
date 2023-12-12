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
      <div className={styles.employee_mask}></div>
      <p className={`${styles.name} text2`}>{depoiment.nome}</p>
      <p className={`${styles.department} text2`}>{depoiment.cargo}</p>
      <Image className={styles.aspas} src={imgAspas} alt="aspas" />
      <p className={`${styles.text_depoiment} regular-text `}>
        {depoiment.depoimento}
      </p>
    </div>
  )
}

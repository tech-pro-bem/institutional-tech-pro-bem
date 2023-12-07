import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import imgVoluntario from '../../../../../public/voluntario.png'

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
    <div className={styles.card}>
      <Image src={imgVoluntario} alt="imagem do voluntario" />
      <p className="text2">{depoiment.nome}</p>
      <p className={`text2 ${styles.department}`}>{depoiment.cargo}</p>
      <p className={`regular-text ${styles.text_depoiment}`}>
        {depoiment.depoimento}
      </p>
    </div>
  )
}

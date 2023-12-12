import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { imageType, testimonialsType } from '../types'

interface CardProps {
  depoiment: testimonialsType
  quotationMark: imageType
}
export const Card: React.FC<CardProps> = ({ depoiment, quotationMark }) => {
  const testimony = depoiment.testimony.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )
  return (
    <div className={`${styles.card} `}>
      <Image
        className={styles.employee}
        src={`https:${depoiment.image.fields.file.url}`}
        alt={depoiment.image.fields.description}
        width={depoiment.image.fields.file.details.image.width}
        height={depoiment.image.fields.file.details.image.height}
      />
      <div className={styles.employee_mask}></div>
      <p className={`${styles.name} text2`}>{depoiment.name}</p>
      <p className={`${styles.department} text2`}>{depoiment.office}</p>
      <Image
        className={styles.aspas}
        src={`https:${quotationMark.fields.file.url}`}
        alt={quotationMark.fields.description}
        width={quotationMark.fields.file.details.image.width}
        height={quotationMark.fields.file.details.image.height}
      />
      <p
        className={`${styles.text_depoiment} regular-text `}
        dangerouslySetInnerHTML={{
          __html: testimony,
        }}
      ></p>
    </div>
  )
}

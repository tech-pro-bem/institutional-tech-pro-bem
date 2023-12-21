import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { imageType, testimonialsType } from '../types'

interface CardProps {
  testimonial: testimonialsType
  quotationMark: imageType
}
export const Card: React.FC<CardProps> = ({ testimonial, quotationMark }) => {
  const testimony = testimonial.testimony.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )
  return (
    <article className={`${styles.card} `}>
      <Image
        className={styles.voluntary_img}
        src={`https:${testimonial.image.fields.file.url}`}
        alt={testimonial.image.fields.description}
        width={testimonial.image.fields.file.details.image.width}
        height={testimonial.image.fields.file.details.image.height}
      />
      <div className={styles.voluntary_img_filter}></div>
      <p className={`${styles.name} text2`}>{testimonial.name}</p>
      <p className={`${styles.office} text2`}>{testimonial.office}</p>
      <Image
        className={styles.quotation}
        src={`https:${quotationMark.fields.file.url}`}
        alt={quotationMark.fields.description}
        width={quotationMark.fields.file.details.image.width}
        height={quotationMark.fields.file.details.image.height}
      />
      <p
        className={`${styles.text_testimonial} regular-text `}
        dangerouslySetInnerHTML={{
          __html: testimony,
        }}
      ></p>
    </article>
  )
}

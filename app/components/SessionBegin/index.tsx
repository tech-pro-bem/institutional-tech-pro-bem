import Image from 'next/image'
import styles from './style.module.css'
import { BeginValues } from './types'
import { Tables } from '@/app/protocols'

interface BeginProps {
  values: Tables<BeginValues>[]
}

export const SessionBegin: React.FC<BeginProps> = async ({ values }) => {
  return (
    <section id="inicio" className={styles.begin}>
      {values.map((value: Tables<BeginValues>) => (
        <div
          className={`${styles.layout_begin} container`}
          key={value.fields.id}
        >
          <div className={styles.text}>
            <h1 className="title--big">{value.fields.title}</h1>
            <p className={styles.description}>{value.fields.about}</p>
          </div>
          <Image
            src={`https:${value.fields.image.fields.file.url}`}
            alt={value.fields.image.fields.description}
            width={value.fields.image.fields.file.details.image.width}
            height={value.fields.image.fields.file.details.image.height}
          />
        </div>
      ))}
    </section>
  )
}

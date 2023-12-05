import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import { LinkedinValues } from './types'
import { Tables } from '@/app/protocols'

interface LinkedinProps {
  values: Tables<LinkedinValues>[]
}

export const SessionLinkedin: React.FC<LinkedinProps> = async ({ values }) => {
  const howItWorks = values[0].fields.description.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )

  return (
    <section id="linkedin" className={style.section__container}>
      {values.map((value: Tables<LinkedinValues>) => (
        <div
          key={value.fields.id}
          className={`${style.section__container_linkedin} container`}
        >
          <div className={style.section__container_text}>
            <h2 className="title">{value.fields.title}</h2>
            <p
              className={`${style.text_paragraph} regular-text`}
              dangerouslySetInnerHTML={{
                __html: howItWorks,
              }}
            />
            <div className={style.link}>
              <Link
                href={`https:${value.fields.linkLinkedIn}`}
                className={style.link_linkedin}
              >
                {value.fields.buttonText}
              </Link>
              <Image
                src={`https:${value.fields.arrow.fields.file.url}`}
                alt={value.fields.arrow.title}
                width={value.fields.arrow.fields.file.details.image.width}
                height={value.fields.arrow.fields.file.details.image.height}
              />
            </div>
          </div>
          <Image
            className={style.image__logo}
            src={`https:${value.fields.image.fields.file.url}`}
            alt={value.fields.image.title}
            width={value.fields.image.fields.file.details.image.width}
            height={value.fields.image.fields.file.details.image.height}
          />
        </div>
      ))}
    </section>
  )
}

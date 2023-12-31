import Image from 'next/image'
import style from './style.module.css'
import { LinkedinValues } from './types'
import { Tables } from '@/app/protocols'

interface LinkedinProps {
  values: Tables<LinkedinValues>[]
}

export const SessionLinkedin: React.FC<LinkedinProps> = async ({ values }) => {
  const description = values[0].fields.description.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )

  return (
    <section id="contato">
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
                __html: description,
              }}
            />
            <div className={style.link}>
              <a
                href={value.fields.linkLinkedIn}
                className={style.link_linkedin}
                target="_blank"
                rel="noopener"
              >
                {value.fields.buttonText}
              </a>
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

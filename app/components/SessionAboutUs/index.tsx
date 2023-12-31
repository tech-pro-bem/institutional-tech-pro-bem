import React from 'react'
import styles from './style.module.css'
import { AboutValues } from './types'
import { Tables } from '@/app/protocols'

interface OurValuesProps {
  values: Tables<AboutValues>[]
}

export const SessionAboutUs: React.FC<OurValuesProps> = async ({ values }) => {
  const paragraphs = values[0].fields.about.split('\n')
  const howItWorks = values[0].fields.howItWorks.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )
  return (
    <section className={styles.about}>
      {values.map((value: Tables<AboutValues>) => (
        <div
          className={`${styles.layout_about} container`}
          key={value.fields.id}
        >
          <h2 className={`${styles.title_about} title`}>
            {value.fields.titleAbout}
          </h2>
          <div className={styles.text}>
            <div className={styles.text__block_1}>
              {paragraphs.map((value: string, index: number) => (
                <p key={index} className="regular-text">
                  {value}
                </p>
              ))}
            </div>
            <div className={styles.text__block_2}>
              <h3 className="title title--small">
                {value.fields.titleHowItWorks}
              </h3>
              <p
                className="regular-text"
                dangerouslySetInnerHTML={{
                  __html: howItWorks,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

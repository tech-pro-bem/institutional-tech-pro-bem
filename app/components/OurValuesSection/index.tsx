import { Tables } from '@/app/protocols'
import Image from 'next/image'

import style from './style.module.css'
import { Values, ValuesContent } from './types'

interface OurValuesProps {
  values: Tables<ValuesContent>[]
}

export const OurValues: React.FC<OurValuesProps> = async ({ values }) => {
  const content = values[0]
  const contentValues = content.fields.values
  return (
    <section className={`${style.main_box} container`}>
      <h3 className={`title title--small ${style.title}`}>
        {content.fields.title}
      </h3>
      <div className={style.values_content}>
        {contentValues?.map((value: Tables<Values>) => (
          <div key={value.fields.title} className={style.value}>
            <Image
              className={style.value_image}
              src={`https:${value.fields.symbol.fields.file.url}`}
              alt={value.fields.title}
              width={value.fields.symbol.fields.file.details.image.width}
              height={value.fields.symbol.fields.file.details.image.height}
            ></Image>
            <h4 className={`title title--extra-small ${style.value_text}`}>
              {value.fields.title}
            </h4>
            <span className="regular-text-static">
              {value.fields.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

import { Tables } from '@/app/protocols'
import style from './style.module.css'
import { Impact, ImpactContent } from './types'

interface OurImpactProps {
  values: Tables<ImpactContent>[]
}

export const OurImpact: React.FC<OurImpactProps> = async ({ values }) => {
  const content = values[0]
  const contentValues = content.fields.values
  return (
    <section id="impact" className={` ${style.impact__box} container`}>
      <h2 className={`title ${style.impact__title}`}>{content.fields.title}</h2>
      <ul className={style.impact__item}>
        {contentValues?.map((value: Tables<Impact>) => (
          <li key={value.fields.impact} className={style.impact}>
            <h3 className={`title--big`}>{value.fields.result}</h3>
            <p className={`regular-text`}>{value.fields.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

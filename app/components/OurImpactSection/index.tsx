import { Tables } from '@/app/protocols'
import style from './style.module.css'

export interface Impact {
  result: string
  description: string
}

interface OurImpactProps {
  values: Tables<Impact>[]
}

export const OurImpact: React.FC<OurImpactProps> = async ({ values }) => {
  return (
    <section id="impact" className={` ${style.main_box_impact} container`}>
      <h2 className={`title ${style.title_impact}`}>Nosso Impacto</h2>
      <div className={style.impact_box}>
        {values?.map((value: Tables<Impact>) => (
          <div key={value.fields.impact} className={style.impact}>
            <h1 className={`title--big`}>{value.fields.result}</h1>
            <p className={`regular-text`}>{value.fields.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

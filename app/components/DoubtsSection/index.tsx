'use client'
import React, { useState } from 'react'
import style from './style.module.css'
import { Tables } from '@/app/protocols'
import { DoubtsContentType, DoubtsType } from './types'
import { Tab, Tabs } from '@mui/material'
import { FAQAccordionSummary } from './accordionSummary'

interface DoubtsProps {
  values: Tables<DoubtsType>[]
  content: Tables<DoubtsContentType>[]
}

export const DoubtsSection: React.FC<DoubtsProps> = ({ values, content }) => {
  const [value, setValue] = useState<number>(0)
  const [FAQ, setFAQ] = useState(values[0].fields.faq)
  const [expandedAccordions, setExpandedAccordions] = useState({})
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setExpandedAccordions({})
    setValue(newValue)
  }
  const doubtsContent = content[0]

  return (
    <section id="dúvidas" className={`container ${style.doubts__section}`}>
      <h2 className={`title ${style.doubts__title}`}>
        {doubtsContent.fields.title}
      </h2>
      <h4 className={`title--extra-small ${style.doubts__description}`}>
        {doubtsContent.fields.description}
      </h4>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: '#8742ff' } }}
        className={style.tabs__box}
      >
        {values.map((i: Tables<DoubtsType>) => (
          <Tab
            key={i.fields.category}
            label={i.fields.category}
            className={`${style.tab__box} regular-text`}
            sx={{
              textTransform: 'none',
              fontSize: 'none',
              fontFamily: 'none',
              height: 'none',
              width: 'none',
              '&.Mui-selected': { color: '#8742ff' },
            }}
            onClick={() => setFAQ(i.fields.faq)}
          ></Tab>
        ))}
      </Tabs>
      <FAQAccordionSummary
        item={FAQ}
        expandedAccordions={expandedAccordions}
        setExpandedAccordions={setExpandedAccordions}
      />
    </section>
  )
}

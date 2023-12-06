import { Tables } from '@/app/protocols'
import React from 'react'
import { FAQType } from './types'
import { Accordion, AccordionSummary } from '@mui/material'
import style from './accordionSummary.module.css'
import { ExpandMore } from '@mui/icons-material'
import { FAQAccordionDetails } from './accordionDetails'

export const FAQAccordionSummary: React.FC<{
  item: Tables<FAQType>[]
  expandedAccordions: { [key: string]: boolean }
  setExpandedAccordions: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >
}> = ({ item, expandedAccordions, setExpandedAccordions }) => {
  const handleAccordionChange = (question: string) => {
    setExpandedAccordions((prevExpanded) => ({
      ...prevExpanded,
      [question]: !prevExpanded[question],
    }))
  }

  return (
    <>
      {item.map((i) => (
        <Accordion
          key={i.fields.question}
          disableGutters={true}
          expanded={expandedAccordions[i.fields.question] || false}
          onChange={() => handleAccordionChange(i.fields.question)}
          className={`${style.accordion__box}`}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMore
                className={style.expand__icon}
                sx={{ color: '#030302', fontSize: '1.5rem' }}
              />
            }
            className={`${
              expandedAccordions[i.fields.question]
                ? 'regular-text'
                : 'regular-text--small'
            }
              ${style.accordion_summary__box}
              `}
          >
            <span className={style.question__box}>
              {expandedAccordions[i.fields.question] ? (
                <strong>{i.fields.question}</strong>
              ) : (
                i.fields.question
              )}
            </span>
          </AccordionSummary>
          <FAQAccordionDetails answer={i.fields.answer} />
        </Accordion>
      ))}
    </>
  )
}

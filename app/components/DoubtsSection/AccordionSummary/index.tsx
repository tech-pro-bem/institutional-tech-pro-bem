import { Tables } from '@/app/protocols'
import React from 'react'
import { FAQType } from '../types'
import { Accordion, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { FAQAccordionDetails } from '../AccordionDetails'
import style from './style.module.css'

export const FAQAccordionSummary: React.FC<{
  item: Tables<FAQType>[]
  expandedAccordions: { [key: string]: boolean }
  setExpandedAccordions: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >
}> = ({ item, expandedAccordions, setExpandedAccordions }) => {
  const handleAccordionChange = (question: string) => {
    setExpandedAccordions((prevExpanded) => ({
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
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          data-cy="accordion"
        >
          <AccordionSummary
            expandIcon={
              <ExpandMore
                className={style.expand__icon}
                sx={{ color: '#030302', fontSize: '1.5rem' }}
                data-cy="expand_icon"
              />
            }
            className={style.accordion_summary__box}
            data-cy="accordion_summary"
          >
            <span className={`regular-text ${style.question__box}`}>
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

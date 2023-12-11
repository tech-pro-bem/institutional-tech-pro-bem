import React from 'react'
import { AccordionDetails } from '@mui/material'
import style from './accordionDetails.module.css'

export const FAQAccordionDetails: React.FC<{ answer: string }> = ({
  answer,
}) => {
  const answers = answer.split('\n')
  const numberOrHyphen = /^[\d-]/
  const hyphen = /^-/

  const isNumberOrHyphen = (text: string): boolean => {
    return numberOrHyphen.test(text)
  }
  const isHyphen = (text: string): boolean => {
    return hyphen.test(text)
  }

  function renderElement(match: string): JSX.Element {
    if (match.startsWith('__') && match.endsWith('__')) {
      return <strong>{match.slice(2, -2)}</strong>
    } else if (match.startsWith('*') && match.endsWith('*')) {
      return <em>{match.slice(1, -1)}</em>
    } else if (match.startsWith('~~') && match.endsWith('~~')) {
      const link = match.slice(2, -2)
      return (
        <a href={link} target="_blank" className={style.link__underline}>
          {link}
        </a>
      )
    }
    return <>{match}</>
  }

  return (
    <AccordionDetails
      className={`regular-text--small ${style.accordion_details__box}`}
      data-cy="accordion_details"
    >
      {answers.map((i, index) => (
        <p
          key={index}
          className={`${
            isNumberOrHyphen(i)
              ? style.text__number
              : isHyphen(answers[index - 1])
              ? style.text__hyphen
              : i === answers[answers.length - 2]
              ? style.text__no_margin
              : style.text__normal
          }`}
        >
          {i.split(/(__.*?__|\*.*?\*|~~.*?~~)/g).map((segment, idx) => (
            <React.Fragment key={idx}>{renderElement(segment)}</React.Fragment>
          ))}
        </p>
      ))}
    </AccordionDetails>
  )
}

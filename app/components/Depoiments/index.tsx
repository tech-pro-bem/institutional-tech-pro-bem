import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

import imgVoluntario from '../../../public/voluntario.png'

export const Depoiments = () => {
  return (
    <section className={`${style.depoiments}`}>
      <div className="container">
        <h1 className={`title ${style.title}`}>Depoimentos</h1>
        <h2 className="title-small">
          O que os voluntários que passaram pela Tech Pro Bem estão falando
        </h2>
        <div className={style.grid}>
          <div className={style.card}>
            <Image src={imgVoluntario} alt="imagem do voluntario" />
            <p className="text2">Mirelle Lucena</p>
            <p className={`text2 ${style.department}`}>Product Owner</p>
            <p className={`regular-text ${style.text_depoiment}`}>
              “Ingressar na Tech Pro Bem foi um divisor de águas para mim. O
              voluntariado surgiu em um momento que estava precisando{' '}
              <strong>
                colocar muito do que tinha de conhecimento teórico em prática,
              </strong>{' '}
              estava buscando uma oportunidade para melhorar minha comunicação
              em time e ter cases práticos. Foi um estímulo e um motivador
              enquanto ainda não estava inserida no mercado de trabalho.”
            </p>
          </div>
          <div className={style.card}>
            <Image src={imgVoluntario} alt="imagem do voluntario" />
            <p className="text2">Mirelle Lucena</p>
            <p className={`text2 ${style.department}`}>Product Owner</p>
            <p className={`regular-text ${style.text_depoiment}`}>
              “Ingressar na Tech Pro Bem foi um divisor de águas para mim. O
              voluntariado surgiu em um momento que estava precisando{' '}
              <strong>
                colocar muito do que tinha de conhecimento teórico em prática,
              </strong>{' '}
              estava buscando uma oportunidade para melhorar minha comunicação
              em time e ter cases práticos. Foi um estímulo e um motivador
              enquanto ainda não estava inserida no mercado de trabalho.”
            </p>
          </div>
          <div className={style.card}>
            <Image src={imgVoluntario} alt="imagem do voluntario" />
            <p className="text2">Mirelle Lucena</p>
            <p className={`text2 ${style.department}`}>Product Owner</p>
            <p className={`regular-text ${style.text_depoiment}`}>
              “Ingressar na Tech Pro Bem foi um divisor de águas para mim. O
              voluntariado surgiu em um momento que estava precisando{' '}
              <strong>
                colocar muito do que tinha de conhecimento teórico em prática,
              </strong>{' '}
              estava buscando uma oportunidade para melhorar minha comunicação
              em time e ter cases práticos. Foi um estímulo e um motivador
              enquanto ainda não estava inserida no mercado de trabalho.”
            </p>
          </div>
          <div className={style.card}>
            <Image src={imgVoluntario} alt="imagem do voluntario" />
            <p className="text2">Mirelle Lucena</p>
            <p className={`text2 ${style.department}`}>Product Owner</p>
            <p className={`regular-text ${style.text_depoiment}`}>
              “Ingressar na Tech Pro Bem foi um divisor de águas para mim. O
              voluntariado surgiu em um momento que estava precisando{' '}
              <strong>
                colocar muito do que tinha de conhecimento teórico em prática,
              </strong>{' '}
              estava buscando uma oportunidade para melhorar minha comunicação
              em time e ter cases práticos. Foi um estímulo e um motivador
              enquanto ainda não estava inserida no mercado de trabalho.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

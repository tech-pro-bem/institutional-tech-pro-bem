import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

import imgVoluntario from '../../../public/voluntario.png'
import logo from '../../../public/logo1.svg'

export const DepoimentsV1 = () => {
  return (
    <section className={`${style.depoiments}`}>
      <div className="container">
        <h1 className={`title ${style.title}`}>Depoimentos Versão 1</h1>
        <div className={style.grid}>
          <div className={style.card}>
            <p className="regular-text">
              “Ingressar na Tech Pro Bem foi um divisor de águas para mim. O
              voluntariado surgiu em um momento que estava precisando{' '}
              <strong>
                colocar muito do que tinha de conhecimento teórico em prática,
              </strong>{' '}
              estava buscando uma oportunidade para melhorar minha comunicação
              em time e ter cases práticos. Foi um estímulo e um motivador
              enquanto ainda não estava inserida no mercado de trabalho.”
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <p className="text2">Mirelle Lucena</p>
              <p className={`text2 ${style.department}`}>Product Owner</p>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              “O trabalho voluntário na Tech Pro Bem está sendo enriquecedor por
              me permitir colocar em prática os estudos em UX/UI Design,
              trabalhar em equipe e ainda ajudar projetos sociais incriveis.
              <strong>
                {' '}
                Considero uma etapa fundamental na minha transição de carreira e
                também no meu crescimento pessoal.{' '}
              </strong>
              Juntos, unimos forças e fazemos o bem!”
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <p className="text2">Mirelle Lucena</p>
              <p className={`text2 ${style.department}`}>Product Owner</p>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              “A Tech contribuiu para que meu conhecimento teórico se
              transformasse em prática.
              <strong>
                Pude ter contato com uma equipe real e com profissionais da área{' '}
              </strong>
              ao atuar num time ágil como QA Jr voluntária. Desenvolvi muito
              minhas habilidades analíticas e de comunicação. Sou muito grata a
              toda equipe por me proporcionar crescer como pessoa e como
              profissional. Estou muito feliz e grata por todo aprendizado.” .”
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <p className="text2">Mirelle Lucena</p>
              <p className={`text2 ${style.department}`}>Product Owner</p>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              “Ser voluntário na Tech Pro Bem é um aprendizado incomparável!
              <strong>Nenhum curso no mundo supera essa experiência</strong>
              .”
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <p className="text2">Mirelle Lucena</p>
              <p className={`text2 ${style.department}`}>Product Owner</p>
            </div>
          </div>
          <div className={style.card}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

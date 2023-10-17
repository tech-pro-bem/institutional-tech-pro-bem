import React from 'react'
import styles from './style.module.css'

export function QuemSomos() {
  return (
    <section className={styles.quemsomos}>
      <div className={`${styles.container} container`}>
        <h2 className="h2">Quem somos</h2>
        <p className="body1">
          A Tech Pro Bem é uma comunidade de tecnologia onde conectamos
          profissionais de diferentes áreas para criar soluções digitais para
          ONGs e projetos sociais.
        </p>
        <p className="body1">
          Oferecemos uma experiência prática com time multidisciplinar, onde
          temos o objetivo de impulsionar o aprendizado das competências
          necessárias para superar desafios de entrada ou de crescimento no
          mercado de trabalho.
        </p>

        <h3 className="h4">Como funciona?</h3>
        <p className="body1">
          Selecionamos uma organização sem fins lucrativos que entrou em contato
          conosco e passou por um alinhamento de objetivos e expectativas. A
          cada ciclo realizamos um processo seletivo para formar nossas equipes
          com Agilistas, Product Owners, UX/UI Designers, UX Writers,
          Desenvolvedores, Analistas de Qualidade e Recursos Humanos. Todos os
          times possuem três níveis de senioridade profissional: júnior, líder e
          pessoa mentora.
        </p>
      </div>
    </section>
  )
}

import React from 'react'
import styles from './style.module.css'

export function SessionAboutUs() {
  return (
    <section className={styles.about}>
      <div className={`${styles.layout_about} container`}>
        <h2 className="h2">Quem somos</h2>
        <div className={styles.text}>
          <div className={styles.right}>
            <p className="body1">
              A Tech Pro Bem é uma comunidade de tecnologia onde conectamos
              profissionais de diferentes áreas para criar soluções digitais
              para ONGs e projetos sociais.
            </p>
            <p className="body1">
              Oferecemos experiência prática em um time multidisciplinar, com o
              objetivo de impulsionar o aprendizado das competências necessárias
              para superar desafios de entrada ou de crescimento no mercado de
              trabalho.
            </p>
          </div>
          <div className={styles.left}>
            <h3 className="h3">Como funciona?</h3>
            <p className="body1">
              Selecionamos uma organização sem fins lucrativos que entrou em
              contato conosco e passou por um alinhamento de objetivos e
              expectativas. A cada ciclo realizamos um processo seletivo para
              formar nossas equipes com{' '}
              <b>
                Agilistas, Product Owners, UX/UI Designers, UX Writers,
                Desenvolvedores, Analistas de Qualidade e Recursos Humanos.
              </b>{' '}
              Todos os times possuem três níveis de senioridade profissional:
              júnior, líder e pessoa mentora.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

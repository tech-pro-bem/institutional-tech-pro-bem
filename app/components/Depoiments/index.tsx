'use client'

// import style from './style.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import imgVoluntario from '../../../public/voluntario.png'
import style from './style.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const conteudo = [
  {
    id: 1,
    nome: 'nome1',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
  {
    id: 2,
    nome: 'nome2',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
  {
    id: 3,
    nome: 'nome3',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
]

export const Depoiments = () => {
  return (
    <Swiper
      slidesPerView={2}
      // centeredSlides={true}
      spaceBetween={30}
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={style.swiper}
    >
      {conteudo.map((depos) => (
        <SwiperSlide key={depos.id} className={style.slide}>
          <div className={style.slide2}>
            <div className={style.card}>
              <Image src={imgVoluntario} alt="teste"></Image>
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
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

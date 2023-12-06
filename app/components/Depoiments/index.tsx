'use client'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import imgVoluntario from '../../../public/voluntario.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

register()

const conteudo = [
  {
    id: 1,
    nome: 'nome',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
  {
    id: 2,
    nome: 'nome',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
  {
    id: 3,
    nome: 'nome',
    cargo: 'cargo',
    image: '../../../public/voluntario.png',
    depoimento: 'texto do depoimento',
  },
]

export const Depoiments = () => {
  return (
    <div>
      <h1>Carousel com Slider do Material-UI em Next.js</h1>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {conteudo.map((depos) => (
          <SwiperSlide key={depos.id}>
            <h1>{depos.nome}</h1>
            <h2>{depos.cargo}</h2>
            <Image src={imgVoluntario} alt="teste" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

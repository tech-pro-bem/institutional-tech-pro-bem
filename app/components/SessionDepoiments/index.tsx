'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import './swiper.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Card } from './Card'
import { Tables } from '@/app/protocols'
import { testimonialsContentType, testimonialsType } from './types'

interface DepoimentsProps {
  content: Tables<testimonialsContentType>[]
  values: Tables<testimonialsType>[]
}

export const Depoiments: React.FC<DepoimentsProps> = ({ content, values }) => {
  const testimonialsContent = content[0].fields
  const [slidePerView, setSlidePerView] = useState(3)
  const [showNavigation, setShowNavigation] = useState(true)
  const [space, setSpace] = useState(80)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidePerView(1)
      setShowNavigation(false)
      setSpace(80)
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setSlidePerView(2)
      setShowNavigation(true)
      setSpace(40)
    }
    if (window.innerWidth >= 1280) {
      setSlidePerView(3)
      setShowNavigation(true)
      setSpace(80)
    }
  }

  useEffect(() => {
    // Chama a função de redimensionamento ao carregar a página
    handleResize()

    // Adiciona o event listener para redimensionamento
    window.addEventListener('resize', handleResize)

    // Retorna uma função de limpeza para remover o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section className={style.depoiments}>
      <h1 className={`title ${style.title}`}>{testimonialsContent.title}</h1>
      <h2 className={`title--extra-small`}>
        {testimonialsContent.description}
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={showNavigation}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        centeredSlides={true} // Define centeredSlides como true para centralizar os slides
        spaceBetween={space} // Espaço entre os slides (opcional)
        slidesPerView={slidePerView} // Quantidade de slides visíveis ao mesmo tempo
        pagination={{ clickable: true }} // Configuração da paginação (opcional)
        loop={true} // Define o loop como verdadeiro para tornar o Swiper infinito
        initialSlide={0} // Define o slide inicial como o segundo slide (índice 1)
        className={style.swiper__slide}
      >
        <div className={style.left}></div>
        <div className={style.right}></div>
        {values.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              depoiment={item.fields}
              quotationMark={testimonialsContent.quotationMark}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Depoiments

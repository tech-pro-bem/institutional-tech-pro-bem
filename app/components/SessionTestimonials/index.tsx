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

interface TestimonialsProps {
  values: Tables<testimonialsContentType>[]
}

export const Testimonials: React.FC<TestimonialsProps> = ({ values }) => {
  const testimonialsContent = values[0].fields
  const [slidePerView, setSlidePerView] = useState(4)
  const [showNavigation, setShowNavigation] = useState(true)
  const [space, setSpace] = useState(80)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidePerView(1)
      setShowNavigation(false)
      setSpace(30)
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setSlidePerView(2)
      setShowNavigation(true)
      setSpace(40)
    }
    if (window.innerWidth >= 1280) {
      setSlidePerView(3)
      setShowNavigation(true)
      setSpace(40)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section className={style.testimonials}>
      <h2 className={`title ${style.title}`}>{testimonialsContent.title}</h2>
      <h3 className={`title--extra-small`}>
        {testimonialsContent.description}
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={showNavigation}
        centeredSlides={true}
        spaceBetween={space}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        loop={true}
        initialSlide={0.5}
        className={style.swiper__slide}
      >
        <div className={style.left}></div>
        <div className={style.right}></div>
        {testimonialsContent.testimonials.map(
          (item: Tables<testimonialsType>, index: number) => (
            <SwiperSlide key={index}>
              <Card
                testimonial={item.fields}
                quotationMark={testimonialsContent.quotationMark}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  )
}

export default Testimonials

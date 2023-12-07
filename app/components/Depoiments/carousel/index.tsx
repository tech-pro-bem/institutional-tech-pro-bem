'use client'

import { useState } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import imgVoluntario from '../../../../public/voluntario.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Card } from './card'

interface CardData {
  nome: string
  cargo: string
  depoimento: string
}

interface CarouselProps {
  items: CardData[] // Substitua pelo tipo dos itens que deseja exibir no carousel
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  console.log(items[1])
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevIndex = (currentIndex - 1 + items.length) % items.length
  const nextIndex = (currentIndex + 1) % items.length

  const handlePrev = () => setCurrentIndex(prevIndex)
  const handleNext = () => setCurrentIndex(nextIndex)

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={`container ${styles.section}`}>
      <div className={styles.carousel}>
        <Card
          depoiment={items[(currentIndex - 1 + items.length) % items.length]}
        />
        <div className={styles.previewItem}>
          <p onClick={handlePrev}>
            <ArrowBackIosIcon style={{ color: '#bdbab9' }} />
          </p>
        </div>
        <Card depoiment={items[currentIndex]} />
        <div className={styles.previewItem}>
          <p onClick={handleNext}>
            <ArrowForwardIosIcon style={{ color: '#bdbab9' }} />
          </p>
        </div>
        <Card depoiment={items[(currentIndex + 1) % items.length]} />
      </div>
      <div className={styles.pagination}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ''
            }`}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

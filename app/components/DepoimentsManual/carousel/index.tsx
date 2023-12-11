'use client'

import { useState } from 'react'
import styles from './style.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Card } from './card'

interface CardData {
  nome: string
  cargo: string
  depoimento: string
}

interface CarouselProps {
  items: CardData[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevIndex = (currentIndex - 1 + items.length) % items.length
  const nextIndex = (currentIndex + 1) % items.length

  const handlePrev = () => setCurrentIndex(prevIndex)
  const handleNext = () => setCurrentIndex(nextIndex)

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className={`${styles.depoiments}`}>
      <div className="container">
        <h1 className={`title ${styles.title}`}>
          Depoimentos versão carousel manual
        </h1>
        <div className={styles.carousel}>
          <div className={styles.mobile_hidden}>
            <Card
              depoiment={
                items[(currentIndex - 1 + items.length) % items.length]
              }
              className={
                currentIndex !== prevIndex ? styles['slide-in-left'] : ''
              }
            />
          </div>
          <div className={styles.previewItem}>
            <p onClick={handlePrev}>
              <ArrowBackIosIcon style={{ color: '#bdbab9' }} />
            </p>
          </div>
          <Card
            depoiment={items[currentIndex]}
            className={
              currentIndex !== prevIndex && currentIndex !== nextIndex
                ? styles['slide-in-right']
                : ''
            }
          />
          <div className={styles.previewItem}>
            <p onClick={handleNext}>
              <ArrowForwardIosIcon style={{ color: '#bdbab9' }} />
            </p>
          </div>
          <div className={styles.mobile_hidden}>
            <Card
              depoiment={items[(currentIndex + 1) % items.length]}
              className={
                currentIndex !== nextIndex ? styles['slide-in-right'] : ''
              }
            />
          </div>
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
    </section>
  )
}

export default Carousel

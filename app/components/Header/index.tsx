'use client'

import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import logo from '../../../public/logo1.svg'
import { useObserver } from '@/app/utils/useObserver'

export function Header() {
  const sections = [
    {
      id: 'inicio',
      text: 'Início',
    },
    {
      id: 'duvidas',
      text: 'Dúvidas',
    },
    {
      id: 'acompanhe',
      text: 'Acompanhe',
    },
    {
      id: 'contato',
      text: 'Contato',
    },
  ]

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [headerHeight, setHeaderHeight] = useState<number>(64)
  const [hasShadow, setHasShadow] = useState<boolean>(false)
  const { activeId } = useObserver('section')
  console.log(activeId)

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('#header')
      if (headerElement) {
        setHeaderHeight(headerElement.clientHeight)
      }
    }

    updateHeaderHeight()
  })

  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > 0) {
        setHasShadow(true)
      } else {
        setHasShadow(false)
      }
    }

    window.addEventListener('scroll', checkScroll)

    checkScroll()

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <>
      <header
        id="header"
        className={`${styles.header} ${hasShadow ? styles.hasShadow : ''}`}
      >
        <div className={styles.headerContainer}>
          <Link className={styles.logo} href="/">
            <Image
              className={styles.logo}
              src={logo}
              alt="Logo da Tech Pro Bem"
            />
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            type="button"
          >
            <div
              className={`${styles.hamburguerIcon} ${
                isMenuOpened ? styles.closeIcon : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <nav
            className={`${styles.navbar} ${isMenuOpened ? styles.open : ''}`}
          >
            <ul className="body1">
              {sections.map((section) => {
                return (
                  <li key={section.id}>
                    <Link href={`#${section.id}`}>{section.text}</Link>
                  </li>
                )
              })}
            </ul>

            {isMenuOpened && <div className={styles.opacityMenu}></div>}
          </nav>
        </div>
      </header>
      <div style={{ marginBottom: `${headerHeight}px` }}></div>
    </>
  )
}

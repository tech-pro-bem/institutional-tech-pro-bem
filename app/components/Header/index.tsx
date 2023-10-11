'use client'

import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'

import logo from '../../../public/logo1.svg'
import { useObserver } from '@/app/utils/useObserver'

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
export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [headerHeight, setHeaderHeight] = useState<number>(6)
  const [hasShadow, setHasShadow] = useState<boolean>(false)
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0)
  const [indicatorLeft, setIndicatorLeft] = useState<number>(0)

  const resizeTimeoutRef = useRef<number | null>(null)
  const { activeId } = useObserver('section', headerHeight)

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

  useEffect(() => {
    const actualActiveLink = sections.find((section) => section.id === activeId)

    if (actualActiveLink) {
      const activeElement: HTMLLIElement | null = document.querySelector(
        `[data-id=${actualActiveLink.id}]`,
      )

      if (activeElement) {
        setIndicatorLeft(activeElement.offsetLeft)
        setIndicatorWidth(activeElement.clientWidth)
      }
    }
  }, [activeId])

  useEffect(() => {
    function handleResize() {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        const actualActiveLink = sections.find(
          (section) => section.id === activeId,
        )

        if (actualActiveLink) {
          const activeElement: HTMLLIElement | null = document.querySelector(
            `[data-id=${actualActiveLink.id}]`,
          )

          if (activeElement) {
            setIndicatorLeft(activeElement.offsetLeft)
            setIndicatorWidth(activeElement.clientWidth)
          }
        }
      }, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeId])

  function handleLinkClick(
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) {
    setIsMenuOpened(false)
    const liElement: Element | null = e.currentTarget.offsetParent

    if (liElement instanceof HTMLLIElement) {
      setIndicatorLeft(liElement.offsetLeft)
      setIndicatorWidth(liElement.clientWidth)
      document.querySelector(`#${sectionId}`)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

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
                  <li
                    key={section.id}
                    data-id={section.id}
                    className={section.id === activeId ? styles.activeLink : ''}
                  >
                    <Link
                      href={`#${section.id}`}
                      scroll={false}
                      onClick={(e) => {
                        handleLinkClick(e, section.id)
                      }}
                    >
                      <span>{section.text}</span>
                    </Link>
                  </li>
                )
              })}

              <div
                className={styles.indicator}
                style={{
                  width: `${indicatorWidth}px`,
                  left: `${indicatorLeft}px`,
                }}
              ></div>
            </ul>

            {isMenuOpened && (
              <div
                onClick={() => setIsMenuOpened(!isMenuOpened)}
                className={styles.opacityMenu}
              ></div>
            )}
          </nav>
        </div>
      </header>
    </>
  )
}

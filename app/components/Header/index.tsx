'use client'

import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'

import logo from '../../../public/logo1.svg'
import { useObserver } from '@/app/utils/useObserver'

const sections = ['Início', 'Dúvidas', 'Acompanhe', 'Contato']

export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [hasShadow, setHasShadow] = useState<boolean>(false)
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0)
  const [indicatorLeft, setIndicatorLeft] = useState<number>(0)

  const resizeTimeoutRef = useRef<number | null>(null)
  const scrollTimeoutRef = useRef<number | null>(null)
  const { activeId } = useObserver('section')

  function idFactory(string: string) {
    const normalizedText = string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const lowercaseText = normalizedText.toLowerCase()

    return lowercaseText
  }

  useEffect(() => {
    function checkScroll() {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        if (window.scrollY > 0) {
          setHasShadow(true)
        } else {
          setHasShadow(false)
        }
      }, 100)
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  useEffect(() => {
    const actualActiveLink = sections.find(
      (section) => idFactory(section) === activeId,
    )

    if (actualActiveLink) {
      const activeElement: HTMLLIElement | null = document.querySelector(
        `[data-id=${idFactory(actualActiveLink)}]`,
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
          (section) => idFactory(section) === activeId,
        )

        if (actualActiveLink) {
          const activeElement: HTMLLIElement | null = document.querySelector(
            `[data-id=${idFactory(actualActiveLink)}]`,
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
                    key={idFactory(section)}
                    data-id={idFactory(section)}
                    className={
                      idFactory(section) === activeId ? styles.activeLink : ''
                    }
                  >
                    <Link
                      href={`#${idFactory(section)}`}
                      scroll={false}
                      onClick={(e) => {
                        handleLinkClick(e, idFactory(section))
                      }}
                    >
                      <span>{section}</span>
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

'use client'

import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import logo from '../../../public/logo1.svg'
import { useObserver } from './useObserver'
import { idFactory } from '@/app/utils/idFactory'

const sections = ['Início', 'Dúvidas', 'Acompanhe', 'Contato']

export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [hasShadow, setHasShadow] = useState<boolean>(false)
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0)
  const [indicatorLeft, setIndicatorLeft] = useState<number>(0)

  const resizeTimeoutRef = useRef<number | null>(null)
  const scrollTimeoutRef = useRef<number | null>(null)
  const ulRef = useRef<HTMLUListElement | null>(null)

  const sectionsWithHash = sections.map((section) => `#${idFactory(section)}`)
  const { activeId } = useObserver(sectionsWithHash.join(', '))

  // This useEffect checks if the user has scrolled the page and sets the
  // hasShadow state to true to add a shadow to the header. The shadow stays as
  // long as the user is scrolled below the top of the page.
  useEffect(() => {
    // Inside the function, a debounce technique is used to avoid triggering the
    // function too many times and affecting performance. The function is
    // executed 100 milliseconds after the user has stopped scrolling to avoid
    // taking too long for the shadow to appear. This value is generally used
    // for scroll debounces found in online examples.

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
    const currentActiveLink = sections.find(
      (section) => idFactory(section) === activeId,
    )

    if (!(currentActiveLink && ulRef.current)) {
      return
    }

    ulRef.current.childNodes.forEach((liElement) => {
      if (!(liElement instanceof HTMLLIElement)) {
        return
      }

      if (liElement.dataset.id === idFactory(currentActiveLink)) {
        setIndicatorLeft(liElement.offsetLeft)
        setIndicatorWidth(liElement.clientWidth)
      }
    })
  }, [activeId])

  useEffect(() => {
    function handleResize() {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        const currentActiveLink = sections.find(
          (section) => idFactory(section) === activeId,
        )

        if (!(currentActiveLink && ulRef.current)) {
          return
        }

        ulRef.current.childNodes.forEach((liElement) => {
          if (!(liElement instanceof HTMLLIElement)) {
            return
          }

          if (liElement.dataset.id === idFactory(currentActiveLink)) {
            setIndicatorLeft(liElement.offsetLeft)
            setIndicatorWidth(liElement.clientWidth)
          }
        })
      }, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeId])

  return (
    <>
      <header
        className={`${styles.header} ${hasShadow ? styles.hasShadow : ''}`}
      >
        <div className={`container ${styles.headerContainer}`}>
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
            aria-expanded={isMenuOpened ? 'true' : 'false'}
            aria-controls="menu"
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
            id="menu"
            className={`${styles.navbar} ${isMenuOpened ? styles.open : ''}`}
          >
            <ul ref={ulRef} className="body1">
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
                      onClick={() => setIsMenuOpened(false)}
                      tabIndex={isMenuOpened ? 0 : -1}
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
                onClick={() => setIsMenuOpened(false)}
                className={styles.opacityMenu}
              ></div>
            )}
          </nav>
        </div>
      </header>
    </>
  )
}

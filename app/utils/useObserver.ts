import { useEffect, useRef, useState } from 'react'

export function useObserver(observableTarget: string, headerHeight: number) {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    })

    const elements = document.querySelectorAll(observableTarget)
    elements.forEach((element) => {
      if (observer.current) {
        observer.current.observe(element)
      }
      if (element instanceof HTMLElement) {
        element.style.scrollMarginTop = `${headerHeight}px`
      }
    })

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [observableTarget, headerHeight])

  return { activeId }
}

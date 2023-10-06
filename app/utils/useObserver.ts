import { useEffect, useRef, useState } from 'react'

export function useObserver(observableTarget: string) {
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

    const sectionElements = document.querySelectorAll(observableTarget)
    sectionElements.forEach((element) => {
      if (observer.current) {
        observer.current.observe(element)
      }
    })

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [observableTarget])

  return { activeId }
}

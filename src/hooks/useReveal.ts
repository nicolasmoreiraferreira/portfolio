import { useEffect, useRef, useState } from 'react'

/**
 * Revela um elemento quando ele entra na viewport.
 *
 * O estado inicial já nasce "visível" quando o navegador não suporta
 * IntersectionObserver, o que evita qualquer atualização de estado
 * dentro do efeito. O respeito a `prefers-reduced-motion` é feito no CSS.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

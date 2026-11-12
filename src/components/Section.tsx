import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  showHeading?: boolean
}

export default function Section({ id, title, children, showHeading = true }: SectionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const content = contentRef.current
    if (!content || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      content.classList.toggle('opacity-0', !entry.isIntersecting)
      content.classList.toggle('translate-y-8', !entry.isIntersecting)
    }, { rootMargin: '-80px 0px -100px 0px', threshold: 0 })
    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 border-t border-[#304044] py-12 sm:py-16">
      <div ref={contentRef} className="motion-safe:transition-[opacity,transform,translate] motion-safe:duration-1000 motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 focus-within:translate-y-0 focus-within:opacity-100">
        {showHeading && <div className="mb-6"><p className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#70dd99]">~/{id}</p><h2 id={`${id}-title`} className="mt-1 text-2xl font-bold tracking-tight text-[#e9edf0] sm:text-3xl">{title}</h2></div>}
        {children}
      </div>
    </section>
  )
}

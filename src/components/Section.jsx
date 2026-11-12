export default function Section({ id, title, children, className = '' }) {
  return (
    <section className={`scroll-mt-4 border-t border-[#303b54] py-[72px] sm:py-[100px] ${className}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-[35px] flex items-baseline justify-center gap-2.5 sm:mb-[55px]">
        <span className="font-['IBM_Plex_Mono',monospace] text-[27px] font-medium text-[#50e6c8]" aria-hidden="true">/</span>
        <h2 className="font-['IBM_Plex_Mono',monospace] text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.04em] text-[#50e6c8]" id={`${id}-title`}>{title}</h2>
      </div>
      <div className="mx-auto max-w-[900px]">{children}</div>
    </section>
  )
}

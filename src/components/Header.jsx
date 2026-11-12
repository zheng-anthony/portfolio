const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#303a53] bg-[#151a30]/92 backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[76px] w-[calc(100%-40px)] max-w-[1200px] flex-col items-start gap-3.5 py-4 sm:w-[calc(100%-64px)] sm:flex-row sm:items-center sm:justify-between sm:gap-[30px] sm:py-0">
        <a className="whitespace-nowrap font-['IBM_Plex_Mono',monospace] text-[15px] font-semibold no-underline" href="#top" aria-label="Anthony Zheng, back to top"><span className="text-[#50e6c8]">~/</span> anthonyzheng</a>
        <nav className="flex w-full gap-5 overflow-x-auto pb-1 sm:w-auto sm:items-center sm:gap-[30px] sm:overflow-visible sm:pb-0" aria-label="Main navigation">
          {links.map(link => <a className="whitespace-nowrap font-['IBM_Plex_Mono',monospace] text-xs text-[#b2bed0] no-underline hover:text-[#50e6c8] min-[750px]:text-sm" key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
      </div>
    </header>
  )
}

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#29363a] bg-[#0b1315]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
        <a className="whitespace-nowrap text-sm font-bold text-[#e9edf0] no-underline" href="#top"><span className="mr-2 font-mono text-[#70dd99]">&gt;_</span>Anthony Zheng</a>
        <nav className="flex gap-5 overflow-x-auto pb-1 sm:gap-7 sm:pb-0" aria-label="Main navigation">
          {links.map(link => <a className="whitespace-nowrap font-['IBM_Plex_Mono',monospace] text-xs text-[#b0bdc1] no-underline hover:text-[#70dd99]" key={link} href={`#${link.toLowerCase()}`}>~/{link.toLowerCase()}</a>)}
        </nav>
      </div>
    </header>
  )
}

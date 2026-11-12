import Header from './components/Header'
import Section from './components/Section'
import SocialLinks from './components/SocialLinks'
import SkillCard from './components/SkillCard'
import { profile, experience, projects, skills } from './data/portfolio'

const container = 'mx-auto w-[calc(100%-40px)] max-w-[1120px] sm:w-[calc(100%-64px)]'
const panel = 'rounded-md border border-[#303b54] bg-[#1c253d]'

export default function App() {
  return <div className="font-['DM_Sans',sans-serif] text-[#edf1f8]">
    <a className="absolute -top-[100px] left-5 z-[100] bg-[#66efd4] p-3 text-[#10182b] focus:top-2.5" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <div className={container}>
        <section className="flex min-h-[calc(100svh-100px)] flex-col items-center justify-center py-20 text-center sm:min-h-[calc(100svh-76px)] sm:pt-[100px] sm:pb-[90px]" id="top" aria-labelledby="hero-title">
          <p className="mb-[18px] font-['IBM_Plex_Mono',monospace] text-base font-medium text-[#50e6c8]">Hello, I’m</p>
          <h1 className="font-['IBM_Plex_Mono',monospace] text-[clamp(40px,11vw,56px)] leading-[1.08] font-bold tracking-[-0.065em] sm:text-[clamp(52px,8vw,96px)]" id="hero-title">{profile.name}<span className="text-[#50e6c8]">.</span></h1>
          <p className="mt-[22px] max-w-[950px] font-['IBM_Plex_Mono',monospace] text-[23px] leading-[1.35] font-semibold tracking-[-0.04em] text-[#e6ecf6] sm:text-[clamp(23px,3.4vw,38px)]">Software engineer interested in the systems behind the experience.</p>
          <p className="mt-6 max-w-[650px] text-base leading-[1.75] text-[#abb8c9] sm:text-[17px]">Exploring backend engineering, databases, and cloud infrastructure—building the foundations that make software work.</p>
          <SocialLinks profile={profile} />
          <a className="mt-[55px] font-['IBM_Plex_Mono',monospace] text-[13px] font-medium text-[#a7b8c7] no-underline sm:mt-[72px]" href="#about"><span className="mr-2.5 text-xl text-[#50e6c8]" aria-hidden="true">↓</span> Explore my work</a>
        </section>
        <Section id="about" title="About">
          <p className="mb-[18px] max-w-[760px] font-['IBM_Plex_Mono',monospace] text-[clamp(22px,2.6vw,29px)] leading-[1.5] font-semibold tracking-[-0.035em]">I’m a software engineer drawn to what happens behind the scenes.</p>
          <p className="leading-[1.75] text-[#aebccd]">I’m interested in designing reliable backend systems, working with data, and understanding the infrastructure that brings applications to life.</p>
          <div className="mt-[38px] rounded-md border border-[#303c59] bg-[#1b2540] px-7 py-6"><h3 className="font-['IBM_Plex_Mono',monospace] text-base font-semibold text-[#50e6c8]">Education</h3><p className="mt-2 text-[15px] leading-[1.75] text-[#aebccd]">{profile.education}</p></div>
        </Section>
        <Section id="experience" title="Experience">
          <p className="mb-8 text-[15px] leading-[1.75] text-[#aebccd]">A timeline of where I’ve worked and learned.</p>
          <ol className="relative m-0 list-none p-0 before:absolute before:top-0 before:bottom-0 before:left-[7px] before:w-px before:bg-[#59706f] sm:before:left-1/2">{experience.map((item, index) => <li className="relative flex flex-col items-stretch gap-2 pb-7 pl-[30px] last:pb-0 before:absolute before:top-[30px] before:left-[7px] before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-[#50e6c8] before:bg-[#151a30] sm:grid sm:grid-cols-2 sm:items-center sm:gap-[72px] sm:pb-8 sm:pl-0 sm:before:top-1/2 sm:before:left-1/2 sm:even:[&>div]:col-start-2 sm:even:[&>div]:row-start-1 sm:even:[&>span]:col-start-1 sm:even:[&>span]:row-start-1 sm:even:[&>span]:text-right" key={index}><div className={`${panel} p-6`}><h3 className="font-['IBM_Plex_Mono',monospace] text-lg font-semibold">{item.role}</h3><p className="mt-1.5 font-['IBM_Plex_Mono',monospace] text-sm leading-[1.6] text-[#aebccd]">{item.organization}</p></div><span className="order-first mt-1.5 font-['IBM_Plex_Mono',monospace] text-sm leading-[1.6] text-[#50e6c8] sm:order-none">{item.date}</span></li>)}</ol>
        </Section>
        <Section id="projects" title="Projects">
          <p className="mb-8 text-[15px] leading-[1.75] text-[#aebccd]">A selection of things I’ve built.</p>
          <div className="grid gap-4 min-[750px]:grid-cols-3">{projects.map((project, index) => <div className={`${panel} flex min-h-[115px] justify-between gap-2.5 p-6 min-[750px]:min-h-[180px]`} key={index}><div><span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#50e6c8]">{project.type}</span><h3 className="mt-5 font-['IBM_Plex_Mono',monospace] text-lg font-semibold min-[750px]:mt-[42px]">{project.link ? <a className="no-underline" href={project.link}>{project.name}</a> : project.name}</h3></div><span className="text-[19px] text-[#6cdcc8]" aria-hidden="true">↗</span></div>)}</div>
        </Section>
        <Section id="skills" title="Skills">
          <p className="mb-8 text-[15px] leading-[1.75] text-[#aebccd]">The languages and tools I use to build.</p>
          <div className="grid gap-4 sm:grid-cols-2">{skills.map(skill => <SkillCard key={skill.category} {...skill} />)}</div>
        </Section>
        <Section id="contact" title="Contact" className="text-center sm:py-[120px]">
          <p className="mb-4 font-['IBM_Plex_Mono',monospace] text-[clamp(32px,4vw,48px)] leading-[1.2] font-bold tracking-[-0.05em]">Let’s connect.</p><p className="leading-[1.75] text-[#aebccd]">Have a question or an opportunity to share? I’d love to hear from you.</p>
          {profile.email ? <a className="mt-[30px] inline-block rounded border border-[#50e6c8] px-[22px] py-[15px] font-['IBM_Plex_Mono',monospace] text-sm font-medium text-[#50e6c8] no-underline hover:bg-[#243d46]" href={`mailto:${profile.email}`}>Send me an email <span className="ml-1.5" aria-hidden="true">↗</span></a> : <p className="mt-[30px] inline-block font-['IBM_Plex_Mono',monospace] text-sm font-medium text-[#aebccd]">Email address coming soon</p>}
        </Section>
      </div>
    </main>
    <footer className="bg-[#12182b]"><div className={`${container} flex justify-between gap-[15px] py-[25px] font-['IBM_Plex_Mono',monospace] text-xs text-[#a3b1c3]`}><span>© {new Date().getFullYear()} {profile.name}</span><a className="no-underline hover:text-[#50e6c8]" href="#top">Back to top ↑</a></div></footer>
  </div>
}

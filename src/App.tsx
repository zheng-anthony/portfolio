import Header from './components/Header'
import Section from './components/Section'
import SocialLinks from './components/SocialLinks'
import SkillDirectoryCard from './components/SkillDirectoryCard'
import ProfileTerminal from './components/ProfileTerminal'
import { profile, experience, projects, skills } from './data/portfolio'

const container = 'mx-auto w-[calc(100%-40px)] max-w-[1056px] sm:w-[calc(100%-64px)]'

export default function App() {
  return <div className="font-['DM_Sans',sans-serif] text-[#e9edf0]">
    <a className="absolute -top-[100px] left-5 z-[100] bg-[#70dd99] p-3 text-[#0b1315] focus:top-2.5" href="#main">Skip to content</a>
    <Header />
    <main id="main"><div className={container}>
      <section id="top" aria-labelledby="hero-title" className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[1fr_0.8fr] md:gap-16">
        <div>
          <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#b8c6c7]"><span className="text-[#70dd99]">anthonyzheng@portfolio</span>:~$ whoami</p>
          <h1 id="hero-title" className="mt-4 text-[clamp(40px,5vw,62px)] leading-[1.05] font-bold tracking-[-0.05em]">{profile.name}<span className="text-[#70dd99]">_</span></h1>
          <p className="mt-5 max-w-[590px] text-xl leading-[1.45] text-[#e0e7e8]">Software engineer focused on backend systems, databases, and cloud infrastructure.</p>
          <p className="mt-4 max-w-[550px] leading-[1.7] text-[#aebdc0]">Interested in building reliable foundations that help software work well.</p>
          <SocialLinks profile={profile} />
        </div>
        <ProfileTerminal name={profile.name} />
      </section>
      <Section id="about" title="About" showHeading={false}>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#70dd99]">~/about</p>
            <h2 id="about-title" className="mt-1 text-2xl font-bold tracking-tight text-[#e9edf0] sm:text-3xl">About</h2>
            <p className="mt-6 max-w-[65ch] leading-[1.75] text-[#b4c1c3]">I’m a software engineer drawn to what happens behind the scenes. I’m interested in designing reliable backend systems, working with data, and understanding the infrastructure that brings applications to life.</p>
          </div>
          <div>
            <p className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#70dd99]">~/about/education</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#e9edf0] sm:text-3xl">Education</h3>
            <p className="mt-6 leading-[1.75] text-[#b4c1c3]">{profile.education}</p>
          </div>
        </div>
      </Section>
      <Section id="experience" title="Experience"><ol className="ml-1 list-none border-l border-[#4d8d68] p-0">{experience.map((item, index) => <li key={index} className="relative pb-8 pl-7 last:pb-0 before:absolute before:top-1.5 before:-left-[5px] before:h-[9px] before:w-[9px] before:rounded-full before:bg-[#70dd99]"><div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"><h3 className="text-base font-semibold">{item.role} <span className="text-[#70dd99]">· {item.organization}</span></h3><span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#aebdc0]">{item.date}</span></div></li>)}</ol></Section>
      <Section id="projects" title="Projects"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <div key={index} className="min-h-[130px] rounded-md border border-[#2c3b3e] bg-[#101b1d] p-5"><span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#70dd99]">~/projects/</span><h3 className="mt-3 text-lg font-semibold">{project.link ? <a className="hover:text-[#70dd99]" href={project.link}>{project.name}</a> : project.name}</h3><p className="mt-2 text-sm text-[#aebdc0]">{project.type}</p></div>)}</div></Section>
      <Section id="skills" title="Skills"><div className="grid auto-rows-fr grid-cols-12 gap-4">{skills.map(skill => <div key={skill.category} className="col-span-12 sm:col-span-6 sm:last:odd:col-start-4 lg:col-span-4 lg:last:odd:col-start-auto lg:[&:nth-child(3n+1):nth-last-child(2)]:col-start-3 lg:[&:nth-child(3n+1):last-child]:col-start-5"><SkillDirectoryCard {...skill} /></div>)}</div></Section>
      <Section id="contact" title="Contact"><p className="text-lg font-semibold">Let’s connect.</p><p className="mt-2 leading-[1.7] text-[#aebdc0]">Have a question or an opportunity to share? I’d love to hear from you.</p>{profile.email ? <a className="mt-5 inline-block rounded border border-[#70dd99] px-4 py-2.5 font-['IBM_Plex_Mono',monospace] text-sm text-[#70dd99] hover:bg-[#1b3025]" href={`mailto:${profile.email}`}>Email me</a> : <p className="mt-5 font-['IBM_Plex_Mono',monospace] text-xs text-[#aebdc0]">Email address coming soon</p>}</Section>
    </div></main>
    <footer className="border-t border-[#29383b] bg-[#091113]"><div className={`${container} flex flex-wrap justify-between gap-4 py-6 font-['IBM_Plex_Mono',monospace] text-xs text-[#aebdc0]`}><span>© {new Date().getFullYear()} {profile.name}</span><a className="hover:text-[#70dd99]" href="#top">Back to top ↑</a></div></footer>
  </div>
}

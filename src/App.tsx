import Header from "./components/Header";
import Section from "./components/Section";
import SocialLinks from "./components/SocialLinks";
import SkillDirectoryCard from "./components/SkillDirectoryCard";
import ProfileTerminal from "./components/ProfileTerminal";
import ContactDetails from "./components/ContactDetails";
import { profile, experience, skills } from "./data/portfolio";

const container =
  "mx-auto w-[calc(100%-40px)] max-w-[1056px] sm:w-[calc(100%-64px)]";

export default function App() {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#e9edf0]">
      <a
        className="absolute -top-[100px] left-5 z-[100] bg-[#70dd99] p-3 text-[#0b1315] focus:top-2.5"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <div className={container}>
          <section
            id="top"
            aria-labelledby="hero-title"
            className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[1fr_0.8fr] md:gap-16"
          >
            <div>
              <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#b8c6c7]">
                <span className="text-[#70dd99]">anthonyzheng@portfolio</span>
                :~$ whoami
              </p>
              <h1
                id="hero-title"
                className="mt-4 text-[clamp(40px,5vw,62px)] leading-[1.05] font-bold tracking-[-0.05em]"
              >
                {profile.name}
                <span className="text-[#70dd99]">_</span>
              </h1>
              <p className="mt-5 max-w-[590px] text-xl leading-[1.45] text-[#e0e7e8]">
                Software engineer focused on backend systems, databases, and
                cloud infrastructure.
              </p>
              <p className="mt-4 max-w-[550px] leading-[1.7] text-[#aebdc0]">
                Building reliable software that makes a real impact.
              </p>
              <SocialLinks profile={profile} />
            </div>
            <ProfileTerminal name={profile.name} />
          </section>
          <Section id="about" title="About" showHeading={false}>
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#70dd99]">
                  ~/about
                </p>
                <h2
                  id="about-title"
                  className="mt-1 text-2xl font-bold tracking-tight text-[#e9edf0] sm:text-3xl"
                >
                  About
                </h2>
                <p className="mt-6 max-w-[65ch] leading-[1.75] text-[#b4c1c3]">
                  I’m driven by the opportunity to build software that has a
                  real, tangible impact—whether it’s shipping tools that make
                  managers' lives easier or writing code that helps support the
                  Artemis mission to return humans to the Moon.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#70dd99]">
                  ~/about/education
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#e9edf0] sm:text-3xl">
                  Education
                </h3>
                <div className="mt-6 border-l border-[#4d8d68] pl-5 md:flex-1">
                  <p className="text-lg font-semibold leading-snug text-[#e9edf0] sm:text-xl">
                    {profile.education.degree}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-base leading-[1.75] text-[#b4c1c3]">
                    <p>{profile.education.institution}</p>
                    <p className="font-['IBM_Plex_Mono',monospace] text-sm text-[#aebdc0]">
                      {profile.education.dates}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section id="experience" title="Experience">
            <ol className="ml-1 list-none border-l border-[#4d8d68] p-0">
              {experience.map((item, index) => (
                <li
                  key={index}
                  className="relative pb-8 pl-7 last:pb-0 before:absolute before:top-1.5 before:-left-[5px] before:h-[9px] before:w-[9px] before:rounded-full before:bg-[#70dd99]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-base font-semibold">
                      {item.role}{" "}
                      <span className="text-[#70dd99]">
                        · {item.organization}
                      </span>
                    </h3>
                    <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#aebdc0]">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[72ch] text-sm leading-[1.75] text-[#b4c1c3] sm:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Section>
          <Section id="skills" title="Skills">
            <div className="grid auto-rows-fr grid-cols-12 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="col-span-12 sm:col-span-6 sm:last:odd:col-start-4 lg:col-span-4 lg:last:odd:col-start-auto lg:[&:nth-child(3n+1):nth-last-child(2)]:col-start-3 lg:[&:nth-child(3n+1):last-child]:col-start-5"
                >
                  <SkillDirectoryCard {...skill} />
                </div>
              ))}
            </div>
          </Section>
          <Section id="contact" title="Contact">
            <ContactDetails email={profile.email} />
          </Section>
        </div>
      </main>
      <footer className="border-t border-[#29383b] bg-[#091113]">
        <div
          className={`${container} flex flex-wrap justify-between gap-4 py-6 font-['IBM_Plex_Mono',monospace] text-xs text-[#aebdc0]`}
        >
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a className="hover:text-[#70dd99]" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

import SkillIcon from './SkillIcon'
import type { SkillCategory } from '../types/portfolio'

export default function SkillDirectoryCard({ category, items }: SkillCategory) {
  const directory = category.toLowerCase().replace(/\s+/g, '-')

  return (
    <article className="h-full rounded-md border border-[#344448] bg-[#0d181a] p-5 sm:p-6">
      <p className="break-words font-['IBM_Plex_Mono',monospace] text-xs leading-6 text-[#c3cfd0]">ls <span className="break-all text-[#70dd99]">~/skills/{directory}/</span></p>
      <h3 className="mt-5 text-lg font-semibold text-[#e9edf0]">{category}</h3>
      <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
        {items.map(item => <li key={item} className="inline-flex items-center gap-2 rounded border border-[#344448] bg-[#182527] px-2.5 py-1.5 font-['IBM_Plex_Mono',monospace] text-xs leading-5 text-[#c3cfd0] transition-colors duration-200 hover:border-[#70dd99] hover:bg-[#203a2d] hover:text-[#e9edf0] motion-reduce:transition-none"><SkillIcon name={item} />{item}</li>)}
      </ul>
    </article>
  )
}

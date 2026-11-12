export default function SkillCard({ category, items }) {
  return (
    <div className="rounded-md border border-[#303b54] bg-[#1c253d] p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-[#edf1f8]">{category}</h3>
      <div className="mt-5 h-px bg-[#303b54]" aria-hidden="true">
        <div className="h-px w-10 bg-[#50e6c8]" />
      </div>
      <ul className="mt-6 flex list-none flex-wrap gap-2.5 p-0">
        {items.map(item => (
          <li className="rounded border border-[#37435c] bg-[#202b44] px-3 py-2 font-['IBM_Plex_Mono',monospace] text-sm text-[#aebccd]" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

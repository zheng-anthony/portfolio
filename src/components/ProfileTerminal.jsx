export default function ProfileTerminal({ name }) {
  return (
    <div className="overflow-hidden rounded-md border border-[#344448] bg-[#0d181a] font-['IBM_Plex_Mono',monospace] text-xs leading-6 shadow-lg shadow-black/10" aria-label="Profile summary">
      <div className="flex items-center gap-2 border-b border-[#29383b] bg-[#152123] px-4 py-3 text-[#a8b7ba]"><span className="h-2 w-2 rounded-full bg-[#f37f75]" /><span className="h-2 w-2 rounded-full bg-[#eac96a]" /><span className="h-2 w-2 rounded-full bg-[#70dd99]" /><span className="ml-3">cat ~/info.json</span></div>
      <div className="px-5 py-4 text-[#c4cfd0]">
        <p>{'{'}</p>
        <p className="pl-4"><span className="text-[#92c6d5]">&quot;name&quot;</span>: <span className="text-[#70dd99]">&quot;{name}&quot;</span>,</p>
        <p className="pl-4"><span className="text-[#92c6d5]">&quot;role&quot;</span>: <span className="text-[#70dd99]">&quot;Software engineer&quot;</span>,</p>
        <p className="pl-4"><span className="text-[#92c6d5]">&quot;interests&quot;</span>: [</p>
        <p className="pl-8 text-[#70dd99]">&quot;backend systems&quot;,</p><p className="pl-8 text-[#70dd99]">&quot;databases&quot;,</p><p className="pl-8 text-[#70dd99]">&quot;cloud infrastructure&quot;</p>
        <p className="pl-4">]</p><p>{'}'}</p>
      </div>
    </div>
  )
}

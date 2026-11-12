const icons = {
  GitHub: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
  LinkedIn: <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4 4 0 0 1 16.65 8.7c3.85 0 4.56 2.53 4.56 5.82V21h-3.78v-5.74c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03V21H9.4V9Z" />,
  Resume: <path d="M6 2h8l5 5v15H6V2Zm2 2v16h9V8h-4V4H8Zm2 7h5v1.5h-5V11Zm0 3.5h5V16h-5v-1.5Z" />,
}

export default function SocialLinks({ profile }) {
  return <div className="mt-[30px] flex flex-wrap justify-center gap-6">{[['GitHub', profile.github], ['LinkedIn', profile.linkedin], ['Resume', profile.resume]].map(([label, href]) => href ? <a className="inline-flex items-center gap-2 text-sm font-semibold no-underline hover:text-[#50e6c8]" key={label} href={href} target="_blank" rel="noreferrer"><svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">{icons[label]}</svg>{label}</a> : <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#a6b5c6]" key={label} title={`${label} link coming soon`}><svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">{icons[label]}</svg>{label} <small className="text-[10px] font-normal">coming soon</small></span>)}</div>
}

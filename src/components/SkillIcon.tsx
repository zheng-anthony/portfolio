import {
  siPython, siGo, siCplusplus, siOpenjdk, siTypescript, siJavascript, siGnubash,
  siReact, siNextdotjs, siExpress, siHono, siFastapi, siRobotframework, siJunit5,
  siPostgresql, siMongodb, siTerraform, siDocker, siGithubactions, siGit, siLinux,
  siNodedotjs, siDrizzle, siSqlalchemy, siYolo, siOpencv,
} from 'simple-icons'

const icons: Record<string, { path: string }> = {
  Python: siPython, Go: siGo, 'C++': siCplusplus, Java: siOpenjdk,
  TypeScript: siTypescript, JavaScript: siJavascript, Bash: siGnubash,
  React: siReact, 'Next.js': siNextdotjs, 'Express.js': siExpress, Hono: siHono,
  FastAPI: siFastapi, 'Robot Framework': siRobotframework, JUnit: siJunit5,
  PostgreSQL: siPostgresql, MongoDB: siMongodb, Terraform: siTerraform,
  Docker: siDocker, 'GitHub Actions': siGithubactions, Git: siGit, Linux: siLinux,
  'Node.js': siNodedotjs, 'Drizzle ORM': siDrizzle, SQLAlchemy: siSqlalchemy,
  YOLOv8: siYolo, OpenCV: siOpencv,
}

export default function SkillIcon({ name }: { name: string }) {
  const icon = icons[name]
  if (icon) return <svg className="h-4 w-4 shrink-0 fill-current text-[#70dd99]" viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>

  const path = name === 'AWS'
    ? 'M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.75a4.65 4.65 0 0 0 0 9.25Z'
    : name === 'Mockito'
      ? 'M9 3h6M10 3v6l-5.5 9.2A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.8L14 9V3M8 15h8'
      : 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6'
  return <svg className="h-4 w-4 shrink-0 text-[#70dd99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>
}

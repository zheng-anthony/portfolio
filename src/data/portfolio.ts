import type { Experience, Profile, Project, SkillCategory } from '../types/portfolio'

// Replace the placeholders here with your own details and links.
export const profile: Profile = {
  name: 'Anthony Zheng',
  github: '',
  linkedin: '',
  resume: '',
  email: '',
  education: 'Add your school, degree, and graduation date.',
}

export const experience: Experience[] = [
  { role: 'Your role', organization: 'Company or organization', date: 'Dates' },
  { role: 'Your role', organization: 'Company or organization', date: 'Dates' },
]

export const projects: Project[] = [
  { name: 'Project name', type: 'Project category', link: '' },
  { name: 'Project name', type: 'Project category', link: '' },
  { name: 'Project name', type: 'Project category', link: '' },
]

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['Python', 'Go', 'C++', 'SQL', 'Java', 'TypeScript', 'JavaScript', 'Bash'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Express.js', 'Hono', 'FastAPI', 'Robot Framework', 'JUnit', 'Mockito'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
  { category: 'Infrastructure', items: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'] },
  { category: 'Tools', items: ['Git', 'Linux', 'Node.js', 'Drizzle ORM', 'SQLAlchemy', 'YOLOv8', 'OpenCV'] },
]

export interface Profile {
  name: string
  github: string
  linkedin: string
  resume: string
  email: string
  education: string
}

export interface Experience {
  role: string
  organization: string
  date: string
}

export interface Project {
  name: string
  type: string
  link: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

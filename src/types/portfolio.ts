export interface Profile {
  name: string
  github: string
  linkedin: string
  resume: string
  email: string
  education: Education
}

export interface Education {
  institution: string
  dates: string
  degree: string
}

export interface Experience {
  role: string
  organization: string
  date: string
  description: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

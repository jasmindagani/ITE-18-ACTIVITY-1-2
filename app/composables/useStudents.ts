export interface Student {
  name: string
  nickname: string
  studentId: string
  course: string
  yearLevel: string
  email: string
  motto: string
  hobby: string
  skills: string[]
  color: string
  photo?: string
}

export const useStudents = (): Student[] => [
  {
    name: 'Ashley Queen Buba', nickname: 'Ash', studentId: '241-1234',
    course: 'BS Information Technology', yearLevel: '3rd Year', email: 'ashleybuba@gmail.com',
    motto: 'Debug today, deploy tomorrow.', hobby: 'Playing',
    skills: ['Vue', 'Nuxt', 'Git'], color: 'moss',
    photo: '/ash.jpg'
  },
  {
    name: 'Juliana Angel N. Clado', nickname: 'Yana', studentId: '241-4567',
    course: 'BS Information Technology', yearLevel: '3rd Year', email: 'julianaclado@gmail.com',
    motto: 'Small steps still ship.', hobby: 'Playing Guitar',
    skills: ['SQL', 'Excel', 'Analytics'], color: 'forest',
    photo: '/yana.jpg'
  },
  {
    name: 'Charriel Ayuban', nickname: 'Chacha', studentId: '241-7891',
    course: 'BS Information Technology', yearLevel: '3nd Year', email: 'charriel@gmail.com',
    motto: 'Data tells the story.', hobby: 'Sketching UI ideas',
    skills: ['UI Design', 'Figma', 'CSS'], color: 'lime',
    photo: '/cha.jpg'
  },
  {
    name: 'Hazel Bojawe', nickname: 'Mimi', studentId: '241-0123',
    course: 'BS Information Technology', yearLevel: '3rd Year', email: 'hazelbojawe@gmail.com',
    motto: 'Coffee first, code second.', hobby: 'Baking & photography',
    skills: ['HTML', 'JavaScript', 'Canva'], color: 'olive',
    photo: '/hazel.jpg'
  },
  {
    name: 'Jobert Bautista', nickname: 'Berto', studentId: '241-9876',
    course: 'BS Computer Science', yearLevel: '4th Year', email: 'jobert@gmail.com',
    motto: 'Every expert was once a beginner.', hobby: 'Mobile games & hiking',
    skills: ['Python', 'Java', 'Logic'], color: 'sage',
    photo: '/jobert.jpg'
  },
  {
    name: 'Jonard Sabsalon', nickname: 'Gwapu', studentId: '241-5413',
    course: 'BS Information Systems', yearLevel: '2nd Year', email: 'jonard@gmail.com',
    motto: 'Plan the work, work the plan.', hobby: 'Journaling',
    skills: ['Project Mgmt', 'Docs', 'Teamwork'], color: 'mint',
    photo: '/jonard.jpg'
  },
  {
  name: 'Princess Sweet Grace De Mayo', nickname: 'ading yaot', studentId: '241-1431',
  course: 'BS Information Systems', yearLevel: '1st Year', email: 'sweet@gmail.com',
  motto: 'Mottotoy', hobby: 'Crying',
  skills: ['Project Mgmt', 'Docs', 'Teamwork'], color: 'mint',
  photo: '/sweet.jpg'
  }
]

const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Lalit Chaudhary',
  role: 'Front-end Developer',
  description: [
    `Front-end developer for nearly ${new Date().getFullYear() - 2022
    } years, I’am a stickler for API security, a lover of clean code and remain passionate about my job and new technologies in general. Always on a quest for learning and continuous self-training, I’am particularly interested in the new opportunities and technological prowess that the development of 5G may enable on the ground, in line with the explosion of AI technologies.`,
  ],
  resume: '/documents/Lalit_Chaudhary_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/lalit-chaudhary-1a816a21b/',
    github: 'https://github.com/Lalitchaudhary01',
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: '/images/food-delivery.png',
    name: 'Food-Delivery-App',
    description: [
      'Created a food delivery platform inspired by Swiggy, offering a wide range of restaurant choices and seamless delivery services to users.',
    ],
    stack: ['Tailwind CSS',  'React', 'Redux', 'restAPI'],
    livePreview: 'https://food-delivery-app2.vercel.app/',
    sourceCode:
      'https://github.com/Lalitchaudhary01/food-delivery-app2',
  },
  {
    thumbnail: '/images/shoes.png',
    name: 'Shoes : E-Commerce Website',
    description: [
      " Developed a shoe buying application using React, providing users with a seamless shopping experience for footwear products.",
    ],
    stack: ['BootStrap', 'Tailwind CSS',  'React', 'Redux', 'JavaScript', 'HTML/CSS' ],
    livePreview: 'https://shoes-website-beryl.vercel.app/',
    sourceCode:
      'https://github.com/Lalitchaudhary01/shoes-website',
    
  },
  {
    thumbnail: '/images/youtube.png',
    name: 'Youtube-Clone',
    description: [
      'Developed a YouTube clone incorporating live chat and comment features. The application is built using React for the frontend, Redux for state management, and APIs for data retrieval and manipulation. The live chat feature allows users to interact in real-time, while the comments section enables user engagement and feedback on videos.',
    ],
    stack: ['BootStrap', 'Tailwind CSS',  'React', 'Redux', 'RestAPI', 'JavaScript', 'HTML/CSS',],
    livePreview: 'https://youtube-clone-p8se.vercel.app/',
    sourceCode: 'https://github.com/Lalitchaudhary01/youtube-clone'
  },
  
  
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Express JS',
  'Node JS',
  'HTML/CSS/JS',
  
  'Git',
  'UI/UX',
  'MongoDB',
  'Material UI',
  'Java',
  'C-programming',
  'Tailwind',
  'BootStrap',
  'Postman',
  'Linux',
  'Marlin Firmware',
  'Socket.io',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'work.lalitchaudhary@gmail.com',
}

const contacts = [
  {
    name: 'Email',
    link: 'mailto:work.lalitchaudhary@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/8445646300',
    icon: 'fab fa-whatsapp',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/lalitchdhary',
    icon: 'fab fa-twitter',
  },
]

export { about, projects, skills, contact, contacts }

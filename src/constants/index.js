import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  reactquiz,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Senior Secondary School",
    company_name: "M.G Convent School, Lucknow.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2020 - May 2021",
    points: [
      "Studied core subjects including Mathematics, Physics, Chemistry, and Computer Science, achieving a strong academic performance.",
      "Participated in various science and technology competitions, demonstrating a keen interest in computer science and engineering.",
      "Engaged in extracurricular activities such as debating and public speaking, enhancing communication and critical thinking skills.",
    ],
  },
  {
    title: "School of Computer Engineering",
    company_name: `Kalinga Institute of Industrial Technology, Bhubaneswar.`,
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - July 2026",
    cgpa:"CGPA:8.85",
    points: [
          "Studying core computer science subjects including Data Structures, Algorithms, and Database Management Systems.",
          "Engaging in hands-on projects involving web development, software engineering, and network security.",
          "Collaborating with peers on team projects, focusing on software development using React.js and other modern technologies.",
          "Applying theoretical knowledge to practical problems through labs and coursework, enhancing skills in programming and problem-solving.",
          "Participating in hackathons & internships to gain real-world experience and industry insights.",
    ],
  },
  
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   percentage: "Percentage: 90.6%",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Saksham is a great team worker and a valuable asset to the team.",
    name: "Sejal",
    designation: "Student",
    company: "KIIT",
    image: "https://www.rd.com/wp-content/uploads/2018/02/33_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_696648019_michaelheim.jpg?fit=700%2C467",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about the team like Saksham does.",
    name: "Jasmin",
    designation: "Student",
    company: "KIIT",
    image: "https://t4.ftcdn.net/jpg/07/65/15/75/240_F_765157555_muSlnN0OtEeo2lfIm2MmE8rYB3pU26G4.jpg",
  },
  {
    testimonial:
      "I endorse all the skills he has, I have personally seen his learning path and adore his hard work.",
    name: "Shivam Singh",
    designation: "Software Developer Engineer",
    company: "LogicX",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Swadishtha",
    description:
"The Food Delivery App allows users to order food from local restaurants, track deliveries in real-time, and manage their cart. It focuses on a seamless user experience with features like restaurant filtering and order tracking, with cart management and more..."
  ,  tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sakshamXcode/Swadishtha",
  },
  {
    name: "World-Wise",
    description:
      "WorldWise is a web application designed to help users keep track of their travel adventures. The app likely allows users to record, view, and possibly share their travel experiences by integrating interactive maps and other user-friendly features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
         name: "leaflet",
         color: "green-text-gradient",
       },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sakshamXcode/World-Wise",
  },
  {
    name: "React-Quiz",
    description:
      "The React Quiz app allows users to take quizzes on various topics with features like multiple-choice questions, score tracking, and instant feedback. Built with React and Vite, it offers a fast, responsive user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactquiz,
    source_code_link: "https://github.com/sakshamXcode/React-Quiz",
  },
];

export { services, technologies, experiences, testimonials, projects };

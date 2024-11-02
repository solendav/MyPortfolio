import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  ACT,
  app1,
  app2,
  admin,
  jobit,
  hulu1,
  hulu2,
  hulu3
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
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
    title: "UX/UI designer",
    icon: creator,
  },
];  
const technologies: TTechnology[] = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
 
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Atlas Computer Technology  ( InternShip )",
    icon: ACT,
    iconBg: "#383E56",
    date: "July 2023 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js, spring-Boot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Freelance",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing  web applications using React.js, html, php, mysql and other related technologies. For individual Client ",

    ],
  },


];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "You can reach me on .",
    name: "",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
 

];

const projects: TProject[] = [
  {
    name: "RentEase",
    description:
      "Android-based platform that allows users to search, book, and manage property rentals from various providers, providing a convenient and efficient solution for their needs.It also has admin panal that is developed using reactjs, nodejs and mongodb",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    images: [app1,app2,admin], // Changed 'image' to 'images' to support multiple images as per TProject type
    sourceCodeLink: "https://github.com/solendav/RentEase",
  },
  {
    name: "HuluBeand",
    description:
      "Web application that enables users to search for hotels, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
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
    images: [hulu1, hulu2, hulu3], // Fixed from 'image' to 'images' array
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "School Managment System",
    description:
      "A comprehensive school mangement platform that particularly register,manage student and also mange any service that are provided by the school like post the exam schedule perform the grade and take attendance for each student in school and it make the whole system hassel free.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    images: [admin, jobit], // Changed to 'images' array to match the type definition
    sourceCodeLink: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };

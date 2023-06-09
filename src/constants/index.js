import {
  mobile,
  backend,
  creator,
  web,
  eha,
  naijakids,
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
 portfolio,
  carrent,
  threejs,
  jobsearch,
  metaverse,
  threedjs,
  clipbay,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web/Web3 Developer",
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
    title: "Gamer",
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Odoo ERP System Administrator",
    company_name: "EHA Clinics",
    icon: eha,
    iconBg: "#383E56",
    date: "April 2021 - Present",
    points: [
      "Customizing and configuring the Odoo platform system to meet the unique needs of staffs.",
      "Managing critical business processes, from inventory and patient management to employees and recruitment.",
      "Collaborating with  developers to implement custom workflows and reports",
      "Implementing new security protocols and optimizing system performance",
    ],
  },
  {
    title: "Software Engineering Internship",
    company_name: "EHA Clinics",
    icon: eha,
    iconBg: "#383E56",
    date: "October 2020 - April 2021",
    points: [
      "Configuring and customizing Odoo modules.",
      "Monitoring and troubleshooting the Odoo system, identifying and resolving issues to ensure smooth operation",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "9ijakids Educational Games",
    icon: naijakids,
    iconBg: "#383E56",
    date: "November 2021 - March 2022",
    points: [
      "Troubleshooting and debugging code, implementing enhancements, updates to improve game performance",
      "Developing game levels and implementing UI improvements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "My portfolio application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Sholamide/olamide.dev",
  },
  {
    name: "Clipbay",
    description:
      "Tik-tok clone application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: clipbay,
    source_code_link: "https://github.com/Sholamide/clipbay",
  },
  {
    name: "Metaverse",
    description:
      "A simple metaverse landing page.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Sholamide/metaversus",
  },
  {
    name: "3D Portfolio ",
    description:
      "A simple 3D prtfolio using threeJS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: threedjs,
    source_code_link: "https://github.com/Sholamide/threejs",
  },
  {
    name: "ITRES ",
    description:
      "A job landing page.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: jobsearch,
    source_code_link: "https://github.com/Sholamide/work-from-home",
  },
];

export { services, technologies, experiences, testimonials, projects };

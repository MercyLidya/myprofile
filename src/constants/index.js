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
  threejs,
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
    title: "Blender Developer",
    icon: web,
  },
  {
    title: "Illustrator",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Primary and secondary",
    company_name: "St.johns school",
    icon: starbucks,
    iconBg: "#ffffffff",
    date: "April 2011 - May 2021",
    points: [
      "Primary Education, Grade- Nussery to V.",
      "Secondary Education, Grade- VI to VIII",

    ],
  },
  {
    title: "High school",
    company_name: "Indian Academy",
    icon: tesla,
    iconBg: "#ffffffff",
    date: "March 2021 - May 2023",
    points: [
      "Higher Education, Grade XI to XII.",

    ],
  },
  {
    title: "Bachelors",
    company_name: "St.Josephs University",
    icon: shopify,
    iconBg: "#ffffffff",
    date: "May 2023 - April 2026",
    points: [
      "B.VOC In Digital Media and Animation.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Anupama",
    designation: "Faculty",
    company: "St.Joesph's Univsersity",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Arun Mozhi",
    designation: "Faculty",
    company: "St.Joseph's University",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vidisha d'souza",
    designation: "Faculty",
    company: "St.joseph University",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AR 3D Character",
    description:
      "Web application that enables users to play and interact with a 3D character that has built in animations and can emote.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "intereactive sapce",
        color: "green-text-gradient",
      },
      {
        name: "Verge 3d",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mercylidya.github.io/blenderar/",
  },
  {
    name: "Interactive Table",
    description:
      "An interactive Table that lets you customize it to your own likings. With limited options",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Verge3d",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://mercylidya.github.io/231VOA27_Intereactive_table_/",
  },
  {
    name: "Solar System Educational Web Page",
    description:
      "An interactive solar system web page made to help students with their learning.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sathvick.com/231voa/solar/231voa27/",
  },
];

export { services, technologies, experiences, testimonials, projects };
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project9 from "../assets/projects/project-9.jpg";

import firstcry from "../assets/firstcry.png";
import hc from "../assets/hc.jpg";
import hk from "../assets/hk.jpg";
import md from "../assets/md.svg";
import z from "../assets/z.jpg";

export const HERO_CONTENT = `I am a dedicated and experienced Category Manager in the e-commerce industry, having successfully navigated this dynamic field for the past six years. My role has allowed me to develop a keen understanding of market trends, consumer behavior, and strategic planning. I hold a master's degree in management from NMIMS, Mumbai, which has equipped me with a solid foundation in business principles and analytical skills. My academic background, combined with my hands-on experience, has enabled me to drive growth, optimize product assortments, and enhance customer satisfaction in a highly competitive market. I am passionate about leveraging data-driven insights to make informed decisions and continuously improve the shopping experience for our customers..`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer passionate about crafting efficient and user-friendly web applications. With the year of experience, I have mastered a diverse array of technologies including React, Next.js, Node.js, MySQL, and MongoDB. My journey into web development began with a deep curiosity about the inner workings of the web, propelling me into a dynamic career where continuous learning and adaptation are paramount. I thrive in collaborative environments, always eager to tackle complex problems and deliver high-quality, innovative solutions.Beyond coding, I am committed to staying active and constantly exploring new technologies.On the front-end, I specialize in React and Next.js, creating dynamic and responsive user interfaces. On the back-end, I am proficient in Node.js and Express, building robust server-side applications. I have extensive experience with databases such as MySQL, PostgreSQL, and MongoDB, ensuring efficient data management. Additionally, I am skilled in using various development tools including Git, Swagger, Postman, Bitbucket, GitHub, Netlify, and Vercel to streamline workflows and enhance productivity. My passion for innovation extends to the open-source community, where I actively contribute to projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "Oct'21 - Present",
    role: " Category Manager & Merchandise Planner",
    title:"Haus & Kinder",
    company: "Haus & Kinder.",
    description: `Developed and implemented strategic category management plans to optimize product assortment and drive sales growth
Analyzed market trends and evaluated competitor performance to guide data-driven decisions on product selection and pricing strategies
Collaborated with cross-functional teams to execute promotions and marketing initiatives, increasing brand visibility and enhancing customer engagement
Negotiated vendor contracts and managed supplier relationships to ensure timely merchandise delivery and align inventory levels with sales forecasts.`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link:hk
  },
  {
    year: "Mar'19 - Sept'21",
    role: "  Assistant Manager : Buying",
    title:"Firstcry.com",
    company: "Firstcry.com.",
    description: `Conducted market research to identify current trends and forecast future demand in order to make strategic purchasing decisions.
Collaborated with vendors to negotiate pricing, terms, and promotional opportunities to maximize profitability.
Managed inventory levels and product assortments to ensure optimal stock levels and minimize overstock or stockouts.
Trained and supervised a team of buying assistants to support department goals and objectives`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link:firstcry
  },
  {
    year: "June'18 - Feb'19",
    role: " Management Trainee",
    title:"Homecentre India",
    company: "Homecentre India.",
    description: ``,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link:hc
  },
  {
    year: "Jun'17 - Jul'2017",
    role: "Intern",
    title:"Massimo Dutti",
    company: "Massimo Dutti.",
    description: ``,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link:md
  },
  {
    year: "Jun'16 - Jul'16",
    role: "Intern",
    company: "Zara.",
    title:"Zara",
    description: "",
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link:z
  },
 
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    link:"https://prateek-premanand.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind Css", "Framer-motion"],
  },
  {
    title: "Product Order /Invoice Generator",
    image: project2,
    link:"https://kb-eight-khaki.vercel.app/",
    description:
      "Product Order Invoice Generator, built on React, which lets you Print and download Product Invoices on the fly. (Client side)",
    technologies: ["React", "Tailwind CSS", "React"],
  },
  {
    title: "Itodo (FULL STACK App)",
    image: project3,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "To-do lists offer a way to increase productivity, stop you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management and workflow.",
    technologies: ["Node.js", "Express.js", "React", "MongoDb"],
  },

  {
    title: "Ping Pong Game Clone",
    image: project4,
    link:"https://gamepongjavascript.netlify.app/",
    description:
      "The game is a game played in a simple way where the player uses the paddle to knock the ball back and forth and must get the ball past the other paddle to get a score. The score is represented by digits on top of the screen.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Netflix-Logo-Animation",
    image: project9,
    link:"https://resplendent-tiramisu-c48b3b.netlify.app/",
    description:" Netflix Intro Animation using just HTML and CSS.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Timeline Design",
    image: project6,
    link:"https://timelinedesignhtmlcss.netlify.app/",
    description:
      "It is a timeline design for the website and displays each content with animation",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Analog Clock",
    image: project7,
    link:"https://analogclockjavascript.netlify.app/",
    description:
      "An analog clock is a tool for reading the time of day. The shortest hand indicates the hour, the longer hand indicates the minutes, and the longest arm indicates the seconds",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+12 4555 666 00 ",
  email: "prateekpremanandd@gmail.com",
};

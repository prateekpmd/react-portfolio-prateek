import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with 1.6 years of hands-on experience in crafting robust and scalable web applications. My expertise spans a wide range of technologies, including JavaScript, React, Next.js, Node.js, Express, MongoDB, MySQL, and PostgreSQL. I am proficient in using Git for version control, Swagger for API documentation, and Postman for testing APIs. Additionally, I have experience with Bitbucket and GitHub for code repositories, and Netlify and Vercel for deploying web applications. My goal is to leverage my comprehensive skill set to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer passionate about crafting efficient and user-friendly web applications. With the year of experience, I have mastered a diverse array of technologies including React, Next.js, Node.js, MySQL, and MongoDB. My journey into web development began with a deep curiosity about the inner workings of the web, propelling me into a dynamic career where continuous learning and adaptation are paramount. I thrive in collaborative environments, always eager to tackle complex problems and deliver high-quality, innovative solutions.Beyond coding, I am committed to staying active and constantly exploring new technologies.On the front-end, I specialize in React and Next.js, creating dynamic and responsive user interfaces. On the back-end, I am proficient in Node.js and Express, building robust server-side applications. I have extensive experience with databases such as MySQL, PostgreSQL, and MongoDB, ensuring efficient data management. Additionally, I am skilled in using various development tools including Git, Swagger, Postman, Bitbucket, GitHub, Netlify, and Vercel to streamline workflows and enhance productivity. My passion for innovation extends to the open-source community, where I actively contribute to projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "7/03/2023 - 27/03/2024",
    role: "Backend Development Intern ",
    company: "Pinak Life Sciences.",
    description: `Contributed in developing and maintaining web applications using JavaScript, and Node.js. Implemented RESTful APIs and integrated with Sql(sequelize) databases. Employing creativity and technical expertise to solve challenges encountered during the development process.`,
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
  },
  {
    year: "03/2020 - 08/2020",
    role: "Frontend Developer Intern",
    company: "Web Dharmaa.",
    description: `Designed and developed user interfaces for web applications using Html, Css, Bootstrap, Javascript. Implemented responsive designs and optimized frontend performance. Worked with the team to manage the workflow. `,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind Css", "Framer-motion"],
  },
  {
    title: "Product Order /Invoice Generator",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "Product Order Invoice Generator, built on React, which lets you Print and download Product Invoices on the fly. (Client side)",
    technologies: ["React", "Tailwind CSS", "React"],
  },
  {
    title: "Itodo (FULL STACK App)",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "To-do lists offer a way to increase productivity, stop you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management and workflow.",
    technologies: ["Node.js", "Express.js", "React", "MongoDb"],
  },

  {
    title: "Ping Pong Game Clone",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "The game is a game played in a simple way where the player uses the paddle to knock the ball back and forth and must get the ball past the other paddle to get a score. The score is represented by digits on top of the screen.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Responsive Email Template",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "It is a Responsive Email Template, which purely uses HTML(TableTags), Inline and internal CSS. Used it in backend development for sending an Email",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Timeline Design",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "It is a timeline design for the website and displays each content with animation",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Analog Clock",
    image: project1,
    link:"https://react-portfolio-prateek.vercel.app/",
    description:
      "An analog clock is a tool for reading the time of day. The shortest hand indicates the hour, the longer hand indicates the minutes, and the longest arm indicates the seconds",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+12 4555 666 00 ",
  email: "prateekpremanand@gmail.com",
};

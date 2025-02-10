import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Creative Software Coder heavy on frontend with a proven track record of creating dynamic and responsive web applications that solve real-world problems. Proficient in leveraging modern frameworks and state management tools to build scalable solutions. Adept at collaborating in any environment, demonstrating strong problem-solving skills, and continuously seeking to enhance user experience. Passionate about developing innovative projects to improve everyday life.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Developer with a passion for creating efficient and user-friendly web applications. With years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Express, Tailwind CSS, Material UI, Firebase, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2025",
    role: "Freelance",
    description: `Built responsive React.js and Next.js applications with reusable components and Translated Figma designs into pixel-perfect UI and Integrated REST APIs, boosting efficiency by 40%.`,
    technologies: ["JavaScript", "React.js", "Firebase", "API", "Tailwind", "Next.js", "Shadcn", "MongoDB"],
  },
  {
    year: "2024",
    role: "Frontend Developer HNG internship",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with UI/UX designers and backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js"],
  },
  {
    year: "2023",
    role: "Frontend Engineer Paritie-Hub Intern",
    description: `Contributed to the development of a landing web application from a figma page design page using JavaScript, React.js, and React-icons.`,
    technologies: ["React.js", "JavaScript", "React-icons", "Figma"],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    description: `Developed and maintained web applications using JavaScript, React.js, Node.js, HTML, CSS. Applications ranging from basic HTML Landing pages to improving and increasing functionality of already existing web applications`,
    technologies: ["JavaScript", "Next.js", "React.js", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "4ever",
    image: project3,
    description: "This is a React-based e-commerce site with numerous pages. Built with Tailwind CSS for styling, it is fully mobile-responsive, making it accessible across devices.",
    technologies: ["JavaScript","Tailwind Css", "React.js", "react-toastify", "react-router-dom"],
    link: "https://forever-frontend-peach-nu.vercel.app/", // Placeholder link
  },
  {
    title: "Traiflex",
    image: project2,
    description: "Engineered a fully operational Traiflex trailer application leveraging advanced asynchronous operations to fetch and classify movie genres from third-party APIs, incorporating YouTube's iframe API for seamless, high-definition trailer streaming, and optimizing performance through efficient state management with Redux Thunk. Sign Up/Login to Check it out (REQUIRED)",
    technologies: [ "JavaScript", "HTML", "CSS", "React", "React-icons", "React-toastify", "Firebase", "YouTube Iframe", "Movie Trailer"],
    link: "https://netflix-six-kappa.vercel.app/", // Placeholder link
  },
  {
    "title": "Allustrate",
    "image": project4,
    "description": "Allustrate is a cutting-edge AI-powered image generation platform that transforms textual descriptions into visually stunning, high-fidelity digital artwork. Built with React, Next.js, and Tailwind CSS, the application utilizes advanced AI models to interpret user prompts and generate hyper-realistic, creative, and stylistically diverse images. With an intuitive and responsive UI, Allustrate offers real-time image rendering, an intelligent tagging system for exploring artistic styles, and seamless user interactions powered by dynamic animations and smooth state management. It integrates Axios for efficient API communication, Sonner for real-time notifications, and a robust state-driven architecture to ensure a frictionless user experience. Users can effortlessly generate AI-driven visuals, preview high-resolution outputs, and download their creations with a single click. By merging modern web development principles with cutting-edge AI capabilities, Allustrate redefines the way users conceptualize and create digital imagery.",
    "technologies": ["JavaScript", "Rapid API", "Next.js", "Tailwind CSS"],
    "link": "https://allustrate.vercel.app/", // Placeholder link
  },
  {
    title: "HNG Timbu Cloud",
    image: project1,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, summary page, ratings.",
    technologies: ["JavaScript", "React.js", "Node.js", "Tailwind", "React-icons"],
    link: "https://hng-timbucloud-bookstore.vercel.app/", // Placeholder link
  },
];

export const CONTACT = {
  address: "Abuja FCT, Nigeria",
  phoneNo: "+234 816 333 8274",
  email: "mrabiu321@gmail.com",
};

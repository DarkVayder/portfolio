import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Experienced Full-Stack developer with a proven track record of creating dynamic and responsive web applications that solve real-world problems. Proficient in leveraging modern frameworks and state management tools to build scalable solutions. Adept at collaborating in any environment, demonstrating strong problem-solving skills, and continuously seeking to enhance user experience. Passionate about developing innovative projects to improve everyday life.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 3+ years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Firebase, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack Developer",
    description: `Developed and maintained Traiflex web application using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with Firebase databases.`,
    technologies: ["JavaScript", "React.js", "Firebase", "TMDB API", "React-icons"],
  },
  {
    year: "2024",
    role: "Frontend Developer HNG internship",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js"],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    description: `Developed and maintained web applications using JavaScript, React.js, Node.js, HTML, CSS. Applications ranging from basic HTML Landing pages to improving and increasing functionality of already existing web applications`,
    technologies: ["JavaScript", "Next.js", "React.js", "HTML", "CSS"],
  },
  {
    year: "2023",
    role: "Frontend Engineer Paritie-Hub Intern",
    description: `Contributed to the development of a landing web application from a figma page design page using JavaScript, React.js, and React-icons.`,
    technologies: ["React.js", "JavaScript", "React-icons", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "HNG Timbu Cloud",
    image: project1,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, summary page, ratings.",
    technologies: ["JavaScript", "React.js", "Node.js", "Tailwind", "React-icons"],
    link: "https://hng-timbucloud-bookstore.vercel.app/", // Placeholder link
  },
  {
    title: "Traiflex",
    image: project2,
    description: "Engineered a fully operational Traiflex trailer application leveraging advanced asynchronous operations to fetch and classify movie genres from third-party APIs, incorporating YouTube's iframe API for seamless, high-definition trailer streaming, and optimizing performance through efficient state management with Redux Thunk. Sign Up/Login to Check it out (REQUIRED)",
    technologies: [ "JavaScript", "HTML", "CSS", "React", "React-icons", "React-toastify", "Firebase", "YouTube Iframe", "Movie Trailer"],
    link: "https://netflix-six-kappa.vercel.app/", // Placeholder link
  },
  {
    title: "E-com",
    image: project3,
    description: "An E-commerce Multi-page web application where the user can add product, edit product, and delete product. Application has Product Form, Product Listing and Product Details",
    technologies: ["TypeScript","Tailwind Css", "Next.js", "react-toastify"],
    link: "https://e-com-two-jade.vercel.app/", // Placeholder link
  },
  {
    title: "Da Gist",
    image: project4,
    description: "A platform for creating and publishing blog posts.",
    technologies: ["JavaScript", "React.js",],
    link: "https://da-gist.vercel.app/", // Placeholder link
  },
];

export const CONTACT = {
  address: "Abuja FCT, Nigeria",
  phoneNo: "+234 816 333 8274",
  email: "mrabiu321@gmail.com",
};

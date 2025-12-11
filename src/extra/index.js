import project1 from "../assets/projects/gmail.webp";
import project2 from "../assets/projects/img1.webp";
import project3 from "../assets/projects/project-3.webp";
import project5 from "../assets/projects/img2.webp"
// import project4 from "../assets/projects/project-4.webp";
import project6 from "../assets/projects/img3.webp";
import project7 from "../assets/projects/card.webp"


export const HERO_CONTENT = `As a passionate Full Stack Java Developer and a B.Tech student in Computer Science and Engineering at CSMSS Chh. Shahu College of Engineering, I thrive at the intersection of innovation and practicality. My role at PayPerJump Pvt. Ltd. has enabled me to merge academic knowledge with real-world challenges, delivering impactful backend and full-stack solutions. Over the past ten months, I have honed my skills in Java development, working with Java, Spring Boot, Hibernate, MySQL, REST APIs, and building scalable modules that solve real user problems. I have also worked on crafting dynamic web interfaces using ReactJS, JavaScript, HTML, CSS, and Bootstrap, ensuring clean integration between the front-end and back-end layers.`;

export const EXPERIENCES = [
  {
 year: "2024- Present", 
role: "Full Stack Web Developer",
company: "PayPerJump Pvt. Ltd.",
description: `As a Full Stack Java Developer at PayPerJump Pvt. Ltd., I’ve contributed to building high-quality, scalable web applications for clients across multiple domains. Over the past 1 year and 2 months, I have taken ownership of developing responsive websites, internal tools, and custom admin panels using Java, Spring Boot, Hibernate, MySQL, and modern front-end technologies. I’ve played a key role in delivering digital solutions for brands like Lakhani Hyundai, Basil Kitchen, Vistaar Group, Bhaishree Realty, and Infinity Business Park. My work spans from backend API development to UI integration, ensuring every project is fast, secure, SEO-friendly, and fully aligned with client requirements. This journey has strengthened my problem-solving abilities, sharpened my technical expertise, and taught me how to deliver clean, production-ready features under real-world deadlines.`,
technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]

},
  
  
];

export const PROJECTS = [
  {
    title: "Full Stack Gmail Clone",
    image: project1,
    description:
      "I built a Gmail Clone using the MERN stack where users can register, log in, view multiple emails, and send emails that appear in the recipient’s actual Gmail inbox. The frontend was developed with React.js and styled using TailwindCSS, while the backend was powered by Node.js, Express.js, and MongoDB. I used JWT for secure authentication and integrated Nodemailer to handle real email sending. The project helped me understand full-stack development, email APIs, and user authentication in depth.",
    technologies: ["Reactjs","HTML", "CSS", "Javascript","Nodejs","Tailwindcss","Expressjs","MongoDB"],
  }, 
  {
    title: "Full Stack Book My Show Mini Project",
    image: project2,
    description:
      "I’ve built a complete end-to-end application where I handled everything—from designing the user interface with React.js to setting up the backend using Node.js and Express, and connecting it all with a MongoDB database. Every part of the app was carefully crafted to work smoothly together, just like in real-world scenarios. This project helped me bring everything I’ve learned into action and truly sharpened my skills as a full-stack developer.",
    technologies: ["Reactjs","HTML", "CSS", "Javascript","Nodejs","Tailwindcss","Expressjs","MongoDB"],
  }, 

  {
    title: "E-Commerce Website",
    image: project5,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript"],
  },  
  {
    title: "Task Management App",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Nodejs", "Ejs", "Expressjs"],
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Reactjs","Tailwindcss"],
  },
  {
    title: "Reactjs-SlideCard",
    image: project7,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Reactjs", "Framer Motion","Tailwindcss", ""],
  },
];

export const CONTACT = {
  address: "Chh. Sambhaji Nagar, Maharashtra.",
  phoneNo: "+91 - 9325378590",
  email: "vaibhavkjob8@gmail.com",
};
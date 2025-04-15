import project1 from "../assets/projects/gmail.PNG";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `As a passionate Full Stack Developer and a B.Tech student in Computer Science and Engineering at CSMSS Chh. Shahu College of Engineering, I thrive at the intersection of innovation and practicality. My role at PayPerJump Pvt. Ltd. has enabled me to merge academic knowledge with real-world challenges, delivering impactful web solutions. Over the past Ten months, I have honed my skills in front-end and full-stack development, crafting dynamic websites from scratch and utilizing technologies like ReactJS, Javascript, MongoDB, Expressjs, nodejs, HTML, CSS, Bootstrap, and PHP.`;

// I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Front-End Developer",
    company: "PayperJump Pvt LTD.",
    description: `As a Web Developer at PayPerJump Pvt. Ltd., a fast-growing digital marketing agency, I’ve had the privilege to work on a variety of impactful projects for clients across diverse industries. Over the past 1 year and 2 months, I’ve been a core team member, responsible for developing responsive websites, admin panels, and custom content management systems using ReactJS, PHP, HTML, CSS, and SQL. Notable projects include creating digital solutions for Lakhani Hyundai, Basil Kitchen, Vistaar Group, Bhaishree Realty, Infinity Business Park, and many more. My contributions have spanned from project inception to delivery, ensuring each website is not only optimized for performance but also SEO-friendly and user-centric. This hands-on experience has allowed me to refine my technical skills while working collaboratively to meet client needs and deadlines.`,
    technologies: ["HTML", "CSS", "Javascript","PHP","React.js","Bootstrap","SQL Database"],
  },
  
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
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
    image: project1,
    description:
      "I’ve built a complete end-to-end application where I handled everything—from designing the user interface with React.js to setting up the backend using Node.js and Express, and connecting it all with a MongoDB database. Every part of the app was carefully crafted to work smoothly together, just like in real-world scenarios. This project helped me bring everything I’ve learned into action and truly sharpened my skills as a full-stack developer.",
    technologies: ["Reactjs","HTML", "CSS", "Javascript","Nodejs","Tailwindcss","Expressjs","MongoDB"],
  }, 

  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript"],
  },  
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Nodejs", "Ejs", "Expressjs"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Reactjs","Tailwindcss"],
  },
  {
    title: "Reactjs-SlideCard",
    image: project4,
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
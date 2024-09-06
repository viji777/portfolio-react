
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineLocalPhone } from "react-icons/md";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


import resume from '../assets/Vijayalekshmi.pdf'


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "VIJAYALEKSHMI",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full stack developer with a talent for building robust, scalable applications from front to back. With expertise in both frontend and backend technologies, I transform ideas into seamless digital experiences that are both visually stunning and functionally powerful.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Merchanza E-commerce Platform",
    description:
      "I developed an e-commerce platform for clothing, cosmetics, and electronics, focusing on an intuitive user experience and efficient management. The platform includes a user-friendly admin panel for easy product management, secure user authentication using JWT, and responsive checkout pages for a smooth shopping experience on all devices. Key technologies used are React.js, Node.js, Express.js, MongoDB, JWT, HTML, CSS, JavaScript, and Tailwind CSS.",
    image: projectImage1,
    liveLink: "https://merchanza-fend.onrender.com/",
    githubLink: "https://github.com/viji777/Merchanza---MERN",
  },
  {
    id: 2,
    name: "Bulkmail Application",
    description:
      "This application simplifies the process of sending bulk emails by allowing users to upload an Excel sheet with recipient email addresses, compose a single message, and have the application handle the processing and dispatch of the message to all recipients. It streamlines bulk emailing, making it efficient to reach multiple recipients with minimal effort. The sender's email ID and password are securely retrieved from the database. Key technologies used are React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
    image: projectImage2,
    liveLink: "https://bulkmail-f-end.vercel.app/",
    githubLink: "https://github.com/viji777/bulkmail-FEnd",
  },
  {
    id: 3,
    name: "Actodo Project",
    description:
      "This ToDo application features a sign-in option, allowing users to log in and manage their daily activities. Users can add activities with specific times and dates, view their scheduled tasks, and delete activities as needed. The application ensures an organized approach to task management with a clean and intuitive interface. Key features include React.js for the frontend, Express.js and Node.js for the backend, and Tailwind CSS for styling.",
    image: projectImage3,
    liveLink: "https://actodo-application.vercel.app/",
    githubLink: "https://github.com/viji777/Actodo-Application",
  },
  {
    id: 4,
    name: "Weather Report Application",
    description:
      "This weather application uses the OpenWeatherMap API to deliver current weather data and forecasts. Built with React and styled with Tailwind CSS, it offers a responsive design that allows users to quickly search for cities and view detailed weather information, including temperature and descriptions. The clean and user-friendly interface ensures an efficient weather-checking experience.",
    image: projectImage4,
    liveLink: " https://weather-api-two-alpha.vercel.app/",
    githubLink: "https://github.com/viji777/Weather-API",
  },
  {
    id: 5,
    name: "Greenden - Plant Selling Platform",
    description:
      "The Green Den Project is a frontend plant-selling platform that includes a responsive home page, product page, and contact page. It features a search function on the product page, allowing users to easily find plants by name. The project utilizes HTML for structure, Tailwind CSS for a modern and responsive design, and JavaScript for interactive elements, ensuring a clean and user-friendly experience.",
    image: projectImage5,
    liveLink: "https://viji777.github.io/greenden/",
    githubLink: "https://github.com/viji777/greenden",
  },
  {
    id: 6,
    name: "Udemy Clone - Educational Website",
    description:
      "This Udemy educational website clone app is created with React, focusing on replicating the original design, UI, and UX. It features custom components and CSS to closely match the look and feel of Udemy. The project emphasizes responsive design, ensuring compatibility across various devices. Key elements include a polished interface and smooth navigation. This clone serves as a practical example of frontend design and development.",
    image: projectImage6,
    liveLink: "https://viji777.github.io/udemy-clone/",
    githubLink: "https://github.com/viji777/udemy-react",
  },
];

export const BIO = [
  "Vijayalekshmi began her academic journey with a Bachelor's degree in Computer Science from Annai Velankanni College, graduating in 2014. Her passion for technology and software development led her to pursue further studies, earning a Master's degree in Computer Science from Alagappa University in 2023. During her academic years, she built a strong foundation in software engineering, problem-solving, and computational theory.",
  "In 2024, eager to dive deeper into web development, Vijayalekshmi enrolled in a MERN Full Stack course at Error Makes Clever Academy. Through this program, she gained hands-on experience in creating dynamic e-commerce projects, learning to handle both frontend and backend development. This experience refined her skills in building full-stack applications that are both functional and aesthetically pleasing.",
  "Now an expert in HTML, CSS, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, and the React.js framework, Vijayalekshmi specializes in crafting dynamic, interactive web applications and responsive designs. Her comprehensive knowledge extends to database management and backend development, making her a versatile developer capable of delivering robust digital solutions.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: (
      <TbBrandJavascript className="text-4xl text-yellow-600 lg:text-5xl" />
    ),
    name: "JavaScript",
  },
  {
    icon: <TiHtml5 className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-800 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwindcss",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaGitAlt className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
  },
];

export const EDUCATION = [
  {
    degree: "MERN FullStack Course",
    institution: "Error Makes Clever Academy, Pudukkottai",
    duration: "December 2023 - March 2024",
    description:
      "Specialized in both Frontend and Backend development. Completed projects focused on enhancing user experience in web applications through advanced interactive techniques. Gained comprehensive knowledge by engaging in various projects, learning step-by-step from the basics of frontend, backend, and database development to an advanced level. Successfully completed the course and received certification.",
  },
  {
    degree: "Master of Science in Computer Science",
    institution: "Alagappa University, Karaikkudi",
    duration: "June 2021 - June 2023",
    description:
      "During my MSc in Computer Science, I gained in-depth knowledge of advanced programming languages, modern web technologies and cloud computing. My studies included hands-on experience with computer system architecture and the latest developments in these fields.Completed a senior project on an Air Ticket Booking Website. Graduated with a good GPA",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Annai Velankanni College, Kanyakumari",
    duration: "June 2011 - June 2014",
    description:
      "Focused on web development, programming languages, and database management. Actively participated in seminars and hackathons, where I developed several web applications using HTML,Java, and .NET. Led my project team and completed  a senior project on an Air Ticket Booking Website. Graduated with a good GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: resume,
    icon: <MdOutlineLocalPhone  fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://wa.me/919150104744?text=Hi%20there!%20I’m%20interested%20in%20exploring%20job%20opportunities%20with%20your%20company.%20Looking%20forward%20to%20discussing%20how%20my%20skills%20align%20with%20your%20needs",
    icon: <SiWhatsapp fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/viji777",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/vijayalekshmi-mern/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

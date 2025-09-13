import blog from '.././assets/blog.png'
import fee from '.././assets/fee.png'
import calculator from '.././assets/calculator.png'
import chair from '.././assets/chair.png'
import cofeeshop from '.././assets/cofeeshop.png'
import crud from '.././assets/crud.png'
import currencyconverter from '.././assets/currencyconverter.png'
import ecommerce from '.././assets/ecommerce.png'
import furni from '.././assets/furni.png'
import password from '.././assets/password.png'
import smartui from '.././assets/smartui.png'
import sunglasses from '.././assets/sunglasses.png'
import tictoc from '.././assets/tictoc.png'
import todo from '.././assets/todo.png'
import uni from '.././assets/uni.png'
import userlist from '.././assets/userlist.png'
import weather from '.././assets/weather.png'
import editor from '.././assets/editor.png'
import codereviewer from '.././assets/codereviewer.png'
export const featuredProjects = [
  {
    id: 1,
    title: "Blog-Application",
    description: "Built a secure full-stack Blog Application with user authentication and seamless post management (CRUD). Delivered responsive UI, detailed post views, and optimized performance for an engaging user experience.",
    image:blog,
    tech: ["React", "Node.js", "MongoDB Atlas", "Express","jwt","bcryptjs","cors","Mongoose"],
    demoLink: "https://frontend-of-mern-crud.vercel.app",
    codeLink: "",
    featured: true
  },
  {
  id: 2,
  title: "Photo Editing App",
  description: "A modern photo editor app built with Next.js, featuring background removal, custom backgrounds, and editing adjustments.Edit your images effortlessly and download them in multiple formats (JPG, PNG, WebP). " ,

  image:editor,
  tech: [
  "Next.js",
  "React",
  "React DOM",
  "Tailwind CSS",
  "Lucide React",
  "Sharp",
  "Canvas"
],

  demoLink: "https://image-editing-app-one.vercel.app/",
  codeLink: "https://github.com/mustafa-mmd/Image-editing-app",
  featured: true
},

  {
    id: 3,
    title: "Fee Management System",
    description: "Developed a full-stack Fee Management System with real-time fee tracking and secure payment simulation. Designed a responsive interface to simplify student management and streamline transactions.",
    image:fee,
    tech: ["React", "Node.js", "MongoDB Atlas", "Express","jwt","bcryptjs","Mongoose"],
    demoLink: "https://fee-management-system-frontend.vercel.app",
    codeLink: "https://github.com/mustafa-mmd/fee-management-system-frontend",
    featured: true
  },
  {
    id: 4,
    title: "Ai Power Code reviewer",
    description: "An AI-powered code reviewer built with the MERN stack, leveraging the Gemini API to analyze code.It provides smart suggestions and improvements to help developers write cleaner, more efficient code",
    image:codereviewer,
    tech: ["React", "Node.js", "Express",'Gemini Api','highlight.js',"Prismjs",'react-markdown','react-simple-code-editor'],
    demoLink: "https://ai-power-code-reviewer-frontend.vercel.app/",
    codeLink: "https://github.com/mustafa-mmd/ai-power-code-reviewer-frontend",
    featured: true
  },
  {
    id: 13,
    title: "Sunglasses Store",
    description: "An e-commerce website for a sunglasses store, featuring a sleek design and user-friendly interface. Showcases various sunglasses products with detailed views and smooth navigation. Built to provide an engaging shopping experience.",
    image:sunglasses,
    demoLink: "https://pakshades-8gz5.vercel.app/",
    codeLink: "https://github.com/mustafa-mmd/pakshades",
    tech: ["React", "Css", "emailjs Api", "Responsive Design","Add to cart", "Filteration","searching","material ui"]
  },
  
  
  {
    id: 6,
    title: "CRUD Operations App",
    description: "Developed a CRUD app with Node.js, Express, MongoDB, and EJS for dynamic rendering. Enabled seamless create, read, update, and delete operations with a clean UI and efficient backend.",
    image:crud ,
    tech: ["Node js", "Express js","Mongoose","MonogoDB","Ejs" ,"Tailwind CSS", "Dotenv","Serverless Https"],
    demoLink: "https://crud-operation-with-ejs.onrender.com",
    codeLink: "https://github.com/mustafa-mmd/crud-operation-with-ejs",
    featured: false
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: 7,
    title: "Currency Converter",
    description: "Built a responsive Currency Converter using HTML, CSS, and JavaScript with live exchange rate API integration. Delivered a simple, user-friendly interface for fast and accurate conversions.",
    image: currencyconverter,
    tech: ["Html", "Css", "Currency Converter API", "javaScript"],
    demoLink: "https://mustafa-mmd.github.io/currency-converter/",
    codeLink: "https://github.com/mustafa-mmd/currency-converter",
    featured: true
  },
  
  {
    id: 8,
    title: "Smart.UI Of House",
    description: "Time to get your house clean and organized with ease. Designed to promote fresh living and better air quality through a modern, user-friendly interface. A clean, responsive UI that blends simplicity with functionality.",
    image:smartui ,
    tech: ["Html", "Css", "Javascript", "Responsive Design","hover effects"],
    demoLink: "https://mustafa-mmd.github.io/Blog-Website-1/",
    codeLink: "https://github.com/mustafa-mmd/Blog-Website-1",
    featured: false
  },
  {
    id: 5,
    title: "Weather Application",
    description: "Built a responsive Weather App delivering real-time forecasts with temperature, humidity, wind speed, and conditions. Designed with an intuitive interface for quick and accurate updates.",
    image:weather,
    tech: ["Html", "Css", "JavaScript","Weather Api", "Responsive Design", "Search Functionality"],
    demoLink: "https://mustafa-mmd.github.io/weather-application/",
    codeLink: "https://github.com/mustafa-mmd/weather-application",
    featured: true
  },
  {
    id: 9,
    title: "Coffee Shop Website",
    description: "Designed a modern and visually appealing Coffee Shop website with HTML, CSS, and JavaScript. Focused on delivering an engaging user interface with smooth layouts and aesthetic visuals. Built as a static site to showcase brand identity and design creativity.",
    image:cofeeshop,
    tech: ["Html", "Css", "JavaScript", "Responsive Design"],
    demoLink: "https://mustafa-mmd.github.io/coffee-Shop/",
    codeLink: "https://github.com/mustafa-mmd/coffee-Shop",
    featured: true
  },
  {
    id: 10,
    title: "Furni Interior Design",
    description: "Crafted a sleek, responsive website for modern interior design, blending aesthetics with functionality. Showcased elegant, livable spaces to inspire and transform interiors.",
    image: furni,
    tech: ["Html", "Css", "Javascript", "Responsive Design", "hover effects", "Modern UI"],
    demoLink: "https://mustafa-mmd.github.io/ecommerce-websit/",
    codeLink: "https://github.com/mustafa-mmd/ecommerce-websit",
    featured: false
    
  },
  {
    id: 11,
    title: "Calculator",
    description: "A clean and responsive calculator built with HTML, CSS, and JavaScript. Designed for fast, accurate, and user-friendly calculations with a modern interface. Showcases core logic handling, interactive UI, and seamless usability across devices.",
    image:calculator,
    demoLink: "https://mustafa-mmd.github.io/calculator/",
    codeLink: "https://github.com/mustafa-mmd/calculator",
    tech: ["Html", "Css", "JavaScript", "Responsive Design","Calculator Logic"]
  },
  {
    id: 12,
    title: "Todo App",
    description: "A simple and efficient To-Do App designed for quick task management. Users can easily add new tasks and remove completed ones. Built with a clean UI to ensure a smooth and minimal experience.",
    image:todo,
    demoLink: "https://mustafa-mmd.github.io/todo-list-in-js/",
    codeLink: "https://github.com/mustafa-mmd/todo-list-in-js",
    tech: ["Html", "Css", "JavaScript", "Responsive Design", "Add and Remove Task", "Local Storage", "Task Counter"]
  },
  
  {
    id: 14,
    title: "Password Generator",
    description: "A secure password generator that creates strong, random passwords based on user-defined criteria. Features options for length and character types to ensure maximum security. Designed with a simple and intuitive interface for ease of use.",
    image:password,
    demoLink: "https://mustafa-mmd.github.io/passwordGenerator/",
    codeLink: "https://github.com/mustafa-mmd/passwordGenerator",
    tech: ["Html", "Css", "JavaScript", "Responsive Design", "Password Strength","Api"]
  },
  {
    id: 15,
    title: "University Website",
    description: "A modern and informative university website designed to provide essential information about courses, faculty, and campus life. Features a clean layout and responsive design for easy navigation across devices.",
    image:uni,
    demoLink: "https://react-website-two-ashy.vercel.app/",
    codeLink: "https://github.com/mustafa-mmd/react-university-website",
    tech: ["React", "Css", "Responsive Design", "React Router", "Component-Based Architecture"]
  },
  {
    id: 16,
    title: "Tic Tac Toe Game",
    description: "An interactive Tic-Tac-Toe game built with a clean and responsive interface. Players can compete in a classic X vs O challenge with instant win detection. Designed for fun, simplicity, and smooth user experience.",
    image:tictoc,
    demoLink: "https://mustafa-mmd.github.io/Tic-Toc-Toe/",
    codeLink: "https://github.com/mustafa-mmd/Tic-Toc-Toe",
    tech: ["Html", "Css", "JavaScript", "Responsive Design", "Game Logic"]
  },
  {
    id: 17,
    title: "User List App",
    description: "A user management application built with React and Redux Toolkit. Allows users to add and delete user data efficiently. Features a responsive design and seamless state management for an optimal user experience.",
    image:userlist,
    demoLink: "https://66eeb11433a5bb45b23d3880--preeminent-cuchufli-05af48.netlify.app/",
    codeLink: "https://github.com/mustafa-mmd/react-redux-Tolkit-add-delete-userData",
    tech: ["React", "Redux Tolkit","Material Ui", "Css", "Responsive Design","Api", "Add and Delete user"]
  },
  {
    id: 18,
    title: "Modern Chair Store",
    description: "A sleek and modern chair store website designed to showcase a variety of chair designs. Features a clean layout, responsive design, and user-friendly navigation to enhance the shopping experience.",
    image:chair,
    demoLink: "https://mustafa-mmd.github.io/Modern-Chair/",
    codeLink: "https://github.com/mustafa-mmd/Modern-Chair",
    tech: ["Html", "Css","Responsive Design", "Logic for color changing of image", "E-commerce Design"]
  },
  // {
  //   id: 19,
  //   title: "E-commerce Website",
  //   description: "A modern e-commerce store built with API integration for dynamic product listings. Implemented Redux Toolkit for efficient state management, including seamless add-to-cart and remove functionality. Designed with a responsive UI.",
  //   image:ecommerce,
  //   demoLink: "https://silver-palmier-d293fe.netlify.app/",
  //   codeLink: "https://github.com/mustafa-mmd/my-ecommerce-store-redux-tolkit",
  //   tech: ["React","Redux Tolkit", "Api for products","Css","Responsive Design","Add to cart","material Ui"]
  // },
];
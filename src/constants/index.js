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
    p,
    k,
    shopify,
    carrent,
    jobit,
    threejs,
    b,
    Traffic_Project,
    relish,DH,DH_Icon
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
      x:200,
      y:850,
    },
    {
      id: "work",
      title: "Work",
      x:2000,
      y:1700,
    },
    {
      id: "project",
      title: "Project",
      x:200,
      y:3800,
    },
    {
      id: "contact",
      title: "Contact",
      x:200,
      y:200,
    },
    
  ];

  
  const greetings = "Hi, This is Jeff. Nice to meet you!"

  const introduction = "I'm currently a student pursuing my Master of Science in Computer Science degree at New York Univeristy Tandon School of Engineering"



  
  const services = [
    {
      title: "Web Developer",
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
      title: "Software Engineering Intern",
      company_name: "Digital Hainan",
      icon: DH_Icon,
      iconBg: "#E6DEDD",
      date: "Jun. 2023 - Aug. 2023",
      points: [
        "Revamped the website for a data-driven company using HTML, CSS, and JavaScript within the Vue framework, incorporating original features including custom-designed animations and interactive web page APIs "
        ,"Enhanced the performance and maintainability of the navigation system by restructuring the CSS architecture through preprocessor languages Sass and introducing new bundling tool Webpack, facilitating code modularization for improved clarity, reusability, and ease of comprehension by future developers."
        ,"Developed 5 back-end interfaces for the website project, employing Ajax to efficiently maintain and update data stored in a MySQL database, resulting in a 20% reduction in data processing time and significantly enhancing overall system responsiveness."
      ],
      website:"www.szhn.cn/"

    },



    {
      title: "Software Engineering Intern",
      company_name: "Pranos.ai",
      date: "Oct. 2022 - Apr. 2023",
      icon:p,
      points: [
        "Improved interactive designs for 3 video controlling screens on both Android and IOS system through HTML, CSS and JavaScript, successfully pushed the app to the testing stage in 2 months"
        ,"Optimized system functionality by performing systematic APIs diagnostics, refactoring class components into functional ones, and upgrading ES5 to ES6 features, resulting in saving at least 10% loading resource"
        ,"Developed immersive mobile-end pages with diverse responsive front-end interfaces using the React Native framework, implementing page-directing systems with Bottom Tab Navigator and supplementary surface (bottom sheets) under the React Native framework, utilizing Masonry Layout, React Icons, and customized box layout to enhance user retention"
      ],
      website:"https://pranos.ai/"
    },

    {
      title: "Data Analyst Intern",
      company_name: "Bosera Asset Management",
      icon: b,
      iconBg: "#383E56",
      date: "Mar 2021 - Jun 2021",
      points: [
        "Applying anomaly detection model such as Rupture to time series data from a portfolio of 10 mutual funds and stocks, generated study reports which visualized the causal effect to the team leader"
        ,"Tracked and visualized the historical performance of company’s stock and fund through VBA, Matplotlib, and Python"
        ,"Conducted in-depth data analysis to understand consumer behavior changes during the pandemic, informing the company's strategic response and delivered 10+ page report to the executives"
      ],
      website:"http://www.bosera.com/english/"

    },
    
  ];
  
  const projects = [
    {
      name: "Interactive Website",
      description:
        "Industry-level multi-pages website",
      tags: [
        {
          name: "Vue",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: DH,
      source_code_link: "https://vue-website-rebuild.netlify.app",
    },
    {
      name: "Social Media Application",
      description:
      "In my portfolio, I feature a dynamic full-stack photo-sharing social media application, skillfully crafted using React and enhanced with Google Cloud Console API. This integration allows for effortless user interactions like image uploads, downloads, and comments. The backbone of this application is a sophisticated back-end storage system, developed using Sanity, which incorporates multiple schemas to adeptly handle both front-end interactions and direct storage modifications. This ensures a seamless data flow within the Sanity/Client environment. Moreover, the application boasts a diverse and responsive UI/UX design, meticulously tailored for various device frames using HTML, CSS, and React components, showcasing my commitment to creating engaging and user-friendly digital experiences",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: relish,
      source_code_link: "https://time-to-relish.netlify.app",
    },
    {
      name: "Traffic-Sign-Classification (Data Science)",
      description:
        "The Traffic Sign Classification with CNN project on a web developer's portfolio showcases expertise in machine learning and its application in autonomous driving safety. It involves evaluating various Convolutional Neural Network models like LeNet5, ResNet50, VGG16, and InceptionV3 for their ability to recognize graffitied or damaged traffic signs. Key techniques include data augmentation for real-world simulation and transfer learning for model adaptability. Using Python, Jupyter Notebooks, and Kaggle datasets, the project demonstrates the vital role of robust machine learning models in enhancing the safety and reliability of self-driving car technology.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "Transfer Learning",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: Traffic_Project,
      source_code_link: "https://github.com/JeffereyChasing/Traffic-Sign-Classification",
    },
  ];
  
  export { services, technologies, experiences, projects,greetings,introduction};
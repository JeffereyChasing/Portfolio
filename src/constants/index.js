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
    relish,DH,DH_Icon,project_hotel
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
      x:300,
      y:850,
    },
    {
      id: "work",
      title: "Work",
      x:2000,
      y:2000,
    },
    {
      id: "project",
      title: "Project",
      x:200,
      y:4300,
    },
    {
      id: "contact",
      title: "Contact",
      x:200,
      y:7000,
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
        "Improved interactive designs for 3 video controlling screens on both Android and IOS system through HTML, CSS and JavaScript, successfully pushed the app to the testing stage"
        ,"Optimized system functionality by performing systematic APIs diagnostics, refactoring class components into functional ones, and upgrading ES5 to ES6 features, resulting in saving loading resource"
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
      "As a key initiative in my web development portfolio, I led the revitalization of a website for a data-driven company, leveraging my expertise in HTML, CSS, and JavaScript within the Vue framework. This project was marked by the integration of innovative and original features, including custom-designed animations and interactive APIs, aimed at elevating the user experience and interface engagement. A critical aspect of my work involved enhancing the website's performance and maintainability. To achieve this, I restructured the CSS architecture, utilizing the Sass preprocessor language and introducing Webpack as a new bundling tool. This strategic overhaul not only improved the site’s navigation system but also significantly enhanced the modularity, clarity, and reusability of the code, thereby ensuring ease of understanding and adaptability for future development efforts."
      ,

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
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
      ],
      image: DH,
      source_code_link: "https://vue-website-rebuild.netlify.app",
    },




    {
      name: "Apartment Searching Application",
      description:
      "I designed and implemented a dynamic web application to facilitate apartment searches, utilizing HTML, CSS, and JavaScript for an interactive and user-friendly front-end. The application allows users to filter apartments based on various criteria such as the number of bedrooms and pet policies. To support these functionalities, I built a customized API with Python, enabling efficient data handling and communication between the front-end and back-end. Additionally, I designed a robust MySQL database schema to store user-input information securely. To ensure user data security, I implemented a secure login system, incorporating bcrypt hashing for password protection and parameterized queries to prevent SQL injection attacks. This comprehensive approach not only provides a seamless user experience but also ensures high security and data integrity.",
      tags: [
        {
          name: "HTML,CSS,JavaSCript",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: project_hotel,
      source_code_link: "https://github.com/JeffereyChasing/DataBase_Project/tree/laptop",
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

    const text = [

      {
        key: '1',
        label: 'This is panel header 3',
        children: `1`
      },
    
    
    ]
  
  export { services, technologies, experiences, projects,greetings,introduction,text};
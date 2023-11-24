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
    tripguide,
    threejs,
    b
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
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
      company_name: "Pranos.ai",
      date: "Oct. 2022 - Apr. 2023",
      icon:p,
      points: [
        "Optimized user interface in both Android and IOS systems: changed the inline style of different headers and updated web design using JavaScript and TypeScript",
        "Debugged multiple APIs, converted multiple class components into functional components, updated ES5 features to ES6 features without breaking functions' existing functionality",
        "Created multiple front-end screens with responsive features for the Pranos.ai mobile app using React Native",
      ],
    },
    {
      title: "Marketing Intern",
      company_name: "Klatch",
      icon: k,
      iconBg: "#E6DEDD",
      date: "Aug. 2022 - Oct. 2022",
      points: [
        "Conducted research on potential consumers to create brand messaging that boosted the platform's customer base on major social platforms such as Instagram, LinkedIn, and Facebook",
        "Analyzed and offered constructive suggestions about the UI/UX design from both employee and consumer perspectives to improve user experience",
        "Used NLP algorithm and text mining to extract the unstructured data and translate it to structured data from social media to forecast the future marketing trend"
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Bosera Asset Management",
      icon: b,
      iconBg: "#383E56",
      date: "Mar 2021 - Jun 2021",
      points: [
        "Analyzed multiple publicly offered funds and stocks based on their historical data and presented the possible reasons that could explain specific fluctuations in their performances",
        "Analyzed and completed the registration of different seasonal sales data and visualized them through graphs",
        "Monitored and analyzed over 20,000 customers' activity data using Python to uncover crucial variables driving user adoption and provided PMs with solution"

      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      image: carrent,
      source_code_link: "https://github.com/",
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
      image: jobit,
      source_code_link: "https://github.com/JeffereyChasing/Social_media",
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
      image: tripguide,
      source_code_link: "https://github.com/JeffereyChasing/Traffic-Sign-Classification",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};
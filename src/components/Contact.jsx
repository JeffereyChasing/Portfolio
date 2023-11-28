import React, { useRef, useState,useEffect } from "react";
import { motion,useAnimationControls } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github,linkedin } from "../assets";
import Icon from "supercons"



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define your variants
  const boxShadowVariants = {
    initial: {
      boxShadow: "5px 5px 20px 10px green",
      
    },
    animate: {
      boxShadow: "10px 10px 40px 20px violet",
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
      
    }
  };

  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start({ 
      boxShadowVariants

     })
  }, []) 




  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dzdcgdj",
        "template_ofu3vb8",
        {
          from_name: form.name,
          to_name: "Yanqin Wu",
          from_email: form.email,
          to_email: "wu1149823510@gmail.com",
          message: form.message,
        },
        "LmhC71XlupRQJwZAj"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const [showBox, setShowBox] = useState(false); 
  
    const handleClick = () => { 
        setShowBox(!showBox); 
    };



  return (

    
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        initial="initial"
        animate={controls}
        variants={boxShadowVariants}
        className='flex-[0.75] bg-black-100 p-8'

      
      
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          style={{}}
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="This"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
             
            />
          </label>

          <div style={{display:"flex", gap:"300px"}}>


            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <div style={{display:"flex",gap:"10px"}}>
              <div onClick={() => window.open("https://github.com/JeffereyChasing?tab=repositories")}
                className='black-gradient w-10 h-10 rounded-full items-center cursor-pointer'>
                <img src={github} />
              </div>
              {/*小圆形图片链接*/}
              <div onClick={() => window.open("https://www.linkedin.com/in/yanqin-wu/")}
                className='black-gradient w-10 h-10 rounded-full items-center cursor-pointer'>
                <img style={{borderRadius:"6px"}} src={linkedin} />
              </div>
              {/*小圆形图片链接*/}
            </div>

          </div>

        </form>

        
        
      </motion.div>



















      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        style={{marginLeft:"100px"}}
      >

        <button style={{ backgroundColor: "red" }}
          onClick={handleClick}>
          Box Shadow
        </button>
        {showBox && (
          <div className="box">
            <h1 style={{ color: "green" }}>
              Welcome To Geeksforgeeks!!
            </h1>
            <p>
            </p>
          </div>
        )}

    


      </motion.div>




            
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
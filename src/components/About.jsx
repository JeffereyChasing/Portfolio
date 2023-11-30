import React from 'react'
import Tilt  from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services,greetings,introduction} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = (service)=>{
  return(


    <Tilt className="w-[200px] mr-5" 
    tiltReverse={false}
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    glareEnable
    glareColor='violet'
    glarePosition='all'
    glareMaxOpacity={0.8}
    perspective={700}
    transitionEasing='cubic-bezier(.03,.98,.52,.99)'
    transitionSpeed={200}
    
    >
      <motion.div variants={fadeIn("right","spring",0.5*(service.index),0.75)}className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'>
        
        <div className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
        style={{boxShadow:"7px 1px 20px 5px darkkhaki"}}>
          <img src={service.icon} className='w-16'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
        </div>


      </motion.div>
    </Tilt>

  )
}


const About = () => {
  return (
    <motion.div style={{scale:1,display:"flex",justifyContent:"center"}}>
      <motion.div style={{backgroundColor:""}}>
      <motion.div variants={textVariant()} style={{backgroundColor:""}}>
        <p className= {`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants = {fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
      <p><span style={{fontSize:"30px",fontWeight:"bold",color:"white"}}>My</span> adventure in software development began with a single line of Python code, a moment that ignited a burning passion for this boundless field. This wasn't just programming; it was the beginning of a love affair with technology's transformative power. Driven by this passion, I pursued and achieved a <b style={{color:"violet"}}>Bachelors degree in Computer Science and Data Science from New York University</b>, a journey that was as exhilarating as it was enlightening.
      </p>
      <br></br>
      <p>But my quest didn't end at graduation. I'm currently immersed in the world of advanced computing, pursuing a <b style={{color:"violet"}}>Master of Science in Computer Science at NYU Tandon School of Engineering</b>. This isn't just education; it's a pilgrimage into the depths of technology. And it's not just about theory; my journey is also paved with real-world experiences, gained through diverse and enriching internships across various industries, blending virtual and physical realms.
      </p>
      <br></br>
      <p>Join me as I continue to chase this dream, a journey where each line of code is a heartbeat, each project a new adventure, and the future a canvas waiting for our imagination
      </p>


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service,index)=>(
          <ServiceCard key={service.title} index = {index} {...service}/>
        ))}

      </div>
      </motion.div>








      <div class="container" >
    <div class="moon"></div>
    <div class="orbit">
      <div class="rocket-box">
        <div class="rocket">
          <span class="cockpit"></span>
          <span class="engine"></span>
          <span class="flanks"></span>
        </div>
      </div>
    </div>
  </div>












    </motion.div>
  )
}

export default SectionWrapper(About,"about") 
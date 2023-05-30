import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = (service)=>{
  return(


    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*(service.index),0.75)}className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={service.icon} className='w-16'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>

        </div>
      </motion.div>
    </Tilt>

  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants = {fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
      NYU was founded on the belief that a student’s identity should not dictate the ability for them to access higher education. That sense of opportunity for all students, of all backgrounds, remains a part of who we are today and a critical part of what makes us a world class university. Our community embraces diversity, in all its forms, as a cornerstone of the NYU experience. 
      We would like to better understand how your experiences would help us to shape and grow our diverse community. Please respond in 250 words or less. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service,index)=>(
          <ServiceCard key={service.title} index = {index} {...service}/>
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About,"about") 
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { color, motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion'


const CardWithGlow = () => {
  const glowVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1
    }
  }
}
const ExperienceCard = ({experience}) =>{
  return (
  <VerticalTimelineElement contentStyle={{background:"#1d1836", color:"#fff"}}
  contentArrowStyle={{borderRight:"10px solid #232631"}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon = {<div ><a href={experience.website}><img style={{}} src = {experience.icon}/></a></div>}>

    <div>
      <h3 className = "font-bold text-[violet] text-[20px]">{experience.title}</h3>
      <p>{experience.company_name}</p>
    </div>

    <ul className = "mt-5 list-disc pl-5 text-[15px]">
      {experience.points.map((point,index)=>(
        <li>
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
    <motion.div style={{display:"flex",flexDirection:"column", marginLeft:"170px"}}>

      <motion.div whileHover={{transition:"ease", backgroundColor:"violet"}} whileTap={{ opacity:0.5}}>
        <p className= {`${styles.sectionSubText}`}>Past Journey</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex  '>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key = {index} experience = {experience}/>
          ))} 
        </VerticalTimeline>
      </div>

    </motion.div>
    </>
  )
}

export default SectionWrapper(Experience,"work","violet") 
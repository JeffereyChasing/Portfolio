import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const school = () =>{
    return(
        <Tilt className = "xs:w-[250px] w-full background-[red]">
            <motion.div variants={fadeIn("right","spring",0.5*(service.index),0.75)}className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    123
                </div>
            </motion.div>
        </Tilt>
    )
}



const Education = () => {
  return (
    <Tilt className = "xs:w-[250px] bg-[transparent]">
        <motion.div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img />
            </div> 
        </motion.div>
    </Tilt>
  )
}

export default SectionWrapper(Education,"education") 
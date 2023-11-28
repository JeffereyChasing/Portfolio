import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'

const ProjectCard = (project)=>{
  return(
    <motion.div variants={fadeIn("up","spring",0.5*project.index,0.5)}>
      <Tilt className='bg-tertiary p-5 rounded-2xl  w-full sm:w-[360px]'>
        <div className='relative w-full h-[230px]'>
          <img src={project.image} className='w-full h-full object-fill rounded-[15px]'/>
        </div>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={()=>window.open(project.source_code_link)}
          className='black-gradient w-10 h-10 rounded-full items-center cursor-pointer'>
            <img src={github}/>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[violet] font-bold'>{project.name}</h3>
          <h4 className='mt-1 text-secondary'>{project.description}</h4>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {project.tags.map((tag)=>(
            <p className= {`${tag.color} text-[14px]`}> {tag.name} </p>
          ))}
        </div>
      </Tilt>
    </motion.div>

  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className= {`${styles.sectionSubText}`}>Works</p>
      <h2 className={styles.sectionHeadText}>My Projects</h2>
    </motion.div>


    <div className='w-full'>
      <motion.p variants = {fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
      NYU was founded on the belief that a student’s identity should not dictate the ability for them to access higher education. That sense of opportunity for all students, of all backgrounds, remains a part of who we are today and a critical part of what makes us a world class university. Our community embraces diversity, in all its forms, as a cornerstone of the NYU experience. 
      We would like to better understand how your experiences would help us to shape and grow our diverse community. Please respond in 250 words or less. 
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key ={`project-${index}`}
        {...project} index={index}/>
      ))}

    </div>
    {/* pROJECTS*/}


    </>
  )
}

export default SectionWrapper(Works,"work")
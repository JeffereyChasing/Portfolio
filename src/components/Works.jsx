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
      <Tilt className='bg-tertiary p-5 rounded-2xl  w-full sm:w-[300px] mr-10'>
        <div className='relative w-full h-[180px]'>
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
    <div>
    <motion.div variants={textVariant()}>
      <p className= {`${styles.sectionSubText}`}>Works</p>
      <h2 className={styles.sectionHeadText}>My Projects</h2>
    </motion.div>


    <div className='w-full'>
      <motion.p variants = {fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
      <span style={{fontSize:"30px",fontWeight:"bold",color:"white"}}>As</span> a web developer, I firmly believe in the adage <b style={{color:"violet"}}>"Practice makes perfect."</b> My educational journey, enriched by both academic learning and online resources, has been fundamental in shaping my skills. However, I recognize that the true essence of a Software Engineer's growth lies in the application of this knowledge.
      <br></br>
      <br></br>

During my college years, I proactively pursued internships and engaged in several independent projects. These experiences were not just about gaining practical insight into the industry; they were crucial in bridging the gap between theoretical understanding and real-world application.

Below, I showcase three key projects that I have passionately worked on. These encompass two focused on <b style={{color:"violet"}}>Software Development</b> and one in the realm of <b style={{color:"violet"}}>Machine Learning.</b> Each project represents a step in my continuous journey of learning, applying, and evolving as a web developer.
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key ={`project-${index}`}
        {...project} index={index}/>
      ))}

    </div>
    {/* pROJECTS*/}


    </div>
  )
}

export default SectionWrapper(Works,"work")
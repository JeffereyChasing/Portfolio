import {motion} from "framer-motion"
import {styles} from "../styles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component,idName,color) => function HOC(){
    if (color){
        return (
            <motion.section variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.1}}
            className='w-screen'
            style={{display:"flex", justifyContent:"center",marginTop:"120px",marginBottom:"20px",
            borderRadius:"20px",backgroundColor: 'rgba(199, 100, 241, 0.1)',
            boxShadow:`5px 2px 22px 25px ${color}`,
            paddingTop:"30px",
            paddingBottom:"30px"
            }}
            >
                <Component/>

            </motion.section>
        )
    }else{
        return (
            <motion.section variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.1}}
            className='w-screen'
            style={{display:"flex", justifyContent:"center",marginTop:"120px",marginBottom:"20px",
            borderRadius:"20px",backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow:`5px 2px 22px 25px ${color}`,
            paddingTop:"30px",
            paddingBottom:"30px"
            }}
            >
                <Component/>

            </motion.section>
        )
       
    }
}

export default SectionWrapper
import {motion} from "framer-motion"
import {styles} from "../styles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component,idName,position) => function HOC(){
    if (position === "middle"){
    return (
        <motion.section variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true,amount:0.1}}
        className={` relative z-0`}
        style={{display:"flex", justifyContent:"center",marginTop:"200px"}}
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
            style={{display:"flex", justifyContent:"center",marginTop:"120px"}}
            >
                <Component/>

            </motion.section>
        )
    }
}

export default SectionWrapper
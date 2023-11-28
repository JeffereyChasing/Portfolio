import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from "../styles";
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets"

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className = 'w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        <Link to="/" className = "flex items-center gap-2" onClick={()=>{setActive("");window.scrollTo(0,0);}}>

          <img src ={logo} alt="logo" className = "w-9 h-9 object-contain"/>
          
          <p className=" text-[18px] font-bold cursor-pointer"> Jeff's <span className = "sm:block hidden"> Portfolio </span> </p>

        </Link>


        <ul className='list-none hidden sm:flex flex-row gap-8'>

            {navLinks.map((Link)=>(
              <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[15px]`} 
              onClick={() => { setActive(Link.title); window.scrollTo(Link.x,Link.y)}}
              id='nav-element'
              >
                  <a href ={`#${Link.id}`}> {Link.title} </a>
              </li>
            ))}

        </ul>






      </div>
    </nav>

  )
}

export default Navbar
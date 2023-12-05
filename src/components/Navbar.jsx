import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from "../styles";
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets"
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { FaStarHalfAlt } from "react-icons/fa";

const Navbar = () => {

  const [active, setActive] = useState("");
  const [bar,setBar] = useState(true);



  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        {bar ? (
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <HiOutlineMenu color='silver'
                className="scale-[3] text-white mr-5"
                onClick={() => setBar(false)}
              />

              <p className=" text-[18px] font-bold cursor-pointer">
                {" "}
                Jeff's <span className="sm:block hidden"> Portfolio </span>{" "}
              </p>
            </Link>

            <ul className="list-none hidden sm:flex flex-row gap-8">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[15px]`}
                  onClick={() => {
                    setActive(Link.title);
                    window.scrollTo(Link.x, Link.y);
                  }}
                  id="nav-element"
                >
                  <a href={`#${Link.id}`}> {Link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full h-[40px] flex justify-between items-center max-w-7xl mx-auto ">
            <FaStarHalfAlt 
              className="scale-[3] text-white mr-5 mt-[20px]"
              onClick={() => setBar(false)} color='violet'
            />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar
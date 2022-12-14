import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [underBar, setUnderBar] = useState(-1);


  return (
    <div
      className={`flex  
      md:bg-gradient-to-b from-black to-trasparent h-[7rem] bg-opacity-80 xl:backdrop-blur-sm md:animate-[appear_1s_ease-in-out]
       
      fixed z-40  top-0 justify-around text-white items-center h-[4rem] w-full   drop-shadow-xl`}
    >
      <div className="  hidden xl:flex  relative justify-center items-center top-[1.5rem] h-[4rem] w-full">
        
        <Fade>
          <div className="absolute mr-[55rem] cursor-pointer">
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="totop"
            >
              <h1 className="opacity-0 xl:opacity-100">
                CIPRIAN
                <br /> DICULESCU
              </h1>
              <h1 className="text-neutral-200 text-thin opacity-0 xl:opacity-100">
                INSTRUCTOR AUTO
              </h1>
            </Link>
          </div>

          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-300}
            href="About"
          >
            <h2 className="relative text-xl px-8  font-sans-serif cursor-pointer  hover:text-slate-200 ">
              Despre mine
              <span
                className={` ${
                  underBar == 0 ? "block" : "hidden"
                } absolute top-10  left-10  h-[3px] w-[5rem] bg-sky-500`}
              ></span>
            </h2>
          </Link>

          <Link
            activeClass="active"
            to="permis"
            spy={true}
            smooth={true}
            offset={-70}
            href="Permis"
          >
            <h2 className="relative text-xl px-8  font-sans-serif cursor-pointer  hover:text-slate-200 ">
              Obtinere permis
              <span
                className={` ${
                  underBar == 1 ? "block" : "hidden"
                } absolute top-10  left-10  h-[3px] w-[7rem] bg-sky-500`}
              ></span>
            </h2>
          </Link>
          <Link
            activeClass="active"
            to="Tarife"
            spy={true}
            smooth={true}
            offset={0}
            href="Tarfie"
          >
            <h2 className="text-xl px-8  font-regular font-sans-serif  cursor-pointer hover:text-slate-200 ">
              Tarife
              <span
                className={` ${
                  underBar == 2 ? "block" : "hidden"
                } relative top-4    h-[3px] left-2 w-[2.3rem] bg-sky-500`}
              ></span>
            </h2>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            href="Contact"
          >
            <h2 className="relative text-xl px-8  font-sans-serif cursor-pointer hover:text-slate-200 ">
              Contact
              <span
                className={` ${
                  underBar == 3 ? "block" : "hidden"
                } absolute top-10  left-10 h-[3px] w-[3.3rem] bg-sky-500`}
              ></span>
            </h2>
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Navbar;

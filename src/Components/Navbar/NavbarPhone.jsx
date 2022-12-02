import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";
const NavbarPhone = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const[activAnim,setActivAnim]=useState(false);
  const [layerAppear,setLayerAppear]=useState(false)
  const hamburgerHandle = () => {
    if(hamburgerClicked)
   {  
    setActivAnim(true)
    setLayerAppear(false)
     setTimeout(()=>{
      setHamburgerClicked((prev) => !prev);
      setActivAnim(false)
    },450)
    
  }
    else
    {
      setLayerAppear(true)
      setTimeout(()=>{
        setHamburgerClicked(prev=>!prev)
      },450)
   
    }
   
  };
  return (
    <div className="flex xl:hidden fixed left-0 top-0 z-50 w-full h-[10rem]">
      <div
        onClick={hamburgerHandle}
        className="absolute  flex z-50 w-[4rem] h-[3rem] flex-col  top-4 left-8 "
      >
        <div className="absolute top-[-8px] left-[-5px] rounded-[50%] bg-black w-[30px] h-[30px]" />
        <div
          className={`${
            hamburgerClicked && "animate-[linerotatef_.5s_ease-in-out_forwards]"
          } ${activAnim && "animate-[linerotatereversef_.5s_ease-in-out_forwards]"} relative w-[1.2rem] ring-1 ring-black h-[2px]  bg-white`}
        />
        <div
          className={` ${
            hamburgerClicked && "hidden"
          } relative w-[.8rem]  ring-1 ring-black  h-[2px] mt-[4px] bg-white`}
        />
        <div
          className={`  ${
            hamburgerClicked && "animate-[linerotates_.5s_ease-in-out_forwards] "
          } ${activAnim && "animate-[linerotatereverses_.5s_ease-in-out_forwards]"} relative w-[1.2rem] ring-1 ring-black h-[2px] mt-[4px] bg-white`}
        />
      </div>
          <div  className={`h-screen ${layerAppear ? "animate-[layerappear_.5s_ease-in-out_forwards]":"hidden"}  bg-opacity-50 bg-black`} />
      <div
        className={` ${
          !hamburgerClicked &&"hidden"
        } 
        animate-[slideright_.4s_ease-in-out]
        ${ activAnim && "animate-[menudisappear_.4s_ease-in-out_forwards]" } absolute text-white    bg-slate-800   items-center  h-screen  whitespace-nowrap `}
      >
        <Fade>
          <div className="relative top-4">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-300}
              href="despre mine"
            >
              <h2 className={`relative ${activAnim && "hidden"} text-xl top-[4rem]  px-8 font-sans-serif cursor-pointer  hover:text-slate-200 `}>
                Despre mine
              </h2>
            </Link>

            <Link
              activeClass="active"
              to="permis"
              spy={true}
              smooth={true}
              offset={-100}
              delay={0}
              href="obtinere permis"
            >
              <h2 className={`relative ${activAnim && "hidden"} text-xl top-[6rem] px-8  font-sans-serif cursor-pointer  hover:text-slate-200 `}>
                Obtinere permis
              </h2>
            </Link>
            <Link
              activeClass="active"
              to="Tarife"
              spy={true}
              smooth={true}
              offset={-100}
              href="tarife"
            >
              <h2 className={`relative ${activAnim && "hidden"} text-xl top-[8rem] px-8  font-regular font-sans-serif  cursor-pointer hover:text-slate-200 `}>
                Tarife
              </h2>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-250}
              href="contact"
            >
              <h2 className={`relative ${activAnim && "hidden"} top-[10rem] text-xl px-8  font-sans-serif cursor-pointer hover:text-slate-200 `}>
                Contact
              </h2>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default NavbarPhone;

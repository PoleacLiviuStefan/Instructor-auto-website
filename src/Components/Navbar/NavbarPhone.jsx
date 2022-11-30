import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";
const NavbarPhone = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const hamburgerHandle = () => {
    setHamburgerClicked((prev) => !prev);
  };
  return (
    <div className="flex xl:hidden fixed left-0 top-0 z-50 w-full h-[10rem]">
      <div
        onClick={hamburgerHandle}
        className="absolute flex z-50 w-[4rem] h-[3rem] flex-col  top-4 left-8 "
      >
        <div
          className={`${
            hamburgerClicked && "top-[5.8px]  rotate-[135deg]"
          }  relative w-[1.2rem] ring-1 ring-black h-[2px]  bg-white`}
        />
        <div
          className={` ${
            hamburgerClicked && "rotate-[45deg] "
          } relative w-[1.2rem]  ring-1 ring-black  h-[2px] mt-[4px] bg-white`}
        />
        <div
          className={` ${
            hamburgerClicked && "hidden"
          } relative w-[1.2rem] ring-1 ring-black h-[2px] mt-[4px] bg-white`}
        />
      </div>

      <div
        className={` ${
          !hamburgerClicked && "hidden"
        }  absolute text-white    bg-slate-800   items-center  h-screen w-[12rem ] whitespace-nowrap animate-[slideright_.4s_ease-in-out_forwards]`}
      >
        <Fade>
          <div className="relative top-4">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-300}
            >
              <h2 className="relative text-xl top-[4rem]  px-8 font-sans-serif cursor-pointer  hover:text-slate-200 ">
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
            >
              <h2 className="relative text-xl top-[6rem] px-8  font-sans-serif cursor-pointer  hover:text-slate-200 ">
                Obtinere permis
              </h2>
            </Link>
            <Link
              activeClass="active"
              to="Tarife"
              spy={true}
              smooth={true}
              offset={-100}
            >
              <h2 className="relative text-xl top-[8rem] px-8  font-regular font-sans-serif  cursor-pointer hover:text-slate-200 ">
                Tarife
              </h2>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-250}
            >
              <h2 className="relative top-[10rem] text-xl px-8  font-sans-serif cursor-pointer hover:text-slate-200 ">
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

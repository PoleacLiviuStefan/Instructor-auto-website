import React from "react";
import { FaArrowDown } from "react-icons/fa";
import CardHero from "./CardHero";
import { AiOutlinePhone } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import About from "../About/About";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Car from "../Car/Car";
import Contact from "../Contact/Contact";
import DrivingDocuments from "../School/DrivingDocuments";
import Permis from "../Permis/Permis";
import { Link, animateScroll as scroll } from "react-scroll";
import Prices from "../Prices/Prices";
import Footer from "../Footer/Footer";
const Hero = () => {
  return (
 
    <div className="absolute top-0 flex justify-center items-center  w-[100%] h-[420rem] xl:h-[270rem]">
      <div
        name="top"
        className="absolute  z-20 top-0 h-[6rem] w-full bg-gradient-to-b from-black to-transparent "
      />

      <div className="relative bg-fixed  flex justify-center bg-heromobile  md:bg-hero drop-shadow-2xl bg-no-repeat bg-cover w-full top-0 h-full">
      <Fade >
        <div
          className="relative top-[20rem]
     text-white text-center"
        >
         
            <h1 className="md:text-6xl text-4xl font-bold">
              Instructor <span className="text-sky-500">Auto</span>
            </h1>
            <span className="absolute w-[50rem] h-[2px] bg-cyan-400 rounded-xl left-[-12rem]  top-[9.5rem] " />
            <h2 className="relative md:text-3xl text-xl font-semibold top-10">
              CIPRIAN DICULESCU
            </h2>

            <h2 className="relative md:text-3xl  text-xl text-center md:top-20 top-24">
              Buzau
            </h2>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-200}
              href="About"
            >
              {" "}
              <button className="relative md:left-10 flex justify-center items-center top-40 bg-sky-600 w-[20rem] h-10 rounded-2xl ring-1 ring-white border-solid border-white hover:bg-sky-500">
                Afla mai multe{" "}
                <BsChevronDown className="absolute text-xl ml-[8.5rem]" />{" "}
              </button>
            </Link>
        
        </div>
        
        <div className="absolute justify-around  w-[25rem] md:w-[90rem] flex flex-col items-center xl:flex-row mb-[15rem] top-[50rem] ">
       
            <a href="tel:+40-761-300-344">
              <CardHero
                slider="right"
                title="Telefon: 0761 300 344"
                logo={<AiOutlinePhone />}
              />
            </a>
        
       
            <CardHero
              slider="top"
              title="Permis Categoria B"
              logo={<TbCertificate />}
            />
         
        
            <CardHero
              slider="left"
              title="+75% Rata De Promovabilitate"
              logo={<AiOutlineCheck />}
            />
          
        </div>
        </Fade>
        <About />
        <Car />

        <DrivingDocuments />
        <Prices />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Hero;

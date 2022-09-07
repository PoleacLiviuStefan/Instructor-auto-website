import React from "react";
import CarCard from "./CarCard";
import Fade from "react-reveal/Fade";
const Car = () => {
  const color = [
    "ring-orange-500",
    "ring-indigo-600",
    "ring-emerald-500",
    "ring-cyan-500",
    "ring-indigo-600",
    "ring-rose-600",
  ];
  return (
    <div className="absolute backdrop-blur-sm bg-opacity-90 flex flex-col items-center justify-center w-full bg-slate-800 h-[120rem]  lg:h-[70rem] lg:top-[130rem] top-[185rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]">
      <div className="w-full flex flex-col   justify-center items-center">
        <Fade left delay={400}>
          <div className="relative bg-slate-900 w-full flex justify-center h-[17rem]">
            <h1 className="relative left-[-5rem] text-lg lg:left-[5rem] lg:w-[50rem] w-[10rem]  text-white  h-[7rem]    lg:text-3xl  font-bold top-32">
              Volkswagen Polo S Cross 2008 1.9 TDI Cutie Manuală
              <div className="bg-presentation bg-no-repeat bg-cover   absolute top-[-2rem] lg:top-[-7rem] left-[10rem]  lg:left-[45rem] w-[10rem] lg:w-[20rem] h-[7.5rem] lg:h-[15rem]"></div>
              <span className="absolute w-[8rem] lg:w-[20rem] lg:w-[6rem] h-[2px] bg-cyan-400 rounded-xl top-24 left-0 lg:top-14 lg:left-[35rem]  " />
            </h1>
          </div>
        </Fade>
        <Fade right delay={400}>
          <div className="relative bg-slate-700  w-full flex justify-center h-[17rem]">
            <h1 className="relative left-[5rem] lg:w-[50rem] text-lg w-[10rem] lg:left-[-5rem]  text-white lg:text-2xl h-[7rem]    lg:text-3xl  font-bold top-32">
              Volkswagen Touran 2008 2.0 TDI Cutie Automată.
              <div className="bg-presentationleft bg-no-repeat bg-cover  absolute top-[-2rem] lg:top-[-7rem] left-[-11rem]  lg:left-[-20rem] w-[10rem] lg:w-[20rem] h-[7.5rem] lg:h-[15rem]"></div>
              <span className="absolute w-[8rem]  lg:w-[6rem] h-[2px] bg-cyan-400 rounded-xl top-24 left-0 lg:top-14 lg:left-5  " />
            </h1>
          </div>
        </Fade>
      </div>
      <div className="relative flex right-5 lg:right-0 flex-col items-center lg:items-baseline lg:items-none lg:grid lg:grid-cols-3  top-20 w-[70rem] h-full text-justify">
        <Fade delay={400}>
          <CarCard
            bordercolor={color[0]}
            backgr="bg-interior"
            description="   VW POLO  "
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[1]}
            backgr="bg-exterior"
            description="1.9 TDI"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[3]}
            backgr="bg-exterior3  "
            description="CUTIE MANUALĂ"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[2]}
            backgr="bg-automata1  "
            description="VW TOURAN"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[1]}
            backgr="bg-automata2  "
            description="2.0 TDI"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[0]}
            backgr="bg-automata3  "
            description="CUTIE AUTOMATĂ"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Car;

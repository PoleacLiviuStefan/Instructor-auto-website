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
    <div className="absolute backdrop-blur-sm bg-opacity-90 flex flex-col items-center justify-center w-full bg-slate-800 h-[120rem]  xl:h-[70rem] xl:top-[130rem] top-[185rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]">
      <div className="w-full flex flex-col   justify-center items-center">
        
          <div className="relative bg-slate-900 w-full flex justify-center h-[17rem]">
            <h1 className="relative left-[-5rem] text-xl xl:left-[5rem] xl:w-[50rem] w-[10rem]  text-white  h-[7rem]    xl:text-3xl  font-bold top-32">
              Volkswagen Polo S Cross 2008 1.9 TDI Cutie Manuala
              <div alt="Ciprian Diculescu-instructor auto VW POLO" className="bg-presentation bg-no-repeat bg-cover   absolute top-[-2rem] xl:top-[-7rem] left-[10rem]  xl:left-[45rem] w-[10rem] xl:w-[20rem] h-[7.5rem] xl:h-[15rem]"></div>
              <span className="absolute w-[5rem]  xl:w-[6rem] h-[2px] bg-cyan-400 rounded-xl top-[7rem] left-0 xl:top-14 xl:left-[35rem]  " />
            </h1>
          </div>
        
        
          <div className="relative bg-slate-700  w-full flex justify-center h-[17rem]">
            <h1  className="relative left-[5rem] xl:w-[50rem] text-xl w-[10rem] xl:left-[-5rem]  text-white xl:text-3xl h-[7rem]      font-bold top-32">
              Volkswagen Touran 2008 2.0 TDI Cutie Automata.
              <div alt="Ciprian Diculescu-instructor auto VW TOURAN" className="bg-presentationleft bg-no-repeat bg-cover  absolute top-[-2rem] xl:top-[-7rem] left-[-11rem]  xl:left-[-20rem] w-[10rem] xl:w-[20rem] h-[7.5rem] xl:h-[15rem]"></div>
              <span className="absolute w-[6rem]  xl:w-[6rem] h-[2px] bg-cyan-400 rounded-xl top-[7rem] left-0 xl:top-14 xl:left-5  " />
            </h1>
          </div>
      </div>
      <div className="relative flex right-5 xl:right-0 flex-col items-center xl:items-baseline xl:items-none xl:grid xl:grid-cols-3  top-20 w-[70rem] h-full text-justify">
        <Fade delay={400}>
          <CarCard
            bordercolor={color[0]}
            backgr="bg-interior"
            description="   VW POLO  "
            altimg="VolkswagenPoloSCrossCutieManuala"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[1]}
            backgr="bg-exterior"
            description="1.9 TDI"
            altimg="Motor1.9TDI"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[3]}
            backgr="bg-exterior3  "
            description="CUTIE MANUALA"
            altimg="CutieManuala"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[2]}
            backgr="bg-automata1  "
            description="VW TOURAN"
            altimg="VolkswagenTouranCutieAutomata"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[1]}
            backgr="bg-automata2  "
            description="2.0 TDI"
            altimg="Motor2.0TDI"
          />
        </Fade>
        <Fade delay={400}>
          <CarCard
            bordercolor={color[0]}
            backgr="bg-automata3   "
            description="CUTIE AUTOMATA"
            altimg="CutieAutomata"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Car;

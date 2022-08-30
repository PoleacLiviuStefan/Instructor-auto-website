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
    <div className="absolute backdrop-blur-sm bg-opacity-90 flex flex-col items-center justify-center w-full bg-slate-800 h-[90rem]  lg:h-[40rem] lg:top-[130rem] top-[185rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]">
      <h1 className="relative left-3  text-white text-2xl lg:text-3xl  font-bold top-10">
        Volkswagen model,motor,etc...
        <span className="absolute w-[20rem] lg:w-[24rem] h-[2px] bg-cyan-400 rounded-xl top-20 left-0 lg:top-14 lg:left-5  " />
      </h1>
      <div className="relative flex right-5 lg:right-0 flex-col items-center lg:items-baseline lg:items-none lg:grid lg:grid-cols-3  top-24 w-[70rem] h-full text-justify">
        <Fade delay={400}>
          <CarCard bordercolor={color[0]} />
        </Fade>
        <Fade delay={400}>
          <CarCard bordercolor={color[1]} />
        </Fade>
        <Fade delay={400}>
          <CarCard bordercolor={color[3]} />
        </Fade>
        <Fade delay={400}>
          <CarCard bordercolor={color[2]} />
        </Fade>
        <Fade delay={400}>
          <CarCard bordercolor={color[1]} />
        </Fade>
        <Fade delay={400}>
          <CarCard bordercolor={color[0]} />
        </Fade>
      </div>
    </div>
  );
};

export default Car;

import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const About = () => {
  return (
    <div className="absolute flex items-center flex-col lg:top-[80rem] top-[100rem] w-full md:h-[30rem] h-[77rem]  bg-slate-800 text-white bg-opacity-30 ">
      <Slide top delay={400}>
        <div className="relative flex top-10 w-full  flex-col items-center">
          <h2
            name="About"
            className="md:text-4xl text-2xl font-sans font-bold "
          >
            Despre Mine
          </h2>
          <span className="relative md:w-[10rem] w-[6rem] h-[2px] bg-sky-600 top-4" />
        </div>
      </Slide>
      <Fade delay={400}>
        <p className="relative top-24 lg:w-[70rem] w-[80%] text-justify">
          Instructor, 42 ani, cu atestat de instructor din 2009.
        </p>
      </Fade>
    </div>
  );
};

export default About;

import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const About = () => {
  return (
    <div className="absolute flex items-center flex-col xl:top-[80rem] top-[100rem] w-full xl:h-[30rem] h-[77rem]  bg-slate-800 text-white bg-opacity-30 ">
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
        <p className="relative top-24 leading-6 xl:w-[50rem] w-[80%] text-justify">
          Numele meu este Ciprian Diculescu, am 42 de ani și sunt instructor
          auto atestat încă din 2009.Scopul meu este de a te ajuta în învățarea
          adecvată a artei condusului pentru dobândirea permisului de categoria
          B.
          <br />
          Deprinderea cu succes a manevrelor auto reprezintă o prioritate pentru
          mine, deoarece un început corect te poate ajuta să circuli în
          siguranță și cu încredere.
          <br />
          Te ajut să devii un șofer, nu doar un conducător de autoturism.Ce mai
          aștepți?Contactează-mă și începem numaidecât!
        </p>
      </Fade>
    </div>
  );
};

export default About;

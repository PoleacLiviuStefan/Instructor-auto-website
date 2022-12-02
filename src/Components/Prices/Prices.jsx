import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Prices = () => {
  return (
    <div
      name="Tarife"
      className="absolute  flex items-center flex-col xl:top-[270rem] top-[420rem]  w-full h-[100rem] xl:h-[95rem]   bg-slate-800 text-white bg-opacity-100 "
    >
        <Fade >
        <div className="relative top-20">
          <h1 className="relative text-3xl xl:text-4xl left-4  font-bold">
            Tarife
          </h1>
          <span className="absolute w-[4rem] xl:w-[5rem] h-[2px]  bg-cyan-400 rounded-xl top-12 left-6  " />
          <div className="relative top-10">
            <div className="grid grid-cols-3 h-[10rem]">
              <div>
                <h2 className="text-xl xl:text-xl w-[7rem] left-6 xl:left-2 xl:w-[20rem] relative xl:top-14 top-10">
                  Serviciile oferite pentru categoria B
                </h2>
              </div>
              <div className="xl:ml-20 ml-4 w-[7rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-xl  text-center relative xl:top-14 top-10">
                  Tarife Pentru Masina Cu Transmisie Manuala
                </h2>
              </div>
              <div className="xl:ml-20 ml-2 w-[7rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-xl  text-center relative xl:top-14 top-10">
                  Tarife Pentru Masina Cu Transmisie Automata
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem] bg-slate-700">
              <div className="mt-12 xl:mt-16 w-[7rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-xl text-left relative left-6 xl:left-2">
                  15 Sedinte de sofat a cate 1h si 40 min
                </h2>
              </div>
              <div className="mt-16 ml-14 xl:ml-56">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 xl:ml-56 ">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 h-[10rem]">
              <div className="mt-8 xl:mt-16 w-[7rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-xl text-left relative left-6 xl:left-2">
                  Asistentă învatare legislatie și chestionare auto
                </h2>
              </div>
              <div className="mt-16 ml-14 xl:ml-56 ">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 xl:ml-56 ">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem]">
              <div className="mt-16 w-[9rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-xl text-left relative left-6 xl:left-2">
                  Pregatire dosar scolarizare
                </h2>
              </div>
              <div className="mt-16 ml-14 xl:ml-56 ">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 xl:ml-56 ">
                <h2 className="text-4xl xl:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem] bg-slate-700">
              <div className="mt-16 w-[8rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-2xl text-left font-bold relative left-6 xl:left-2">
                  COST TOTAL
                </h2>
              </div>
              <div className="mt-16 ml-3 xl:ml-24 w-[8rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-2xl text-center ">2000 RON</h2>
              </div>
              <div className="mt-16  xl:ml-20 w-[8rem] xl:w-[20rem]">
                <h2 className="text-xl xl:text-2xl text-center ">2000 RON</h2>
              </div>
            </div>
          </div>
          <div className="relative top-44 left-8  xl:left-[-2rem]">
            <ul className="text-xl xl:text-2xl list-disc xl:mr-0 mr-20">
              <li>ORAR FLEXIBIL - in functie de programul dumneavoastra.</li>
              <li className="relative top-4">
                Pretul fiecarui pachet include carburantul - benzina sau
                motorina.
              </li>
              <li className="relative top-8">
                Plata se poate face si în 3 RATE
              </li>
            </ul>
          </div>
        </div>
        </Fade>
    </div>
  );
};

export default Prices;

import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";
const Prices = () => {
  return (
    <div
      name="Tarife"
      className="absolute  flex items-center flex-col lg:top-[270rem] top-[420rem]  w-full h-[100rem] lg:h-[95rem]   bg-slate-800 text-white bg-opacity-100 "
    >
      <Fade>
        <div className="relative top-20">
          <h1 className="relative text-3xl lg:text-4xl left-4  font-bold">
            Tarife
          </h1>
          <span className="absolute w-[4rem] lg:w-[5rem] h-[2px]  bg-cyan-400 rounded-xl top-12 left-6  " />
          <div className="relative top-10">
            <div className="grid grid-cols-3 h-[10rem]">
              <div>
                <h2 className="text-lg lg:text-xl w-[7rem] left-6 lg:left-2 lg:w-[20rem] relative lg:top-14 top-10">
                  Serviciile oferite pentru categoria B
                </h2>
              </div>
              <div className="lg:ml-20 ml-4 w-[7rem] lg:w-[20rem]">
                <h2 className="text-lg lg:text-xl  text-center relative lg:top-14 top-10">
                  Tarife Pentru Mașină Cu Transmisie Manuală
                </h2>
              </div>
              <div className="lg:ml-20 ml-2 w-[7rem] lg:w-[20rem]">
                <h2 className="text-lg lg:text-xl  text-center relative lg:top-14 top-10">
                  Tarife Pentru Mașină Cu Transmisie Automată
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem] bg-slate-700">
              <div className="mt-12 lg:mt-16 w-[7rem] lg:w-[20rem]">
                <h2 className="text-lg lg:text-xl text-left relative left-6 lg:left-2">
                  15 Ședințe de șofat a câte 1h si 40 min
                </h2>
              </div>
              <div className="mt-16 ml-14 lg:ml-56">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 lg:ml-56 ">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 h-[10rem]">
              <div className="mt-8 lg:mt-16 w-[7rem] lg:w-[20rem]">
                <h2 className="text-lg lg:text-xl text-left relative left-6 lg:left-2">
                  Asistentă învățare legislație și chestionare auto
                </h2>
              </div>
              <div className="mt-16 ml-14 lg:ml-56 ">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 lg:ml-56 ">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem]">
              <div className="mt-16 w-[9rem] lg:w-[20rem]">
                <h2 className="text-lg lg:text-xl text-left relative left-6 lg:left-2">
                  Pregătire dosar școlarizare
                </h2>
              </div>
              <div className="mt-16 ml-14 lg:ml-56 ">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
              <div className="mt-16 ml-12 lg:ml-56 ">
                <h2 className="text-4xl lg:text-5xl text-green-500 text-center">
                  <AiFillCheckCircle />
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[10rem] bg-slate-700">
              <div className="mt-16 w-[8rem] lg:w-[20rem]">
                <h2 className="text-xl lg:text-2xl text-left font-bold relative left-6 lg:left-2">
                  COST TOTAL
                </h2>
              </div>
              <div className="mt-16 ml-3 lg:ml-24 w-[8rem] lg:w-[20rem]">
                <h2 className="text-xl lg:text-2xl text-center ">2000 RON</h2>
              </div>
              <div className="mt-16  lg:ml-20 w-[8rem] lg:w-[20rem]">
                <h2 className="text-xl lg:text-2xl text-center ">2000 RON</h2>
              </div>
            </div>
          </div>
          <div className="relative top-44 left-8  lg:left-[-2rem]">
            <ul className="text-xl lg:text-2xl list-disc lg:mr-0 mr-20">
              <li>ORAR FLEXIBIL - în functie de programul dumneavoastră.</li>
              <li className="relative top-4">
                Prețul fiecărui pachet include carburantul - benzina sau
                motorina.
              </li>
              <li className="relative top-8">
                Plata se poate face și în 3 RATE
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Prices;

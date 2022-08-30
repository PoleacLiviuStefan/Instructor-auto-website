import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Prices = () => {
  return (
    <div
      name="Tarife"
      className="absolute  flex items-center flex-col lg:top-[250rem] top-[400rem]  w-full h-[100rem] md:h-[85rem]   bg-slate-800 text-white bg-opacity-100 "
    >
      <div className="relative top-20">
        <h1 className="relative text-3xl md:text-4xl left-4  font-bold">
          Tarife
        </h1>
        <span className="absolute w-[4rem] md:w-[5rem] h-[2px]  bg-cyan-400 rounded-xl top-12 left-6  " />
        <div className="relative top-10">
          <div className="grid grid-cols-2 h-[10rem]">
            <div>
              <h2 className="text-lg md:text-xl w-[11rem] left-6 md:left-2 md:w-[20rem] relative top-14">
                Serviciile oferite pentru categoria B
              </h2>
            </div>
            <div className="md:ml-20 w-[11rem] md:w-[20rem]">
              <h2 className="text-lg md:text-xl  text-center relative top-14">
                Tarife pentru categoria B
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 h-[10rem] bg-slate-700">
            <div className="mt-16 w-[11rem] md:w-[20rem]">
              <h2 className="text-lg md:text-xl text-left relative left-6 md:left-2">
                15 Ședințe de șofat a câte 1h si 30 min
              </h2>
            </div>
            <div className="mt-16 ml-16 md:ml-56">
              <h2 className="text-4xl md:text-5xl text-green-500 text-center">
                <AiFillCheckCircle />
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 h-[10rem]">
            <div className="mt-16 w-[11rem] md:w-[20rem]">
              <h2 className="text-lg md:text-xl text-left relative left-6 md:left-2">
                Pregătire dosar școlarizare
              </h2>
            </div>
            <div className="mt-16 ml-16 md:ml-56 ">
              <h2 className="text-4xl md:text-5xl text-green-500 text-center">
                <AiFillCheckCircle />
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 h-[10rem] bg-slate-700">
            <div className="mt-16 w-[11rem] md:w-[20rem]">
              <h2 className="text-xl md:text-2xl text-left font-bold relative left-6 md:left-2">
                COST TOTAL
              </h2>
            </div>
            <div className="mt-16  md:ml-24 w-[11rem] md:w-[20rem]">
              <h2 className="text-xl md:text-2xl text-center ">1800 RON</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 h-[10rem]">
            <div className="mt-16 w-[11rem] md:w-[20rem]">
              <h2 className=" text-lg md:text-xl text-left relative left-6 md:left-2">
                Participare cu mașina școlii la examen
              </h2>
            </div>
            <div className="mt-16 w-[8rem] md:w-[20rem] md:ml-24">
              <h2 className="relative left-4  text-lg  md:text-xl text-center">
                200 RON se achită în ziua examenului
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-slate-700 h-[10rem]">
            <div className="mt-16 w-[11rem] md:w-[20rem]">
              <h2 className="text-lg md:text-xl  text-left relative left-6 md:left-2">
                O ședintă de șofat suplimentară (1h si 30 min)
              </h2>
            </div>
            <div className="mt-16 w-[11rem] md:w-[20rem] md:ml-24">
              <h2 className="text-lg md:text-xl text-center">100 RON</h2>
            </div>
          </div>
        </div>
        <div className="relative top-32 left-8  md:left-[-2rem]">
          <ul className="text-xl md:text-2xl list-disc md:mr-0 mr-20">
            <li>ORAR FLEXIBIL - în functie de programul dumneavoastră.</li>
            <li className="relative top-4">
              Prețul fiecărui pachet include carburantul - benzina sau motorina.
            </li>
            <li className="relative top-8">Plata se poate face și în 3 RATE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prices;

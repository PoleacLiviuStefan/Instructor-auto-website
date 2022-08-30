import React from "react";
import { useState } from "react";
const CarCard = ({ bordercolor }) => {
  const [show, setShow] = useState(false);
  const textappear = () => {
    setShow(true);
    console.log("da");
  };
  const textdisappear = () => {
    setShow(false);
    console.log("nu");
  };

  return (
    <div
      onMouseEnter={textappear}
      onMouseLeave={textdisappear}
      className={` w-[17rem] h-[10rem] bg-car bg-cover drop-shadow-xl ml-10 ring-1 mt-12 lg:mt-0 ring-sky-500 shadow-[5px_5px_38px_5px_rgba(0,0,0,0.3)]   `}
    >
      <div className={`${show && "hidden"} absolute z-20  w-full h-full `}>
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-[2rem] bg-opacity-70" />
        <div className="absolute top-0 bg-gradient-to-t from-transparent to-black w-full h-[2rem] bg-opacity-70" />
        <div className="absolute left-0 bg-gradient-to-l from-transparent to-black w-[2rem] h-full bg-opacity-70" />
        <div className="absolute right-0 bg-gradient-to-r from-transparent to-black w-[2rem] h-full bg-opacity-70" />
      </div>
      <div className="w-full h-full ">
        <div
          className={`absolute ${
            !show && "hidden"
          } flex items-center font-bold top-4 z-10 bg-opacity-80 bg-white  h-[2rem] text-center w-[8rem]  animate-[sideright_.5s_ease-in-out]`}
        >
          <h2
            className={`${
              !show && "hidden"
            } absolute animate-[appear_1s_ease-in-out] `}
          >
            Cutie Manuală
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

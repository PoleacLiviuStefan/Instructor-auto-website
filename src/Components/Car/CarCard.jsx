import React from "react";
import { useState } from "react";
const CarCard = ({ bordercolor, backgr, description }) => {
  const [show, setShow] = useState(false);
  const [textShow,setTextShow]=useState (false);
  const  textappear = async () => {
    setShow(true);
    await setTimeout(()=>{
      setTextShow(true)
    },700)
    
  };
  const textdisappear = () => {
    setShow(false);
   
      setTextShow(false)
    
  };

  return (
    <div
      onMouseEnter={textappear}
      onMouseLeave={textdisappear}
      className={` w-[17rem] h-[10rem] ${backgr} bg-cover drop-shadow-xl ml-10 ring-1 mt-12 xl:mt-0 ring-sky-500 shadow-[5px_5px_38px_5px_rgba(0,0,0,0.3)]   `}
    >
      <div className={`${show && "hidden"} absolute z-20  w-full h-full `}>
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-[1rem] " />
        <div className="absolute top-0 bg-gradient-to-t from-transparent to-black w-full h-[1rem] " />
        <div className="absolute left-0 bg-gradient-to-l from-transparent to-black w-[1rem] h-full " />
        <div className="absolute right-0 bg-gradient-to-r from-transparent to-black w-[1rem] h-full " />
      </div>
      <div className="w-full h-full ">
      <div className={`${
            show ? "animate-[sideright_.5s_ease-in-out_forwards]" : "animate-[sideleft_.5s_ease-in-out_forwards]"
          } absolute left-0 h-[10rem] whitespace-nowrap flex  rounded-xl font-bold top-0 z-10 bg-opacity-40 bg-white  `} />
        <div
          className={` ${
            show ? "animate-[sideright_.5s_ease-in-out_forwards_.5s]" : "animate-[sideleft_.5s_ease-in-out_forwards] "
          } absolute left-0  whitespace-nowrap flex items-center rounded-xl font-bold top-0 z-20 bg-opacity-60 bg-white   h-[10rem] text-center  `}
        >
           
          <h2
            className={`${
              !textShow && "hidden"
            } relative text-[1.15rem] ml-3  animate-[appear_.5s_ease-in-out_forwards] `}
          >
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

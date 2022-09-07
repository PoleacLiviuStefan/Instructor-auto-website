import React from "react";

const CardHero = ({ logo, title, details, slider }) => {
  return (
    <div className="flex rounded-xl flex-col items-center bg-gradient-to-b from-slate-700 to-slate-900 w-[22rem] h-[13rem] mt-[2rem] lg:mt-0 text-white bg-slate-800 drop-shadow-2xl cursor-pointer shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]">
      <h2 className="relative ring-slate-400 ring-1 rounded-3xl w-[4rem] h-[4rem] text-center flex justify-center items-center text-5xl top-10 ">
        {logo}
      </h2>
      <h2 className="relative text-2xl top-20 font-bold">{title}</h2>
    </div>
  );
};

export default CardHero;

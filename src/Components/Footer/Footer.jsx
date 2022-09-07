import React from "react";

const Footer = () => {
  return (
    <div className="absolute flex w-full justify-center h-[10rem] bg-slate-800 top-[570rem] lg:top-[415rem]">
      <span className="absolute top-0 w-full h-[3px] bg-cyan-500" />
      <div className="relative flex w-[20rem] justify-center lg:w-[35rem] mt-4 top-0">
        <div className="text-white">
          <h2 className="text-md lg:text-lg font-semibold"> COPYRIGHT 2022</h2>
          <span className="absolute w-[5.2rem] lg:w-[9rem] h-[2px]  bg-cyan-400 rounded-xl   " />
          <div className="relative top-2">
            <h3 className="text-sm">©Ciprian Diculescu</h3>
            <h3 className="text-sm cursor-pointer hover:text-slate-300">
              Termeni și condiții
            </h3>
          </div>
        </div>
        <div className="relative text-white ml-10">
          <h2 className="text-md lg:text-lg font-semibold"> CONTACT</h2>
          <span className="absolute w-[4.2rem] lg:w-[5rem] h-[2px] top-12 lg:top-7   bg-cyan-400 rounded-xl   " />
          <div className="relative top-8 md:top-2">
            <h3 className="text-sm">Email:</h3>
            <h3 className="text-sm">Telefon: 0767 623 030</h3>
          </div>
        </div>
        <div className="relative text-white ml-10">
          <h2 className="text-md lg:text-lg font-semibold"> INSTRUCTOR AUTO</h2>
          <span className="absolute w-[6rem] lg:w-[10rem] h-[2px]  bg-cyan-400 rounded-xl   " />

          <h3 className="relative top-2 text-sm">Categoria B</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

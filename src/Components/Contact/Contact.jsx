import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="absolute flex   justify-center bg-slate-100  top-[520rem] lg:top-[365rem] w-full h-[50rem]">
      <div className="w-full h-full flex items-center justify-center">
        <Slide left delay={200}>
          <div
            name="Contact"
            className="flex w-[22rem]  lg:w-[75rem] bg-white h-[40rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]"
          >
            <div className="absolute lg:relative flex justify-center items-center lg:h-full h-[7rem] w-full lg:w-[20rem] bg-gradient-to-t from-sky-600 to-sky-300 text-white">
              <h1 className="absolute lg:top-[15rem] text-2xl lg:text-4xl font-bold  lg:mt-10  ">
                Ai o întrebare?
              </h1>
              <h2 className="absolute top-20 lg:top-[21rem] text-xl">
                Nu ezita să mă întrebi!
              </h2>
            </div>
            <form className="flex flex-col w-[22rem] lg:w-[32rem] justify-center items-center mt-20 lg:ml-10  ">
              <input
                type="text"
                placeholder="Nume"
                minLength="2"
                className="lg:w-[20rem] w-[15rem] px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="text"
                minLength="2"
                placeholder="Prenume"
                className="lg:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="lg:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <textarea
                type="text"
                placeholder="Subiect"
                className="lg:w-[30rem] w-[20rem] text-bottom pt-[1rem] lg:pt-[2.4rem] mt-10 lg:h-[4rem] px-2 border-b-[1px] outline-none border-sky-500"
                required
              ></textarea>
              <button className="text-white shadow-[5px_5px_38px_5px_rgba(0,0,0,.2)] bg-sky-500 mt-20 w-[8rem] h-[2rem] rounded-xl hover:bg-sky-400">
                Trimite
              </button>
            </form>
            <div className="absolute bottom-0  flex justify-center items-center w-full  lg:w-[15rem] h-[5rem] lg:h-full  bg-gradient-to-t from-sky-600 to-sky-300 text-white right-0 ">
              <a href="tel:+40-767-623-030">
                {" "}
                <div className="flex text-lg lg:text-xl">
                  <BsTelephone className="relative top-[3px]" />

                  <h1 className="px-4">0767 623 030</h1>
                </div>
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;

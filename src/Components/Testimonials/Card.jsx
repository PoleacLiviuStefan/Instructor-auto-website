import React from "react";

const Card = ({ text, name }) => {
  return (
    <div className="bg-white drop-shadow-xl h-[18rem] w-[17rem]">
      <div className="flex justify-center">
        <span className="bg-black h-[1px] w-[25%] absolute top-[.9rem] left-8" />
        <h1 className="text-xl z-10"> {name}</h1>
        <span className="bg-black h-[1px] w-[25%] absolute top-[.9rem] right-8" />
      </div>
      <p className="relative text-md top-6 px-6"> {text}</p>
    </div>
  );
};

export default Card;

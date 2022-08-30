import React from "react";
import Card from "./Card";

const Testimonials = () => {
  const text = [
    "Nulla vel purus nec nulla ultricies vulputate. Nullam eget nibh quam. Etiam dictum dolor a ante ultrices, in semper ipsum consectetur. Phasellus bibendum pretium orci, vitae posuere velit ultricies vitae. Nam eleifend.",
  ];
  const name = ["Stefan"];

  return (
    <div className="relative flex justify-center top-[35rem]">
      <Card text={text[0]} name={name} />
    </div>
  );
};

export default Testimonials;

import React from "react";

const Marquee = () => {
  const generateMarquee = () => {
    const childrens = [];
    for (let i = 0; i < 7; i++) {
      childrens.push(
        // <p key={i.toString()} className="text-4xl mx-4 hover:cursor-pointer hover:scale-110 transition">
        //   {`Marquee Item ${i}`}
        // </p>
        <img key={i.toString()} src="/truckIcon.png" alt="click icon" className="w-24 mx-12" />
      );
    }
    return childrens;
  };
  return (
    <div className=" -rotate-3 w-[110vw] flex justify-start py-3 relative shadow-marquee my-12">
      <div className="py-6 animate-marquee whitespace-nowrap flex">
        {generateMarquee()}
      </div>
      <div className="absolute py-6 animate-marquee2 whitespace-nowrap flex">
        {generateMarquee()}
      </div>
    </div>
  );
};

export default Marquee;

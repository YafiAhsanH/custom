import React from "react";

const Marquee = () => {
  const generateMarquee = () => {
    const childrens = [];
    for (let i = 0; i < 7; i++) {
      childrens.push(
        <p className="text-4xl mx-4 hover:cursor-pointer hover:scale-110 transition">
          {`Marquee Item ${i}`}
        </p>
      );
    }
    return childrens;
  };
  return (
    <div className=" -rotate-3 w-[110vw] flex justify-start py-3 relative shadow-marquee">
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

import React from "react";

const Hero = () => {
  return (
    <div className=" h-[500px] w-full grid grid-cols-7 grid-rows-7 gap-6 py-5">
      <div className="flex justify-start items-center p-6 rounded-2xl row-start-1 col-start-1 row-span-3 col-span-3 ">
        <p className="text-[2rem] font-light leading-snug -rotate-6 ">
          From Click to Doorstep: Your{" "}
          <span className="rounded-lg bg-my-blue-200">One-Click</span> Shopping
          Destination!
        </p>
      </div>
      <div className="flex flex-col justify-start p-6 bg-my-blue-200 rounded-2xl row-start-1 row-span-3 col-span-2">
        <img src="/clickIcon.png" alt="click icon" className="w-[15%]" />
        <br />
        <p className="text-sm">
          Browse through our curated selection of fashion, gadgets, and home
          decor with just a few clicks.
        </p>
      </div>
      <div className="flex flex-col justify-start p-6 rounded-2xl row-start-1 row-span-3 col-span-2">
        <img src="/truckIcon.png" alt="click icon" className="w-[15%]" />
        <br />
        <p className="text-sm ">
          Enjoy lightning-fast delivery on a wide range of products for a
          seamless shopping experience.
        </p>
      </div>
      <div className="flex justify-start items-end bg-my-blue-300 rounded-2xl row-start-4 col-start-1 row-span-full col-span-full bg-cart-pattern bg-cover bg-right p-6">
        <div className="rounded-full bg-white px-6 py-2 font-semibold flex hover:cursor-pointer hover:scale-105 transition active:scale-95">
          Browse now {"\u2192"}
        </div>
      </div>
    </div>
  );
};

// Image by <a href="https://www.freepik.com/free-photo/colourful-toy-paper-shirts-supermarket-cart_3237878.htm#query=shopping%20cart%20blue&position=31&from_view=keyword&track=ais&uuid=146ef3d4-232d-491e-8c00-ac19f60de57d">Freepik</a>
//  <a href="https://www.flaticon.com/free-icons/delivery" title="delivery icons">Delivery icons created by kosonicon - Flaticon</a>
//  <a href="https://www.flaticon.com/free-icons/ecommerce" title="ecommerce icons">Ecommerce icons created by mangsaabguru - Flaticon</a>
export default Hero;

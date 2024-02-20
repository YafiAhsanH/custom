import { useState } from "react";
import Hero from "./Hero";
import ItemCard from "./ItemCard";
import Marquee from "./Marquee";
import { useData } from "../contexts/DataContext";

const MainPage = () => {
  const dataContextObject = useData();
  const [pos, setPos] = useState(0);
  return (
    <main className="justify-center items-center flex flex-col flex-grow h-fit overflow-x-clip px-[15%] ">
      <Hero />
      <div
        className={` flex justify-center flex-wrap items-center p-10 gap-8 translate-x-[${pos}vw] transition`}
      >
        {dataContextObject.items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
      <div onClick={() => setPos((prev) => prev + 10)}>{`right ${pos}`}</div>
      <Marquee />
    </main>
  );
};

export default MainPage;

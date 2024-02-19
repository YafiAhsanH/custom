import { Data } from "../App";
import { useItems } from "../contexts/ItemsContext";
import Hero from "./Hero";
import Marquee from "./Marquee";

const MainPage = () => {
  const itemsContextObject = useItems();

  return (
    <main className="justify-center items-center flex flex-col flex-grow h-fit overflow-x-clip px-[15%] ">
      <Hero />
      <Marquee />
      <div className="bg-my-blue-100 m-auto flex flex-col justify-center items-center p-10">
        <div className="flex gap-3">
          {Data.map((item) => {
            return (
              <div
                key={item.id}
                className=" hover:cursor-pointer"
                onClick={() => itemsContextObject.handleAddItem(item.id)}
              >{`button${item.value}`}</div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MainPage;

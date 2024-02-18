import { Data } from "../App";
import { useItems } from "../contexts/ItemsContext";
import Blobs from "./Blobs";
import Marquee from "./Marquee";

const MainPage = () => {
  const itemsContextObject = useItems();

  return (
    <main className="justify-center items-center flex flex-col flex-grow h-fit overflow-x-clip">
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
      <Blobs right="18rem" />
      <Marquee />
    </main>
  );
};

export default MainPage;

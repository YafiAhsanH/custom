import { useSideBar } from "../../contexts/SideBarContext";
import { useCart } from "../../contexts/CartContext";
import { Items } from "../../interfaces";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const sideBarContextObject = useSideBar();
  const cartContextObject = useCart();

  return (
    <div
      className={`flex flex-col flex-grow justify-start items-center transition-all duration-300 ${
        sideBarContextObject.sideBarActive ? "w-fit px-16" : "w-0 p-0"
      } bg-my-blue-100 fixed h-full right-0 overflow-y-scroll`}
      ref={sideBarContextObject.sideBarRef}
    >
      {sideBarContextObject.sideBarActive ? (
        <>
          <div className="flex flex-col gap-3">
            {cartContextObject.items.map((item: Items) => {
              return <SideBarItem item={item} key={item.id} />;
            })}
          </div>
          <div>{`total: $${cartContextObject.getTotal()}`}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;

import React, { useEffect, useRef, useState } from "react";
import { useSideBar } from "../../contexts/SideBarContext";
import { useItems } from "../../contexts/ItemsContext";
import { Items } from "../../interfaces";
import SideBarItem from "./SideBarItem";

export function OutsideClick(ref: React.RefObject<HTMLDivElement>) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}
// { refs }: { refs: React.RefObject<HTMLDivElement> }
const SideBar = () => {
  const sideBarContextObject = useSideBar();
  const itemsContextObject = useItems();

  // const sideBarRef = useRef<HTMLDivElement>(null);
  // const boxOutsideClick = OutsideClick(sideBarRef);

  return (
    <div
      className={`flex flex-col flex-grow justify-start items-center transition-all duration-300 ${
        sideBarContextObject.sideBarActive ? "w-fit px-16" : "w-0 p-0"
      } bg-my-blue-100 fixed h-full right-0`}
      // ref={sideBarRef}
    >
      {sideBarContextObject.sideBarActive ? (
        <>
          <div className="flex flex-col gap-3">
            {itemsContextObject.items.map((item: Items) => {
              return <SideBarItem item={item} />;
            })}
          </div>
          <div>{`total: $${itemsContextObject.getTotal()}`}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;

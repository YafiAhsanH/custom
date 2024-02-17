import React, { useState } from "react";
import { useSideBar } from "../../contexts/SideBarContext";
import { useItems } from "../../contexts/ItemsContext";

const CartIcon = () => {
  const itemsContextObject = useItems();
  const sideBarContextObject = useSideBar();

  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex justify-center p-2 rounded-full hover:cursor-pointer hover:bg-my-blue-400 text-lg hover:font-medium relative"
      onClick={() => sideBarContextObject.toggleSideBar()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <img src="/cartIconWhite.png" alt="cart icon on hover" width={30} />
      ) : (
        <img src="/cartIcon.png" alt="cart icon" width={30} />
      )}

      {itemsContextObject.items.length > 0 && (
        <div className="bg-red-500 w-4 h-4 absolute rounded-full top-1 right-1"></div>
      )}
    </div>
  );
};

export default CartIcon;

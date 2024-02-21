import React from "react";
import { useBackdrop } from "../contexts/BackdropContext";
import CountButton from "./CountButton";
import { Items } from "../interfaces";
import { useCart } from "../contexts/CartContext";
import BookmarkIcon from "./BookmarkIcon";

const ItemModal = ({ item }: { item: Items }) => {
  const cartContextObject = useCart();
  const backdropContextObjext = useBackdrop();
  return (
    <div className="fixed h-screen w-screen bg-black flex justify-center items-center z-50 bg-opacity-40 ">
      <div ref={backdropContextObjext.modalRef} className="flex w-3/4">
        <div className="flex justify-center items-center bg-gradient-to-br from-my-blue-100 to-my-blue-400 flex-1 shadow-2xl ">
          <img
            src="/chairImage.png"
            alt="chair"
            className="scale-[1.6] pr-15"
          />
        </div>
        <div className="flex flex-col justify-start items-start bg-white flex-1 scale-110 shadow-2xl p-10 ">
          <div className="flex-1">
            <div className="w-full flex justify-between text-4xl font-light">
              <BookmarkIcon item={item} width={40}/>
              <div>$119</div>
            </div>
            <br />
            <div className="flex justify-start text-5xl font-semibold">
              Chair
            </div>
            <br />
            <div className="flex justify-start text-lg font-light">
              Transform your living space with our sleek and versatile table,
              designed to enhance both style and functionality. Crafted with
              premium materials, it's the perfect addition to any home decor
              scheme.
            </div>
            <br />
            <div className="mb-2 text-lg font-medium">Quantity:</div>
            <CountButton item={item} />
          </div>
          <br />
          <div
            className="flex justify-center items-center w-full bg-my-blue-400 rounded-full py-3 text-white font-semibold hover:cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition tracking-widest hover:bg-my-blue-500 active:bg-my-blue-300"
            onClick={() => {
              cartContextObject.handleAddItem(item);
            }}
          >
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

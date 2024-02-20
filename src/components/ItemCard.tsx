import React from "react";
import { Items } from "../interfaces";
import { useCart } from "../contexts/CartContext";
import { useData } from "../contexts/DataContext";

const ItemCard = ({ item }: { item: Items }) => {
  const dataContextObject = useData();
  const cartContextObject = useCart();
  return (
    <div className="hover:scale-110 transition bg-white rounded-2xl group shadow-item-card flex flex-col z-10 min-w-[13.5rem] max-w-[13.5rem] ">
      <div className="flex justify-center items-center w-full rounded-t-2xl px-5">
        <img
          src="/chairImage.png"
          alt="chair"
          className="scale-[1.6] group-hover:scale-[1.8] transition"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full pb-4 px-5 rounded-b-2xl z-20 bg-white pt-3">
        <div className="flex justify-between items-center w-full mb-3">
          <div className="text-2xl font-medium">Chair</div>
          <div className="hover:cursor-pointer hover:scale-125 active:scale-95 transition">
            {item.bookmark ? (
              <img
                src="/bookmarkIconActive.png"
                alt="bookmark"
                width={20}
                onClick={() => {
                  dataContextObject.handleToggleBookmark(item);
                }}
              />
            ) : (
              <img
                src="/bookmarkIcon.png"
                alt="bookmark"
                width={20}
                onClick={() => {
                  dataContextObject.handleToggleBookmark(item);
                }}
              />
            )}
          </div>
        </div>
        <div className="text-sm mb-5">
          Transform your living space with our sleek and versatile chair.
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-xl font-medium">$119</div>
          <div
            className="bg-my-blue-400 text-white px-4 py-2 rounded-2xl text-sm font-medium hover:scale-110 transition active:scale-95 hover:cursor-pointer"
            onClick={() => cartContextObject.handleAddItem(item.id)}
          >{`Add to cart >`}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

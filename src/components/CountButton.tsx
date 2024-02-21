import React from "react";
import { Items } from "../interfaces";
import { useData } from "../contexts/DataContext";

const CountButton = ({ item }: { item: Items }) => {
  const dataContextObject = useData();
  return (
    <div className="flex w-fit rounded-lg border-2 shadow-md">
      <div
        className="py-2 px-3 hover:cursor-pointer rounded-l-lg hover:bg-slate-100 active:bg-opacity-60 font-light "
        onClick={() => {
          dataContextObject.handleDecCount(item);
        }}
      >{`<`}</div>
      <div className="py-2 px-3 border-x-2 font-semibold">{item.count}</div>
      <div
        className="py-2 px-3 hover:cursor-pointer rounded-l-lg hover:bg-slate-100 active:bg-opacity-60 font-light"
        onClick={() => {
          dataContextObject.handleIncCount(item);
        }}
      >{`>`}</div>
    </div>
  );
};

export default CountButton;

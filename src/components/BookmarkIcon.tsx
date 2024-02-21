import React from "react";
import { useData } from "../contexts/DataContext";
import { Items } from "../interfaces";

const BookmarkIcon = ({
  item,
  width = 20,
}: {
  item: Items;
  width?: number;
}) => {
  const dataContextObject = useData();
  return (
    <div className="hover:cursor-pointer hover:scale-125 active:scale-95 transition">
      <img
        src={item.bookmark ? "/bookmarkIconActive.png" : "/bookmarkIcon.png"}
        alt="bookmark"
        width={width}
        className="hover:cursor-pointer"
        onClick={() => {
          dataContextObject.handleToggleBookmark(item);
        }}
      />
    </div>
  );
};

export default BookmarkIcon;

import React, { createContext, useContext, useState } from "react";
import { DataContextType, Items } from "../interfaces";
import { Data } from "../config";

const DataContext = createContext<DataContextType>({
  items: [],
  handleToggleBookmark: () => {},
  handleIncCount: () => {},
  handleDecCount: () => {},
  getItemIndex: () => {},
});

export function useData() {
  return useContext(DataContext);
}

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Items[]>(Data);

  const handleToggleBookmark = (item: Items) => {
    const curr = item;
    setItems(
      items.map((item) => {
        if (curr === item) {
          return { ...curr, bookmark: !item.bookmark };
        }
        return item;
      })
    );
  };

  const handleIncCount = (item: Items) => {
    const curr = item;
    setItems(
      items.map((item) => {
        if (curr === item) {
          return { ...curr, count: curr.count + 1 };
        }
        return item;
      })
    );
  };

  const handleDecCount = (item: Items) => {
    const curr = item;
    setItems(
      items.map((item) => {
        if (curr === item && curr.count > 1) {
          return { ...curr, count: curr.count - 1 };
        }
        return item;
      })
    );
  };

  const getItemIndex = (item: Items) => {
    const curr = item;
    let index = -1;
    items.forEach((item, i) => {
      if (curr.value === item.value) {
        index = i;
      }
    });
    return index;
  };

  let dataContextObject: DataContextType = {
    items: items,
    handleToggleBookmark: handleToggleBookmark,
    handleIncCount: handleIncCount,
    handleDecCount: handleDecCount,
    getItemIndex: getItemIndex,
  };

  return (
    <DataContext.Provider value={dataContextObject}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

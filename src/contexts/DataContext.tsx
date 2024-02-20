import React, { createContext, useContext, useState } from "react";
import { DataContextType, Items } from "../interfaces";
import { Data } from "../config";

const DataContext = createContext<DataContextType>({
  items: [],
  handleToggleBookmark: () => {},
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

  let dataContextObject: DataContextType = {
    items: items,
    handleToggleBookmark: handleToggleBookmark,
  };

  return (
    <DataContext.Provider value={dataContextObject}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

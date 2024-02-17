import React, { createContext, useContext, useState } from "react";
import { Data } from "../App";
import { Items, ItemsContextType } from "../interfaces";

const ItemsContext = createContext<ItemsContextType>({
  items: [],
  handleAddItem: () => {},
  handleDeleteItem: () => {},
  handleIncCount: () => {},
  handleDecCount: () => {},
  getTotal: () => {},
});

export function useItems() {
  return useContext(ItemsContext);
}

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Items[]>([]);

  const handleAddItem = (idx: number) => {
    const curr = Data[idx];
    if (items.filter((item) => curr.value === item.value).length === 0) {
      setItems([...items, curr].sort((a, b) => a.value - b.value));
    }
  };

  const handleDeleteItem = (item: Items) => {
    const curr = item;
    if (items.includes(curr)) {
      setItems(items.filter((item) => curr !== item));
    }
  };

  const handleIncCount = (
    item: Items,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const curr = item;
    e.stopPropagation();
    setItems(
      items.map((item) => {
        if (curr === item) {
          return { ...curr, count: curr.count + 1 };
        }
        return item;
      })
    );
  };

  const handleDecCount = (
    item: Items,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const curr = item;
    e.stopPropagation();
    setItems(
      items.map((item) => {
        if (curr === item && curr.count > 0) {
          return { ...curr, count: curr.count - 1 };
        }
        return item;
      })
    );
  };

  const getTotal = () => {
    let total = 0;
    for (let item of items) {
      total += item.price * item.count;
    }
    return total;
  };

  let itemsContextObject: ItemsContextType = {
    items: items,
    handleAddItem: handleAddItem,
    handleDeleteItem: handleDeleteItem,
    handleIncCount: handleIncCount,
    handleDecCount: handleDecCount,
    getTotal: getTotal,
  };

  return (
    <ItemsContext.Provider value={itemsContextObject}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;

import React, { createContext, useContext, useState } from "react";
import { CartContextType, Items } from "../interfaces";
import { useData } from "./DataContext";
import { useSnackbar } from "./SnackbarContext";

const CartContext = createContext<CartContextType>({
  items: [],
  getItem: () => {},
  handleAddItem: () => {},
  handleDeleteItem: () => {},
  handleIncCount: () => {},
  handleDecCount: () => {},
  handleToggleBookmark: () => {},
  getTotal: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const dataContextObject = useData();
  const snackbarContextObject = useSnackbar();
  const [items, setItems] = useState<Items[]>([]);

  const getItem = (item: Items) => {
    const curr = item;
    console.log(items.filter((item) => item === curr)[0]);
    return items.filter((item) => item === items[0])[0];
  };

  const handleAddItem = (item: Items) => {
    const currIndex = dataContextObject.getItemIndex(item)
    const curr = dataContextObject.items[currIndex];
    if (items.filter((item) => curr.value === item.value).length === 0) {
      setItems([...items, curr].sort((a, b) => a.value - b.value));
      snackbarContextObject.showSnackbar(`Successfully added ${curr.value} to cart.`);
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
        if (curr === item && curr.count > 1) {
          return { ...curr, count: curr.count - 1 };
        }
        return item;
      })
    );
  };

  const handleToggleBookmark = (item: Items) => {
    const curr = item;
    setItems(
      items.map((item) => {
        if (curr === item) {
          return { ...curr, bookmark: true };
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

  let cartContextObject: CartContextType = {
    items: items,
    getItem: getItem,
    handleAddItem: handleAddItem,
    handleDeleteItem: handleDeleteItem,
    handleIncCount: handleIncCount,
    handleDecCount: handleDecCount,
    handleToggleBookmark: handleToggleBookmark,
    getTotal: getTotal,
  };

  return (
    <CartContext.Provider value={cartContextObject}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { BackdropContextType, Items } from "../interfaces";
import ItemModal from "../components/ItemModal";
import { useData } from "./DataContext";

const BackdropContext = createContext<BackdropContextType>({
  showBackdrop: () => {},
  hideBackdrop: () => {},
  modalRef: undefined,
});

export function useBackdrop() {
  return useContext(BackdropContext);
}

const BackdropProvider = ({ children }: { children: React.ReactNode }) => {
  const dataContextObject = useData();
  const [visible, setVisible] = useState(false);
  const [currItemIndex, setCurrItemIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);

  const showBackdrop = (item: Items) => {
    setVisible(true);
    setCurrItemIndex(dataContextObject.getItemIndex(item));
  };

  const hideBackdrop = () => {
    setVisible(false);
  };

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let backdropContextObject: BackdropContextType = {
    showBackdrop: showBackdrop,
    hideBackdrop: hideBackdrop,
    modalRef: modalRef,
  };
  return (
    <BackdropContext.Provider value={backdropContextObject}>
      {visible ? (
        <ItemModal item={dataContextObject.items[currItemIndex]} />
      ) : (
        <></>
      )}
      {children}
    </BackdropContext.Provider>
  );
};

export default BackdropProvider;

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SideBarContextType } from "../interfaces";

const SideBarContext = createContext<SideBarContextType>({
  sideBarActive: false,
  toggleSideBar: () => {},
  sideBarRef: undefined,
});

export function useSideBar() {
  return useContext(SideBarContext);
}

export function OutsideClick(ref: React.RefObject<HTMLDivElement>) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}

const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarActive, setSideBarActive] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setSideBarActive((prev) => !prev);
  };

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target as Node)) {
        setSideBarActive(false);
      }
    // console.log(e.target)
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let sideBarContextObject: SideBarContextType = {
    sideBarActive: sideBarActive,
    toggleSideBar: toggleSideBar,
    sideBarRef: sideBarRef,
  };

  return (
    <SideBarContext.Provider value={sideBarContextObject}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;

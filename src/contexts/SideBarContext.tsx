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

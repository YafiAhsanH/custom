import React, { createContext, useContext, useState } from "react";
import { SideBarContextType } from "../interfaces";

const SideBarContext = createContext<SideBarContextType>({
  sideBarActive: false,
  toggleSideBar: () => {},
});

export function useSideBar() {
  return useContext(SideBarContext);
}

const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarActive, setSideBarActive] = useState(false);

  const toggleSideBar = () => {
    setSideBarActive((prev) => !prev);
  };

  let sideBarContextObject: SideBarContextType = {
    sideBarActive: sideBarActive,
    toggleSideBar: toggleSideBar,
  }

  return (
    <SideBarContext.Provider value={sideBarContextObject}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemsProvider, { useItems } from "./contexts/ItemsContext";
import MainPage from "./components/MainPage";
import { Items } from "./interfaces";
import SideBarProvider from "./contexts/SideBarContext";
import SideBar from "./components/sidebar/SideBar";

export const Data: Items[] = [
  { id: 0, value: 1, count: 1, price: 1 },
  { id: 1, value: 2, count: 1, price: 2 },
  { id: 2, value: 3, count: 1, price: 3 },
  { id: 3, value: 4, count: 1, price: 4 },
  { id: 4, value: 5, count: 1, price: 5 },
  { id: 5, value: 6, count: 1, price: 6 },
];



function App() {

  return (
    <ItemsProvider>
      <SideBarProvider>
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <MainPage />
          <SideBar />
        </div>
      </SideBarProvider>
    </ItemsProvider>
  );
}

export default App;

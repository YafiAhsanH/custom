import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CartProvider from "./contexts/CartContext";
import MainPage from "./components/MainPage";
import SideBarProvider from "./contexts/SideBarContext";
import SideBar from "./components/sidebar/SideBar";
import Blobs from "./components/Blobs";
import DataProvider from "./contexts/DataContext";
import SnackbarProvider from "./contexts/SnackbarContext";

function App() {
  return (
    <SnackbarProvider>
      <DataProvider>
        <CartProvider>
          <SideBarProvider>
            <div className="flex flex-col min-h-screen relative">
              <Blobs right="18rem" />
              <Navbar />
              <MainPage />
              <SideBar />
            </div>
          </SideBarProvider>
        </CartProvider>
      </DataProvider>
    </SnackbarProvider>
  );
}

export default App;

import { useState } from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { OrderProvider } from "./contexts/orderContext";
import { MenuProvider } from "./contexts/menuContext";

function App() {
  const [isNav, setIsNav] = useState(false);

  const mobiNavbar = (): void => {
    setIsNav(!isNav);
  };

  return (
    <div className="flex">
      <MenuProvider>
        <div
          className={`${
            isNav ? "w-[60px]" : "w-[60px] xl:w-[280px]"
          } h-screen fixed duration-300 ease-linear py-1`}
        >
          <Navbar toggleNav={mobiNavbar} isToggle={isNav} />
        </div>

        <div
          className={`${
            isNav
              ? "w-[calc(100%-60px)]"
              : "w-[calc(100%-60px)] xl:w-[calc(100%-280px)]"
          } absolute right-0 duration-300 ease-linear`}
        >
          <OrderProvider>
            <Outlet />
          </OrderProvider>
        </div>
      </MenuProvider>
    </div>
  );
}

export default App;

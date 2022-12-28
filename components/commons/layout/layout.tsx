import React from "react";
import NavBar from "./nav";
import Header from "./Header";
import MobileFooter from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <div className="flex ">
        <NavBar />
        <div className="w-full ">
          <Header />
          {children}
        </div>
      </div>
      <footer>
        <MobileFooter />
      </footer>
    </div>
  );
};

export default Layout;

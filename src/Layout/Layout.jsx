import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopeBanner from "../Components/MainpageComponents/TopeBanner";

function Layout({ children }) {
  return (
    <div>
      <TopeBanner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

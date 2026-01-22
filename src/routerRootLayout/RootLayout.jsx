import Footer from "@/component/footer/Footer";
import Navbar from "@/component/headerNav/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-slate_950 min-h-screen flex flex-col overflow-hidden  px-8 ">
      <Navbar />
      <main className=" flex-1  flex ">
        <div className="flex-1 flex">
          <Outlet /> 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

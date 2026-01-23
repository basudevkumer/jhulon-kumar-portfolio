import Footer from "@/component/footer/Footer";
import Navbar from "@/component/headerNav/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-slate_950 min-h-screen flex flex-col overflow-hidden  px-8 ">
      <div className="pt-5 lg:pt-0">
        <Navbar />
      </div>
      <main className=" flex-1  flex ">
        <div className="flex-1 flex">
          <Outlet />
        </div>
      </main>
      <div className="pb-5 lg:pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

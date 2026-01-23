import Footer from "@/component/footer/Footer";
import Navbar from "@/component/headerNav/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-slate_950 min-h-screen flex flex-col overflow-hidden  px-8 ">
      <div className="pt-5 md:pt-0 ">
        <Navbar />
      </div>
      <main className=" flex-1  flex ">
        <div className="flex-1 flex">
          <Outlet />
        </div>
      </main>
      <div className="pb-5 md:pb-0 !z-[999] ">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

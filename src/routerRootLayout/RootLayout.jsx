import Footer from "@/component/footer/Footer";
import Navbar from "@/component/headerNav/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-slate_950 min-h-screen flex flex-col justify-center   ">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

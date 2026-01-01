import React from "react";
import Navbar from "@/component/headerNav/Navbar";
import Footer from "@/component/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "@/routerRootLayout/RootLayout";
import Home from "@/page/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

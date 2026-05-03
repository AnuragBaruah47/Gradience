import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { styleStore } from "../Store/Store";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Toaster } from "sonner";
import Navbar from "../Shared/Components/Navbar";

gsap.registerPlugin(ScrollToPlugin);

const Layout = () => {
  const id = styleStore((s) => s.id);
  const styleBackGround = styleStore((s) => s.style);

  const preview = id !== null;

  return (
    <div className="">
      <div
        style={preview ? styleBackGround : {}}
        className="h-screen lg:min-h-screen -z-10 fixed w-full"
      />

      <div className="relative">
        <div className="w-full flex justify-center">
          <div className="xl:absolute xl:justify-center flex w-full xl:z-100">
            <Navbar />
          </div>
        </div>

        <Outlet />
        <Toaster toastOptions={{ duration: 2000 }} position="bottom-right" />
      </div>
    </div>
  );
};

export default Layout;

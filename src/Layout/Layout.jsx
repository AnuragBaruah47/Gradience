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
  const styleBackGround = styleStore((s) => s.style);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <div
        style={styleBackGround}
        className="min-h-screen -z-10 fixed w-full"
      />

      <div className="relative">
        <div className="w-full flex justify-center">
   <div className="absolute z-100">
             <Navbar />
        </div>
     
        </div>
     

        <Outlet />
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
          position="bottom-right"
        />
      </div>
    </div>
  );
};

export default Layout;

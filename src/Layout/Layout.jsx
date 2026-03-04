import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { styleStore } from "../Store/Store";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Layout = () => {
  const styleBackGround = styleStore((s) => s.style);

  useEffect(() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
    });

    const lenis = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Sync Lenis with GSAP ticker
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

      <div className="nav">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import SVGmorph from "./SVGmorph";

import React, { useRef } from "react";
import gsap from "gsap";
import { themeStore } from "../../../Store/Store";

const NewsCard = () => {
  const darkTheme = themeStore((state) => state.darkTheme);

  return (
    <div
      className="border flex items-center overflow-clip gap-2 dark:border-[#1E2129] border-[#ebe9e9] w-fit rounded-full  p-3 h-fit"
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <div className="flex gap-1">
        <div className="dark:text-cyan-400 text-cyan-900">Animated</div>
        <div className="text-black dark:text-white">
          gradients dropping very soon.
        </div>
      </div>
      <div className="h-5 w-5">
        <SVGmorph />
      </div>
    </div>
  );
};

export default NewsCard;

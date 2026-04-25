import SVGmorph from "./SVGmorph";
import React from "react";
import { themeStore } from "../../../Store/Store";

const NewsCard = () => {
  const darkTheme = themeStore((state) => state.darkTheme);

  return (
    <div
      className={`border flex items-center overflow-clip gap-2 w-fit rounded-full p-2 h-fit ${
        darkTheme ? "border-[#1E2129]" : "border-[#ebe9e9]"
      }`}
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <div className="flex gap-1">
        <div
          className={`text-[14px] font-bold ${
            darkTheme ? "text-cyan-400" : "text-cyan-900"
          }`}
        >
          Gradient
        </div>
        <div className={`text-[14px] ${darkTheme ? "text-white" : "text-black"}`}>
          editor dropping very soon.
        </div>
      </div>
      <div className="h-5 w-5">
        <SVGmorph />
      </div>
    </div>
  );
};

export default NewsCard;

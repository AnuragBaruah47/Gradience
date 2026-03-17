import React, { useState, useEffect } from "react";
import { cn } from "../../../Utils";
import CopySvg from "../../../Shared/Components/CopySvg";
import { styleStore, themeStore } from "../../../Store/Store";
import { scrollToConfig } from "../Services/service";
import { copyStyle } from "../Services/service";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const PatternCards = ({ patterns }) => {
  const [copy, setCopy] = useState(false);

  const darkTheme = themeStore((state) => state.darkTheme);
  const clearStyle = styleStore((s) => s.clearStyle);
  const setStyle = styleStore((s) => s.setStyle);
  const setId = styleStore((s) => s.setId);
  const id = styleStore((s) => s.id);

  const preview = id === patterns.id;

  useEffect(() => {
    if (preview) {
      setStyle(patterns.style);
    } else {
      clearStyle();
    }
  }, [preview]);

  const toggleCopy = () => {
    setCopy(true);
    copyStyle(patterns);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

const togglePreview = () => {
  if (preview) {
    setId(null);
  } else {
    setId(patterns.id);
  }

  setTimeout(() => {
    gsap.to(window, scrollToConfig);
  }, 200);
};

  return (
    <div
      style={
        darkTheme
          ? {
              boxShadow:
                "rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
            }
          : {
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }
      }
      className="group hover:scale-105 ease-in-out transition-all duration-350 overflow-hidden relative rounded-xl h-fit w-fit"
    >
      {patterns.animated && (
        <div
          style={{
            backgroundColor:
              patterns.theme === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
          }}
          className="absolute gap-1 flex px-2 py-1 right-2 top-2 dark:text-white font-medium text-xs z-20 rounded-md"
        >
          <div
            style={{
              color: patterns.theme === "dark" ? "#ffffff" : "#000000",
            }}
          >
            Animated
          </div>
        </div>
      )}

      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        }}
        className="h-68 w-65 hover:scale-105 rounded-xl absolute z-10 transition-transform bg-[#aaaaaa] duration-500 translate-y-80 cursor-pointer group-hover:translate-y-0"
      >
        <div className="w-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1200 translate-y-16 gap-3 flex justify-center flex-col items-center">
          <div className="text-md w-58 text-center font-medium text-white">
            {patterns.name}
          </div>

          <button
            onClick={() => togglePreview()}
            className="flex hover:cursor-pointer h-10 w-50 justify-center items-center hover:scale-105 transition-all ease-in-out duration-300 bg-black rounded-xl"
          >
            <div className="text-white">{preview ? "Hide" : "Preview"}</div>
          </button>

          <button
            style={{ backgroundColor: copy ? "#66FF00" : "#ffffff" }}
            onClick={() => toggleCopy()}
            className="flex active:scale-95 h-10 w-50 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 rounded-xl"
          >
            <div className="h-6 w-6">
              {copy ? (
                <svg viewBox="0 -0.5 25 25">
                  <path
                    d="M5.5 12.5L10.167 17L19.5 8"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <CopySvg />
              )}
            </div>

            <div>{copy ? "Copied" : "Copy"}</div>
          </button>
        </div>
      </div>

      <div
        style={patterns.style}
        className={cn(
          "h-68 w-65 rounded-xl cursor-pointer shadow-2xs transition-all duration-500 hover:scale-105",
        )}
      />
    </div>
  );
};

export default PatternCards;

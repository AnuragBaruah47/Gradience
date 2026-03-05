import React, { useRef } from "react";
import { cn } from "../Utils";
import CopySvg from "./CopySvg";
import { styleStore, themeStore } from "../Store/Store";
import { gridPatterns } from "../Patterns";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const PatternCards = ({ style, name, id, wholeStyle }) => {
  const { setTheme } = themeStore();

  const darkTheme = themeStore((state) => state.darkTheme);
  const clearStyle = styleStore((s) => s.clearStyle);

  const setStyle = styleStore((s) => s.setStyle);

  const changeBackgroundOnClick = () => {
    clearStyle();

    const selected = gridPatterns.find((e) => e.id === id);
    if (!selected) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
    });

    setStyle(selected.style);

    const root = document.documentElement;

    if (selected.theme === "dark") {
      root.classList.add("dark");
      setTheme(true);
    } else {
      root.classList.remove("dark");
      setTheme(false);
    }
    console.log(darkTheme);
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
      className="group hover:scale-105 ease-in-out transition-all duration-350 overflow-hidden relative rounded-xl h-fit w-fit "
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        }}
        className="h-68 w-65 hover:scale-105 rounded-xl absolute z-10 
  transition-transform
  bg-[#aaaaaa] duration-500 
  translate-y-80
  cursor-pointer
  group-hover:translate-y-0"
      >
        <div className="w-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1200 translate-y-16 gap-3 flex justify-center flex-col items-center">
          <div className="text-md w-58 text-center font-medium text-white">
            {name}
          </div>
          <div>
            <button
              onClick={() => changeBackgroundOnClick()}
              className="flex hover:cursor-pointer h-10 w-50 justify-center items-center hover:scale-105 transition-all ease-in-out duration-300 bg-black rounded-xl"
            >
              <div className="h-6 text-white w-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#FFFFFF"
                      strokeWidth="1.056"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="text-white">Preview</div>
            </button>
          </div>
          <div>
            <button
              onClick={() => changeBackgroundOnClick()}
              className="flex hover:cursor-pointer h-10 w-50 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 bg-white rounded-xl"
            >
              <div className="h-6 text-white w-6">
                <CopySvg />
              </div>
              <div className="">Copy</div>
            </button>
          </div>
        </div>
      </div>

      <div
        style={style}
        className={cn(
          "h-68 w-65 rounded-xl cursor-pointer shadow-2xs transition-all duration-500 hover:scale-105",
        )}
      />
    </div>
  );
};

export default PatternCards;

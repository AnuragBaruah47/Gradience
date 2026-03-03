import React, { useRef } from "react";
import { cn } from "../Utils";
import CopySvg from "./CopySvg";
import { useStore } from "../Store/Store";
import { gridPatterns } from "../Patterns";

const PatternCards = ({ style, name ,id }) => {
const clearStyle = useStore((s) => s.clearStyle);

 const setStyle = useStore((s) => s.setStyle);

const changeBackgroundOnClick = () => {
    clearStyle()
  const selected = gridPatterns.find((e) => e.id === id);

  if (selected) {
    setStyle(selected.style);
  }
};
  return (
    <div className="group border-[#e4e2e2] overflow-hidden relative rounded-xl h-fit w-fit border">
      <div
        style={{
          background:
            "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
        className="h-68 w-65 rounded-xl absolute z-10 
               transition-transform duration-500 
               translate-y-80
               cursor-pointer
               group-hover:translate-y-0"
      >
        <div className="w-full translate-y-16 gap-4 flex justify-center flex-col items-center">
          <div className="text-md text-center font-medium text-white">
            {name}
          </div>
          <div>
            <button onClick={()=>changeBackgroundOnClick()} className="flex hover:cursor-pointer px-15 py-2 bg-black rounded-xl">
              <div className="h-6 text-white w-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#FFFFFF"
                      stroke-width="1.056"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="text-white">Preview</div>
            </button>
          </div>
          <div className="flex px-17 py-1.5 rounded-xl bg-white">
            <div className="h-6 w-6">
              <CopySvg />
            </div>
            <div>
              <button>Copy</button>
            </div>
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

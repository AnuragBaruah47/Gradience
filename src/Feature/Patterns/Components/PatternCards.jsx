import React, { useState, useEffect } from "react";
import { cn } from "../../../Utils";
import CopySvg from "../../../Shared/Components/CopySvg";
import { styleStore, themeStore } from "../../../Store/Store";
import { copyStyle, scrollToConfig } from "../Services/service";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import EyeSvg from "../../../Shared/Components/EyeSvg";
import StarSvg from "../../../Shared/Components/StarSvg";

gsap.registerPlugin(ScrollToPlugin);

const PatternCards = ({ patterns, favourites, setFavourites }) => {
  const [copy, setCopy] = useState(false);

  const darkTheme = themeStore((state) => state.darkTheme);
  const clearStyle = styleStore((s) => s.clearStyle);
  const setStyle = styleStore((s) => s.setStyle);
  const setId = styleStore((s) => s.setId);
  const id = styleStore((s) => s.id);

  const preview = id === patterns.id;

  const isFavourite = favourites.some((f) => f.id === patterns.id);

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
    setTimeout(() => setCopy(false), 2000);
  };

  const togglePreview = () => {
    setId(preview ? null : patterns.id);

    setTimeout(() => {
      gsap.to(window, scrollToConfig);
    }, 200);
  };

  const toggleFavourite = () => {
    let updated;

    if (isFavourite) {
      updated = favourites.filter((f) => f.id !== patterns.id);
    } else {
      updated = [...favourites, patterns];
    }

    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
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
            onClick={() => toggleFavourite()}
            className="absolute z-100 right-5 -top-10"
          >
            <div className="h-6 w-6">
              {isFavourite ? (
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="yellow"
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
                        d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              ) : (
                <StarSvg />
              )}
            </div>
          </button>

          <button
            onClick={() => togglePreview()}
            className="flex hover:cursor-pointer h-10 w-50 justify-center items-center hover:scale-105 transition-all ease-in-out duration-300 bg-black rounded-xl"
          >
            <div className="h-5 w-5">
              {" "}
              <EyeSvg />
            </div>
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

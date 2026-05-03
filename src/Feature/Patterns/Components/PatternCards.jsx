import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../../Utils";
import CopySvg from "../../../Shared/Components/CopySvg";
import EyeSvg from "../../../Shared/Components/EyeSvg";
import { styleStore, themeStore } from "../../../Store/Store";
import { copyStyle, scrollToConfig } from "../Services/service";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const StarIcon = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? "gold" : "none"}
    stroke={filled ? "gold" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PatternCards = ({ patterns, favourites, setFavourites, index = 0 }) => {
  const [copy, setCopy] = useState(false);
  const cardRef = useRef(null);

  const darkTheme = themeStore((state) => state.darkTheme);
  const prevTheme = themeStore((s) => s.prevTheme);
  const savePrevTheme = themeStore((s) => s.savePrevTheme);
  const clearPrevTheme = themeStore((s) => s.clearPrevTheme);
  const setTheme = themeStore((s) => s.setTheme);
  const setPreviewTheme = themeStore((s) => s.setPreviewTheme);
  const clearStyle = styleStore((s) => s.clearStyle);
  const setStyle = styleStore((s) => s.setStyle);
  const style = styleStore((s) => s.style);
  const setId = styleStore((s) => s.setId);
  const id = styleStore((s) => s.id);

  const preview = id === patterns.id;
  const isFavourite = favourites.some((f) => f.id === patterns.id);
 

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: index * 0.045,
      },
    );
  }, []);

  useEffect(() => {
    const savedId = localStorage.getItem("selectedPatternId");

    if (savedId && savedId === patterns.id) {
      const savedStyle = localStorage.getItem(`style-${savedId}`);
      if (savedStyle) {
        setId(savedId);
        setStyle(JSON.parse(savedStyle));
      }

      if (patterns.theme === "light") setPreviewTheme(false);
      else if (patterns.theme === "dark") setPreviewTheme(true);
    }
  }, []);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (preview) {
      clearStyle();
      setStyle(patterns.style);
      localStorage.setItem("selectedPatternId", patterns.id);
      localStorage.setItem(
        `style-${patterns.id}`,
        JSON.stringify(patterns.style),
      );
    } else {
      localStorage.removeItem("selectedPatternId");
    }
  }, [preview]);

  const togglePreview = () => {
    if (!preview) {
      if (prevTheme === null) {
        savePrevTheme("");
        savePrevTheme(darkTheme);
      }
      setId(patterns.id);
      setTimeout(() => gsap.to(window, scrollToConfig), 200);
      if (patterns.theme === "light") setPreviewTheme(false);
      else if (patterns.theme === "dark") setPreviewTheme(true);
    } else {
        setTimeout(() => gsap.to(window, scrollToConfig), 200);
      setId(null);
      if (prevTheme !== null) {
        setTheme(prevTheme);
        clearPrevTheme();
      }
    }
  };

  const toggleCopy = () => {
    setCopy(true);
    copyStyle(patterns);
    gsap.fromTo(
      cardRef.current.querySelector(".copy-btn"),
      { scale: 0.85 },
      { scale: 1, duration: 0.3, ease: "back.out(2)" },
    );
    setTimeout(() => setCopy(false), 2000);
  };

  const toggleFavourite = () => {
    const updated = isFavourite
      ? favourites.filter((f) => f.id !== patterns.id)
      : [...favourites, patterns];
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
    gsap.fromTo(
      cardRef.current.querySelector(".fav-btn"),
      { scale: 0.7 },
      { scale: 1, duration: 0.35, ease: "back.out(2.5)" },
    );
  };

const cardClasses = cn(
  "group relative overflow-hidden rounded-[14px] opacity-0",
  "border transition-[border-color,box-shadow] duration-200",
  "hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl",
  "transition-[transform,border-color,box-shadow] duration-280",
  "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
  preview
    ? "border-green-500 shadow-[0_0_0_1px_rgba(34,197,94,0.4)] hover:border-green-400 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.5)]"
    : darkTheme
      ? "border-white/10 bg-white/5 hover:border-white/20 hover:shadow-black/40"
      : "border-black/8 bg-white hover:border-black/14 hover:shadow-black/10",
);
  const footerClasses = cn(
    "px-3 py-2.5 flex items-center justify-between border-t",
    darkTheme ? "border-white/8" : "border-black/6",
  );

  const nameClasses = cn(
    "text-[12px] font-medium truncate",
    darkTheme ? "text-white" : "text-gray-900",
  );

  const categoryClasses = cn(
    "text-[11px] mt-0.5 capitalize",
    darkTheme ? "text-white/40" : "text-gray-400",
  );

  const previewBtnClasses = cn(
    "w-7 h-7 cursor-pointer rounded-[7px] flex items-center justify-center",
    "border transition-all duration-150 active:scale-90 hover:scale-110",
    preview
      ? darkTheme
        ? "bg-gray-200 text-black border-white"
        : "bg-gray-500 text-white border-gray-900"
      : darkTheme
        ? "bg-white/10 text-white/70 border-white/10 hover:bg-white/20 hover:text-white"
        : "bg-gray-100 text-gray-500 border-black/6 hover:bg-gray-200 hover:text-gray-800",
  );

  const copyBtnClasses = cn(
    "copy-btn cursor-pointer w-7 h-7 rounded-[7px] flex items-center justify-center",
    "border transition-all duration-150 active:scale-90 hover:scale-110",
    copy
      ? "bg-green-500 border-green-500 text-white"
      : darkTheme
        ? "bg-white/10 text-white/70 border-white/10 hover:bg-white/20 hover:text-white"
        : "bg-gray-100 text-gray-500 border-black/6 hover:bg-gray-200 hover:text-gray-800",
  );

  const favBtnClasses = cn(
    "fav-btn absolute top-2 right-2 z-20 w-6.75 h-6.75 rounded-[7px] border-none",
    "flex items-center justify-center transition-all duration-150",
    "bg-black/35 backdrop-blur-sm text-white",
    "hover:scale-110 active:scale-95",
    isFavourite ? "opacity-100" : "opacity-0 group-hover:opacity-100",
  );

  return (
    <div ref={cardRef} className={cardClasses}>
      {patterns.animated && (
        <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-md text-[10px] font-medium tracking-[.05em] uppercase bg-black/40 text-white">
          Live
        </div>
      )}

      <button onClick={toggleFavourite} className={favBtnClasses}>
        <StarIcon filled={isFavourite} />
      </button>

      <div className="h-28  w-full overflow-hidden relative">
        <div
          style={patterns.style}
          className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      </div>

      <div className={footerClasses}>
        <div className="min-w-0">
          <div className={nameClasses}>{patterns.name}</div>
          <div className={categoryClasses}>{patterns.category}</div>
        </div>

        <div
        id={patterns.id}
          className={cn(
            "flex gap-1 ml-2 shrink-0",
            "opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
            "transition-[opacity,transform] duration-200",
          )}
        >
          <button
            onClick={togglePreview}
            title={preview ? "Hide" : "Preview"}
            className={previewBtnClasses}
          >
            <EyeSvg className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleCopy}
            title={copy ? "Copied!" : "Copy"}
            className={copyBtnClasses}
          >
            {copy ? <CheckIcon /> : <CopySvg className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternCards;

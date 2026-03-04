import SVGmorph from "./SVGmorph";

import React, { useRef } from "react";
import gsap from "gsap";

const NewsCard = () => {
  const wordRef = useRef("");
  const colors = [
     "#0B0F1A",
  "#111827",
  "#1F2937",
  "#0F172A",
  "#1E1B4B",
  "#2E1065",
  "#3B0764",
  "#4C1D95",
  "#1E3A8A",
  "#0C4A6E",
  "#064E3B",
  "#14532D",
  "#3F1D1D",
  "#2D1B69",
  "#121212"
  ];
  React.useEffect(() => {
    gsap.to(wordRef.current, {
      duration: 0.5,
      repeat: -1,
      repeatDelay: 2,
      onRepeat: function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        gsap.to(wordRef.current, {
          color: randomColor,
          duration: 1,
        });
      },
    });
  }, []);

  return (
    <div
      className="border flex items-center overflow-clip gap-2 border-[#ebe9e9] w-fit rounded-full  p-3 h-fit"
      style={{
        "boxShadow":
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <div className="flex gap-1">
        <div ref={wordRef}>Animated</div>
        <div>gradients dropping very soon.</div>
      </div>
      <div className="h-5 w-5">
        <SVGmorph />
      </div>
    </div>
  );
};

export default NewsCard;

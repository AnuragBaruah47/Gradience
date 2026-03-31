import React, { useState, useEffect } from "react";
import {
  copyColors,
  generateColor,
  generateColorPallete,
} from "../Services/Service";
import CopySvg from "../../../Shared/Components/CopySvg";

const Colorpallete = () => {
  const [palette, setPalette] = useState(
    generateColorPallete(generateColor(), "Monochromatic"),
  );

  const copyOnClick = (hex) => {
    copyColors(hex);
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.code === "Space") {
        const newBase = generateColor();
        const newPalette = generateColorPallete(newBase, "Monochromatic");
        setPalette(newPalette);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <div tabIndex={0} className="">
      <div className="w-full flex justify-center text-xl font-bold tracking-wider bg-gray-100 p-4">
        Press the spacebar to generate color palettes!
      </div>
      <div className="flex">
        {palette.map((each) => (
          <div
            key={each.hex}
            className="flex h-225 justify-center items-end flex-1"
            style={{ backgroundColor: each.hex }}
          >
            <button
              onClick={() => copyOnClick(each.hex)}
              className="cursor-pointer w-full flex flex-col gap-2 justify-center items-center mb-10"
            >
              <div className="hover:h-12 hover:w-12 ease-in-out transition-all duration-300 origin-center h-10 w-10">
                <CopySvg />
              </div>
              <div
                className={`text-xl font-bold ${each.shade.includes("dark") ? "text-white" : "text-black"}`}
              >
                {each.hex}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colorpallete;

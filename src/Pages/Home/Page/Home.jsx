import React, { useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";
import Cards from "../Components/Cards";
import CopySvg from "../../../Shared/Components/CopySvg";
import EyeSvg from "../../../Shared/Components/EyeSvg";
import MathSvg from "../../../Shared/Components/MathSvg";
import { gridPatterns } from "../../../Feature/Patterns/Data/Data";
import PatternCards from "../../../Feature/Patterns/Components/PatternCards";
import { themeStore } from "../../../Store/Store";
import { querySearch } from "../../services/service";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);

  const darkTheme = themeStore((state) => state.darkTheme);


  useEffect(() => {
    const data = localStorage.getItem("favourites");
    setFavourites(data ? JSON.parse(data) : []);
  }, []);

  const onClickSetCategory = (keyword) => {
    setCategory(keyword);
  };

  const querySetOnInput = (value) => {
    setQuery(value);
  };


  const basePatterns =
    category === "favorite"
      ? favourites
      : category === "all"
      ? gridPatterns
      : gridPatterns.filter((pattern) => pattern.category === category);

  const finalPatterns = querySearch(query, basePatterns);

  const baseBtn =
    "h-[40px] w-[165px] cursor-pointer flex items-center justify-center rounded-[14px] transition-all";

  const activeBtn = {
    boxShadow: "0 -2px 6px rgba(255,255,255,0.8), 0 6px 12px rgba(0,0,0,0.15)",
    background: "#f2f2f2",
  };

  return (
    <div className="flex flex-col gap-10 mt-2">
      <div className="w-full flex justify-center">
        <NewsCard />
      </div>

<div className="w-full flex justify-center">
        <div className="flex flex-col gap-2">
          <div className="text-6xl flex font-semibold">
            <div className="dark:text-amber-50">Design Mod</div>
            <div className="text-[#4a2eff]">ern</div>
          </div>

          <div className="text-4xl font-semibold flex justify-center text-center">
            <div className="text-black dark:text-white">Pattern Back</div>
            <div className="text-[#4a2eff]">grounds</div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <p className="text-center tracking-tighter dark:text-gray-100 text-gray-500 w-xl font-medium text-[18px]">
          Production-ready static and animated background patterns and
          gradients. Receive both div and Tailwind implementations for
          effortless integration.
        </p>
      </div>

      <div className="w-full flex gap-3 justify-center">
        <Cards
          symbol={<CopySvg />}
          h={"Plug & Play Code"}
          p={"Paste directly into your project"}
        />

        <Cards
          symbol={<EyeSvg />}
          h={"Live Preview"}
          p={"See static & animated patterns in real time"}
        />

        <Cards
          symbol={<MathSvg />}
          h={"Div + Tailwind"}
          p={"Two implementation formats included"}
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="border-[0.01px] w-4xl border-[#1E2129]" />
      </div>

      <div className="w-full gap-10 flex justify-center">
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold dark:text-white text-xl">150+</h1>
          <p className="font-normal dark:text-white">Patterns</p>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="font-extrabold dark:text-white text-xl">100%</h1>
          <p className="font-normal dark:text-white">Free</p>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="font-extrabold text-xl dark:text-white">CSS</h1>
          <p className="font-normal dark:text-white">& Tailwind</p>
        </div>
      </div>

      {/* PATTERN SECTION */}
      <div className="flex flex-col gap-10">
        <div className="w-full flex justify-center">
          <div className="w-6xl text-4xl font-bold dark:text-white">
            Pattern Vault
          </div>
        </div>


      <div className="w-full flex justify-center">
        <div
          style={
            darkTheme
              ? {
                  boxShadow:
                    "rgba(255,255,255,0.16) 0px 10px 36px 0px, rgba(255,255,255,0.06) 0px 0px 0px 1px",
                }
              : {
                  boxShadow:
                    "rgba(0,0,0,0.16) 0px 10px 36px 0px, rgba(0,0,0,0.06) 0px 0px 0px 1px",
                }
          }
          className="border rounded-xl flex justify-center"
        >
          <ul className="flex py-2 text-[16px]">
            {[
              "all",
              "gradients",
              "effects",
              "decorative",
              "geometric",
              "animated",
              "favorite",
            ].map((cat) => (
              <li key={cat}>
                <button
                  className={baseBtn}
                  style={category === cat ? activeBtn : {}}
                  onClick={() => onClickSetCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SEARCH */}
      <div className="w-full flex justify-center">
        <input
          placeholder="Search..."
          onChange={(e) => querySetOnInput(e.target.value)}
          className="w-6xl border rounded-md p-2"
        />
      </div>

      {/* COUNT */}
      <div className="w-full flex justify-center">
        <div className="w-6xl font-semibold">
          {finalPatterns.length} Patterns
        </div>
      </div>

      {/* GRID */}
      <div className="w-full flex justify-center">
        <div className="w-6xl grid grid-cols-4 gap-4">
          {finalPatterns.map((pattern) => (
            <PatternCards
              key={pattern.id}
              patterns={pattern}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
import React, { useEffect, useRef, useState } from "react";
import NewsCard from "../Components/NewsCard";
import { gridPatterns } from "../../../Feature/Patterns/Data/Data";
import PatternCards from "../../../Feature/Patterns/Components/PatternCards";
import { themeStore } from "../../../Store/Store";
import { querySearch } from "../../services/service";
import { FeatureCard } from "../Components/FeatureCard";
import Colorpallete from "../../../Feature/Color_Pallete_Generator/Component/Colorpallete";
import GradientGenerator from "../../../Feature/Gradient_Generator/Components/GradientGenerator";
import Cycle from "../Components/Cycle";
import Pallete from "../Components/Pallete";
import gsap from "gsap";
import { cn } from "../../../Utils";
import { FloatingDock } from "../Components/Dock";
import Library from "../Components/Library";
import Gradient from "../Components/Gradient";
import HomeSvg from "../Components/HomeSvg";
import UpSvg from "../Components/UpSvg";
import { styleStore } from "../../../Store/Store";
import DownSvg from "../Components/DownSvg";
import EyeSvg from "../../../Shared/Components/EyeSvg";

const Home = () => {
  const setId = styleStore((s) => s.setId);
  const style = styleStore((s) => s.style);
  const id = styleStore((s) => s.id);
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [section, setSection] = useState("");
  const [hover, setHover] = useState(false);
  const [card, setCard] = useState("");

  const spinRef = useRef(null);
  const popupRef = useRef(null);
  const darkTheme = themeStore((state) => state.darkTheme);
  const prevTheme = themeStore((s) => s.prevTheme);
  const savePrevTheme = themeStore((s) => s.savePrevTheme);
  const clearPrevTheme = themeStore((s) => s.clearPrevTheme);
  const setTheme = themeStore((s) => s.setTheme);

  useEffect(() => {
    const data = localStorage.getItem("favourites");
    setFavourites(data ? JSON.parse(data) : []);
    if (popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" },
      );
    }
  }, [card]);

  const onClickSetCategory = (keyword) => setCategory(keyword);
  const querySetOnInput = (value) => setQuery(value);

  const basePatterns =
    category === "favorite"
      ? favourites
      : category === "all"
        ? gridPatterns
        : gridPatterns.filter((pattern) => pattern.category === category);

  const finalPatterns = querySearch(query, basePatterns);

  return (
    <div className="">
      {section === "" && (
        <div className="flex w-screen xl:translate-y-25 flex-col xl:gap-12 gap-10">
          <div className="w-full flex justify-center mt-5 lg:mt-10">
            <NewsCard />
          </div>

          <div className="w-full flex gap-2 flex-col items-center justify-center">
            <h1
              className={cn(
                "text-5xl lg:text-7xl tracking-tighter text-center font-semibold w-120",
                darkTheme ? "text-white" : "text-black",
              )}
            >
              Your All-in-One
            </h1>
            <h1 className="text-2xl lg:text-4xl flex gap-2 lg:gap-4 font-semibold tracking-tighter">
              <div className={darkTheme ? "text-white" : "text-black"}>
                Gradient
              </div>
              <div className={darkTheme ? "text-white" : "text-black"}>&</div>
              <div className="bg-[linear-gradient(90deg,red,orange,green,blue,indigo,violet)] bg-clip-text text-transparent">
                Color Toolkit
              </div>
            </h1>
          </div>

          <div className="w-full flex justify-center">
            <p
              className={cn(
                "text-[14px] lg:text-[18px] lg:w-140 w-80 tracking-wide text-center",
                darkTheme
                  ? "text-[rgba(255,255,255,0.7)]"
                  : "text-[rgba(0,0,0,0.7)]",
              )}
            >
              Professional-grade gradients and color tools. Copy, customize, and
              integrate instantly into your projects. Built with modern CSS and
              Tailwind.
            </p>
          </div>

          <div className="w-full flex gap-5 px-3 md:px-0 justify-center">
            <FeatureCard
              icon={<Cycle />}
              title="Gradient Generator"
              description="Create stunning gradients instantly"
              label="Generator"
              accentColor="#7F77DD"
              iconBg="bg-purple-50"
              labelColor="#534AB7"
            />

            <FeatureCard
              icon={<Pallete />}
              title="Color Palette Builder"
              description="Generate perfect color combinations"
              label="Colors"
              accentColor="#1D9E75"
              iconBg="bg-emerald-50"
              labelColor="#0F6E56"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full flex justify-center px-4">
              <div className="w-full max-w-6xl flex items-center justify-between">
                <h1
                  id="grad"
                  className={cn(
                    "text-lg font-medium tracking-tight",
                    darkTheme ? "text-white" : "text-black",
                  )}
                >
                  Pattern vault
                </h1>
                <span
                  className={cn(
                    "text-xs px-2.5 py-1 rounded-full border transition-all",
                    darkTheme
                      ? "bg-white/5 border-white/10 text-white/40"
                      : "bg-gray-100 border-black/8 text-gray-400",
                  )}
                >
                  {finalPatterns.length} patterns
                </span>
              </div>
            </div>

            <div className="w-full flex justify-center px-4">
              <div className="w-full max-w-6xl relative">
                <svg
                  className={cn(
                    "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none",
                    darkTheme ? "text-white/30" : "text-gray-400",
                  )}
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  placeholder="Search patterns…"
                  onChange={(e) => querySetOnInput(e.target.value)}
                  className={cn(
                    "w-full h-10 pl-9 pr-4 text-sm rounded-[10px] outline-none",
                    "border transition-[border-color,box-shadow] duration-200 focus:ring-[3px]",
                    darkTheme
                      ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/20 focus:ring-white/8"
                      : "bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-black/20 focus:ring-black/5",
                  )}
                />
              </div>
            </div>

            <div className="w-full flex justify-center px-4">
              <div className="w-full max-w-6xl">
                <div
                  className={cn(
                    "flex flex-wrap gap-0.5 rounded-[10px] p-0.5 w-fit border",
                    darkTheme
                      ? "bg-white/5 border-white/8"
                      : "bg-gray-100 border-black/6",
                  )}
                >
                  {[
                    "all",
                    "gradients",
                    "effects",
                    "decorative",
                    "geometric",
                    "animated",
                    "favorite",
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => onClickSetCategory(cat)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[12px] capitalize transition-all duration-150",
                        category === cat
                          ? cn(
                              "font-medium shadow-sm",
                              darkTheme
                                ? "bg-white text-black"
                                : "bg-white text-gray-900",
                            )
                          : cn(
                              darkTheme
                                ? "text-white/50 hover:text-white hover:bg-white/8"
                                : "text-gray-500 hover:text-gray-800 hover:bg-white/80",
                            ),
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {category === "favorite" && finalPatterns.length === 0 && (
              <div className="w-full xl:p-10 flex justify-center px-4">
                <div
                  className={cn(
                    "w-full max-w-6xl flex flex-col items-center justify-center gap-3 py-20 rounded-2xl border border-dashed",
                    darkTheme ? "border-white/10" : "border-black/10",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      darkTheme ? "bg-white/5" : "bg-gray-100",
                    )}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={darkTheme ? "text-white/30" : "text-gray-400"}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        darkTheme ? "text-white/60" : "text-gray-600",
                      )}
                    >
                      No favourites yet
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        darkTheme ? "text-white/25" : "text-gray-400",
                      )}
                    >
                      Hit the heart on any pattern to save it here
                    </p>
                  </div>
                  <button
                    onClick={() => onClickSetCategory("all")}
                    className={cn(
                      "mt-1 text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-150",
                      darkTheme
                        ? "border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60"
                        : "border-black/8 text-gray-400 hover:bg-gray-100 hover:text-gray-600",
                    )}
                  >
                    Browse all patterns
                  </button>
                </div>
              </div>
            )}

            {category !== "favorite" && finalPatterns.length === 0 && (
              <div className="w-full xl:p-10 flex justify-center px-4">
                <div
                  className={cn(
                    "w-full max-w-6xl flex flex-col items-center justify-center gap-3 py-20 rounded-2xl border border-dashed",
                    darkTheme ? "border-white/10" : "border-black/10",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      darkTheme ? "bg-white/5" : "bg-gray-100",
                    )}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={darkTheme ? "text-white/30" : "text-gray-400"}
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        darkTheme ? "text-white/60" : "text-gray-600",
                      )}
                    >
                      No patterns found
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        darkTheme ? "text-white/25" : "text-gray-400",
                      )}
                    >
                      Try a different keyword or category
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClickSetCategory("all");
                      querySetOnInput("");
                    }}
                    className={cn(
                      "mt-1 text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-150",
                      darkTheme
                        ? "border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60"
                        : "border-black/8 text-gray-400 hover:bg-gray-100 hover:text-gray-600",
                    )}
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}

            {finalPatterns.length > 0 && (
              <div className="w-full flex justify-center px-4">
                <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {finalPatterns.map((pattern, i) => (
                    <PatternCards
                      key={pattern.id}
                      patterns={pattern}
                      favourites={favourites}
                      setFavourites={setFavourites}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="w-full flex justify-center items-center">
        <div className="w-fit border-[0.1px] border-[rgba(0,0,0,0.1)] rounded-2xl fixed bottom-0 lg:bottom-5 z-100">
          <FloatingDock
            items={[
              { title: "Home", icon: <HomeSvg />, href: () => setSection("") },
              {
                title: "Gradient Generator",
                icon: <Gradient />,
                href: () => setSection("Gradient Generator"),
              },
              {
                title: "Color Pallete Generator",
                icon: <Pallete />,
                href: () => setSection("Color Pallete Generator"),
              },
              {
                title: "Go To Preview",
                icon: <EyeSvg />,
                href: style
                  ? () => {
                      const el = document.getElementById(id);
                      if (el) {
                        const top =
                          el.getBoundingClientRect().top + window.scrollY - 200;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }
                  : () => {
                      const el = document.getElementById("grad");
                      if (el) {
                        const top =
                          el.getBoundingClientRect().top + window.scrollY - 200;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    },
              },
            ]}
          />
        </div>
      </div>

      {section === "Gradient Generator" && (
        <div className="xl:h-screen flex justify-center items-center">
          <GradientGenerator />
        </div>
      )}
      {section === "Color Pallete Generator" && (
        <div className="xl:h-screen flex justify-center items-center">
          <Colorpallete />
        </div>
      )}
    </div>
  );
};

export default Home;

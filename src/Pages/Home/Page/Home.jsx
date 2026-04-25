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

const Home = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [section, setSection] = useState("");
  const [hover, setHover] = useState(false);
  const [card, setCard] = useState("");

  const spinRef = useRef(null);
  const popupRef = useRef(null);

  const darkTheme = themeStore((state) => state.darkTheme);

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
        <div className="flex translate-y-20 flex-col gap-10">
          <div className="w-full flex mt-10 justify-center items-center">
            <NewsCard />
          </div>

          <div className="w-full flex gap-2 flex-col items-center justify-center">
            <h1
              className={cn(
                "text-6xl tracking-tighter text-center font-semibold w-120",
                darkTheme ? "text-white" : "text-black",
              )}
            >
              Your All-in-One
            </h1>
            <h1 className="text-4xl flex gap-4 font-semibold tracking-tighter">
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
                "text-[18px] w-140 tracking-wide text-center",
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

          <div className="w-full flex gap-10 justify-center">
            <FeatureCard
              icon={<Cycle />}
              title="Gradient Generator"
              description="Create stunning gradients instantly"
              bgColor="bg-gray-200"
            />
            <FeatureCard
              icon={<Pallete />}
              title="Color Palette Builder"
              description="Generate perfect color combinations"
              bgColor="bg-gray-200"
            />
          </div>
          <div className="w-full mt-9 mb-8 flex justify-center">
            <div className="p-[2.5px] flex justify-center items-center bg-[linear-gradient(90deg,red,orange,green,blue,indigo,violet)] w-xl h-auto rounded-2xl">
              <video
                className="w-xl rounded-2xl"
                src="https://cdn.discordapp.com/attachments/843057977023004692/1497636089148473575/Desktop_2026.04.25_-_21_online-video-cutter.com.mp4?ex=69ee3dcc&is=69ecec4c&hm=c5ccb10e804d43cec1e0e0fd837be35de11952423c01ee0203a16025d984e6bd&"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Pattern vault header */}
            <div className="w-full flex justify-center">
              <div className="w-6xl flex items-center justify-between">
                <h1
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

            {/* Search input */}
            <div className="w-full flex justify-center">
              <div className="w-6xl relative">
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
                    "border transition-[border-color,box-shadow] duration-200",
                    "focus:ring-[3px]",
                    darkTheme
                      ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/20 focus:ring-white/8"
                      : "bg-white border-black/10 text-gray-900 placeholder-gray-400 focus:border-black/20 focus:ring-black/5",
                  )}
                />
              </div>
            </div>

            {/* Category filter pills */}
            <div className="w-full flex justify-center">
              <div className="w-6xl">
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
                        "px-3.5 py-1.5 rounded-lg text-[12px] capitalize transition-all duration-150",
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

            {/* Pattern grid */}
            <div className="w-full flex justify-center">
              <div className="w-6xl grid grid-cols-4 gap-2.5">
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
          </div>
        </div>
      )}

      {/* Floating Dock */}
      <div className="w-full flex justify-center items-center">
        <div className="w-fit border-[0.1px] border-[rgba(0,0,0,0.1)] rounded-2xl fixed bottom-8 z-100">
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
            ]}
          />
        </div>
      </div>

      {section === "Gradient Generator" && (
        <div className="h-screen flex justify-center items-center">
          <GradientGenerator />
        </div>
      )}
      {section === "Color Pallete Generator" && (
        <div className="h-screen w-screen flex justify-center items-center">
          <Colorpallete />
        </div>
      )}
    </div>
  );
};

export default Home;

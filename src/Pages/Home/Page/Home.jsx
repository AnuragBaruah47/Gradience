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
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  }, [card]);

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
    <div className="flex flex-col gap-10">
      <div className="w-full flex mt-10 justify-center items-center">
        <NewsCard />
      </div>
      <div className="w-full flex gap-2 flex-col items-center justify-center">
        <h1 className="text-6xl tracking-tighter text-center font-semibold w-120">
          Your All-in-One
        </h1>
        <h1 className="text-4xl flex gap-4 font-semibold tracking-tighter">
          <div>Gradient</div> &
          <div
            className="
bg-[linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet)]
bg-clip-text
text-transparent
"
          >
            Color Toolkit
          </div>
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <p className="text-[18px] w-140 text-[rgba(0,0,0,0.7)] tracking-wide text-center">
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
      <div className="w-full flex justify-center items-center">
        <div className="z-30 flex flex-col fixed bottom-5">
          {hover && (
            <div>
              <div className="h-51 flex relative justify-center items-center gap-10 w-auto">
                <button
                  onClick={() => {
                    setHover(false);
                    setSection("Gradient Library")
                      setCard("")
                  }}
                 
                >
                  <div     onMouseEnter={()=>setCard("Library")}
                  onMouseLeave={()=>setCard("")} className="cursor-pointer border-[0.6px] h-12 w-12 p-2 translate-y-15 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.1)] rounded-full ease-in-out hover:scale-110 duration-300">
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
                          d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M15 18H9"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
                <button
                  className=""
                  onClick={() => {
                    setHover(false);
                    setSection("Gradient Generator");
                      setCard("")
                  }}
                  
                >
                  <div    onMouseEnter={()=>setCard("Generator")}
                  onMouseLeave={()=>setCard("")} className="cursor-pointer border-[0.6px] h-12 w-12 p-2 translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.1)] rounded-full ease-in-out hover:scale-110 duration-300">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
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
                          fill="var(--ci-primary-color, #000000)"
                          d="M440,40H72A16,16,0,0,0,56,56V456a16,16,0,0,0,16,16H440a16,16,0,0,0,16-16V56A16,16,0,0,0,440,40ZM424,232H376v48h48v48H376v40H328V328H280v40H232V328H184v40H136V328H88V280h48V232H88V72H424Z"
                          class="ci-primary"
                        ></path>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="136"
                          y="280"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="184"
                          y="232"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="232"
                          y="280"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="280"
                          y="232"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="328"
                          y="280"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="136"
                          y="184"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="232"
                          y="184"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                        <rect
                          width="48"
                          height="48"
                          x="328"
                          y="184"
                          fill="var(--ci-primary-color, #000000)"
                          class="ci-primary"
                        ></rect>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
                <button
                  className=""
                  onClick={() => {
                    setHover(false);
                    setSection("Color Pallete Generator");
                    setCard("")
                  }}
               
                >
                  <div    onMouseEnter={()=>setCard("Pallete")}
                  onMouseLeave={()=>setCard("")} className="cursor-pointer border-[0.6px] h-12 w-12 p-2 translate-y-15 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.1)] rounded-full ease-in-out hover:scale-110 duration-300">
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
                          d="M2 12.0261C2 17.1723 5.86713 21.413 10.8468 21.9863C11.5816 22.0709 12.2938 21.7576 12.8168 21.2333C13.4703 20.5781 13.4703 19.5159 12.8168 18.8607C12.2938 18.3364 11.8674 17.5541 12.2619 16.9268C13.8385 14.4192 22 20.178 22 12.0261C22 6.48884 17.5228 2 12 2C6.47715 2 2 6.48884 2 12.0261Z"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <circle
                          cx="17.5"
                          cy="11.5"
                          r="0.75"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></circle>{" "}
                        <circle
                          cx="6.5"
                          cy="11.5"
                          r="0.75"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></circle>{" "}
                        <path
                          d="M10.335 6.99976C10.335 7.41397 9.99917 7.74976 9.58496 7.74976C9.17075 7.74976 8.83496 7.41397 8.83496 6.99976C8.83496 6.58554 9.17075 6.24976 9.58496 6.24976C9.99917 6.24976 10.335 6.58554 10.335 6.99976Z"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M15.25 7C15.25 7.41421 14.9142 7.75 14.5 7.75C14.0858 7.75 13.75 7.41421 13.75 7C13.75 6.58579 14.0858 6.25 14.5 6.25C14.9142 6.25 15.25 6.58579 15.25 7Z"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )}

          <div className="flex group  justify-center items-center">
            <button
              onClick={() => {
                setSection("");
                if (hover) {
                  gsap.to(spinRef.current, {
                    rotate: 0,
                    duration: 0.2,
                    ease: "power2.inOut",
                  });
                } else {
                  gsap.to(spinRef.current, {
                    rotate: 180,
                    duration: 0.2,
                    ease: "power2.inOut",
                  });
                }
                setHover((e) => !e);
              }}
              className="w-15
          
         h-15 rounded-4xl
     
          z-50
  relative overflow-hidden p-8 cursor-pointer flex justify-center items-center"
            >
              <div>
                <svg
                  ref={spinRef}
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
                      d="M20 20L4 4.00003M20 4L4.00002 20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </button>
            <div
              className="w-10 h-10 group-hover:scale-125 ease-in-out transition-all duration-500 rounded-full absolute overflow-hidden
  bg-linear-to-br from-white/80 via-blue-100/40 to-blue-300/20
  backdrop-blur-md
  border border-white/40
  shadow-[inset_0_10px_30px_rgba(255,255,255,0.8),inset_0_-20px_40px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute top-4 left-6 w-20 h-10 bg-white/90 rounded-full blur-sm"></div>
              <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 right-6 w-16 h-8 bg-white/40 rounded-full blur-md"></div>
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className=" relative flex justify-center">
          {card==="Generator" && <div ref={popupRef} className="text-[16px] transition-all ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.15)] h-auto border-[0.5px] border-[rgba(0,0,0,0.1)] w-50 flex justify-center p-2 items-center rounded-xl z-40 font-semibold absolute top-16">Gradient Generator</div>}
          {card === "Library" && <div ref={popupRef} className="text-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] h-auto border-[0.5px] border-[rgba(0,0,0,0.1)] z-40 w-50 flex justify-center p-2 items-center rounded-xl font-semibold absolute top-46 right-35">Gradient Library</div>}
          
         {card === "Pallete" &&  <div ref={popupRef} className="text-[16px] left-35 top-46 shadow-[0_10px_30px_rgba(0,0,0,0.15)] h-auto border-[0.5px] z-40 border-[rgba(0,0,0,0.1)] w-50 flex justify-center p-2 items-center rounded-xl font-semibold absolute">Color Pallete Generator</div>}
        </div>
      </div>

      {/* section */}
      {section === "Gradient Library" && (
        <div className="flex flex-col gap-5">

  {/* Header */}
  <div className="w-full flex justify-center">
    <div className="w-6xl flex items-center justify-between">
      <h1 className="text-lg font-medium tracking-tight dark:text-white">
        Pattern vault
      </h1>
      <span className={cn(
        "text-xs px-2.5 py-1 rounded-full border transition-all",
        "dark:bg-white/5 dark:border-white/10 dark:text-white/40",
        "bg-gray-100 border-black/8 text-gray-400"
      )}>
        {finalPatterns.length} patterns
      </span>
    </div>
  </div>

  {/* Search */}
  <div className="w-full flex justify-center">
    <div className="w-6xl relative">
      {/* icon — color adapts to theme */}
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none dark:text-white/30 text-gray-400"
        width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
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
          "dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-white/30",
          "dark:focus:border-white/20 dark:focus:ring-white/8",
          "bg-white border-black/10 text-gray-900 placeholder-gray-400",
          "focus:border-black/20 focus:ring-black/5"
        )}
      />
    </div>
  </div>

  {/* Category pills */}
  <div className="w-full flex justify-center">
    <div className="w-6xl">
      <div className={cn(
        "flex flex-wrap gap-0.5 rounded-[10px] p-0.5 w-fit border",
        "dark:bg-white/5 dark:border-white/8",
        "bg-gray-100 border-black/6"
      )}>
        {["all", "gradients", "effects", "decorative", "geometric", "animated", "favorite"].map((cat) => (
          <button
            key={cat}
            onClick={() => onClickSetCategory(cat)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-[12px] capitalize transition-all duration-150",
              category === cat
                ? "dark:bg-white dark:text-black bg-white text-gray-900 font-medium shadow-sm"
                : cn(
                    "dark:text-white/50 dark:hover:text-white dark:hover:bg-white/8",
                    "text-gray-500 hover:text-gray-800 hover:bg-white/80"
                  )
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Grid */}
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
      )}
      {section === "Gradient Generator" && (
        <div>
          <GradientGenerator />
        </div>
      )}
      {section === "Color Pallete Generator" && (
        <div>
          <Colorpallete />
        </div>
      )}
    </div>
  );
};

export default Home;

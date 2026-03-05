import React from "react";
import NewsCard from "../Components/NewsCard";
import Cards from "../Components/Cards";
import CopySvg from "../Components/CopySvg";
import EyeSvg from "../Components/EyeSvg";
import MathSvg from "../Components/MathSvg";
import { gridPatterns } from "../Patterns";
import PatternCards from "../Components/PatternCards";
import { themeStore } from "../Store/Store";
import { Link } from "react-router-dom";

const Home = () => {
  const darkTheme = themeStore((state) => state.darkTheme);
  return (
    <div className="flex flex-col gap-10 mt-2">
      <div className="w-full flex justify-center">
        <NewsCard />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-2">
          <div className="text-6xl flex font-semibold">
            <div className="dark:text-amber-50"> Design Mod </div>
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
          effortless integration. Modern, clean, and developer-friendly.
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
          p={" See static & animated patterns in real time"}
        />
        <Cards
          symbol={<MathSvg />}
          h={"Div + Tailwind"}
          p={"Two implementation formats included"}
        />
      </div>
      <div className="w-full gap-2  flex justify-center">
        <button className="flex dark:text-white cursor-pointer items-center px-2 py-2 border border-[#ebe9e9] dark:border-[#1E2129] rounded-xl hover:text-gray-500 transition-all ease-in-out duration-200">
          <div className="text-md  font-semibold">Buy Me A Coffee</div>
          <div className="h-8 w-8">
            <svg
              viewBox="0 0 1024 1024"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M314.8 267.7h395.5c11.2 0 21.4 6.7 25.8 17l39.1 91.1H249.9l39.1-91.1c4.4-10.3 14.6-17 25.8-17z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M817.8 404H207.3l55.8-130.3c8.9-20.7 29.1-34 51.6-34h395.5c22.5 0 42.8 13.4 51.6 34.1l56 130.2z m-525.3-56.2h440.1l-22.3-52H314.8l-22.3 52z m22.3-80.1v28.1-28.1z"
                  fill="#333333"
                ></path>
                <path
                  d="M265.7 422.2h493.8c15.5 0 28.1 12.6 28.1 28.1 0 1-0.1 2-0.2 2.9L747 836.7c-1.5 14.3-13.6 25.1-27.9 25.1h-413c-14.4 0-26.4-10.9-27.9-25.1l-40.4-383.4c-1.6-15.4 9.6-29.3 25-30.9 0.9-0.1 1.9-0.2 2.9-0.2z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M677.8 861.9H315.5c-19.7 0-36.2-14.9-38.3-34.5L239 464.8c-2.4-22.7 15.4-42.6 38.3-42.6h470.6c22.9 0 40.7 19.8 38.3 42.6l-34.9 330.9c-4 37.6-35.7 66.2-73.5 66.2z m-311.7-56.2h293c19.7 0 36.2-14.9 38.3-34.5L723.8 521c2.4-22.7-15.4-42.6-38.3-42.6H339.7c-22.9 0-40.7 19.8-38.3 42.6l26.4 250.2c2 19.6 18.6 34.5 38.3 34.5z"
                  fill="#333333"
                ></path>
                <path
                  d="M310 598.1h406.2l-10.7 103.6-385.7 1.7z"
                  fill="#F4CE26"
                ></path>
                <path
                  d="M296.3 690.5h417.1v61.8H296.3zM296.3 537.4h441v61.8h-441z"
                  fill="#333333"
                ></path>
                <path
                  d="M249.9 375.9h525.3c25.6 0 46.3 20.8 46.3 46.3 0 25.6-20.8 46.3-46.3 46.3H249.9c-25.6 0-46.3-20.8-46.3-46.3 0-25.6 20.7-46.3 46.3-46.3z"
                  fill="#F4CE26"
                ></path>
                <path
                  d="M775.2 496.7H249.9c-41 0-74.4-33.4-74.4-74.4s33.4-74.4 74.4-74.4h525.3c41 0 74.4 33.4 74.4 74.4s-33.3 74.4-74.4 74.4zM249.9 404c-10.1 0-18.3 8.2-18.3 18.3 0 10.1 8.2 18.3 18.3 18.3h525.3c10.1 0 18.3-8.2 18.3-18.3 0-10.1-8.2-18.3-18.3-18.3H249.9zM357.6 101.1c15-4 30.4 4.9 34.4 19.9l14.5 54.3c4 15-4.9 30.4-19.9 34.4-15 4-30.4-4.9-34.4-19.9l-14.5-54.3c-4-15 4.9-30.4 19.9-34.4zM498 101.1c15-4 30.4 4.9 34.4 19.9l14.5 54.3c4 15-4.9 30.4-19.9 34.4-15 4-30.4-4.9-34.4-19.9l-14.5-54.3c-3.9-15 5-30.4 19.9-34.4zM638.5 101.1c15-4 30.4 4.9 34.4 19.9l14.5 54.3c4 15-4.9 30.4-19.9 34.4-15 4-30.4-4.9-34.4-19.9l-14.5-54.3c-4-15 4.9-30.4 19.9-34.4z"
                  fill="#333333"
                ></path>
              </g>
            </svg>
          </div>
        </button>
        <button className="flex dark:border-[#1E2129] dark:text-white cursor-pointer items-center px-2 py-2 hover:text-gray-500 transition-all ease-in-out duration-200 border border-[#ebe9e9] rounded-xl">
          <div className="text-md font-semibold">Browse Patterns</div>
          <div className="h-8 w-8">
            <svg
              viewBox="0 0 1024 1024"
              fill="#c800ff"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c800ff"
              strokeWidth="0.01024"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M871.836 1023.766H152.164a7.992 7.992 0 0 1-7.996-7.996v-79.962c0-68.64 35.546-94.942 101.158-119.446l16.976-6.294a5992.148 5992.148 0 0 0 31.486-11.682c4.108-1.594 8.746 0.546 10.292 4.67a7.974 7.974 0 0 1-4.67 10.292c-11.448 4.308-22.146 8.246-31.564 11.728l-16.93 6.278c-61.486 22.958-90.754 44.45-90.754 104.454v71.966H863.84v-71.966c0-60.004-29.27-81.494-90.756-104.454l-18.118-6.714c-8.98-3.31-19.068-7.044-29.846-11.09a7.974 7.974 0 0 1-4.67-10.292c1.546-4.124 6.186-6.264 10.292-4.67a4802.2 4802.2 0 0 0 29.768 11.042l18.18 6.748c65.594 24.488 101.14 50.79 101.14 119.43v79.962a7.988 7.988 0 0 1-7.994 7.996zM512 767.882c-0.906 0-1.828-0.156-2.732-0.484l-87.96-31.984a7.98 7.98 0 0 1-4.778-10.246 7.988 7.988 0 0 1 10.246-4.78l87.96 31.986a7.98 7.98 0 0 1 4.778 10.244 7.99 7.99 0 0 1-7.514 5.264z"
                  fill=""
                ></path>
                <path
                  d="M512 767.882a7.988 7.988 0 0 1-7.512-5.264 7.976 7.976 0 0 1 4.78-10.244l87.958-31.986a7.98 7.98 0 0 1 10.246 4.78 7.98 7.98 0 0 1-4.78 10.246l-87.958 31.984a8.014 8.014 0 0 1-2.734 0.484zM551.982 847.846h-79.964a8.012 8.012 0 0 1-7.154-4.42l-15.992-31.984a8.004 8.004 0 0 1 3.576-10.73 7.988 7.988 0 0 1 10.73 3.578l13.774 27.564h70.094l13.774-27.564a8.02 8.02 0 0 1 10.73-3.578 8.006 8.006 0 0 1 3.576 10.73l-15.992 31.984a8.012 8.012 0 0 1-7.152 4.42z"
                  fill=""
                ></path>
                <path
                  d="M472.034 927.808c-0.532 0-1.062-0.046-1.578-0.156a7.976 7.976 0 0 1-6.28-9.4l15.994-79.962c0.874-4.36 5.248-7.138 9.402-6.28a7.98 7.98 0 0 1 6.28 9.402l-15.994 79.962a7.988 7.988 0 0 1-7.824 6.434zM551.966 927.808a7.994 7.994 0 0 1-7.826-6.434l-15.992-79.962a7.976 7.976 0 0 1 6.28-9.402c4.154-0.86 8.528 1.92 9.4 6.28l15.994 79.962a7.976 7.976 0 0 1-6.28 9.4 7.55 7.55 0 0 1-1.576 0.156zM425.226 991.782a7.94 7.94 0 0 1-5.59-2.282l-49.166-47.978a8 8 0 0 1-1.998-8.246l14.758-44.26-61.798-92.708a7.992 7.992 0 0 1 1-10.09l63.97-63.97a7.994 7.994 0 0 1 11.308 0 7.992 7.992 0 0 1 0 11.306l-59.332 59.332 60.332 90.506a7.97 7.97 0 0 1 0.936 6.964l-14.414 43.23 45.588 44.48a7.994 7.994 0 0 1 0.124 11.306 7.992 7.992 0 0 1-5.718 2.41z"
                  fill=""
                ></path>
                <path
                  d="M472.018 991.782a8.014 8.014 0 0 1-7.638-5.608l-79.962-255.882a8.016 8.016 0 0 1 5.248-10.028 7.974 7.974 0 0 1 10.026 5.248l79.964 255.882a8.014 8.014 0 0 1-5.248 10.028c-0.796 0.25-1.61 0.36-2.39 0.36zM598.774 991.782a7.994 7.994 0 0 1-5.592-13.712l45.588-44.48-14.414-43.23a7.964 7.964 0 0 1 0.938-6.964l60.33-90.506-59.332-59.332c-3.124-3.124-3.124-8.184 0-11.306s8.184-3.124 11.306 0l63.972 63.97a7.994 7.994 0 0 1 0.998 10.09l-61.798 92.708 14.758 44.26a8 8 0 0 1-1.998 8.246l-49.166 47.978a7.954 7.954 0 0 1-5.59 2.278z"
                  fill=""
                ></path>
                <path
                  d="M551.982 991.782c-0.782 0-1.594-0.11-2.39-0.36a8.016 8.016 0 0 1-5.248-10.028l79.964-255.882c1.328-4.202 5.778-6.59 10.026-5.248a8.016 8.016 0 0 1 5.248 10.028L559.62 986.174a8.016 8.016 0 0 1-7.638 5.608zM440.034 799.868a7.994 7.994 0 0 1-3.248-15.304l71.966-31.984c4.03-1.766 8.762 0 10.556 4.06a8.004 8.004 0 0 1-4.06 10.556l-71.966 31.986a8.034 8.034 0 0 1-3.248 0.686z"
                  fill=""
                ></path>
                <path
                  d="M583.966 799.868a8 8 0 0 1-3.248-0.686l-71.966-31.986a8 8 0 0 1-4.06-10.556c1.81-4.06 6.512-5.826 10.556-4.06l71.966 31.984a8.004 8.004 0 0 1 4.062 10.558 7.992 7.992 0 0 1-7.31 4.746zM512 991.782a7.992 7.992 0 0 1-7.996-7.996V903.82c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v79.964a7.992 7.992 0 0 1-7.996 7.998z"
                  fill=""
                ></path>
                <path
                  d="M512 368.066c-165.58 0-367.832-36.906-367.832-79.964 0-11.776 8.964-29.206 86.414-44.48 4.264-0.906 8.528 1.952 9.386 6.294a7.988 7.988 0 0 1-6.294 9.386c-60.3 11.902-73.512 24.818-73.512 28.8 0 18.554 152.274 63.97 351.838 63.97s351.84-45.416 351.84-63.97c0-3.982-13.212-16.898-73.514-28.8a7.986 7.986 0 0 1-6.294-9.386c0.844-4.342 5.108-7.216 9.386-6.294 77.45 15.274 86.414 32.704 86.414 44.48 0 43.06-202.252 79.964-367.832 79.964z"
                  fill=""
                ></path>
                <path
                  d="M512 304.096c-135.484 0-248.95-31.97-250.088-32.298a8 8 0 0 1-5.794-7.684V143.168C256.118 44.962 388.76 0.234 512 0.234s255.882 44.73 255.882 142.934v120.944a8 8 0 0 1-5.792 7.684c-1.14 0.328-114.606 32.3-250.09 32.3z m-239.89-46.12c24.568 6.372 124.006 30.126 239.89 30.126 115.994 0 215.34-23.754 239.89-30.126V143.168c0-83.336-120.68-126.942-239.89-126.942S272.11 59.832 272.11 143.168v114.808z"
                  fill=""
                ></path>
                <path
                  d="M512 272.11c-135.484 0-248.95-31.968-250.088-32.296a7.98 7.98 0 0 1-5.482-9.886c1.204-4.232 5.576-6.792 9.886-5.482 1.108 0.312 112.526 31.672 245.684 31.672 133.284 0 244.576-31.362 245.684-31.672 4.282-1.312 8.684 1.234 9.886 5.482a7.98 7.98 0 0 1-5.48 9.886c-1.14 0.326-114.606 32.296-250.09 32.296z"
                  fill=""
                ></path>
                <path
                  d="M472.018 703.912a7.992 7.992 0 0 1-7.998-7.996v-47.978a7.992 7.992 0 0 1 7.998-7.996 7.992 7.992 0 0 1 7.996 7.996v47.978a7.99 7.99 0 0 1-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M551.982 703.912a7.992 7.992 0 0 1-7.998-7.996v-47.978c0-4.42 3.578-7.996 7.998-7.996s7.996 3.576 7.996 7.996v47.978a7.99 7.99 0 0 1-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M567.974 703.912h-111.95c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h111.95c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M567.974 719.904a7.99 7.99 0 0 1-7.996-7.996v-15.992c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v15.992a7.99 7.99 0 0 1-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M456.026 719.904a7.99 7.99 0 0 1-7.996-7.996v-15.992c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v15.992a7.99 7.99 0 0 1-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M512 751.89a7.99 7.99 0 0 1-7.996-7.996v-31.986c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v31.986a7.99 7.99 0 0 1-7.996 7.996z"
                  fill=""
                ></path>
                <path
                  d="M512 639.942c-141.654 0-258.054-106.248-270.75-247.152a273.146 273.146 0 0 1-1-32.952c0.124-4.42 4.28-7.576 8.23-7.762a8.004 8.004 0 0 1 7.762 8.23 256.744 256.744 0 0 0-0.124 7.762c0 7.714 0.36 15.54 1.062 23.286 11.948 132.596 121.49 232.598 254.82 232.598 133.346 0 242.904-100.002 254.852-232.614 0.688-7.512 1.032-15.352 1.032-23.27 0-2.61-0.032-5.216-0.094-7.81a7.994 7.994 0 0 1 7.808-8.184c4.326 0.282 8.074 3.39 8.184 7.81 0.062 2.716 0.094 5.45 0.094 8.184 0 8.402-0.376 16.726-1.094 24.708-12.696 140.902-129.112 247.166-270.782 247.166z"
                  fill=""
                ></path>
                <path
                  d="M512 607.958c-130.034 0-235.346-101.736-239.734-231.628a8.018 8.018 0 0 1 7.732-8.262c4.014-0.172 8.09 3.31 8.262 7.73 4.092 121.21 102.376 216.166 223.742 216.166 121.368 0 219.664-94.956 223.774-216.166 0.156-4.42 3.858-7.606 8.262-7.73a8.016 8.016 0 0 1 7.73 8.262C747.362 506.222 642.036 607.958 512 607.958z"
                  fill=""
                ></path>
                <path
                  d="M512 559.978c-96.096 0-177.902-71.75-190.288-166.892a8.02 8.02 0 0 1 6.902-8.964c4.216-0.578 8.386 2.514 8.964 6.904 11.338 87.194 86.336 152.96 174.42 152.96 4.42 0 7.996 3.578 7.996 7.998s-3.574 7.994-7.994 7.994z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div className="w-full dark:text-white flex text-[18px] font-medium flex-col items-center justify-center">
        <div className="flex gap-1 flex-col">
          <div>
  Inspired by the work of.
          <Link className="pl-1.5 font-extrabold hover:underline" to={"https://github.com/megh-bari"}>
            Megh Bari
          </Link>
          </div>
          <div>
    Huge respect to the original creator.
          </div>
        
      
        </div>
        <div className="flex gap-2 font-extrabold">
          <div>
           
            <Link className="hover:underline" to={"https://github.com/megh-bari/pattern-craft"}>
              GitHub
            </Link>
          </div>
          <div className="flex ">
              
          <div>
            <Link className="hover:underline" to={"https://patterncraft.fun/"}>Website</Link>
          </div>
          </div>
       
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="border-[0.01px] w-4xl border-[#1E2129]"></div>
      </div>
      <div className="w-full gap-10 flex justify-center">
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold dark:text-white text-xl">150+</h1>
          <p className="font-normal dark:text-white">Patterns</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold dark:text-white text-xl">100%</h1>
          <p className="font-normal dark:text-white">free</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold text-xl dark:text-white">CSS</h1>
          <p className="font-normal dark:text-white">& Tailwind</p>
        </div>
      </div>

      {/* patterns section */}

      <div className="flex flex-col gap-10">
        <div className="w-full flex justify-center">
          <div className="w-6xl text-4xl font-bold dark:text-white">
            Pattern Vault
          </div>
        </div>

        {/* navbar */}
        <div className="w-full flex justify-center">
          <div
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
            className="w-6xl border-2 p-4  border-[rgba(255,255,255,0.2)] rounded-xl flex justify-center"
          >
            <ul className="flex text-md dark:text-white text-gray-500  gap-20">
              <li>All Patterns</li>
              <li>Gradients</li>
              <li>Decorative</li>
              <li>Animated</li>
              <li>Effects</li>
              <li>Geometric</li>
              <li>Favourites</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex  relative justify-center items-center">
            <div className="h-6  absolute font-bold left-0 translate-x-2 w-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="20"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke={darkTheme ? "#ffffff" : "#000000"}
                    strokeWidth="0.672"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <input
                placeholder="Search..."
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="w-6xl dark:placeholder:text-white border-[rgba(255,255,255,0.2)]  rounded-md p-2 px-9 font-semibold border-2 focus:outline-0  "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-6xl font-semibold dark:text-white text-[16px]">
            {gridPatterns.length} patterns
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-6xl grid grid-cols-4 gap-4">
            {gridPatterns.map((e) => {
              return (
                <PatternCards
                  wholeStyle={e}
                  id={e.id}
                  key={e.id}
                  style={e.style}
                  name={e.name}
                  className={"shadow-2xl"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

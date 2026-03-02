import React from "react";
import NewsCard from "../Components/NewsCard";

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-8 mt-2 w-full">
      <div className="w-full flex justify-center">
      <NewsCard/>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-2">
          <div className="text-6xl flex font-semibold">
            <div> Design Mod </div>
            <div className="text-[#2f3c40]">ern</div>
          </div>
          <div className="text-4xl font-semibold flex justify-center text-center">
            <div>Pattern Back</div>
            <div className="text-green-800">grounds</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-center w-xl font-medium text-[18px]">
          Production-ready static and animated background patterns and
          gradients. Receive both div and Tailwind implementations for
          effortless integration. Modern, clean, and developer-friendly.
        </p>
      </div>
    </div>
  );
};

export default Home;

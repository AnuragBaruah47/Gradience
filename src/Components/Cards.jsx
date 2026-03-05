import React from "react";
import { themeStore } from "../Store/Store";

const Cards = ({ p, h, symbol }) => {
  return (
    <div
      className="rounded-xl px-3 py-5 dark:border  dark:border-[#1E2129] flex gap-1.5"
      style={{
       "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <div className="h-8 w-8">{symbol}</div>
      <div className="flex font-medium text-[13px] flex-col">
        <div className="font-extrabold dark:text-white">{h}</div>
        <div className="tracking-tight dark:text-white">{p}</div>
      </div>
    </div>
  );
};

export default Cards;

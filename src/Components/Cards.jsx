import React from "react";

const Cards = ({ p, h, symbol }) => {
  return (
    <div
      className="rounded-xl px-3 py-2 flex gap-1.5"
      style={{
        "box-shadow":
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px} className= h-fit flex gap-2 w-fit",
      }}
    >
      <div className="h-8 w-8">{symbol}</div>
      <div className="flex font-medium text-[13px] flex-col">
        <div className="font-extrabold">{h}</div>
        <div className="tracking-tight">{p}</div>
      </div>
    </div>
  );
};

export default Cards;

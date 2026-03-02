import SVGmorph from "./SVGmorph";

import React from "react";

const NewsCard = () => {
  return (
    <div
      className="border flex items-center gap-2 border-[rgba(0,0,0,0.1)] w-fit rounded-full  p-3 h-fit"
      style={{
        "box-shadow":
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <div>Animated gradients dropping very soon.</div>
      <div className="h-5 w-5">
        <SVGmorph />
      </div>
    </div>
  );
};

export default NewsCard;

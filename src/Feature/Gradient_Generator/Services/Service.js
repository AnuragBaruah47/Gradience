import {
  generateColor,
  generateColorPalleteMonochromatic,
} from "../../Color_Pallete_Generator/Services/Service.js";

 export const linearGradientGenerate = () => {
  let baseColor = generateColor();
  let colors = generateColorPalleteMonochromatic(baseColor);
  const veryDark = colors.find((c) => c.shade === "VeryDark")?.hex;
  const dark = colors.find((c) => c.shade === "Dark")?.hex;
  const base = colors.find((c) => c.shade === "Base")?.hex;
  const veryLight = colors.find((c) => c.shade === "VeryLight")?.hex;

  const directions = [
    "to left",
    "to right",
    "to top",
    "to bottom",
    "to right top",
    "to left bottom",
  ];

  const direction = directions[Math.floor(Math.random() * directions.length)];

  const midStop = Math.floor(Math.random() * 11) + 35;
  const stopType = Math.floor(Math.random() * 3);

  let gradient;

  if (stopType === 0) {
    gradient = `linear-gradient(${direction}, ${dark} 0%, ${veryLight} 100%)`;
  } else if (stopType === 1) {
    gradient = `linear-gradient(${direction}, ${veryDark} 0%, ${base} ${midStop}%, ${veryLight} 100%)`;
  } else {
    gradient = `linear-gradient(${direction},
        ${veryDark} 0%,
        ${dark} 25%,
        ${base} ${midStop}%,
        ${veryLight} 100%)`;
  }

  return gradient;
};

export const radialGradientGenerate = () => {
  let baseColor = generateColor();
  let colors = generateColorPalleteMonochromatic(baseColor);

  const veryDark = colors.find((c) => c.shade === "VeryDark")?.hex;
  const dark = colors.find((c) => c.shade === "Dark")?.hex;
  const base = colors.find((c) => c.shade === "Base")?.hex;
  const veryLight = colors.find((c) => c.shade === "VeryLight")?.hex;

  const positions = ["center", "top", "bottom", "left", "right"];
  const position = positions[Math.floor(Math.random() * positions.length)];

  const midStop = Math.floor(Math.random() * 11) + 35;

  const stopType = Math.floor(Math.random() * 3);

  let gradient;

  if (stopType === 0) {
    gradient = `radial-gradient(circle at center, ${dark} 0%, ${veryLight} 100%)`;
  } else if (stopType === 1) {
    gradient = `radial-gradient(circle at center, ${veryDark} 0%, ${base} ${midStop}%, ${veryLight} 100%)`;
  } else {
    gradient = `radial-gradient(circle at center,
      ${veryDark} 0%,
      ${dark} 25%,
      ${base} ${midStop}%,
      ${veryLight} 100%)`;
  }

  return gradient;
};


export const conicGradientGenerate = () => {
  let baseColor = generateColor();
  let colors = generateColorPalleteMonochromatic(baseColor);

  const veryDark = colors.find(c => c.shade === "VeryDark")?.hex;
  const base = colors.find(c => c.shade === "Base")?.hex;
  const veryLight = colors.find(c => c.shade === "VeryLight")?.hex;


  const startAngles = [0, 45, 90, 180];
  const start = startAngles[Math.floor(Math.random() * startAngles.length)];


  const positions = ["center", "top", "bottom"];
  const position = positions[Math.floor(Math.random() * positions.length)];

  const stopType = Math.floor(Math.random() * 2);

  let gradient;

  if (stopType === 0) {

    gradient = `conic-gradient(from ${start}deg at center,
      ${veryDark},
      ${veryLight})`;

  } else {

    gradient = `conic-gradient(from ${start}deg at center,
      ${veryDark},
      ${base},
      ${veryLight})`;
  }

  return gradient;
};
import tinycolor from "tinycolor2";
import { toast } from "sonner";
export const generateColorPalleteMonochromatic = (baseColor) => {
  let color = tinycolor(baseColor);
  if (color.isValid()){
    let monochromaticColors = [];
    const lightnessArray = [0.12, 0.28, 0.5, 0.72, 0.88];
    const shadeArray = ["VeryDark", "Dark", "Base", "Light", "VeryLight"];
    const saturationArray = [0.7, 0.8, 0.85, 0.7, 0.6];
    let HSL = color.toHsl();
    for (let i = 0; i < lightnessArray.length; i++) {
      const lightness = lightnessArray[i];
      const shade = shadeArray[i];
      const saturation = saturationArray[i];
      let newHsl = { ...HSL, s: saturation, l: lightness };
      let hex = tinycolor(newHsl).toHexString();
      let eachColor = { shade: shade, hex: hex };
      monochromaticColors.push(eachColor);
    }
    return monochromaticColors;
  } else {
    return "please enter a valid color";
  }
};

export const generateColorPalleteAnalogous = (baseColor) => {
  let color = tinycolor(baseColor);
  if (color.isValid()){
    let analogousColors = [];
    const lightnessArray = [0.1, 0.25, 0.5, 0.72, 0.9];
    const shadeArray = ["VeryDark", "Dark", "Base", "Light", "VeryLight"];
    const saturationArray = [0.7, 0.78, 0.82, 0.7, 0.6];
    const offsets = [-30, -15, 0, 15, 30];
    let HSL = color.toHsl();
    for (let i = 0; i < lightnessArray.length; i++) {
      const lightness = lightnessArray[i];
      const shade = shadeArray[i];
      const saturation = saturationArray[i];
      const hueOffset = offsets[i];
      let newHue = HSL.h + hueOffset;
      if (newHue < 0) newHue += 360;
      if (newHue >= 360) newHue -= 360;
      let newHsl = { ...HSL, h: newHue, s: saturation, l: lightness };
      let hex = tinycolor(newHsl).toHexString();
      let eachColor = { shade: shade, hex: hex };
      analogousColors.push(eachColor);
    }
    return analogousColors;
  } else {
    return "please enter a valid color";
  }
};
export const generateColorPalleteComplementory = (baseColor) => {
  let color = tinycolor(baseColor);
  if (color.isValid()) {
    let complementaryColors = [];
    const lightnessArray = [0.1, 0.25, 0.5, 0.72, 0.9];
    let HSL = color.toHsl();
    let baseHue = HSL.h;
    let compHue = (HSL.h + 180) % 360;
    const shadeArray = ["VeryDark", "Dark", "Base", "Light", "VeryLight"];
    const saturationArray = [0.7, 0.75, 0.75, 0.7, 0.6];

    for (let i = 0; i < lightnessArray.length; i++) {
      let hue;
      const lightness = lightnessArray[i];
      const shade = shadeArray[i];
      const saturation = saturationArray[i];
      if (i < 2) hue = baseHue;
      else if (i === 2 || i === 3) hue = compHue;
      else hue = baseHue;
      let newHsl = { ...HSL, h: hue, s: saturation, l: lightness };
      let hex = tinycolor(newHsl).toHexString();
      let eachColor = { shade: shade, hex: hex };
      complementaryColors.push(eachColor);
    }
    return complementaryColors;
  } else {
    return "please enter a valid color";
  }
};

export const generateColor = () => {
  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const color = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    color.push(array[randomNumber]);
  }
  let baseColor = `#${color.join("")}`;

  return baseColor;
};

export const copyColors = async (color) => {
  try {
    await navigator.clipboard.writeText(color);
    toast.success("Copied!", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  } catch (err) {
    throw Error("Copy failed", err);
  }
};

export const generateColorOn = (type, color) => {
  if (type === "monochromatic") {
  
    return generateColorPalleteMonochromatic(color);
  } else if (type === "analogous") {
   
    return generateColorPalleteAnalogous(color);
  } else if (type === "complementary") {
  
    return generateColorPalleteComplementory(color);
  } else {
  
    return generateColorPalleteAnalogous(generateColor());
  }
};

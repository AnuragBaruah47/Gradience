import tinycolor from "tinycolor2";
import { toast } from "sonner";
export const generateColorPallete = (baseColor, HarmonyType) => {
  let color = tinycolor(baseColor);
  console.log(color);
  if (color._ok === true) {
    let monochromaticColors = [];
const lightnessArray = [0.15, 0.3, 0.5, 0.7, 0.9];
  const shadeArray = ["veryDark", "dark", "base", "light", "veryLight"];
    const saturationArray = [0.65, 0.75, 0.85, 0.7, 0.6];
    if (HarmonyType === "Monochromatic") {
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
      return "please enter a valid color harmony";
    }
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
    console.error("Copy failed", err);
  }
};
import React, { useState, useEffect, useCallback, useRef } from "react";
import { copyColors, generateColor, generateColorOn,
  generateColorPalleteAnalogous, generateColorPalleteMonochromatic } from "../Services/Service";
import { themeStore } from "../../../Store/Store";
import { cn } from "../../../Utils";
import CopySvg from "../../../Shared/Components/CopySvg";
import gsap from "gsap";

const HARMONIES = ["monochromatic", "analogous", "complementary"];

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
const SparkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

function luminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function textColor(hex) {
  return luminance(hex) > 0.45 ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.9)";
}

const Swatch = ({ color, index }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", delay: index * 0.05 }
    );
  }, [color]);

  const handleCopy = () => {
    copyColors(color.hex);
    setCopied(true);
    gsap.fromTo(ref.current, { scale: 0.97 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    setTimeout(() => setCopied(false), 1800);
  };

  const tc = textColor(color.hex);
  const overlayBg = luminance(color.hex) > 0.45 ? "rgba(0,0,0,.1)" : "rgba(255,255,255,.15)";

  return (
    <div
      ref={ref}
      onClick={handleCopy}
      className="relative flex-1 cursor-pointer opacity-0 overflow-hidden transition-[flex] duration-350 ease-in-out hover:flex-[2.2]"
      style={{ backgroundColor: color.hex }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-4 px-2 gap-1
        opacity-0 hover:opacity-100 transition-opacity duration-200">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-1 transition-transform duration-150 hover:scale-110"
          style={{ background: overlayBg, color: tc }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </div>
        <span className="text-[12px] font-semibold tracking-[.04em]" style={{ color: tc }}>
          {color.hex.toUpperCase()}
        </span>
        <span className="text-[11px] capitalize" style={{ color: tc, opacity: 0.7 }}>
          {color.shade || color.label}
        </span>
      </div>
    </div>
  );
};

const Colorpallete = () => {
  const [harmony, setHarmony] = useState("monochromatic");
  const [palette, setPalette] = useState(
    generateColorPalleteMonochromatic(generateColor())
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [inputColor, setInputColor] = useState("");
  const [inputHarmony, setInputHarmony] = useState("monochromatic");
  const [pickerColor, setPickerColor] = useState("#3b82f6");
  const modalRef = useRef(null);

  const darkTheme = themeStore((state) => state.darkTheme);

  const regenerate = useCallback(() => {
    const base = generateColor();
    const newPalette = harmony === "analogous"
      ? generateColorPalleteAnalogous(base)
      : generateColorPalleteMonochromatic(base);
    setPalette(newPalette);
  }, [harmony]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space" && !modalOpen) {
        e.preventDefault();
        regenerate();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [regenerate, modalOpen]);

  useEffect(() => {
    if (modalOpen && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(1.5)" }
      );
    }
  }, [modalOpen]);

  const handleHarmonyChange = (h) => {
    setHarmony(h);
    const base = generateColor();
    const newPalette = h === "analogous"
      ? generateColorPalleteAnalogous(base)
      : generateColorPalleteMonochromatic(base);
    setPalette(newPalette);
  };

  const generateFromInput = () => {
    const hex = /^#[0-9a-fA-F]{6}$/.test(inputColor) ? inputColor : pickerColor;
    const newPalette = generateColorOn(inputHarmony, hex);
    setHarmony(inputHarmony);
    setPalette(newPalette);
    setModalOpen(false);
    setInputColor("");
  };

  // ── Derived class tokens (no dark: variants) ──────────────────────────────

  const wrapperClasses = cn(
    "flex flex-col overflow-hidden rounded-2xl border",
    darkTheme ? "border-white/10" : "border-black/8"
  );

  const headerClasses = cn(
    "flex items-center justify-between px-4 py-2.5 border-b gap-3",
    darkTheme
      ? "border-white/8 bg-gray-950"
      : "border-black/6 bg-white"
  );

  const titleClasses = cn(
    "text-[14px] font-medium",
    darkTheme ? "text-white" : "text-gray-900"
  );

  const kbdClasses = cn(
    "inline-flex items-center px-1.5 py-0.5 rounded-[5px] text-[11px] font-mono border",
    darkTheme
      ? "border-white/10 bg-white/5 text-white/40"
      : "border-black/10 bg-gray-100 text-gray-500"
  );

  const hintClasses = cn(
    "text-[12px]",
    darkTheme ? "text-white/30" : "text-gray-400"
  );

  const segmentTrackClasses = cn(
    "flex gap-0.5 rounded-[9px] p-0.5 border",
    darkTheme
      ? "bg-white/5 border-white/8"
      : "bg-gray-100 border-black/6"
  );

  const segmentBtn = (active) => cn(
    "px-3 py-1.5 rounded-[7px] text-[12px] capitalize transition-all duration-150",
    active
      ? darkTheme
        ? "bg-gray-900 text-white font-medium shadow-sm"
        : "bg-white text-gray-900 font-medium shadow-sm"
      : darkTheme
        ? "text-white/40 hover:text-white"
        : "text-gray-500 hover:text-gray-800"
  );

  const customBtnClasses = cn(
    "flex items-center gap-1.5 h-8.5 px-3.5 rounded-[9px] text-[12px] font-medium border-none cursor-pointer",
    "hover:opacity-85 transition-all duration-150 hover:-translate-y-0.5 active:scale-[.97]",
    darkTheme ? "bg-white text-black" : "bg-gray-900 text-white"
  );

  const modalPanelClasses = cn(
    "relative w-[320px] rounded-2xl border p-6 flex flex-col gap-4",
    darkTheme
      ? "border-white/10 bg-gray-950"
      : "border-black/8 bg-white"
  );

  const modalTitleClasses = cn(
    "text-[15px] font-medium",
    darkTheme ? "text-white" : "text-gray-900"
  );

  const closeBtnClasses = cn(
    "absolute top-3.5 right-3.5 w-7 h-7 rounded-[7px] flex items-center justify-center border cursor-pointer transition-all duration-150",
    darkTheme
      ? "border-white/10 bg-white/5 text-white/50 hover:text-white"
      : "border-black/8 bg-gray-100 text-gray-500 hover:text-gray-900"
  );

  const textInputClasses = cn(
    "flex-1 h-9 px-3 text-[13px] rounded-[9px] border outline-none transition",
    "focus:ring-2",
    darkTheme
      ? "border-white/10 bg-white/5 text-white placeholder-white/30 focus:ring-white/10"
      : "border-black/10 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-black/10"
  );

  const colorPickerClasses = cn(
    "w-9 h-9 rounded-[9px] border cursor-pointer p-0.5",
    darkTheme ? "border-white/10 bg-white/5" : "border-black/10 bg-gray-50"
  );

  const harmonyLabelClasses = cn(
    "text-[12px]",
    darkTheme ? "text-white/40" : "text-gray-500"
  );

  const selectClasses = cn(
    "h-9 px-3 text-[13px] rounded-[9px] border outline-none cursor-pointer",
    darkTheme
      ? "border-white/10 bg-white/5 text-white"
      : "border-black/10 bg-gray-50 text-gray-900"
  );

  const generateBtnClasses = cn(
    "w-full h-10 rounded-[10px] border-none cursor-pointer text-[13px] font-medium",
    "hover:opacity-85 transition-all duration-150 active:scale-[.97]",
    darkTheme ? "bg-white text-black" : "bg-gray-900 text-white"
  );

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className={wrapperClasses}>
      <div className={headerClasses}>
        <div className="flex items-center gap-2">
          <span className={titleClasses}>Color palette</span>
          <kbd className={kbdClasses}>Space</kbd>
          <span className={hintClasses}>to generate</span>
        </div>

        <div className="flex items-center gap-2">
          <div className={segmentTrackClasses}>
            {HARMONIES.map((h) => (
              <button
                key={h}
                onClick={() => handleHarmonyChange(h)}
                className={segmentBtn(harmony === h)}
              >
                {h === "monochromatic" ? "Mono" : h === "complementary" ? "Complement" : h}
              </button>
            ))}
          </div>

          <button onClick={() => setModalOpen(true)} className={customBtnClasses}>
            <SparkIcon /> Custom
          </button>
        </div>
      </div>

      <div className="flex h-80">
        {palette?.map((color, i) => (
          <Swatch key={color.hex + i} color={color} index={i} />
        ))}
      </div>

      {modalOpen && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/45"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div ref={modalRef} className={modalPanelClasses}>
            <button onClick={() => setModalOpen(false)} className={closeBtnClasses}>
              <CloseIcon />
            </button>

            <div className={modalTitleClasses}>Custom palette</div>

            <div className="flex gap-2.5 items-center">
              <input
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                placeholder="#3b82f6"
                className={textInputClasses}
              />
              <input
                type="color"
                value={pickerColor}
                onChange={(e) => { setPickerColor(e.target.value); setInputColor(e.target.value); }}
                className={colorPickerClasses}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={harmonyLabelClasses}>Harmony</label>
              <select
                value={inputHarmony}
                onChange={(e) => setInputHarmony(e.target.value)}
                className={selectClasses}
              >
                {HARMONIES.map(h => (
                  <option key={h} value={h} className="capitalize">{h}</option>
                ))}
              </select>
            </div>

            <button onClick={generateFromInput} className={generateBtnClasses}>
              Generate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Colorpallete;

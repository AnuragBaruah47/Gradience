
export function burst(btn, color) {
  for (let i = 0; i < 6; i++) {
    const dot = document.createElement("div");
    dot.style.cssText = `
      position:absolute; width:6px; height:6px; border-radius:50%;
      background:${color}; top:50%; left:50%; margin:-3px 0 0 -3px;
      pointer-events:none; z-index:50;
    `;
    btn.style.overflow = "visible";
    btn.appendChild(dot);
    const angle = (i / 6) * 2 * Math.PI;
    const dist = 18 + Math.random() * 8;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    dot.animate(
      [
        { transform: "translate(0,0) scale(0)", opacity: 1 },
        { transform: `translate(${tx}px,${ty}px) scale(1.2)`, opacity: 0.85, offset: 0.4 },
        { transform: `translate(${tx * 1.6}px,${ty * 1.6}px) scale(0)`, opacity: 0 },
      ],
      { duration: 480, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    ).onfinish = () => dot.remove();
  }
}

export function springScale(el, from, to, duration) {
  el?.animate(
    [
      { transform: `scale(${from})` },
      { transform: `scale(${to * 1.22})`, offset: 0.45 },
      { transform: `scale(${to})` },
    ],
    { duration, easing: "cubic-bezier(.34,1.56,.64,1)", fill: "forwards" }
  );
}
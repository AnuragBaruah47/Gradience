import React, { useState, useRef } from 'react'
import { cn } from '../../../Utils'
import { radialGradientGenerate, linearGradientGenerate, conicGradientGenerate } from '../Services/Service'
import { themeStore } from '../../../Store/Store'
import gsap from 'gsap'

const LinearIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const RadialIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
  </svg>
)
const ConicIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a10 10 0 0 1 0 20" /><path d="M12 2v20" />
  </svg>
)
const GenerateIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
)

const TYPES = [
  { label: 'Linear', icon: <LinearIcon /> },
  { label: 'Radial', icon: <RadialIcon /> },
  { label: 'Conic',  icon: <ConicIcon /> },
]

const GradientGenerator = () => {
  const [type, setType] = useState('Linear')
  const [gradient, setGradient] = useState('linear-gradient(135deg,#667eea,#764ba2)')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState([])
  const previewRef = useRef(null)
  const codeRef = useRef(null)

  const darkTheme = themeStore((state) => state.darkTheme)

  const generate = () => {
    setLoading(true)

    gsap.to('.gen-icon', { rotation: 360, duration: 0.45, ease: 'power2.inOut', onComplete: () => gsap.set('.gen-icon', { rotation: 0 }) })

    setTimeout(() => {
      let css
      if (type === 'Linear') css = linearGradientGenerate()
      else if (type === 'Radial') css = radialGradientGenerate()
      else css = conicGradientGenerate()

      setGradient(css)
      setLoading(false)
      setHistory(prev => [css, ...prev].slice(0, 6))
      setCopied(false)

      gsap.fromTo(previewRef.current, { scale: 0.97, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.4)' })
      if (codeRef.current) gsap.fromTo(codeRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    }, 400)
  }

  const copyCSS = () => {
    navigator.clipboard.writeText(`background: ${gradient};`).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const applyHistory = (css) => {
    setGradient(css)
    gsap.fromTo(previewRef.current, { scale: 0.97, opacity: 0.7 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.5)' })
  }

  // ── Derived class tokens (no dark: variants) ────────────────────────────

  const badgeClasses = cn(
    "text-xs px-2.5 py-1 rounded-full border",
    darkTheme
      ? "bg-white/5 border-white/10 text-white/40"
      : "bg-gray-100 border-black/8 text-gray-400"
  )

  const typeBtn = (active) => cn(
    "flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[13px] border transition-all duration-150",
    active
      ? darkTheme
        ? "bg-white text-black border-transparent font-medium"
        : "bg-gray-900 text-white border-transparent font-medium"
      : darkTheme
        ? "border-white/10 text-white/50 hover:text-white hover:bg-white/8"
        : "border-black/10 text-gray-500 hover:text-gray-800 hover:border-black/20 hover:bg-gray-50"
  )

  const previewBorderClasses = cn(
    "relative h-56 rounded-2xl border overflow-hidden transition-[background] duration-500",
    darkTheme ? "border-white/10" : "border-black/8"
  )

  const generateBtnClasses = cn(
    "h-11 rounded-xl border-none cursor-pointer",
    "flex items-center justify-center gap-2",
    "text-[14px] font-medium font-sans",
    darkTheme ? "bg-white text-black" : "bg-gray-900 text-white",
    "transition-all duration-150 hover:opacity-85 active:scale-[.98]",
    loading && "opacity-60 pointer-events-none"
  )

  const codeBlockClasses = cn(
    "rounded-xl w-full px-4 py-3.5 text-[12px] leading-relaxed break-all border font-mono",
    darkTheme
      ? "bg-white/5 border-white/8 text-white/50"
      : "bg-gray-50 border-black/6 text-gray-500"
  )

  const recentLabelClasses = cn(
    "text-[11px] uppercase tracking-[.06em]",
    darkTheme ? "text-white/30" : "text-gray-400",
    history.length === 0 ? "invisible" : ""
  )

  const historyThumbClasses = cn(
    "shrink-0 rounded-[10px] cursor-pointer border transition-transform duration-150 hover:scale-105",
    darkTheme ? "border-white/10" : "border-black/8"
  )

  const titleClasses = cn(
    "text-lg font-medium tracking-tight",
    darkTheme ? "text-white" : "text-gray-900"
  )

  // ────────────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-5 p-6 max-w-2xl mx-auto">

      <div className="flex items-center justify-between">
        <h1 className={titleClasses}>Gradient generator</h1>
        <span className={badgeClasses}>{type}</span>
      </div>

      <div className="flex gap-1.5">
        {TYPES.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setType(label)}
            className={typeBtn(type === label)}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      <div
        ref={previewRef}
        style={{ background: gradient }}
        className={previewBorderClasses}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-black/10">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                style={{ animationDelay: `${i * 0.15}s` }}
                className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
              />
            ))}
          </div>
        )}
        <button
          onClick={copyCSS}
          className={cn(
            "absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg",
            "text-[12px] font-medium text-white border-none cursor-pointer",
            "transition-all duration-150 hover:scale-105 active:scale-95",
            copied ? "bg-green-500/80" : "bg-black/35 backdrop-blur-md"
          )}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied!' : 'Copy CSS'}
        </button>
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className={generateBtnClasses}
      >
        <span className="gen-icon"><GenerateIcon /></span>
        {loading ? 'Generating…' : 'Generate'}
      </button>

      <div
        ref={codeRef}
        style={{ visibility: loading ? 'hidden' : 'visible' }}
        className={codeBlockClasses}
      >
        background: {gradient};
      </div>

      <div className="flex flex-col gap-2" style={{ minHeight: '72px' }}>
        <span className={recentLabelClasses}>Recent</span>
        <div className="flex gap-2 flex-wrap py-1">
          {history.map((css, i) => (
            <div
              key={i}
              style={{ background: css, width: '68px', height: '48px', willChange: 'transform' }}
              onClick={() => applyHistory(css)}
              title={css}
              className={historyThumbClasses}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default GradientGenerator

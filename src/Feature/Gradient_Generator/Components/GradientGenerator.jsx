import React, { useState, useRef } from 'react'
import { cn } from '../../../Utils'
import { radialGradientGenerate, linearGradientGenerate, conicGradientGenerate } from '../Services/Service'
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

  return (
    <div className="flex flex-col gap-5 p-6 max-w-2xl mx-auto">

      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-tight dark:text-white">
          Gradient generator
        </h1>
        <span className={cn(
          "text-xs px-2.5 py-1 rounded-full border",
          "dark:bg-white/5 dark:border-white/10 dark:text-white/40",
          "bg-gray-100 border-black/8 text-gray-400"
        )}>
          {type}
        </span>
      </div>

      <div className="flex gap-1.5">
        {TYPES.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setType(label)}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[13px] border transition-all duration-150",
              type === label
                ? "bg-gray-900 text-white border-transparent dark:bg-white dark:text-black font-medium"
                : cn(
                    "border-black/10 text-gray-500 hover:text-gray-800 hover:border-black/20 hover:bg-gray-50",
                    "dark:border-white/10 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/8"
                  )
            )}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      <div
        ref={previewRef}
        style={{ background: gradient }}
        className="relative h-56 rounded-2xl border border-black/8 dark:border-white/10 overflow-hidden transition-[background] duration-500"
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
            "opacity-0 group-hover:opacity-100 transition-all duration-150",
            "hover:scale-105 active:scale-95",
            copied ? "bg-green-500/80" : "bg-black/35 backdrop-blur-md",
            "opacity-100"
          )}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied!' : 'Copy CSS'}
        </button>
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className={cn(
          "w-full h-11 rounded-xl border-none cursor-pointer",
          "flex items-center justify-center gap-2",
          "text-[14px] font-medium font-sans",
          "bg-gray-900 text-white dark:bg-white dark:text-black",
          "transition-all duration-150 hover:opacity-85 hover:-translate-y-0.5 active:scale-[.98]",
          loading && "opacity-60 pointer-events-none"
        )}
      >
        <span className="gen-icon"><GenerateIcon /></span>
        {loading ? 'Generating…' : 'Generate'}
      </button>

      {gradient && !loading && (
        <div
          ref={codeRef}
          className={cn(
            "rounded-xl px-4 py-3.5 text-[12px] leading-relaxed break-all",
            "border font-mono",
            "dark:bg-white/5 dark:border-white/8 dark:text-white/50",
            "bg-gray-50 border-black/6 text-gray-500"
          )}
        >
          background: {gradient};
        </div>
      )}

      {history.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className={cn(
            "text-[11px] uppercase tracking-[.06em]",
            "dark:text-white/30 text-gray-400"
          )}>
            Recent
          </span>
          <div className="flex gap-2 flex-wrap">
            {history.map((css, i) => (
              <div
                key={i}
                style={{ background: css }}
                onClick={() => applyHistory(css)}
                title={css}
                className={cn(
                  "w-17 h-12 rounded-[10px] cursor-pointer",
                  "border transition-all duration-150 hover:scale-105",
                  "dark:border-white/10 border-black/8 hover:border-black/20 dark:hover:border-white/20"
                )}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default GradientGenerator
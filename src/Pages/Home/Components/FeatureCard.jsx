export const FeatureCard = ({ icon, label, title, description, accentColor, iconBg, iconStroke, labelColor }) => {
  return (
    <div className="relative overflow-hidden bg-white border border-black/6 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-black/10 group">

      <div className="absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl" style={{ background: accentColor }} />


      <div className="flex items-start justify-between mb-3.5">
        <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${iconBg}`}>
          {icon}
        </div>
        <svg
          className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-gray-400"
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-1.5" style={{ color: labelColor }}>
        {label}
      </p>
      <p className="text-[15px] font-medium text-gray-900 leading-snug mb-1.5">{title}</p>
      <p className="text-[13px] text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};
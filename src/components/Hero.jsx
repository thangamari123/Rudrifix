import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, MapPin, TrendingUp, BarChart3, Target, Headphones, ArrowUpRight, Zap } from 'lucide-react'

/* ───────── Floating Chart SVG ───────── */
const GrowthChart = () => (
  <svg viewBox="0 0 280 120" className="w-full h-auto">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#93C5FD" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[30, 60, 90].map(y => (
      <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="4 4" />
    ))}
    {/* Area fill */}
    <path d="M0,100 C40,90 70,75 100,60 C130,45 160,55 190,35 C220,15 250,20 280,5 L280,120 L0,120 Z" fill="url(#areaGrad)" />
    {/* Main line */}
    <path d="M0,100 C40,90 70,75 100,60 C130,45 160,55 190,35 C220,15 250,20 280,5" fill="none" stroke="url(#chartGrad)" strokeWidth="3" strokeLinecap="round" />
    {/* Glow dot */}
    <circle cx="280" cy="5" r="5" fill="#6366F1" />
    <circle cx="280" cy="5" r="10" fill="#6366F1" opacity="0.2" />
  </svg>
)

/* ───────── Feature highlights ───────── */
const features = [
  { icon: BarChart3, label: 'Data-Driven Strategy' },
  { icon: Target, label: 'ROI Focused' },
  { icon: TrendingUp, label: 'Transparent Reporting' },
  { icon: Headphones, label: 'Dedicated Support' },
]



/* ───────── Service highlights ───────── */
const services = [
  { text: 'Digital Strategy', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
  { text: 'Meta Ads Growth', color: 'from-indigo-600 to-purple-600', bg: 'bg-indigo-50' },
  { text: 'Premium Branding', color: 'from-purple-600 to-pink-600', bg: 'bg-purple-50' },
  { text: 'Modern Web Apps', color: 'from-pink-600 to-rose-600', bg: 'bg-pink-50' },
  { text: 'Content Creation', color: 'from-emerald-600 to-teal-600', bg: 'bg-emerald-50' }
];

export default function Hero() {
  const [serviceIndex, setServiceIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentService = services[serviceIndex];
  return (
    <section id="home" className="relative overflow-hidden hero-light-bg">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 hero-light-grid" />

      {/* Decorative gradient spheres */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-200/30 to-pink-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-violet-300/20 to-indigo-300/10 blur-2xl pointer-events-none pulse-orb" />

      {/* Tiny floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { t: 15, l: 10, s: 6, d: 0 },
          { t: 25, l: 80, s: 4, d: 1 },
          { t: 60, l: 20, s: 5, d: 2 },
          { t: 70, l: 75, s: 3, d: 0.5 },
          { t: 85, l: 50, s: 4, d: 1.5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400/20"
            style={{ top: `${p.t}%`, left: `${p.l}%`, width: p.s, height: p.s }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5 + p.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ════════ LEFT COLUMN ════════ */}
          <div className="lg:pr-8">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-heading mb-6"
            >
              <span className="font-['Satisfy'] text-blue-600 block mb-2 text-4xl sm:text-5xl -rotate-2">360° Solutions</span>
              Built To <span className="gradient-text-saas">Scale Your Brand</span>
            </motion.h1>

            {/* Modern Perspective Flip Service Flow */}
            <div className="mb-10 min-h-[120px] relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-10 h-[2px] bg-indigo-500 rounded-full" />
                <span className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
                  Comprehensive Solutions
                </span>
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#1E293B] text-xl sm:text-2xl font-bold"
                >
                  We help you master
                </motion.p>

                <div className="relative h-14 sm:h-16 overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceIndex}
                      initial={{ y: 40, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -40, opacity: 0, rotateX: 90 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8
                      }}
                      className={`px-6 py-2.5 rounded-2xl ${currentService.bg} border border-white/50 shadow-sm flex items-center justify-center`}
                    >
                      <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${currentService.color} bg-clip-text text-fill-transparent text-transparent tracking-tight`}>
                        {currentService.text}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-8 text-slate-400 text-sm sm:text-base font-semibold flex items-center gap-3"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Optimizing your ROI in real-time.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group px-8 py-4 rounded-full text-white font-heading font-bold text-base shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center gap-2 min-h-[52px]"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)' }}
              >
                Start Growing Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group px-7 py-4 rounded-full font-heading font-semibold text-base text-slate-700 saas-glass hover:shadow-lg transition-all duration-300 flex items-center gap-2 min-h-[52px]"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Play size={14} className="text-indigo-600 ml-0.5" />
                </div>
                See Our Work
              </a>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN — Opening 3D Laptop ════════ */}
          <div className="hidden lg:flex relative h-[650px] items-center justify-center perspective-[2000px]">
            {/* Ambient Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[100px] rounded-full" />

            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">

              {/* Laptop Base (Keyboard) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 15 }}
                transition={{ duration: 1.2 }}
                className="relative z-10 w-[500px] h-[320px] bg-slate-800 rounded-b-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-t-[4px] border-slate-700 overflow-hidden"
              >
                {/* Keyboard Mockup */}
                <div className="p-8 grid grid-cols-12 gap-2 opacity-20">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="h-4 bg-white rounded-sm" />
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-20 bg-slate-700/50 rounded-xl" />
              </motion.div>

              {/* Laptop Lid (Screen) */}
              <motion.div
                initial={{ rotateX: 95, opacity: 0 }}
                animate={{ rotateX: -15, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                style={{ transformOrigin: 'bottom' }}
                className="absolute bottom-[320px] z-20 w-[500px] h-[340px] bg-slate-900 rounded-t-3xl p-3 shadow-2xl border-[1px] border-white/10"
              >
                {/* Screen Content — Real Campaign (Meta Ads Manager Style) */}
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#f0f2f5] p-6 flex flex-col">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white">
                          <Target size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-800 leading-tight">Meta Ads Manager</p>
                          <p className="text-[8px] font-bold text-slate-400">Scale Strategy • 2026</p>

                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[8px] font-black border border-emerald-100 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          ACTIVE
                        </div>
                        <div className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[8px] font-black border border-slate-100">
                          BID: AUTO
                        </div>
                      </div>
                    </div>

                    {/* Main Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { label: 'Spend', value: '$4,280', color: 'slate' },
                        { label: 'ROAS', value: '5.2x', color: 'indigo' },
                        { label: 'CTR', value: '2.84%', color: 'emerald' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">{stat.label}</p>
                          <p className={`text-sm font-black text-${stat.color}-600`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Performance Graph */}
                    <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-black text-slate-800">Conversion Trend</span>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                      </div>
                      <div className="flex-1 flex items-end gap-1 px-1">
                        {[30, 45, 60, 40, 75, 90, 55, 80, 95, 70, 85, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 1.5 + i * 0.05 }}
                            className="flex-1 bg-[#1877F2] rounded-t-sm opacity-80"
                          />
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-50 flex justify-between text-[7px] font-black text-slate-400">
                        <span>MON</span>
                        <span>WED</span>
                        <span>FRI</span>
                        <span>SUN</span>
                      </div>
                    </div>
                  </div>

                  {/* Glass Shimmer on Screen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                </div>

                {/* Laptop Lid Back Glow */}
                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Breakout Widgets (Floating around laptop) */}
              <motion.div
                initial={{ opacity: 0, x: -150, y: 0 }}
                animate={{ opacity: 1, x: -260, y: -40 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute z-40 saas-glass-strong rounded-3xl p-6 w-60 shadow-2xl float-medium"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ROI Boost</p>
                    <p className="text-xl font-black text-slate-800">12.5x</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 150, y: 100 }}
                animate={{ opacity: 1, x: 280, y: 140 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="absolute z-40 saas-glass rounded-3xl p-6 w-56 shadow-2xl float-fast"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <BarChart3 size={20} />
                  </div>
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Market Share</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[84%] bg-indigo-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>




      </div>
    </section>
  )
}

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, MapPin, TrendingUp, BarChart3, Target, Headphones, ArrowUpRight, Zap } from 'lucide-react'

/* ───────── Floating Chart SVG ───────── */
const GrowthChart = () => (
  <svg viewBox="0 0 280 120" className="w-full h-auto">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
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



export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden hero-light-bg">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ════════ LEFT COLUMN ════════ */}
          <div className="lg:pr-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full saas-glass mb-8"
            >
              <span className="text-indigo-600 text-sm font-semibold tracking-wide font-heading">
                360° Digital Growth Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-heading mb-6"
            >
              360° Solutions Built To <span className="gradient-text-saas">Scale Your Brand</span>
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
                    {(() => {
                      const services = [
                        { text: 'Digital Strategy', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
                        { text: 'Meta Ads Growth', color: 'from-indigo-600 to-purple-600', bg: 'bg-indigo-50' },
                        { text: 'Premium Branding', color: 'from-purple-600 to-pink-600', bg: 'bg-purple-50' },
                        { text: 'Modern Web Apps', color: 'from-pink-600 to-rose-600', bg: 'bg-pink-50' },
                        { text: 'Content Creation', color: 'from-emerald-600 to-teal-600', bg: 'bg-emerald-50' }
                      ];
                      const [index, setIndex] = React.useState(0);
                      
                      React.useEffect(() => {
                        const timer = setInterval(() => {
                          setIndex((prev) => (prev + 1) % services.length);
                        }, 3000);
                        return () => clearInterval(timer);
                      }, []);

                      const current = services[index];
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ y: 40, opacity: 0, rotateX: -90 }}
                          animate={{ y: 0, opacity: 1, rotateX: 0 }}
                          exit={{ y: -40, opacity: 0, rotateX: 90 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8
                          }}
                          className={`px-6 py-2.5 rounded-2xl ${current.bg} border border-white/50 shadow-sm flex items-center justify-center`}
                        >
                          <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${current.color} bg-clip-text text-fill-transparent text-transparent tracking-tight`}>
                            {current.text}
                          </span>
                        </motion.div>
                      );
                    })()}
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
                style={{ background: 'linear-gradient(135deg, #6366F1, #C084FC)' }}
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

          {/* ════════ RIGHT COLUMN — Analytics Dashboard ════════ */}
          <div className="hidden lg:flex relative justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Main Analytics Card */}
              <div className="saas-glass-strong rounded-3xl p-6 sm:p-8 float-slow">
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Business Growth</p>
                    <p className="text-slate-800 text-2xl font-heading font-extrabold mt-1">+200%</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
                    <TrendingUp size={12} />
                    2X Growth
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-4">
                  <GrowthChart />
                </div>

                {/* Chart labels */}
                <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { label: 'Impressions', value: '2.4M', change: '+34%' },
                    { label: 'Clicks', value: '180K', change: '+28%' },
                    { label: 'Conversions', value: '12.5K', change: '+52%' },
                  ].map(s => (
                    <div key={s.label} className="bg-slate-50/80 rounded-2xl p-3 text-center">
                      <p className="text-slate-400 text-[10px] font-medium">{s.label}</p>
                      <p className="text-slate-800 text-base font-heading font-bold mt-0.5">{s.value}</p>
                      <p className="text-emerald-500 text-[10px] font-semibold mt-0.5">{s.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Floating Widget: Leads Generated ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -left-8 sm:-left-12 top-12 saas-glass-widget rounded-2xl px-4 py-3 float-medium z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-medium">Leads Generated</p>
                    <p className="text-slate-800 text-lg font-heading font-bold">1,847</p>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating Widget: Ad ROAS ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-4 sm:-right-8 bottom-32 saas-glass-widget rounded-2xl px-4 py-3 float-fast z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <ArrowUpRight size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-medium">Ad ROAS</p>
                    <p className="text-slate-800 text-lg font-heading font-bold">4.8x</p>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating Widget: Growth ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -left-4 sm:-left-6 bottom-8 saas-glass-widget rounded-2xl px-4 py-3 float-slow z-20"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                    <TrendingUp size={14} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-emerald-500 text-sm font-heading font-bold">+67%</p>
                    <p className="text-slate-400 text-[10px]">This month</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative gradient sphere behind card */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-br from-indigo-100/60 to-purple-100/40 blur-3xl" />
            </motion.div>
          </div>
        </div>




      </div>

      {/* Bottom gradient transition to services */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

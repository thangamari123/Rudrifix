import React, { useEffect, useState } from 'react'

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(1) // 1: Hello, 2: Logo + Loading

  useEffect(() => {
    // Stage 1: "Hello"
    const helloTimer = setTimeout(() => {
      setStep(2)
    }, 1800) // Stay on "Hello" for 1.8s

    // Total Duration: 5 seconds
    const totalTimer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(helloTimer)
      clearTimeout(totalTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-all duration-1000 ${loading ? 'opacity-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="relative flex flex-col items-center">
        {/* STAGE 1: HELLO */}
        {step === 1 && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out_forwards]">
            <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-slate-900 flex gap-1">
              {['H', 'e', 'l', 'l', 'o'].map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-[preloaderLetter_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
              <span className="text-indigo-600 animate-[pulse_1s_infinite]">.</span>
            </h1>
            <p className="mt-4 text-slate-400 text-[10px] font-bold tracking-[0.4em] uppercase animate-[fadeIn_1s_ease-out_0.5s_forwards] opacity-0">
              Welcome to Rudrifix
            </p>
          </div>
        )}

        {/* STAGE 2: LOGO + LOADING */}
        {step === 2 && (
          <div className="flex flex-col items-center animate-[fadeInScale_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
            {/* Logo Container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"></div>
              <div className="absolute inset-2 rounded-full border-t-2 border-l-2 border-indigo-500/30 animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-b-2 border-r-2 border-purple-500/20 animate-[spin_2s_linear_infinite_reverse]"></div>

              <div className="absolute inset-4 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border border-slate-100">
                <img
                  src="/rudrifix logo.webp"
                  alt="Rudrifix"
                  className="w-full h-full object-contain p-6 z-10 animate-[preloaderZoom_1.2s_ease-out_forwards]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-slate-900 font-heading font-black text-5xl z-10 animate-[preloaderZoom_1.2s_ease-out_forwards]">Rx</span>';
                  }}
                />
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="relative w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[preloaderProgress_3.2s_cubic-bezier(0.65,0,0.35,1)_forwards]">
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/40 blur-md"></div>
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-[preloaderScan_2s_linear_infinite]"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Preloader

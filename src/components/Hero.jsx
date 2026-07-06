import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Play, Code2, Bot, Megaphone, Phone, CalendarCheck2, ArrowRight } from 'lucide-react'

// Placeholder for WhatsApp Icon since Lucide doesn't have a perfect one
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFBFF] pt-28 pb-12 sm:pt-36 sm:pb-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute top-[20%] right-[10%] -z-10 grid grid-cols-6 gap-2 opacity-10">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-900" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Content + Illustration */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">
                Digital Growth Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#0F172A] text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.15] mb-6"
            >
              We Build <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">Digital Solutions</span>
              <br /> That Grow <br className="hidden sm:block" />
              Your Business
            </motion.h1>

            {/* Gradient Separator */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mb-6 origin-left hidden lg:block"
            />
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mb-6 origin-center lg:hidden"
            />

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-base sm:text-lg lg:text-xl font-medium max-w-xl mb-10 leading-relaxed"
            >
              Software Development, AI Automation & Digital Marketing services to help brands scale faster and smarter.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a 
                href="#contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-[14px] bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Rocket size={20} />
                Start Growing Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-[14px] bg-white text-[#0F172A] font-semibold text-base sm:text-lg border border-gray-200 hover:border-blue-100 hover:bg-blue-50/50 transition-all w-full sm:w-auto shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Play size={12} className="ml-0.5 fill-current" />
                </div>
                See Our Work
              </a>
            </motion.div>
          </div>

          {/* Right Illustration (Glass UI Cards) */}
          <div className="w-full lg:w-[45%] relative h-[400px] sm:h-[500px] hidden lg:block">
            {/* Base Glass Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white/60 backdrop-blur-3xl rounded-3xl border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-6"
            >
              <div className="w-full h-full bg-[#F8FAFC] rounded-2xl overflow-hidden relative border border-gray-100">
                {/* Browser dots */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                
                {/* Abstract UI lines */}
                <div className="mt-12 px-6">
                   <div className="w-32 h-3 bg-gray-200 rounded-full mb-3" />
                   <div className="w-48 h-2 bg-gray-100 rounded-full mb-8" />
                   
                   {/* Abstract Chart */}
                   <div className="w-full h-32 relative flex items-end gap-2 px-4 pb-4">
                     <svg className="absolute bottom-4 left-4 w-[90%] h-full opacity-30" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0,40 Q20,20 40,30 T80,10 T100,20 L100,40 Z" fill="#6366F1" />
                        <path d="M0,40 Q20,20 40,30 T80,10 T100,20" fill="none" stroke="#4F46E5" strokeWidth="2" />
                     </svg>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Logo Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
              transition={{ delay: 0.5, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute top-[15%] left-[5%] w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center text-white"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 4V2M4 12H2M19.07 4.93L20.48 3.52M4.93 19.07L3.52 20.48" />
              </svg>
            </motion.div>

            {/* Floating Bot Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [5, -5, 5] }}
              transition={{ delay: 0.7, y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute top-[45%] left-[-5%] w-20 h-20 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center text-white">
                <Bot size={24} />
              </div>
            </motion.div>

            {/* Floating Code Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, y: [-3, 3, -3] }}
              transition={{ delay: 0.9, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center text-indigo-600"
            >
              <Code2 size={24} strokeWidth={2.5} />
            </motion.div>

            {/* Floating Pie Chart Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [4, -4, 4] }}
              transition={{ delay: 0.8, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute bottom-[5%] right-[15%] w-24 h-24 bg-gradient-to-tr from-indigo-500 via-blue-500 to-indigo-400 rounded-full shadow-xl shadow-blue-500/20 p-4"
            >
              <div className="w-full h-full rounded-full border-[6px] border-white/20 border-t-white/90 shadow-inner rotate-45" />
            </motion.div>
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-start relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-[14px] bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight">Software <br /> Development</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Custom web & mobile applications built for performance.
            </p>
            <div className="absolute bottom-0 left-8 w-12 h-1 bg-blue-500 rounded-t-full" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-start relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-[14px] bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Bot size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight">AI <br /> Automation</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Automate workflows and business processes with AI.
            </p>
            <div className="absolute bottom-0 left-8 w-12 h-1 bg-indigo-500 rounded-t-full" />
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-start relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-[14px] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Megaphone size={28} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight">Digital <br /> Marketing</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Data-driven marketing strategies that deliver real results.
            </p>
            <div className="absolute bottom-0 left-8 w-12 h-1 bg-emerald-500 rounded-t-full" />
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F6F7FA] border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative overflow-hidden"
        >
          {/* Decor background */}
          <div className="absolute right-0 top-0 w-32 h-full opacity-[0.03] flex flex-wrap gap-2 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-indigo-900 rounded-full" />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
            <h4 className="text-[#0F172A] text-lg sm:text-xl font-bold text-center md:text-left">
              Trusted by growing businesses
            </h4>
            <div className="flex justify-center md:justify-start -space-x-4">
              {/* Avatars */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 px-2 py-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              120+
            </div>
            <div className="text-gray-500 font-medium leading-tight text-sm">
              Projects <br /> Delivered
            </div>
          </div>
        </motion.div>

        {/* Bottom Floating Contact Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-4 sm:p-4 shadow-md border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
        >
          <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 px-4">
            {/* Call Us */}
            <a href="tel:+91" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-bold text-[#0F172A] text-sm sm:text-base">Call Us</span>
            </a>
            
            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-100 hidden sm:block" />
            
            {/* WhatsApp */}
            <a href="https://wa.me/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <WhatsAppIcon />
              </div>
              <span className="font-bold text-[#0F172A] text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>

          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            <CalendarCheck2 size={20} />
            Book a Call
          </a>
        </motion.div>

      </div>
    </section>
  )
}

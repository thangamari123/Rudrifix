import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

const FloatingContactBar = () => {
  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-[100] pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="h-[64px] bg-white/90 backdrop-blur-xl border border-white/20 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto flex items-center overflow-hidden"
      >
        {/* Call Section */}
        <motion.a
          href="tel:+918300227525"
          whileTap={{ scale: 0.95 }}
          aria-label="Call Rudrifix"
          className="flex-1 h-full flex flex-col items-center justify-center gap-[4px] transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Phone size={18} strokeWidth={2.5} className="text-[#2563EB]" />
          </div>
          <span className="text-[9px] font-bold text-[#1E40AF] uppercase tracking-wider">Call</span>
        </motion.a>

        <div className="w-[1px] h-[40%] bg-gray-200" />

        {/* WhatsApp Section */}
        <motion.a
          href="https://wa.me/918300227525"
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp Rudrifix"
          className="flex-1 h-full flex flex-col items-center justify-center gap-[4px] transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
            <MessageCircle size={18} strokeWidth={2.5} className="text-[#16A34A]" />
          </div>
          <span className="text-[9px] font-bold text-[#166534] uppercase tracking-wider">WhatsApp</span>
        </motion.a>

        {/* Book Call Section */}
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileTap={{ scale: 0.98 }}
          aria-label="Book a free consultation call"
          className="flex-[1.2] h-full relative"
        >
          <div className="absolute inset-1.5 rounded-[14px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center gap-2 overflow-hidden shadow-lg">
            {/* Shiny effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            
            <CalendarCheck size={16} strokeWidth={2.5} className="text-white relative z-10" />
            <span className="text-[10px] font-black text-white uppercase tracking-tighter relative z-10">Book Call</span>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FloatingContactBar;

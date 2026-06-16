import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, X, MoreVertical } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: 'Call Us',
      icon: Phone,
      color: 'bg-blue-500',
      text: 'text-blue-500',
      href: 'tel:+918300227525',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-500',
      text: 'text-emerald-500',
      href: 'https://wa.me/918300227525',
    },
    {
      name: 'Book a Call',
      icon: Calendar,
      color: 'bg-blue-500',
      text: 'text-blue-500',
      href: '#contact',
    },
  ];

  const handleOptionClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] hidden md:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-56 premium-glass rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-2"
          >
            <div className="space-y-1">
              {contactOptions.map((option, i) => (
                <motion.button
                  key={option.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleOptionClick(option.href)}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-white/50 transition-all group"
                >
                  <div className={`w-10 h-10 ${option.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                    <option.icon size={20} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{option.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact Support"
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-gray-100 relative group overflow-hidden"
      >
        {/* Brand Logo */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} className="text-gray-800" />
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-full h-full flex items-center justify-center p-1"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/20 shadow-inner">
                <img
                  src="/rudrifix logo.webp"
                  alt="Rudrifix Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}

import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918300227525"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 hover:scale-110 hover:shadow-emerald-500/60 transition-all duration-300 animate-pulse-glow group"
      aria-label="Chat on WhatsApp"
      style={{ '--tw-shadow-color': 'rgba(16, 185, 129, 0.4)' }}
    >
      <MessageCircle size={26} className="text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-primary text-white text-xs font-heading font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Chat with us!
      </span>

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" />
    </a>
  )
}

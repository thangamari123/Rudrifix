import React from 'react'
import { motion } from 'framer-motion'
import { Users, Megaphone, Clock, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const stats = [
  { icon: Users, value: '50+', label: 'Clients Served' },
  { icon: Megaphone, value: '100+', label: 'Campaigns Launched' },
  { icon: Clock, value: '3+', label: 'Years Experience' },
  { icon: TrendingUp, value: '2X', label: 'Average ROI' },
]

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="py-24 sm:py-32 section-dark-elevated relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-indigo-600 bottom-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-light font-heading font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mt-3 mb-6">
              About <span className="gradient-text">Rudrifix</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Rudrifix is a Thoothukudi-based digital marketing agency helping businesses across Tamil Nadu grow through smart advertising, professional content, and high-converting websites.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              We believe every business deserves a strong online presence. From Meta ad campaigns to stunning product photography, we bring together creativity and data to deliver results that matter. Our team combines local market expertise with cutting-edge digital strategies to help you stand out and scale up.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-heading font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              Work With Us
            </a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 text-center group transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon size={24} className="text-accent-light" />
                </div>
                <div className="font-heading font-extrabold text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom transition to light Contact section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFBFF] to-transparent" />
    </section>
  )
}

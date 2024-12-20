'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Ear, MessageSquare, Moon, Sun } from 'lucide-react'
import { EyeIcon, EarIcon, SpeechIcon } from './components/Icons'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 ${isDarkMode ? 'dark' : ''}`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sense-Connect
          </motion.h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jeevadhara
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering accessibility through cutting-edge AI solutions
          </motion.p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Visionary"
            description="AI-powered scene description through audio output, for the visually impaired"
            icon={<EyeIcon className="h-12 w-12 text-blue-400" />}
            link="https://jeevision-bolt.vercel.app/"
            gradient="from-blue-500 to-purple-600"
          />
          <ServiceCard 
            title="Speech-Connect"
            description="Real-time transcription with local language translation for the hearing impaired"
            icon={<EarIcon className="h-12 w-12 text-purple-400" />}
            link="https://cheerful-bonbon-6f76f4.netlify.app/"
            gradient="from-purple-500 to-pink-600"
          />
          <ServiceCard 
            title="Voice-Connect"
            description="AI-powered text-to-speech and quick phrase to speech for those with speech impairments"
            icon={<SpeechIcon className="h-12 w-12 text-pink-400" />}
            link="https://voice-connect.vercel.app/"
            gradient="from-pink-500 to-red-600"
          />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-12 text-center text-gray-400 relative z-10">
        <p>&copy; 2025 Jeevadhara. All rights reserved.</p>
        <p className="mt-2">Empowering lives through accessible AI technology</p>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon, link, gradient }) {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-gray-800/50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}></div>
      <div className="relative z-10">
        {icon}
        <h3 className="text-2xl font-semibold mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link href={link} className={`bg-gradient-to-r ${gradient} text-white font-bold py-2 px-4 rounded-full transition-all duration-200 hover:opacity-80`}>
          Try Now
        </Link>
      </div>
    </motion.div>
  )
}


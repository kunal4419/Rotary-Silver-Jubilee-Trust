"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el || reduceMotion) return

    // Play/pause based on viewport
    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting
        if (inView) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduceMotion])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-white"
        >
          <motion.h1
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-normal mb-6 drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We are People of Action
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our global network of more than 1.2 million neighbors, friends, and leaders volunteer their skills and resources to solve issues and address community needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="rounded-md bg-primary px-6 py-3 text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border-2 border-white bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20 transition-all"
            >
              Get Involved
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

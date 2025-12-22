import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current

    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let visible = false

    const animate = () => {
      x += (mouseX - x) * 0.05
      y += (mouseY - y) * 0.05

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)

    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
    }
  }, [])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } },
  }

  return (
    <div className="hero" ref={heroRef}>
      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
        <motion.h1 className="st-title left-title" variants={item}>
          STRANGER<br />THINGS
        </motion.h1>
        <motion.div className="right" variants={item}>
          <h1 className="st-title">SEASON 5</h1>
          <motion.p className="st-text" variants={item}>
            The final battle against the Upside Down begins.
            Will the heroes save Hawkins once and for all?
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef}></div>
    </div>
  )
}

export default Hero

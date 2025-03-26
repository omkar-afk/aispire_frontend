'use client';
import styles from './page.module.scss'
import { projects } from './featuresData';
import Card from './FeatureCard';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Feature() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    // Configure Lenis for smoother scrolling
    const lenis = new Lenis({
      duration: 1.2, // Increased duration for smoother scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true, // Enable smooth scrolling on touch devices
      touchMultiplier: 2 // Adjust touch sensitivity
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function to stop Lenis when component unmounts
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main ref={container} className={styles.main} id="features">
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              key={`p_${i}`} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale}
            />
          )
        })
      }
    </main>
  )
}
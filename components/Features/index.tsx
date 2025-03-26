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
      duration: 1.2, // Smoother scroll
      lerp: 0.1, // Linear interpolation for smoother movement
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    })
    
    function raf(time: number) {
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
'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src?: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i, 
  title, 
  description, 
  src, 
  color, 
  progress, 
  range, 
  targetScale
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Improved easing for smoother scale transitions
  const imageScale = useTransform(
    scrollYProgress, 
    [0, 1], 
    [2, 1], 
    { ease: (t) => 1 - Math.pow(1 - t, 4) } // Smooth cubic easing
  )
  
  // More gradual scale transformation
  const scale = useTransform(
    progress, 
    range, 
    [1, targetScale], 
    { ease: (t) => 1 - Math.pow(1 - t, 3) } // Soft deceleration
  );
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
  style={{
    backgroundColor: color, 
    scale, 
    top: `calc(-5vh + ${i * 25}px)`
  }}
  transition={{
    type: 'spring',
    stiffness: 100,
    damping: 20
  }}
  className={styles.card}
>

        <h2>{title}</h2>
        <div className={styles.body}
        style={!src ? {
          width: '100%',
          top: '0',
          textAlign: 'center',

          display: 'flex',
          justifyContent:'space-around',
        } : {}}>
          <div 
            className={styles.description} 
            
          >
            <p>{description}</p>
            <span>
              {/* Commented out links/icons */}
            </span>
          </div>
          
          {src && (
            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{
                  scale: imageScale,
                  transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 15
                  }
                }}
              >
                <Image
                  src={`/images/${src}`}
                  alt="image" 
                  fill
                  style={{objectFit: "contain"}}
                />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Card
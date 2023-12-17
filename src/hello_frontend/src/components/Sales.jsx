import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { layout } from '../styles'
import styles from '../styles'
import Button from './Button'
import { card } from '../assets/main.js'
import React from "react";

const Sales = () => {
  const [isInView, setIsInView] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('sales')
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsInView(rect.top <= window.innerHeight && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.8 },
      })
    }
  }, [isInView, controls])

  return (
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section id='sales' className={layout.section}>
          <motion.div
            className={layout.sectionInfo}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <h2 className={styles.heading2}>
              Sales, Smiles, Success: <br className='sm:block hidden' />
              Your Walmart Dashboard
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              These dynamic visual tools enable us to monitor key performance
              indicators, track project progress, assess marketing campaigns,
              manage inventory, and analyze financial metrics.
            </p>
            <Button styles={`mt-10`} />
          </motion.div>

          <motion.div
            className={layout.sectionImg}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
          >
            <img src={card} alt='billing' className='w-[100%] h-[100%]' />
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Sales

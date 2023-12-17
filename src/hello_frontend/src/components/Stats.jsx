import React from 'react'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  Akshayapatra,
  Marriott,
  Raddison,
  Taj,
  Unicef,
  WWF,
  Partnership,
} from '../assets/main.js'

const Stats = () => {
  const partnerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const staggerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  }

  return (
    <div className='bg-white pt-18 '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-center tracking-tight leading-tight text-gray-900 lg:mb-4 dark:text-white md:text-4xl'>
          Our Impactful Partnerships
        </h2>
        <motion.div
          className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'
          variants={staggerVariants}
          initial='hidden'
          animate='visible'
        >
          {[
            { src: Akshayapatra, alt: 'Akshayapatra' },
            { src: Unicef, alt: 'Unicef' },
            { src: Marriott, alt: 'Marriott' },
            { src: Taj, alt: 'Taj' },
            { src: Raddison, alt: 'Raddison' },
            // Add more images here as needed
          ].map((image, index) => (
            <motion.img
              key={index}
              variants={partnerVariants}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src={image.src}
              alt={image.alt}
              width={158}
              height={48}
            />
          ))}
        </motion.div>
        <div className='flex justify-center mt-8'>
          <div className='mt-8 space-x-4'></div>
        </div>
      </div>
    </div>
  )
}

export default Stats

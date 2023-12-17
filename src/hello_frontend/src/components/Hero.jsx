import { motion } from 'framer-motion'
import { heroImage } from '../assets/main.js'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import React from 'react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  }
  const rotatingImageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transform: 'rotate(360deg)',
    animation: 'rotation 20s linear infinite',
  }

  return (
    <motion.section
      className='bg-white dark:bg-gray-900'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-3 lg:grid-cols-12'>
        <motion.div
          className='place-self-center lg:col-span-6 p-6 md:p-10 lg:p-12'
          variants={textVariants}
        >
          <h1 className='text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl text-gray-800 dark:text-white'>
            From Excess to Equity
          </h1>
          <h3 className='mt-4 text-xl font-semibold text-gray-600 dark:text-gray-300'>
            Nourishing a Better Tomorrow
          </h3>
          <p className='mt-6 text-lg text-gray-600 dark:text-gray-400'>
            Bridging the HoReCa Industry and NGOs for Instant Food Rescue and
            Community Nourishment. Join us and transform food waste into hopeful
            meals with NourishNet.
          </p>
          <div className='mt-8 space-x-4'>
            <a
              href='/joinUs'
              className='inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#EDA277] rounded-lg hover:bg-[#DE7E44] transition-colors'
            >
              Join us <FaArrowRight className='ml-2' />
            </a>
            <a
              href='/contact'
              className='inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors'
            >
              Speak with Us <FaPhoneAlt className='ml-2' />
            </a>
          </div>
        </motion.div>
        <motion.div
          className='lg:mt-0 lg:col-span-6 p-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={heroImage}
            alt='mockup'
            style={rotatingImageStyles}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HoReCa, NGO } from '../assets/main.js'

const ImageSection = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  })

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Increased duration for more noticeable motion
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div
        ref={sectionRef}
        className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'
      >
        <motion.div
          initial='hidden'
          animate={sectionInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className='font-light text-gray-500 sm:text-lg dark:text-gray-400'
        >
          <h2 className='mb-4 text-4xl font-extrabold text-gray-900 dark:text-white'>
            Transforming Excess into Blessings in Real Time
          </h2>
          <p className='mb-4'>
            Our visionary web platform redefines the heart of hospitality by
            channeling surplus food from restaurants directly to those in need
            through instantaneous NGO partnerships.
          </p>
          <p>
            No more wasted potential, no more untouched meals. With NourishNet,
            every plate that remains untouched becomes a chance for a better
            tomorrow.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: 'easeOut' }} // Increased duration here as well
          className='grid grid-cols-2 gap-4 mt-8'
        >
          <div className='relative h-96 overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 shadow-lg'>
            <img
              className='absolute inset-0 w-full h-full object-cover'
              src={NGO}
              alt='office content 2'
            />
          </div>
          <div className='relative h-96 overflow-hidden rounded-lg mt-4 lg:mt-10 transform transition duration-300 hover:scale-105 shadow-lg'>
            <img
              className='absolute inset-0 w-full h-full object-cover'
              src={HoReCa}
              alt='office content 1'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImageSection

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowWeWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <motion.section
      className="text-gray-600 bg-gray-100 mt-3 body-font"
      initial="initial"
      animate={inView ? "animate" : "initial"}
      ref={ref}
    >
      <h2 className="mb-4 pt-8 lg:pt-16 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
        How We Work
      </h2>
      <p className="mt-2 pt-2 text-center text-xl text-gray-600 dark:text-gray-300">
        Discover our process of rescuing and distributing surplus food to make a
        positive impact on communities.
      </p>

      <motion.div
        className="container px-5 py-24 mx-auto"
        variants={containerVariants}
      >
        <motion.div
          className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          variants={itemVariants}
        >
          <div className="sm:w-31 sm:h-31 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Food SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="restaurant"
              width="50"
              height="50"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Collect Food from HoReCas
            </h2>
            <p className="leading-relaxed text-base">
              We collaborate with restaurants and hotels to rescue surplus food
              and prevent wastage.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          variants={itemVariants}
        >
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Connect HoReCa with NGOs
            </h2>
            <p className="leading-relaxed text-base">
              We establish partnerships to distribute rescued food to NGOs for
              further distribution and nourishment.
            </p>
          </div>
          <div className="sm:w-31 sm:order-none order-first  sm:h-31 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Help SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="Handshake"
              width="50"
              height="50"
            >
              <path
                fill="#ffffff"
                d="M13 3a5.393 5.393 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152-.17.17-.38.34-.6.51-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.876.876 0 0 0 .15 1 .833.833 0 0 0 1.002-.002.62.62 0 0 0 .077.881.994.994 0 0 0 1.006-.002.806.806 0 0 0-.003 1.005 1.012 1.012 0 0 0 .892-.114.822.822 0 0 0 .187.912 1.093 1.093 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.311 1.311 0 0 0 1.094-.791c.146.056.312.094.488.094.236 0 .455-.068.64-.185.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279.996.996 0 0 0 .138-1.215.036.036 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.564 1.564 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.725 4.725 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781.319.359 1.269 1.179 1.719 1.599.28.26 1 .78.58 1.18s-.75 0-1.44-.56-2.23-1.94-2.23-1.94a.937.937 0 0 0 .27.72c.17.2 1.12 1.12 1.52 1.54s.75.67.41 1-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75.288.378.848.868 1.188 1.248s.54.7 0 1-1.34-.44-1.69-.8v-.002a.411.411 0 0 0-.1-.269.896.896 0 0 0-.906-.188A.609.609 0 0 0 6 11.1a.754.754 0 0 0-.912.001.61.61 0 0 0-.085-.95 1 1 0 0 0-1.174.08.66.66 0 0 0-.068-.911.996.996 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64-.68.51-1.25 1-1.08 1.34a1.834 1.834 0 0 0 2.087.036 2.41 2.41 0 0 1 1.343-.403c.347 0 .677.072.976.203.554.374 1.574 1.294 2.504 1.874 1.17.85 1.4 1.4 1.12 1.68z"
                className="color444444 svgShape"
              ></path>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          variants={itemVariants}
        >
          <div className="sm:w-31 sm:h-31 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Smile SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 67 67"
              viewBox="0 0 67 67"
              id="HouseDonation"
              width="50"
              height="50"
            >
              <path
                d="M55.3 11.3v9.7l-8.8-9.6v0c0-2.4 2-4.4 4.4-4.4C53.3 6.9 55.3 8.8 55.3 11.3zM33.5 24.2c1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.7 0-3.1 1.4-3.1 3.1S31.8 24.2 33.5 24.2z"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
              <path
                d="M60.8 31.5c.2-.8 0-1.6-.6-2.1l-26-28.5c-.4-.4-1.1-.4-1.5 0l-26 28.5c-.5.6-.7 1.4-.6 2.1H60.8zM33.5 16.1c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1S30.7 16.1 33.5 16.1zM11.2 33.5c.2 0 .4.2.4.5v26.5c0 3.3 2.7 6.1 6.1 6.1h31.5c3.3 0 6-2.7 6-6.1V33.5H11.2zM33.7 59.7c-.2.1-.3.2-.5.2s-.4-.1-.5-.2c-.4-.3-10-6.3-10-13 0-4 3.2-7.2 7.2-7.2 1.1 0 2.3.3 3.3.8 1-.5 2.1-.8 3.3-.8 4 0 7.2 3.2 7.2 7.2C43.7 53.4 34.1 59.5 33.7 59.7z"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
              <path
                d="M36.5,41.5c-1,0-1.9,0.3-2.8,0.8c-0.3,0.2-0.7,0.2-1.1,0c-0.8-0.5-1.8-0.8-2.8-0.8c-2.9,0-5.2,2.3-5.2,5.2
			c0,4.7,6.6,9.6,8.5,10.9c1.9-1.3,8.5-6.2,8.5-10.9C41.7,43.9,39.3,41.5,36.5,41.5z"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              NGOs Donate to Respective Places
            </h2>
            <p className="leading-relaxed text-base">
              NGOs distribute the rescued food to communities in need, ensuring
              a positive impact on local nourishment.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowWeWork;

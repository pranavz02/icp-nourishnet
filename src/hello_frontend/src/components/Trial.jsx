import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Trial = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }} // Initial animation properties
        animate={{ opacity: 1 }} // Animation properties to animate to
        exit={{ opacity: 0 }} // Animation properties on exit
        transition={{ duration: 0.5 }} // Transition duration
        className="bg-gray-100 dark:bg-gray-900 dark:bg-gray-800"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Fueling Change Across Countless Meals: Empowering{" "}
              <span className="font-extrabold">HoReCa and NGOs</span> Globally
            </h2>
            <p className="mb-4 font-light">
              As per the food wastage index report by UNEP, India experiences an
              annual wastage of{" "}
              <span className="font-extrabold">68,760,163 tonnes</span> of food,
              with a significant portion originating from the HoReCa sector.
            </p>
            <p className="mb-4 font-medium">
              The HoReCa industry contributes significantly to this problem by
              disposing of substantial quantities of prepared food daily,
              thereby aggravating the situation. Moreover, the decomposition of
              food in landfills releases methane, a greenhouse gas with even
              greater potency than carbon dioxide.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-[#eda277] hover:text-[#de7e44] dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
        exit={{ opacity: 0 }} // Animation properties on exit
        transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with delay
        className="bg-white dark:bg-gray-900"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Join our platform today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Empowering Goodness, Minimizing Waste
            </p>
            <a
              href="/joinUs"
              className="text-white bg-[#eda277] hover:bg-[#de7e44] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-[#eda277] focus:outline-none dark:focus:ring-primary-800"
            >
              Free trial for 30 days
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Trial;

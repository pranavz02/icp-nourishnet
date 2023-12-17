import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaLock,
  FaStar,
  FaNetworkWired,
  FaHeartbeat,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#eda277] dark:bg-primary-900 transition-colors transform hover:scale-110 hover:bg-[#de7e44]">
        {React.cloneElement(icon, {
          className:
            "w-5 h-5 text-white dark:text-primary-300 transition-colors transform hover:scale-110",
        })}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FaClock />,
      title: "Real-Time Food Donation",
      description:
        "The platform enables instant, real-time communication between HoReCa establishments and NGOs, ensuring quick and efficient food donations.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location-Based Matching",
      description:
        "Thanks to advanced geolocation technology, NourishNet identifies NGOs near HoReCa establishments, optimizing food distribution within local communities.",
    },
    {
      icon: <FaLock />,
      title: "Data Privacy and Security",
      description:
        "User data and sensitive information are safeguarded through robust data privacy measures, instilling trust and confidence among our users.",
    },
    {
      icon: <FaStar />,
      title: "User Reviews and Ratings",
      description:
        "NGOs can rate and review HoReCa establishments based on their donation experiences, fostering a transparent and accountable ecosystem.",
    },

    {
      icon: <FaHeartbeat />,
      title: "Social Impact",
      description:
        "By curbing food wastage and addressing hunger, NourishNet aims to make a substantial positive impact on society, promoting sustainable practices and social responsibility.",
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      description:
        "Valuable insights on food waste and distribution trends. Businesses can leverage surplus food patterns, while NGOs can better allocate food resources.",
    },
  ];

  return (
    <section className=" dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Discover the Heartbeat of NourishNet
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here is A Glimpse into Our Key Features.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

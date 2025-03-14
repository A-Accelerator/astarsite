"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaHashtag, FaChartLine, FaCogs } from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-primary-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const BusinessServices = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Create stunning, responsive websites that drive results. We focus on user experience, performance, and conversion optimization.",
    },
    {
      icon: <FaHashtag />,
      title: "Social Media Management",
      description:
        "Build your brand presence and engage with your audience through strategic social media campaigns and content creation.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing Consulting",
      description:
        "Boost your online visibility with data-driven SEO strategies, targeted advertising, and comprehensive digital marketing solutions.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software Solutions",
      description:
        "Streamline your operations with tailored software solutions that automate processes and enhance business efficiency.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">
          Helping Small Businesses Grow with{" "}
          <span className="text-primary-600">A*</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We specialize in supporting small businesses through software
          consulting and digital marketing services. Our affordable,
          high-quality solutions are tailored to help you achieve your business
          goals and maximize your digital potential.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 mb-8">
          We're passionate about helping businesses reach their full potential
          with technology-driven solutions. Let's work together to take your
          business to the next level!
        </p>
        <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default BusinessServices;

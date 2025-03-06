"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 mt-40 w-full z-[20] flex-wrap md:flex-nowrap"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start max-w-[600px]">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f8] bg-[#1a1a2e] rounded-md opacity-100"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[14px] md:text-[14px] sm:text-[12px] text-white font-semibold">
            Portfolio
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-6xl font-bold text-white w-auto h-auto"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7B3FE4]"
            style={{
              WebkitTextStroke: "2px black", // Thick black outline
              WebkitTextFillColor: "transparent", // Keeps the gradient inside
              textShadow: "3px 3px 5px rgba(0,0,0,0.5)", // Optional depth effect
            }}
          >
            Akarsh R
          </span>

          <span className="block text-4xl mt-3">
            Providing the best project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-2 max-w-[600px]"
        >
          I&apos;m a Software Engineer with experience in Website, Software
          development, and Project Planning.
        </motion.p>

        {/* Contact Me Button - Positioned Below */}
        <motion.a
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
            },
          }}
          href="mailto:karshrnair@gmail.com?subject=Inquiry&body=Hi Akarsh,"
          className="py-1 px-4 bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white text-lg text-center cursor-pointer rounded-lg max-w-[165px] mt-2"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

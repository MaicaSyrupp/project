"use client";
import React, { useState } from "react";

const About = () => {
  const [activeCard, setActiveCard] = useState(2); // Start with the middle card

  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-8">
        About <span className="text-[#fec3e1]">Me</span>
      </h1>

      <div className="relative flex justify-center items-center">
        {/* Cards container */}
        <div className="flex space-x-4">
          {/* Card 1 */}
          <div
            className={`w-full lg:w-[30%] relative bg-[#c1dcee]/20 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden transition-opacity duration-300 ${
              activeCard === 1 ? "opacity-100" : "opacity-55"  // Reduced opacity for better readability
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#fec3e1] via-[#323776] to-[#5369b1] opacity-20 animate-gradient-xy"></div>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-white">Marketing</h2>
              <p className="text-lg text-white/80 mt-2">
                I find marketing essential in the technology field, as it bridges the gap between innovation and the audience.
              </p>
            </div>
          </div>

          {/* Card 2 (Middle card, always clear) */}
          <div
            className={`w-full lg:w-[30%] relative bg-[#c1dcee]/20 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden transition-opacity duration-300 ${
              activeCard === 2 ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#fec3e1] via-[#323776] to-[#5369b1] opacity-20 animate-gradient-xy"></div>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-white">Artificial Intelligence</h2>
              <p className="text-lg text-white/80 mt-2">
                I am passionate about Artificial Intelligence and its potential to revolutionize industries and solve complex problems.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`w-full lg:w-[30%] relative bg-[#c1dcee]/20 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden transition-opacity duration-300 ${
              activeCard === 3 ? "opacity-100" : "opacity-55"  // Reduced opacity for better readability
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#fec3e1] via-[#323776] to-[#5369b1] opacity-20 animate-gradient-xy"></div>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-white">Creative</h2>
              <p className="text-lg text-white/80 mt-2">
                I explore philosophy and art to gain diverse perspectives, allowing me to critically analyze problems and create holistic, effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

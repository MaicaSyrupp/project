"use client";
import Image from "next/image";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <div 
      id="home"  // Added the id="home" here to link with the Home section in the navbar
      className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#323776,#8182ac_35%,#c1dcee_60%,#fec3e1_80%)]"
    >
      {/* Background Gradient */}
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#323776_80%,#8182ac)] z-0"></div>

      <div className="relative z-10">
        {/* Main Heading */}
        <div className="text-8xl font-bold text-center">
          <h1 className="text-white">Hi, I am</h1>
          <h1 className="text-white"> <span className="text-[#fec3e1]">Maica </span>Casonete</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[280px] top-[170px] z-20" drag>
          <Image
            src={icon1}
            height="370"
            width="370"
            alt="icon1"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="hidden md:block absolute left-[220px] top-[20px] z-20" drag>
          <Image
            src={icon2}
            height="220"
            width="220"
            alt="icon2"
            className=""
            draggable="false"
          />
        </motion.div>

        {/* Introduction Text */}
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white">
        I’m passionate about the tech field, constantly exploring new ways to create innovative and user-centered experiences.
        </p>

        {/* Profile Picture */}
        <div className="mx-auto mt-8 relative">
          <Image
            src={profilepic}
            alt="profile picture"
            className="h-[310px] w-auto mx-auto mt-8 rounded-full relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

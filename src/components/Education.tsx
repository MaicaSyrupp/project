"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Naga College Foundation",
    duration: "2022 - 2027",
    description:
      "My coursework equips me with strong programming and analytical skills, enabling me to create and complete impactful personal projects.",
    src: logo1,
  },
  {
    title: "Senior High School",
    institution: "University of Nueva Caceres",
    duration: "2020-2022",
    description:
      "This experience built a solid foundation in science and mathematics, fostering critical thinking and problem-solving.",
    src: logo2,
  },
];

const Education = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-[#323776] to-[#5369b1] py-16"
      id="education"
    >
      <h1 className="text-white text-4xl md:text-6xl max-w-[320px] mx-auto font-semibold my-8 md:my-12 text-center">
        My <span className="text-[#fec3e1]">Education</span>
      </h1>

      <div className="max-w-[1000px] mx-auto mt-16 space-y-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col-reverse md:flex-row gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="space-y-2 md:max-w-[50%] px-4">
              <h2 className="text-5xl md:text-7xl my-4 text-white/70">{`0${
                index + 1
              }`}</h2>
              <h2 className="text-2xl md:text-4xl font-semibold">{edu.title}</h2>
              <p className="text-md md:text-lg text-white/70">{edu.institution}</p>
              <p className="text-md md:text-lg text-white/70">{edu.duration}</p>
              <p className="text-md md:text-lg text-white/70">{edu.description}</p>
            </div>

            {/* Logo Section */}
            <div className="flex justify-center items-center w-full md:w-[50%] px-4">
              <Image
                src={edu.src}
                alt={edu.title}
                className="w-auto h-auto max-h-[200px] md:max-h-[250px] object-contain"
                placeholder="blur" // Optional: adds a blur placeholder effect
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

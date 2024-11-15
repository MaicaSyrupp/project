import React from 'react';
import { FaCampground, FaMusic, FaCamera, FaBook } from 'react-icons/fa'; // Changed Football icon to Campground icon

const hobbiesIcons = [
  { icon: <FaCampground size={100} />, label: "Camping" }, // Updated label and icon for camping
  { icon: <FaMusic size={100} />, label: "Music" },
  { icon: <FaCamera size={100} />, label: "Photography" },
  { icon: <FaBook size={100} />, label: "Reading" },
];

const Hobbies = () => {
  return (
    <div id="hobbies" className='bg-[#323776] py-24'> {/* Solid background matching contact */}
      <div className='text-white max-w-[1200px] mx-auto p-6 text-center'>
        <h2 className='text-4xl md:text-6xl font-bold mb-8'>
          My <span className="text-[#fec3e1]">Hobbies</span>
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {hobbiesIcons.map((hobby, index) => (
            <div
              key={index}
              className='h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px] flex flex-col justify-center items-center bg-[#8182ac]/60 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105'
            >
              {hobby.icon}
              <p className='mt-2 text-sm md:text-md text-[#fec3e1]'> {/* Light pink for the hobby label */}
                {hobby.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

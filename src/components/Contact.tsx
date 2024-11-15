import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div 
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-6 lg:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 bg-[#323776]" 
      id="contact"
    >
        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start space-y-4 lg:space-y-6 w-full lg:w-auto">
            <ul className='space-y-3'>
                <li className='flex items-center'>
                    <Image src={phone} alt="phone" className='h-[30px] w-auto mr-3 lg:h-[40px] lg:mr-4'/>
                    <p className='text-lg lg:text-xl text-[#fec3e1]'>099191911991</p> {/* Light pink color */}
                </li>
                <li className='flex items-center'>
                    <Image src={mail} alt="mail" className='h-[30px] w-auto mr-3 lg:h-[40px] lg:mr-4'/>
                    <p className='text-lg lg:text-xl text-[#fec3e1]'>mcasonete@gbox.ncf.edu.ph</p> {/* Light pink color */}
                </li>
            </ul>
        </div>

        {/* Contact Form */}
        <div className='bg-[#8182ac]/60 p-6 rounded-xl w-full max-w-[550px]'>
            <h2 className='text-3xl lg:text-5xl font-bold text-[#fec3e1] mb-4'>Let's Connect</h2> {/* Light pink color */}
            <form className='space-y-4' action="https://getform.io/f/bjjjoleb" method="POST">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input 
                        type="text" 
                        name="firstName" 
                        className='bg-[#323776]/70 rounded-xl p-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#fec3e1]'
                        placeholder='First Name'
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        className='bg-[#323776]/70 rounded-xl p-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#fec3e1]'
                        placeholder='Last Name'
                    />
                    <input 
                        type="email" 
                        name="email" 
                        className='bg-[#323776]/70 rounded-xl p-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#fec3e1]'
                        placeholder='Email'
                    />
                    <input 
                        type="phone" 
                        name="phone" 
                        className='bg-[#323776]/70 rounded-xl p-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#fec3e1]'
                        placeholder='Phone'
                    />
                </div>
                <textarea 
                    name="message" 
                    className='bg-[#323776]/70 w-full rounded-xl p-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#fec3e1]'
                    placeholder='Your Message'
                />
                <button 
                    type="submit" 
                    className='bg-[#fec3e1] hover:bg-[#fdfcfc] text-[#323776] px-6 py-2 w-full font-semibold text-lg lg:text-xl rounded-xl'
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
  );
}

export default Contact;

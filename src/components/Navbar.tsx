"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Education", path: "#education" },
    { title: "Hobbies", path: "#hobbies" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    };

    return (
        <div className="text-[#e7e4e6] pt-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px] bg-[#323776]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p className="text-[#fdfcfc] hover:text-[#fec3e1]">{link.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation Button */}
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-[#fec3e1] border-[#fec3e1] p-2 z-50 hover:bg-[#fec3e1] hover:text-[#323776]">
                {nav ? <AiOutlineClose size={30} className="text-[#fec3e1]" /> : <AiOutlineMenu size={30} className="text-[#fec3e1]" />}
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-[#fec3e1]/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8 text-[#323776]">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav} className="hover:text-[#fdfcfc]">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;

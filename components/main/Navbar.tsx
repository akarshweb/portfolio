"use client"; 

import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Main Navbar */}
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
                <div className="max-w-4xl mx-auto flex items-center justify-between h-full relative">

                    {/* Desktop Navigation (Centered & Shifted Right) */}
                    <div className="hidden md:flex items-center justify-center w-full ml-100">
                        <div className="flex items-center justify-between w-full max-w-[600px] border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
                            <a href="#about-me" className="cursor-pointer">About me</a>
                            <a href="#experience" className="cursor-pointer">Experience</a>
                            <a href="#skills" className="cursor-pointer">Skills</a>
                            <a href="#projects" className="cursor-pointer">Projects</a>
                        </div>
                    </div>

                    {/* Social Icons (Moved to Top-Right Corner) */}
                    <div className="hidden md:flex flex-row gap-5 absolute right-5 top-4">
                        {Socials.map((social) => (
                            <a 
                                key={social.name} 
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(true)} className="md:hidden text-white z-50">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Side Menu */}
            <div className={`fixed top-0 left-0 h-full w-[250px] bg-[#030014] shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-col h-full p-5">
                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)} className="self-end text-white mb-5">
                        <X size={28} />
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-4 text-white">
                        <a href="#about-me" className="cursor-pointer" onClick={() => setIsOpen(false)}>About me</a>
                        <a href="#experience" className="cursor-pointer" onClick={() => setIsOpen(false)}>Experience</a>
                        <a href="#skills" className="cursor-pointer" onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="#projects" className="cursor-pointer" onClick={() => setIsOpen(false)}>Projects</a>
                    </nav>

                    {/* Social Icons (Mobile) */}
                    <div className="flex gap-5 mt-6">
                        {Socials.map((social) => (
                            <a 
                                key={social.name} 
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay (Click outside to close menu) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;

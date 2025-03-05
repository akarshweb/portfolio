import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[#030014] text-gray-200 shadow-lg py-10 mt-[-30px]'>
            <div className='w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center'>
                
                {/* Footer Content */}
                <div className='w-full flex flex-col md:flex-row items-center justify-between px-10'>
                    
                    {/* Social Media and Email section */}
                    <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
                        <div className='flex items-center space-x-6'>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='text-3xl hover:text-cyan-500 transition duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='text-3xl hover:text-cyan-500 transition duration-300' />
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-3xl hover:text-cyan-500 transition duration-300' />
                            </a>
                        </div>
                        <div className='text-center md:text-right'>
                            <p className='text-lg'>
                                <a href="mailto:constgenius@gmail.com" className="text-cyan-500 hover:text-white">
                                    constgenius@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className='mt-6 text-center'>
                    <p className='text-sm text-gray-400'>
                        &copy; 2024 constGenius. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

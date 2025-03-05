'use client'; // Necessary for client-side functionality like onClick

import Image from 'next/image';
import React from 'react';

interface Props {
    src: string;
    title: string;
    description: string;
    link: string; // Link for the live URL
    showButton: boolean; // Condition to show the button
}

const ProjectCard = ({ src, title, description, link, showButton }: Props) => {
    // Handle the redirection when the button is clicked
    const handleRedirect = () => {
        window.open(link, '_blank');
    };

    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <div className='w-full h-[250px]'>
                <Image
                    src={src}
                    alt={title}
                    width={400}
                    height={250}
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300'>{description}</p>
                {/* Conditionally render the button */}
                {showButton && (
                    <button
                        onClick={handleRedirect}
                        className='mt-4 px-6 py-2 bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold rounded-lg hover:opacity-80 transition-opacity z-20 relative'
                    >
                        View
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
    showButton: boolean;
}

const ProjectCard = ({ src, title, description, link, showButton }: Props) => {
    const handleRedirect = () => {
        window.open(link, '_blank');
    };

    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full'>
            <div className='w-full h-[200px]'>
                <Image
                    src={src}
                    alt={title}
                    width={400}
                    height={200}
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='relative p-4 flex flex-col flex-grow'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300 flex-grow'>{description}</p>
                <div className='mt-4'>
                    {showButton && (
                        <button
                            onClick={handleRedirect}
                            className='px-6 py-2 bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold rounded-lg hover:opacity-80 transition-opacity z-20 relative'
                        >
                            View
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
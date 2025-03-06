import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
    // Combine all skills into one array while removing duplicates
    const uniqueSkills = new Map();

    [...Skill_data, ...Frontend_skill, ...Backend_skill, ...Full_stack, ...Other_skill].forEach(skill => {
        if (!uniqueSkills.has(skill.Image)) {
            uniqueSkills.set(skill.Image, skill);
        }
    });

    const skillArray = Array.from(uniqueSkills.values());

    return (
        <section className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-10'
            id='skills'
        >
            <SkillText />

            {/* Grid layout for consistent alignment, with 5 items per row on large screens */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5 mt-4 justify-center items-center'>
                {skillArray.map((image, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            {/* Background Video */}
            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills;

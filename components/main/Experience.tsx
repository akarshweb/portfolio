"use client";

import React from "react";
import ExperienceDetails from "../sub/ExperienceDetails"

const experiences = [
  {
    company: "Google",
    role: "Software Engineer",
    duration: "2022 - Present",
    description: "Developing scalable web applications using modern technologies.",
  },
  {
    company: "Meta",
    role: "Frontend Developer",
    duration: "2020 - 2022",
    description: "Worked on UI/UX design and frontend development for social platforms.",
  },
  {
    company: "Tesla",
    role: "Intern - Software Development",
    duration: "2019 - 2020",
    description: "Contributed to internal software solutions improving efficiency.",
  },
];

const Experience = () => {
    return (
      <div id="experience" className="py-10 px-10 bg-[#030014] text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceDetails key={index} {...exp} />
          ))}
        </div>
      </div>
    );
  };
  

export default Experience;

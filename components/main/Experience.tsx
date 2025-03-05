"use client";

import React from "react";
import ExperienceDetails from "../sub/ExperienceDetails"

const experiences = [
  {
    company: "qoncept technology GmbH",
    place: "Austria",
    role: "Software Engineer Intern",
    duration: "February 2025 - Present",
    description: "Developing features for Enterprise level Application using modern technologies.",
  },
  {
    company: "MyEquation",
    place: "India",
    role: "Marketing Operations Intern",
    duration: "February 2022 - March 2022",
    description: "Pioneered market research initiatives, generating actionable insights that strategically targeted new customer segments and boosted lead conversion rates, directly contributing to business growth.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-10 px-10 bg-[#030014] text-white mt-[-200px]">
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

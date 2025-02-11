"use client";

import React from "react";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const ExperienceDetails: React.FC<ExperienceProps> = ({
  company,
  role,
  duration,
  description,
}) => {
  return (
    <div className="border border-purple-600 p-6 rounded-lg shadow-md bg-[#111]">
      <h3 className="text-2xl font-semibold text-purple-400">{company}</h3>
      <p className="text-lg font-medium">{role}</p>
      <p className="text-gray-400 text-sm">{duration}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default ExperienceDetails;

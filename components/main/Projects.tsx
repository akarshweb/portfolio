import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 mt-[-200px]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pizzasales.png"
          title="Pizza Sales Analysis"
          description="Engineered a data-driven analysis framework for 48620 pizza sales transactions using SQL & Tableau, revealing pivotal trends to optimize business strategies."
          link="https://public.tableau.com/app/profile/akarsh.r8268/viz/PizzaSalesReport_17224758821340/Home"
          showButton={true} // Show button for this project
        />
        <ProjectCard
          src="/esportify.jpg"
          title="E-Sportify"
          description="E-Sportify is a Classification and Ranking Model which aims to provide strategic insights into the YouTube E-sports scene to enable more targeted influencer marketing efforts and strengthen brand collaborations."
          showButton={false} // Don't show button for this project
        />
        <ProjectCard
          src="/wealthwizard.png"
          title="Wealth Wizard"
          description="A Budget planner dashboard using Angular and TypeScript, enabling users to manage finances with features like income management, expense tracking and transaction tracking."
          link="https://budgetplanner-akarsh.vercel.app/"
          showButton={true} // Show button for this project
        />
      </div>
    </div>
  );
};

export default Projects;

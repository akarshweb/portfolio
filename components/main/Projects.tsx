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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 w-full max-w-6xl mx-auto">
        <ProjectCard
          src="/pizzasales.png"
          title="Pizza Analysis"
          description="Engineered a data-driven analysis framework for 48620 pizza sales transactions using SQL & Tableau, revealing pivotal trends to optimize business strategies."
          link="https://public.tableau.com/app/profile/akarsh.r8268/viz/PizzaSalesReport_17224758821340/Home"
          showButton={true}
        />
        <ProjectCard
          src="/esportify.jpg"
          title="E-Sportify"
          description="E-Sportify is a Classification and Ranking Model which provides insights into the YouTube E-sports scene to enable more targeted influencer marketing efforts and strengthen brand collaborations using Python, NetworkX, Graph Theory, Youtube Api, PageRank Algorithm, URL Algorithm, Excel and PowerBI."
          link="https://drive.google.com/file/d/1Kk3a1LJnE_0zmahI_FEOimmvIh6X_FBa/view?usp=sharing"
          showButton={true}
        />
        <ProjectCard
          src="/wealthwizard.png"
          title="Wealth Wizard"
          description="A Budget planner dashboard using Angular and TypeScript, enabling users to manage finances with features like income management, expense tracking and transaction tracking."
          link="https://budgetplanner-akarsh.vercel.app/"
          showButton={true}
        />
      </div>
    </div>
  );
};

export default Projects;
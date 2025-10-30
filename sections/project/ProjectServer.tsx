import { prisma } from "@/prisma/client";
import ProjectLargerScreen from "./ProjectLargerScreen";
import ProjectSmallScreen from "./ProjectSmallScreen";

const ProjectServer = async () => {
  const projects = await prisma.project.findMany();
  return (
    <>
      <ProjectLargerScreen projects={projects} />
      <ProjectSmallScreen projects={projects} />
    </>
  );
};

export default ProjectServer;

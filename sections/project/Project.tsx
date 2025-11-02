import { prisma } from "@/prisma/client";
import ProjectClient from "./ProjectClient";

const Project = async () => {
  const projects = await prisma.project.findMany();
  return <ProjectClient projects={projects} />;
};

export default Project;

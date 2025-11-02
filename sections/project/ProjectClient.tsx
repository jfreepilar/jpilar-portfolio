"use client";

import { Project } from "@prisma/client";
import ProjectLargerScreen from "./ProjectLargerScreen";
import ProjectSmallScreen from "./ProjectSmallScreen";
import { useNavigationInView } from "@/context/NavigationInViewProvider";
import { Heading, Section } from "@radix-ui/themes";

export default function ProjectClient({ projects }: { projects: Project[] }) {
  const { ProjectRef } = useNavigationInView();
  return (
    <Section className="px-3 lg:px-0" id="project" ref={ProjectRef}>
      <Heading as="h1">Projects</Heading>
      <ProjectLargerScreen projects={projects} />
      <ProjectSmallScreen projects={projects} />
    </Section>
  );
}

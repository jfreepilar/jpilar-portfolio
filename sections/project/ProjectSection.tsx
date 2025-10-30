"use client";

import { Container, Heading, Section } from "@radix-ui/themes";
import ProjectClient from "./ProjectServer";

const ProjectSection = () => {
  return (
    <Section>
      <Heading as="h1">Projects</Heading>
      <Container className="px-3 lg:px-0">
        <ProjectClient />
      </Container>
    </Section>
  );
};

export default ProjectSection;

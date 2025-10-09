import { Container, Heading, Section } from "@radix-ui/themes";
import ProjectLargerScreen from "./ProjectLargerScreen";
import ProjectSmallScreen from "./ProjectSmallScreen";

const Project = () => {
  return (
    <Section>
      <Heading as="h1">Projects</Heading>
      <Container className="px-3 lg:px-0">
        <ProjectLargerScreen />
        <ProjectSmallScreen />
      </Container>
    </Section>
  );
};

export default Project;

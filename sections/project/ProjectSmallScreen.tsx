import Card from "@/components/Card";
import { prisma } from "@/prisma/client";
import { Grid } from "@radix-ui/themes";

const ProjectSmallScreen = async () => {
  const projects = await prisma.project.findMany();

  return (
    <Grid
      display={{ initial: "grid", md: "none" }}
      columns="repeat(2, 1fr)"
      gapX="9"
      gapY="8"
    >
      {projects.map((project) => (
        <Card
          key={project.id}
          image={project.image}
          alt={project.alt}
          title={project.title}
          github={project.github}
          domain={project.domain}
          description={project.description}
        />
      ))}
    </Grid>
  );
};

export default ProjectSmallScreen;

"use client";

import Card from "@/components/Card";
import { Container, Grid, Heading, Section } from "@radix-ui/themes";
import { Skill } from "@prisma/client";

const SkillClient = async ({ skills }: { skills: Skill[] }) => {
  return (
    <Section>
      <Heading as="h1">Skill-Set</Heading>
      <Container className="px-3">
        <Grid
          columns={{ initial: "2", md: "repeat(3, 1fr)" }}
          gapX="9"
          gapY="8"
        >
          {skills.map((skill) => (
            <Card
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default SkillClient;

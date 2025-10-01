import RenderIcon from "@/components/RenderIcon";
import { prisma } from "@/prisma/client";
import {
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

const Skill = async () => {
  const skills = await prisma.skill.findMany();

  return (
    <Section>
      <Heading as="h1">Skill-Set</Heading>
      <Container className="px-3">
        <Grid
          columns={{ initial: "2", md: "repeat(3, 1fr)" }}
          gapX="9"
          gapY="8"
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              variant="ghost"
              className="bg-martinique rounded-none! h-[270px] pt-8! px-8! pb-0!"
            >
              <Flex direction="column" gapY="3">
                <Flex gap="2">
                  <RenderIcon iconFromDB={skill.icon} />
                </Flex>
                <Heading as="h3" size="2" weight="bold">
                  {skill.title}
                </Heading>

                <Text as="p" size="1" className="text-left!">
                  {skill.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skill;

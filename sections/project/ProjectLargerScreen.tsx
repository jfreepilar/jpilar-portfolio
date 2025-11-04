import CardButton from "@/components/CardButton";
import { Project } from "@prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

const ProjectLargerScreen = ({ projects }: { projects: Project[] }) => {
  const boxStyling = (index: number) => {
    if (index === 0 || index === 4) {
      return "row-span-2 h-full";
    } else {
      return "h-[150px]";
    }
  };

  const indexZeroAndFour = (index: number) => {
    return index === 0 || index === 4;
  };

  return (
    <Grid
      display={{ initial: "none", md: "grid" }}
      columns="repeat(3, 1fr)"
      gapX="3"
      gapY="3"
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          className={`relative group perspective w-full  ${boxStyling(index)}`}
        >
          <Box
            className={`absolute w-full h-full transition-transform duration-800 transform preserve-3d group-hover:rotate-y-180 hover:shadow-md hover:shadow-mandy/50`}
          >
            <Box className="absolute w-full h-full backface-hidden z-20 ">
              <Image
                src={project.image}
                width={500}
                height={100}
                alt=""
                className="h-full"
              />
            </Box>

            <Flex
              direction="column"
              pt={`${indexZeroAndFour(index) ? "9" : "3"}`}
              gapY={`${indexZeroAndFour(index) ? "4" : "1"}`}
              px="6"
              align="center"
              className="absolute w-full h-full  bg-martinique backface-hidden rotate-y-180 z-10 "
            >
              <h3>{project.title}</h3>
              <p className="">{project.description}</p>

              <Flex pt="2" gapX="3">
                <CardButton
                  githubLink={project.github}
                  domainLink={project.domain}
                />
              </Flex>
            </Flex>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ProjectLargerScreen;

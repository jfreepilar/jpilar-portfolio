"use client";

import RadixButton from "@/components/Button";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useNavigationInView } from "@/context/NavigationInViewProvider";

const AboutMe = () => {
  const { AboutMeRef } = useNavigationInView();
  return (
    <Section pt="0" id="about-me" ref={AboutMeRef}>
      <Grid
        columns={{ initial: "1", md: "2" }}
        width="full"
        gap={{ initial: "5", md: "none" }}
      >
        <Flex height="fit" direction="column" className="order-2 lg:order-1">
          <Heading
            as="h1"
            size={{ initial: "8", md: "9" }}
            weight="light"
            className="text-mandy text-center lg:text-start"
          >
            <Text
              as="span"
              size={{ initial: "6", md: "8" }}
              className="text-white "
            >
              {" "}
              HI! I'M
            </Text>{" "}
            JOEFFREY PILAR
          </Heading>

          <Heading as="h2" weight="regular">
            a FRONTEND DEVELOPER
          </Heading>

          <Box my="4">
            <Text as="p" size="2" weight="regular" className="text-white/50">
              I create dynamic, responsive web experiences that blend clean code
              with user-friendly design to bring ideas to life.
            </Text>
          </Box>
          <Container>
            <Flex
              className="gap-4"
              justify={{ initial: "center", md: "start" }}
            >
              <RadixButton text="Download Resume"></RadixButton>
              <RadixButton text="View Certificate"></RadixButton>
            </Flex>
          </Container>
        </Flex>
        <Container className="order-1 lg:order-2 mt-[-90px]">
          <Image
            src="/profile.png"
            alt="My profile picture"
            width={300}
            height={300}
            className="mx-auto"
          ></Image>
        </Container>
      </Grid>
    </Section>
  );
};

export default AboutMe;

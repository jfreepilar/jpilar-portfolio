import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React, { JSX } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const socialIcons: { link: string; icon: JSX.Element }[] = [
  {
    link: "https://www.linkedin.com/in/joeffrey-pilar-b31631269",
    icon: <GrLinkedin />,
  },
  {
    link: "https://profile.indeed.com/p/joeffreyp-xj21rt8",
    icon: <SiIndeed />,
  },
  { link: "https://github.com/jfreepilar", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <Container className="bg-charade h-32 border-t-1 border-t-white/10 py-6 px-2">
      <Flex justify="between" className="items-center">
        <Box>
          <Heading
            as="h1"
            className="mb-1! transition-all duration-500 ease-in-out"
            size={{ initial: "6", sm: "7" }}
          >
            Joeffrey Pilar
          </Heading>
          <Heading as="h3" className="transition-all duration-500 ease-in-out">
            Frontend Developer
          </Heading>
          <Flex>
            <Flex
              gap="1"
              className="items-center transition-all duration-500 ease-in-out"
            >
              <Text as="span" size="4" className="text-mandy">
                <AiOutlineMail />
              </Text>
              <Text
                as="p"
                className="items-center transition-all duration-500 ease-in-out"
              >
                pilarjoeffrey@gmail.com
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Flex gap="5">
          {socialIcons.map((socialIcon, index) => (
            <Link href={socialIcon.link} target="_blank" key={index}>
              <Text
                as="span"
                className="text-md md:text-xl transition-all duration-600 ease-in-out hover:text-mandy"
              >
                {socialIcon.icon}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;

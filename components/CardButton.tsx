"use client";

import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { IconType } from "react-icons";
import { IoLogoGithub } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";

interface CardButtonProp {
  githubLink: string;
  domainLink: string;
}

const buttonContent: { Icon: IconType; label: string }[] = [
  {
    Icon: IoLogoGithub,
    label: "GitHub",
  },
  {
    Icon: IoIosGlobe,
    label: "Domain",
  },
];

const CardButton = ({ githubLink, domainLink }: CardButtonProp) => {
  return (
    <>
      {buttonContent.map((content, index) => (
        <Link
          key={index}
          href={`${index === 0 ? githubLink : domainLink}`}
          target="_blank"
          rel="noopener noreferer"
        >
          <Flex className="border-1 border-white/40 group w-[120px]  md:w-[130px]">
            <Flex
              justify="center"
              align="center"
              className="px-4 text-md md:text-lg text-white/65 bg-mandy/90 group-hover:bg-mandy  transition duration-300 ease-in-out"
            >
              <content.Icon />
            </Flex>
            <Text as="p" className="py-1 px-4">
              {content.label}
            </Text>
          </Flex>
        </Link>
      ))}
    </>
  );
};

export default CardButton;

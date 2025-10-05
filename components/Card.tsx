"use client";

import { Box, Flex, Heading, Card as RadixCard, Text } from "@radix-ui/themes";
import RenderIcon from "./RenderIcon";

import Image from "next/image";
import LinkButton from "./LinkButton";

interface cardProps {
  icon?: string[];
  image?: string;
  alt?: string;
  title: string;
  description: string;
  github?: string;
  domain?: string;
  index: number;
}

const Card = ({
  icon,
  image,
  alt,
  title,
  description,
  github,
  domain,
  index,
}: cardProps) => {
  const isImage = image !== undefined;
  console.log(github, domain);

  return (
    <RadixCard
      key={index}
      variant="ghost"
      className={`bg-martinique p-0! rounded-none! ${
        isImage
          ? "h-[300px] md:h-[360px] rounded-t-lg!"
          : "h-[230px] md:h-[240px]"
      }`}
    >
      {isImage && (
        <Image
          src={image!}
          alt={alt!}
          width={500}
          height={100}
          className=" w-full mb-[-20px] h-[130px] md:h-[206px]"
        />
      )}

      <Flex direction="column" gapY="1" className="pt-8! px-8! pb-0!">
        {icon !== undefined && (
          <Flex gap="2">
            <RenderIcon iconFromDB={icon} />
          </Flex>
        )}

        <Heading as="h3" weight="bold">
          {title}
        </Heading>

        <Text
          as="p"
          className={`text-left! ${isImage ? "mt-[-12px]! md:mt-0!" : ""}`}
        >
          {description}
        </Text>

        {isImage && (
          <Flex direction={{ initial: "column", sm: "row" }} gapX="5" gap="2">
            <LinkButton githubLink={github!} domainLink={domain!} />
          </Flex>
        )}
      </Flex>
    </RadixCard>
  );
};

export default Card;

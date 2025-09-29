"use client";

import { Button as RadixButton } from "@radix-ui/themes";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <RadixButton
      variant="solid"
      size={{ initial: "2", md: "3" }}
      className="!bg-mandy !transition-all !duration-500 !ease-in-out hover:!bg-mandy/80 !cursor-pointer text-lg md:text-xl"
    >
      {text}
    </RadixButton>
  );
};

export default Button;

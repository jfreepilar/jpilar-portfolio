"use client";

import { Button as RadixButton } from "@radix-ui/themes";

interface Props {
  text: string;
  type: "button" | "submit";
  width?: string;
}

const Button = ({ text, type = "button", width }: Props) => {
  return (
    <RadixButton
      variant="solid"
      radius="none"
      type={type}
      size={{ initial: "2", md: "3" }}
      className={`!bg-mandy !transition-all !duration-500 !ease-in-out hover:!bg-mandy/80 !cursor-pointer text-lg md:text-xl ${width}`}
    >
      {text}
    </RadixButton>
  );
};

export default Button;

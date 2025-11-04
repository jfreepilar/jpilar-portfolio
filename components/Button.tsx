"use client";

import { Button as RadixButton } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  width?: string;
  href?: string;
  disabled?: boolean;
}

const CustomButton = ({
  text,
  icon,
  type = "button",
  width,
  href,
  disabled,
}: ButtonProps) => {
  const button = (
    <RadixButton
      variant="solid"
      radius="none"
      type={type}
      disabled={disabled}
      size={{ initial: "2", md: "3" }}
      className={`!bg-mandy !transition-all !duration-500 !ease-in-out hover:!bg-mandy/80 !cursor-pointer text-lg md:text-xl flex items-center justify-center gap-2 ${width}`}
    >
      {text}
      {icon}
    </RadixButton>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {button}
    </Link>
  ) : (
    button
  );
};

export default CustomButton;

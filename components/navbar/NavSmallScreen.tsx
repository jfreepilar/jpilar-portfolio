import { Button, Flex, Container } from "@radix-ui/themes";
import { IoMenuSharp } from "react-icons/io5";
import React from "react";
import { NAV_ITEMS } from "@/config/navItems";
import NavLink from "./NavLink";

interface NavSmallScreenProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavSmallScreen = ({ open, setOpen }: NavSmallScreenProps) => {
  return (
    <Flex className={`block! lg:!hidden relative`}>
      <Button
        aria-label="Toggle menu"
        className="cursor-pointer! bg-transparent"
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoMenuSharp className="text-3xl" />
      </Button>
      <Flex
        className={` bg-martinique p-3 w-42 rounded-lg shadow-md flex-col absolute top-9 right-0 gap-3 h-fit
              transition-all duration-300 ease-in-out
              ${
                open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <Container key={index} className="text-end">
            <NavLink href={navItem.href}>{navItem.label}</NavLink>
          </Container>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavSmallScreen;

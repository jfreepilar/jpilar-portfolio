"use client";

import { navItems } from "@/config/navItems";
import { Button, Container, Flex, Text } from "@radix-ui/themes";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const flexTransition = "transition-all duration-500 ease-in";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixed]);

  return (
    <nav
      className={`mb-5 h-12 p-3 bg-charade ${
        fixed ? "fixed w-full" : "relative"
      }`}
    >
      <Container className="max-w-6xl mx-auto">
        <Flex justify="between" className={`${flexTransition}`}>
          <Text className={`${flexTransition} ${fixed ? "pl-[200px]" : ""}`}>
            JOEFFREY PILAR
          </Text>

          <Flex
            justify="between"
            className={`hidden! lg:!flex ${flexTransition} ${
              fixed ? "pr-[200px] gap-10" : "gap-20"
            }`}
          >
            {navItems.map((navItem, index) => (
              <NavLink key={index} href={navItem.href}>
                {navItem.label}
              </NavLink>
            ))}
          </Flex>

          <Flex className={`block! lg:!hidden relative`}>
            <Button
              aria-label="Toggle menu"
              className="cursor-pointer!"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Menu className="ml-auto" />
            </Button>
            <Flex
              className={` bg-martinique p-3 w-42 rounded-lg shadow-md flex-col absolute top-7 right-0 gap-3 h-fit
              transition-all duration-300 ease-in-out
              ${
                open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {navItems.map((navItem, index) => (
                <Container key={index} className="text-end">
                  <NavLink href={navItem.href}>{navItem.label}</NavLink>
                </Container>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;

"use client";

import { Container, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import NavLargeScreen from "./NavLargeScreen";
import NavSmallScreen from "./NavSmallScreen";

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
    <Flex
      className={`mb-5 h-12 p-3 bg-charade z-10 border-b-1 border-b-white/10 items-center ${
        fixed ? "fixed w-full" : "relative"
      }`}
      id="about-me"
    >
      <Container className="max-w-6xl mx-auto">
        <Flex
          justify="between"
          className="transition-all duration-500 ease-in items-center"
        >
          <Text
            className={`"transition-all duration-500 ease-in" ${
              fixed ? "pl-0 lg:pl-[200px]" : ""
            }`}
          >
            JOEFFREY PILAR
          </Text>

          <NavLargeScreen fixed={fixed} />

          <NavSmallScreen open={open} setOpen={setOpen} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;

"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
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
      className={`mb-5 min-h-fit px-2 py-1 bg-charade z-10 border-b-1 border-b-white/10 items-center ${
        fixed ? "fixed w-full" : "relative"
      }`}
      id="about-me"
    >
      <Container className="max-w-6xl mx-auto">
        <Flex
          justify="between"
          className="transition-all duration-500 ease-in items-center"
        >
          <Box
            className={`"transition-all duration-500 ease-in" ${
              fixed ? "pl-0 lg:pl-[200px]" : ""
            }`}
          >
            <Image
              src="/my-logo.png"
              alt="Website logo"
              width="50"
              height="50"
              className="lg:w-[60px] lg:h-[60px]"
            />
          </Box>

          <NavLargeScreen fixed={fixed} />

          <NavSmallScreen open={open} setOpen={setOpen} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;

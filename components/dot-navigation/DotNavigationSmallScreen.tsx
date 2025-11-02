import { Box, Flex } from "@radix-ui/themes";
import { DotNavigationProps } from "./DotNavigationBigScreen";

const DotNavigationSmallScreen = ({
  ACTIVE_SECTIONS,
  activeSection,
}: DotNavigationProps) => {
  return (
    <Flex direction="column" display={{ initial: "flex", lg: "none" }}>
      {ACTIVE_SECTIONS.map((item, index) => (
        <Box key={index}>
          <Box
            className={`w-3 h-3 mb-3 rounded-full border-1 border-mandy/50 transition-all duration-300 ease-in-out ${
              activeSection === item ? "bg-mandy/50" : ""
            }`}
          ></Box>
        </Box>
      ))}
    </Flex>
  );
};

export default DotNavigationSmallScreen;

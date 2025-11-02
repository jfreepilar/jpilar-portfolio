import { Box, Flex } from "@radix-ui/themes";

export interface DotNavigationProps {
  ACTIVE_SECTIONS: string[];
  activeSection: string;
}

const DotNavigationBigScreen = ({
  ACTIVE_SECTIONS,
  activeSection,
}: DotNavigationProps) => {
  return (
    <Flex direction="column" display={{ initial: "none", lg: "flex" }}>
      {ACTIVE_SECTIONS.map((item, index) => (
        <Box key={index}>
          <Box
            className={`w-5 h-5 rounded-full border-1 border-mandy transition-all duration-300 ease-in-out ${
              activeSection === item ? "bg-mandy" : ""
            }`}
          ></Box>
          {index !== 3 && (
            <Box className="w-0 h-12 border-1  border-mandy/20 mx-auto"></Box>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default DotNavigationBigScreen;

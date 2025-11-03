import { NAV_ITEMS } from "@/config/navItems";
import { Flex } from "@radix-ui/themes";
import NavLink from "./NavLink";

const NavLargeScreen = ({ fixed }: { fixed: boolean }) => {
  return (
    <Flex
      justify="between"
      className={`hidden! lg:!flex transition-all duration-500 ease-in ${
        fixed ? "pr-[200px] gap-10" : "gap-20"
      }`}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <NavLink key={index} href={navItem.href}>
          {navItem.label}
        </NavLink>
      ))}
    </Flex>
  );
};

export default NavLargeScreen;

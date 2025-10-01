import { IconType } from "react-icons";
import { Text } from "@radix-ui/themes";
import { IoLogoGithub } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRadixui } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { GiSkills } from "react-icons/gi";

type RenderIconProps = {
  iconFromDB?: string | string[];
};

const iconMapping: { [key: string]: IconType } = {
  IoLogoGithub: IoLogoGithub,
  SiTypescript: SiTypescript,
  FaReact: FaReact,
  RiNextjsLine: RiNextjsLine,
  RiTailwindCssFill: RiTailwindCssFill,
  SiRadixui: SiRadixui,
  SiCanva: SiCanva,
  GiSkills: GiSkills,
};

const RenderIcon: React.FC<RenderIconProps> = ({ iconFromDB }) => {
  if (!iconFromDB || iconFromDB.length === 0) return null;

  const iconsArray = Array.isArray(iconFromDB) ? iconFromDB : [iconFromDB];

  const icons = iconsArray.map((item) => iconMapping[item]).filter(Boolean);

  if (icons.length === 0) return null;

  return (
    <>
      {icons.map((Icon, index) => (
        <Text as="span" key={index}>
          <Icon className="text-3xl text-mandy" />
        </Text>
      ))}
    </>
  );
};

export default RenderIcon;

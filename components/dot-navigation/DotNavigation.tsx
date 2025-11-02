"use client";

import { ACTIVE_SECTIONS } from "@/config/navigation";
import { useNavigationInView } from "@/context/NavigationInViewProvider";
import DotNavigationBigScreen from "./DotNavigationBigScreen";
import DotNavigationSmallScreen from "./DotNavigationSmallScreen";

const DotNavigation = () => {
  const { AboutMeInView, SkillInView, ProjectInView, ContactInView } =
    useNavigationInView();

  const getActiveSections = () => {
    if (AboutMeInView) return "about-me";
    if (SkillInView) return "skill";
    if (ProjectInView) return "project";
    if (ContactInView) return "contact";
    return "about-me";
  };

  const activeSection = getActiveSections();

  return (
    <>
      <DotNavigationBigScreen
        ACTIVE_SECTIONS={ACTIVE_SECTIONS}
        activeSection={activeSection}
      />
      <DotNavigationSmallScreen
        ACTIVE_SECTIONS={ACTIVE_SECTIONS}
        activeSection={activeSection}
      />
    </>
  );
};

export default DotNavigation;

"use client";

import { createContext, useContext } from "react";
import { useInView } from "react-intersection-observer";

type NavigationInViewContextType = {
  AboutMeRef: (node?: Element | null) => void;
  AboutMeInView: boolean;
  SkillRef: (node?: Element | null) => void;
  SkillInView: boolean;
  ProjectRef: (node?: Element | null) => void;
  ProjectInView: boolean;
  ContactRef: (node?: Element | null) => void;
  ContactInView: boolean;
};

export const NavigationInViewContext =
  createContext<NavigationInViewContextType | null>(null);

export const NavigationInViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref: AboutMeRef, inView: AboutMeInView } = useInView({
    threshold: 0.0,
  });
  const { ref: SkillRef, inView: SkillInView } = useInView({ threshold: 0.2 });
  const { ref: ProjectRef, inView: ProjectInView } = useInView({
    threshold: 0.2,
  });
  const { ref: ContactRef, inView: ContactInView } = useInView({
    threshold: 0.2,
  });

  return (
    <NavigationInViewContext.Provider
      value={{
        AboutMeRef,
        AboutMeInView,
        SkillRef,
        SkillInView,
        ProjectRef,
        ProjectInView,
        ContactRef,
        ContactInView,
      }}
    >
      {children}
    </NavigationInViewContext.Provider>
  );
};

export const useNavigationInView = () => {
  const context = useContext(NavigationInViewContext);
  if (!context) {
    throw new Error(
      "useNavigationInView must be used within a NavigationInViewProvider"
    );
  }
  return context;
};

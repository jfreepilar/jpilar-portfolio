import AboutMe from "@/sections/AboutMe";
import ConnectWithMe from "@/sections/ConnectWithMe";
import ProjectSection from "@/sections/project/ProjectSection";
import SkillSection from "@/sections/skill/SkillClient";
import { Section } from "@radix-ui/themes";

export default async function Home() {
  return (
    <Section>
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ConnectWithMe />
    </Section>
  );
}

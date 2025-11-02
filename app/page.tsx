import AboutMe from "@/sections/AboutMe";
import ConnectWithMe from "@/sections/ConnectWithMe";
import Project from "@/sections/project/Project";
import SkillSection from "@/sections/skill/Skill";
import { Section } from "@radix-ui/themes";

export default async function Home() {
  return (
    <Section>
      <AboutMe />
      <SkillSection />
      <Project />
      <ConnectWithMe />
    </Section>
  );
}

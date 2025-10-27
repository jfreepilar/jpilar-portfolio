import AboutMe from "@/sections/AboutMe";
import ConnectWithMe from "@/sections/ConnectWithMe";
import Project from "@/sections/project/Project";
import Skill from "@/sections/Skill";
import { Section } from "@radix-ui/themes";

export default async function Home() {
  return (
    <Section>
      <AboutMe />
      <Skill />
      <Project />
      <ConnectWithMe />
    </Section>
  );
}

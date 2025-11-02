import { prisma } from "@/prisma/client";
import SkillClient from "./SkillClient";

const Skill = async () => {
  const skills = await prisma.skill.findMany();
  return (
    <>
      <SkillClient skills={skills} />
    </>
  );
};

export default Skill;

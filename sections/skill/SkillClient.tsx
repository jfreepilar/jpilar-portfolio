import { prisma } from "@/prisma/client";
import SkillClient from "./SkillSection";

const SkillSection = async () => {
  const skills = await prisma.skill.findMany();
  return (
    <>
      <SkillClient skills={skills} />
    </>
  );
};

export default SkillSection;

import Block from "../components/Block";
import SectionHeader from "../components/SectionHeader";
import { Skills } from "@/lib/constants";
import SkillList from "../components/SkillList";

export default function SkillPage() {
  return (
    <div className="">
      <SectionHeader title="my Skills" />
      <Block>
        <div className="grid gap-4 md:grid-cols-2">
          {Skills.map((skill) => (
            <SkillList key={skill.title} skill={skill} />
          ))}
        </div>
      </Block>
    </div>
  );
}

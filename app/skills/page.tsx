import Block from "../components/Block";
import SectionHeader from "../components/SectionHeader";
import { Skills } from "@/lib/constants";
import { AiFillCheckCircle } from "react-icons/ai";

export default function SkillPage() {
  return (
    <div className="">
      <SectionHeader title="my Skills" />
      <Block>
        <div className="grid gap-4 md:grid-cols-2">
          {Skills.map((skill) => (
            <Block
              key={skill.title}
              className="grid items-start justify-start gap-2"
            >
              <Block className="p-2 text-xl font-bold text-blue-400">
                {skill.title}
              </Block>

              <div className="grid items-start justify-start gap-2 md:grid-cols-2">
                {skill?.skills.map((skill) => (
                  <Block
                    key={skill.title}
                    className="flex items-center gap-2 p-2"
                  >
                    <AiFillCheckCircle className="size-4" />
                    <span>{skill.title}</span>
                  </Block>
                ))}
              </div>
            </Block>
          ))}
        </div>
      </Block>
    </div>
  );
}

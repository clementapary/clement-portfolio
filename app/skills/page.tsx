import { CirclePlay } from "lucide-react";
import Block from "../components/Block";
import SectionHeader from "../components/SectionHeader";
import { Skills } from "@/lib/constants";

export default function SkillPage() {
  return (
    <div className="">
      <SectionHeader title="my Skills" />
      <Block>
        <div className="grid gap-4">
          {Skills.map((skill) => (
            <Block key={skill.title} className="space-y-4">
              <h1 className="text-2xl font-bold">{skill.title}</h1>
              {/* <p>{skill.body}</p> */}
              <div className="grid gap-4 md:grid-cols-2">
                {skill.skills.map((skill) => (
                  <Block key={skill.title} className="flex gap-1">
                    <CirclePlay /> {skill.title}
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

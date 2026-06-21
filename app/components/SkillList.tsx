import { AiFillCheckCircle } from "react-icons/ai";
import Block from "./Block";

export default function SkillList({ skill }) {
  return (
    <Block key={skill.title} className="grid items-start justify-start gap-2">
      <Block className="p-2 text-xl font-bold text-blue-400">
        {skill.title}
      </Block>
      <p className="p-2 text-base text-zinc-200">{skill.body}</p>
      <div className="grid items-start justify-start gap-2 md:grid-cols-2">
        {skill?.skills.map((skill) => (
          <Block key={skill.title} className="flex items-center gap-2 p-2">
            <AiFillCheckCircle className="size-4" />
            <span>{skill.title}</span>
          </Block>
        ))}
      </div>
    </Block>
  );
}

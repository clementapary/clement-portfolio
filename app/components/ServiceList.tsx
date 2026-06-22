import Block from "./Block";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ServiceList() {
  return (
    <Block className="grid items-start justify-start gap-2">
      <Block className="p-2 text-xl font-bold text-blue-400">title</Block>
      <p className="p-2 text-base text-zinc-200">body</p>

      <Block className="flex items-center gap-2 p-2">
        <AiFillCheckCircle className="size-4" />
        <span>title</span>
      </Block>
    </Block>
  );
}

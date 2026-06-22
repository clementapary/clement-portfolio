import Block from "./Block";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ServiceList({ service }: { service: any }) {
  return (
    <Block key={service.title} className="grid items-start justify-start gap-2">
      <Block className="p-2 text-xl font-bold text-blue-400">
        {service.title}
      </Block>
      <p className="p-2 text-base text-zinc-200">{service.body}</p>
      {service?.services.map((service) => (
        <Block key={service.title} className="flex items-center gap-2 p-2">
          <AiFillCheckCircle className="size-4" />
          <span>{service.title}</span>
        </Block>
      ))}
    </Block>
  );
}

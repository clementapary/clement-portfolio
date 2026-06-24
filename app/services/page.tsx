import Block from "../components/Block";
import SectionHeader from "../components/SectionHeader";
import { Services } from "@/lib/constants";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ServicePage() {
  return (
    <div className="">
      <SectionHeader title="My Services" />
      <Block className="grid items-center justify-center gap-4">
        <div className="grid gap-2 md:grid-cols-3">
          {Services.map((service) => (
            <Block
              key={service.title}
              className="grid items-start justify-start gap-2"
            >
              <Block className="p-2 text-xl font-bold text-blue-400">
                {service.title}
              </Block>
              <p className="items-start p-2 text-base text-zinc-200">
                {service.body}
              </p>
              {service.services.map((service) => (
                <Block
                  key={service.title}
                  className="flex items-center gap-2 p-2"
                >
                  <AiFillCheckCircle className="size-4" />
                  <span>{service.title} </span>
                </Block>
              ))}
            </Block>
          ))}
        </div>
      </Block>
    </div>
  );
}

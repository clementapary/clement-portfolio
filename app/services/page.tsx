import Block from "../components/Block";
import SectionHeader from "../components/SectionHeader";
import { Services } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function ServicePage() {
  return (
    <div className="">
      <SectionHeader title="My Services" />
      <Block className="grid items-center justify-center gap-4">
        {Services.map((service) => (
          <Block key={service.title} className="space-y-4">
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p>{service.body}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {service.services.map((service) => (
                <Block key={service.title} className="flex gap-1">
                  <CheckCircle /> {service.title}
                </Block>
              ))}
            </div>
          </Block>
        ))}
      </Block>
    </div>
  );
}

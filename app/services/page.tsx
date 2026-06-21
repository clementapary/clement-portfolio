import Block from "../components/Block";
import ServiceList from "../components/ServiceList";

import SectionHeader from "../components/SectionHeader";
import { Services } from "@/lib/constants";

export default function ServicePage() {
  return (
    <div className="">
      <SectionHeader title="My Services" />
      <Block className="grid items-center justify-center gap-4">
        <div className="grid gap-2 md:grid-cols-3">
          {Services.map((service) => (
            <ServiceList key={service.title} service={service} />
          ))}
        </div>
      </Block>
    </div>
  );
}

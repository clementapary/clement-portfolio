import SectionHeader from "../components/SectionHeader";
import Block from "../components/Block";

import { Navigation, Toolbox, Trophy } from "lucide-react";

export default function ExperincePage() {
  return (
    <div className="">
      <SectionHeader title="My Experinces" />

      <div className="grid gap-4 md:grid-cols-2">
        <Block className="space-y-4">
          <Toolbox className="size-10" />
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold">IT & Web Development</h1>
            <p className="text-lg font-thin">
              Experienced in developing websites, applications, and digital
              solutions using modern technologies.
            </p>
            <ul>
              <li className="flex items-center gap-2">
                <Navigation />
                Web technologies
              </li>
              <li className="flex items-center gap-2">
                <Navigation />
                Database systems
              </li>
              <li className="flex items-center gap-2">
                <Navigation />
                Graphic design tools
              </li>
              <li className="flex items-center gap-2">
                <Navigation />
                IT support solutions
              </li>
            </ul>
          </div>
        </Block>

        <Block className="space-y-4">
          <Trophy className="size-10" />
          <h1 className="text-2xl font-bold">Why working with me?</h1>
          <div className="">
            <div className="flex items-center gap-2">
              <Navigation />
              Professional and creative solutions
            </div>
            <div className="flex items-center gap-2">
              <Navigation />
              Modern technology approach
            </div>
            <div className="flex items-center gap-2">
              <Navigation />
              User-focused designs
            </div>
            <div className="flex items-center gap-2">
              <Navigation />
              Redivable freelance support
            </div>
            <div className="flex items-center gap-2">
              <Navigation />
              Passion for quadivty work
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}

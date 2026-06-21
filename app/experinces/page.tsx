import SectionHeader from "../components/SectionHeader";
import Block from "../components/Block";
import { AiFillTool, AiFillTrophy } from "react-icons/ai";

export default function ExperincePage() {
  return (
    <div className="">
      <SectionHeader title="My Experinces" />
      <Block className="grid items-center justify-center gap-4 md:grid-cols-2">
        <AiFillTool className="size-68" />
        <div className="grid gap-2">
          <h1>IT & Web Development</h1>
          <p>
            Experienced in developing websites, applications, and digital
            solutions using modern technologies.
          </p>
          <ul>
            <li>Web technologies</li>
            <li>Database systems</li>
            <li>Graphic design tools</li>
            <li>IT support solutions</li>
          </ul>
        </div>
      </Block>
      <SectionHeader title="Why Work With Me?" />
      <Block className="grid items-center justify-center gap-4 md:order-last md:grid-cols-2">
        <AiFillTrophy className="size-68" />
        <div className="">
          <div>Professional and creative solutions</div>
          <div>Modern technology approach</div>
          <div>User-focused designs</div>
          <div>Redivable freelance support</div>
          <div>Passion for quadivty work</div>
        </div>
      </Block>
    </div>
  );
}

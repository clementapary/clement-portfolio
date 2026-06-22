import { LinkItems } from "@/lib/constants";

export default function NavMobile() {
  return (
    <nav className="absolute top-16 left-0">
      <ul className="">
        {LinkItems.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

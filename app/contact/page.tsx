import Profile from "@/public/img/cartoon-man-wearing-glasses_23-2151136880.jpg";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Block from "../components/Block";

export default function ContactPage() {
  return (
    <div>
      <SectionHeader title="Contact me" />
      <Block className="grid items-center justify-center gap-4 md:grid-cols-2">
        <div className="">
          <Image
            src={Profile}
            alt="hero"
            className="w-full rounded-lg object-center"
          />
        </div>
        <div className="space-y-4">
          <div className="grid items-center justify-center gap-4">
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Block>
    </div>
  );
}

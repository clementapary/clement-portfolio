import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function SocialIcon() {
  return (
    <div className="flex items-center justify-center gap-4">
      <AiFillFacebook className="size-8" />
      <AiFillInstagram className="size-8" />
      <AiFillYoutube className="size-8" />
      <AiFillGithub className="size-8" />
      <AiFillLinkedin className="size-8" />
      <AiFillGoogleCircle className="size-8" />
    </div>
  );
}

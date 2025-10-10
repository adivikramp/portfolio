import type { NavButtonProps } from "@/types/types";
import { Link } from "react-router";

const NavButton = ({ id, title, link }: NavButtonProps) => {
  return (
    <Link
      id={id.toString()}
      to={link}
      className="uppercase px-4 py-2 text-md font-bold text-white border-2 border-white rounded-full cursor-pointer duration-200 transition-all hover:scale-110"
    >
      {title}
    </Link>
  );
};

export default NavButton;

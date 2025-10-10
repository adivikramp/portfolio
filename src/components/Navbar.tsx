import { Link } from "react-router";
import NavButton from "./NavButton";
import { navButtons } from "@/data/navButtons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-2 backdrop-blur-2xl">
      <div>
        <Link
          to="/"
          className="uppercase font-bold text-[60px] text-[#bfff00] font-dancingScript"
        >
          {"<Aditya />"}
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {navButtons.map(({ id, title, link }) => (
          <NavButton key={id} id={id} title={title} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

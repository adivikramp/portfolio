import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbarAndRedirect = () => {
    showNavbar();
  };

  return (
    <header className="fixed bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="md:flex-col">
        <img
          src="/images/profile.jpg"
          className="h-48 w-48 hidden lg:flex rounded-full border-solid border-4 border-slate-800"
        />
        <h3 className="hidden lg:flex lg:text-center lg:text-2xl font-bold tracking-wide my-2">
          Aditya Vikram Singh
        </h3>
      </div>
      <nav ref={navRef}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          onClick={closeNavbarAndRedirect}
          className="my-2 lg:text-lg tracking-wide cursor-pointer duration-500 hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          onClick={closeNavbarAndRedirect}
          className="my-2 lg:text-lg tracking-wide cursor-pointer duration-500 hover:scale-110"
        >
          About Me
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          onClick={closeNavbarAndRedirect}
          className="my-2 lg:text-lg tracking-wide cursor-pointer duration-500 hover:scale-110"
        >
          Participation
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          onClick={closeNavbarAndRedirect}
          className="my-2 lg:text-lg tracking-wide cursor-pointer duration-500 hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          onClick={closeNavbarAndRedirect}
          className="my-2 lg:text-lg tracking-wide cursor-pointer duration-500 hover:scale-110"
        >
          Contact
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="flex justify-evenly w-full">
        <Link href="https://www.instagram.com/Linkditya_vikram24/">
          <i className="fa-brands fa-instagram text-2xl" />
        </Link>
        <Link href="https://github.com/Linkdivikramp">
          <i className="fa-brands fa-github text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/Linkdivikramp">
          <i className="fa-brands fa-linkedin text-2xl" />
        </Link>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

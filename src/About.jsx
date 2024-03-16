import { useEffect } from "react";
import Wave from "react-wavify";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="h-auto flex w-full" id="about">
      <div className="w-0 lg:w-1/5" />
      <div className="w-full lg:w-4/5 bg-[#212529] text-white h-full flex-col">
        <div className="relative">
          <Wave
            className="absolute left-0 bottom-0"
            fill="#212529"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 80,
              amplitude: 20,
              speed: 0.25,
              points: 5,
            }}
          />
        </div>
        <div className="w-full text-center mt-20 mb-8">
          <p
            className="text-4xl lg:text-7xl font-bold underline underline-offset-[1rem] decoration-2 decoration-teal-500"
            data-aos="slide-up"
          >
            About Me
          </p>
        </div>
        <div className="flex flex-col w-full p-8" data-aos="slide-up">
          <h1 className="text-3xl lg:text-4xl my-4 font-bold">
            I am <span className="text-teal-500">Aditya Vikram Singh</span>, a
            Frontend Developer
          </h1>
          <div className="text-xl text-gray-400">
            <p className="my-2">
              I am an emerging frontend developer with a passion for creating
              captivating digital experiences. While I may be new to the field,
              my dedication to honing my craft and bringing ideas to life knows
              no bounds. Through various projects, I have demonstrated my knack
              for turning concepts into polished, user-friendly interfaces.
            </p>
            <p className="my-4">
              Driven by curiosity and creativity, I am constantly exploring new
              technologies and design trends to stay ahead of the curve. Join me
              on my journey as I continue to learn, grow, and make my mark in
              the exciting world of frontend development.
            </p>
          </div>
          <div className="hidden lg:w-full lg:flex justify-evenly mt-16" data-aos="slide-up">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-people-group text-6xl" />
              <p className="mt-4 text-xl">Team Player</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-clock text-6xl" />
              <p className="mt-4 text-xl">Punctual</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-regular fa-handshake text-6xl" />
              <p className="mt-4 text-xl">Cooperative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

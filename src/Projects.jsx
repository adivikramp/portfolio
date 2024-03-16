import { useEffect } from "react";
import projects from "./data/projects.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="h-auto flex w-full" id="projects">
      <div className="w-0 lg:w-1/5"></div>
      <div className="w-full lg:w-4/5 bg-[#212529] text-white flex-col">
        <div className="flex justify-center w-full text-center mt-20 mb-8">
          <p className="text-4xl lg:text-7xl font-bold underline underline-offset-[1rem] decoration-2 decoration-teal-500" data-aos="fade-up">
            Projects
          </p>
        </div>

        <div className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-xl lg:text-3xl italic" data-aos="fade-up">
            Projects to showcase my skills
          </h2>

          <div className="w-full flex flex-wrap justify-evenly">
            {projects.map((item) => (
              <>
                <div className="w-full flex flex-col lg:flex-row mx-12 my-4 rounded-2xl bg-[#111418]" data-aos="fade-up">
                  <div
                    className="w-full lg:w-1/4 flex text-center overflow-hidden"
                    title={item.title}
                  >
                    <a
                      href={item.link}
                      className="relative block group"
                      target="_blank"
                    >
                      <img
                        src={item.img}
                        className="h-full w-full bg-cover bg-center rounded-tr-2xl rounded-tl-2xl lg:rounded-bl-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <span className="text-white text-lg font-bold">
                          Open on GitHub
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="w-full lg:w-3/4 p-4 flex flex-col justify-between text-white rounded-tr-2xl rounded-br-2xl">
                    <p className="font-bold text-xl mb-2">{item.title}</p>
                    <p className="text-gray-400 tracking-wide">{item.desc}</p>
                    <div className="pt-4 pb-2">
                      {item.tech.map((item) => (
                        <>
                          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #{item}
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

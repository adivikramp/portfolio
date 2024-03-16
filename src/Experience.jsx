import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar, FaClipboard } from "react-icons/fa";
import hackathons from "./data/hackathons.json";
import internships from "./data/internships.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="h-auto flex w-full" id="experience">
      <div className="w-0 lg:w-1/5"></div>
      <div className="w-full lg:w-4/5 bg-[#343a40] text-white h-full flex-col">
        <div className="w-full text-center mt-20 mb-8">
          <p className="text-4xl lg:text-7xl font-bold underline underline-offset-[1rem] decoration-2 decoration-teal-500" data-aos="zoom-in">
            Participation
          </p>
          <h2 className="mt-8 text-center text-xl lg:text-3xl italic" data-aos="zoom-in">
            How i have spent my time
          </h2>
        </div>
        <div>
          <div className="w-full text-center mt-20 mb-8">
            <p className="text-2xl lg:text-4xl text-white uppercase underline underline-offset-[1rem] decoration-2 decoration-teal-500" data-aos="zoom-in">
              Internship
            </p>
          </div>
          <div className="w-full">
            <VerticalTimeline layout="1-column-left">
              {internships.map((item) => (
                <>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#111418",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #111418",
                    }}
                    date={item.date}
                    iconStyle={{ background: "#111418", color: "#fff" }}
                    icon={<FaClipboard />}
                  >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.company}
                    </h4>
                    <p>{item.tasks}</p>
                  </VerticalTimelineElement>
                </>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <div>
          <div className="w-full text-center mt-20 mb-8">
            <p className="text-2xl lg:text-4xl text-white uppercase underline underline-offset-[1rem] decoration-2 decoration-teal-500">
              Hackathons
            </p>
          </div>
          <div className="w-full">
            <VerticalTimeline>
              {hackathons.map((item) => (
                <>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#111418",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #111418",
                    }}
                    iconStyle={{ background: "#111418", color: "#fff" }}
                    icon={<FaStar />}
                  >
                    <h3 className="vertical-timeline-element-title font-bold tracking-wide text-2xl">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.hosted}
                    </h4>
                    <p>{item.result}</p>
                  </VerticalTimelineElement>
                </>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

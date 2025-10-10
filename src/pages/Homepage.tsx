import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import HeroSection from "@/sections/HeroSection";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Homepage = () => {
  const contentRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".sticky", {
        scrollTrigger: {
          trigger: ".sticky",
          start: "top top",
          end: () =>
            "+=" +
            (window.innerHeight + contentRef.current!.offsetHeight * 0.5),
          scrub: 1,
          pin: true,
        },
        y: 250,
        scale: 0.75,
        rotation: -15,
        ease: "power3.out",
      });

      gsap.fromTo(
        contentRef.current,
        { x: -100, scale: 0.3, rotation: 15 },
        {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 200%",
            end: "top 50%",
            scrub: 1,
          },
          x: 0,
          scale: 1,
          rotation: 0,
          ease: "power3.out",
        }
      );
    },
    { scope: contentRef }
  );

  return (
    <PageWrapper>
      <Loading />
      <Navbar />
      <HeroSection />
      <section
        className="absolute top-[100vh] w-full min-h-[200vh] bg-[#252525] p-24 px-8"
        ref={contentRef}
      >
        <div className="w-full flex justify-between mb-24">
          <h1 className="leading-[60%] text-[10vw] font-normal text-white uppercase">
            Projects
          </h1>
          <p className="text-white text-md uppercase text-right w-1/4">
            Projects to showcase my skills that I have worked on - Personal and
            during work.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8 my-8 max-md:flex-col">
            <img
              src="/images/projects/bloggy.jpg"
              className="col-span-1 h-[600px] w-full object-cover"
            />
            <img
              src="/images/projects/cryptoworld.png"
              className="col-span-1 h-[600px] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 my-8 max-md:flex-col">
            <img
              src="/images/projects/huly-clone.png"
              className="col-span-1 h-[600px] w-full object-cover"
            />
            <img
              src="/images/projects/library.jpg"
              className="col-span-1 h-[600px] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 my-8 max-md:flex-col">
            <img
              src="/images/projects/nursery.jpg"
              className="col-span-1 h-[600px] w-full object-cover"
            />
            <img
              src="/images/projects/wild-oasis.png"
              className="col-span-1 h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Homepage;

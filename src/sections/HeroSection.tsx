import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const emojiRef = useRef<HTMLDivElement | null>(null);
  const emojiFaceRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context, contextSafe) => {
      if (!contentRef.current) return;

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

      const wrapper = wrapperRef.current;
      const emoji = emojiRef.current;
      const emojiFace = emojiFaceRef.current;

      if (!wrapper || !emoji || !emojiFace || !contextSafe) return;

      const moveEvent = contextSafe((e: MouseEvent) => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
        const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

        const emojiMaxDisplacement = 50;
        const emojiFaceMaxDisplacement = 75;

        const emojiDisplacementX =
          (relX / wrapperRect.width) * emojiMaxDisplacement;
        const emojiDisplacementY =
          (relY / wrapperRect.height) * emojiMaxDisplacement;
        const emojiFaceDisplacementX =
          (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
        const emojiFaceDisplacementY =
          (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

        gsap.to(emoji, {
          x: emojiDisplacementX,
          y: emojiDisplacementY,
          ease: "power3.out",
          duration: 0.35,
        });

        gsap.to(emojiFace, {
          x: emojiFaceDisplacementX,
          y: emojiFaceDisplacementY,
          ease: "power3.out",
          duration: 0.35,
        });
      });

      const leaveEvent = contextSafe(() => {
        gsap.to([emoji, emojiFace], {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 1,
        });
      });

      wrapper.addEventListener("mousemove", moveEvent);
      wrapper.addEventListener("mouseleave", leaveEvent);

      return () => {
        wrapper.removeEventListener("mousemove", moveEvent);
        wrapper.removeEventListener("mouseleave", leaveEvent);
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="w-full h-full bg-black" ref={containerRef}>
      {/* Sticky Section */}
      <section className="fixed top-0 left-0 w-screen h-screen bg-[#5546ff]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="uppercase text-[20vw] font-normal text-white text-center">
            LOOK
          </h1>
        </div>

        <div
          className="tracker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full py-8"
          ref={wrapperRef}
        >
          <div
            className="emoji absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[url('/images/animations/sphere.png')] bg-no-repeat bg-center bg-cover rounded-full"
            ref={emojiRef}
          >
            <div
              className="emoji-face absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] h-[200px] flex flex-col"
              ref={emojiFaceRef}
            >
              <div className="eyes flex justify-between flex-1">
                <img
                  src="/images/animations/eye.png"
                  alt=""
                  className="w-[100px] h-[100px] animate-rotateEyes"
                />
                <img
                  src="/images/animations/eye.png"
                  alt=""
                  className="w-[100px] h-[100px] animate-rotateEyes"
                />
              </div>
              <div className="mouth-wrapper flex justify-center items-start flex-1">
                <div className="mouth w-10 h-10 rounded-full bg-black animate-wonderFace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Content */}
      <section
        className="absolute top-[100vh] w-full min-h-[200vh] bg-[#252525] p-24 px-8"
        ref={contentRef}
      >
        <div className="w-full flex justify-between mb-8">
          <h1 className="text-[10vw] font-normal text-white leading-[100%] uppercase">
            Projects
          </h1>
          <p className="text-white text-[13px] uppercase text-right w-1/4">
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
    </div>
  );
};

export default HeroSection;

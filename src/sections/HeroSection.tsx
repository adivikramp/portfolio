import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const emojiRef = useRef<HTMLDivElement | null>(null);
  const emojiFaceRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const emoji = emojiRef.current;
      const emojiFace = emojiFaceRef.current;

      if (!wrapper || !emoji || !emojiFace) return;

      const moveEvent = (e: MouseEvent) => {
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
      };

      const leaveEvent = () => {
        gsap.to([emoji, emojiFace], {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 1,
        });
      };

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
      <section className="fixed top-0 left-0 w-screen h-screen bg-[#5546ff]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="uppercase text-[20vw] font-normal text-white text-center">
            LOOK
          </h1>
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full py-8"
          ref={wrapperRef}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[url('/images/animations/sphere.png')] bg-no-repeat bg-center bg-cover rounded-full"
            ref={emojiRef}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] h-[200px] flex flex-col"
              ref={emojiFaceRef}
            >
              <div className="flex justify-between flex-1">
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
              <div className="flex justify-center items-start flex-1">
                <div className="w-10 h-10 rounded-full bg-black animate-wonderFace" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

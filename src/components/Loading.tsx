import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loading = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    function startLoader() {
      function updateCounter() {
        if (currentValue < 100) {
          const increment = Math.floor(Math.random() * 10) + 1;
          setCurrentValue((cur) => Math.min(cur + increment, 100));
          const delay = Math.floor(Math.random() * 200) + 25;
          setTimeout(updateCounter, delay);
        }
      }
      updateCounter();
    }
    startLoader();
  }, []);

  useGSAP(
    () => {
      gsap.to(".count", {
        opacity: 0,
        delay: 3.5,
        duration: 0.5,
      });

      gsap.fromTo(
        ".ml16 .letter",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5,
          stagger: 0.05,
          onComplete: () => {
            gsap.to(".loaderContent", { opacity: 0, duration: 0.5 });
          },
        }
      );

      // Main loader animations
      gsap.to(".preLoader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3,
      });

      gsap.to(".loader", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75,
      });

      gsap.to(".loaderBg", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
      });

      gsap.to(".loader2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
      });

      gsap.to(".header h1", {
        y: 200,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
        stagger: 0.05,
      });

      gsap.to(".img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
        stagger: 0.25,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="h-[100vh] w-full overflow-hidden" ref={containerRef}>
      {/* Preloader Section */}
      <div
        className="preLoader fixed top-0 w-full h-full z-10"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="loader absolute top-0 w-full h-full bg-black text-white flex justify-center items-center"></div>
        <div className="loaderBg absolute block top-0 w-full h-full bg-red-500 -z-1"></div>

        {/* Loader Content - Will be removed after animation */}
        <div className="loaderContent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[400px] z-2 text-white">
          <div className="count flex-2 text-right leading-1 py-0 px-[1em]">
            <p>{currentValue}</p>
          </div>
          <div className="copy flex-6 text-[30px] uppercase leading-1 overflow-visible">
            <p className="ml16">
              {["W", "e", "l", "c", "o", "m", "e"].map((letter, i) => (
                <span key={i} className="letter inline-block opacity-0">
                  {letter}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Background Image - Will animate out */}
      <div
        className="loader2 fixed top-0 w-full h-full -z-1"
        style={{
          background:
            "url('/images/landingPageRevealAnimation/bg-hero-1.jpg') no-repeat 50% 50%",
          backgroundSize: "cover",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Main Site Content */}
      {children}
    </div>
  );
};

export default Loading;

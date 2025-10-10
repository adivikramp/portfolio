import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loading = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentValue, setCurrentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(
    () => sessionStorage.getItem("hasLoaded") !== "true"
  );

  useEffect(() => {
    if (!isLoading) return;

    document.body.style.overflow = "hidden";

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
  }, [isLoading]);

  useGSAP(
    () => {
      if (!isLoading) return;

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
        onComplete: () => {
          document.body.style.overflow = "auto";
          sessionStorage.setItem("hasLoaded", "true");
          setIsLoading(false);
        },
      });
    },
    { scope: containerRef }
  );

  if (!isLoading) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[9999] overflow-hidden"
      ref={containerRef}
    >
      {/* Preloader Section */}
      {isLoading && (
        <>
          <div
            className="preLoader fixed top-0 left-0 w-full h-full z-50"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="loader absolute top-0 w-full h-full bg-black text-white flex justify-center items-center"></div>
            <div className="loaderBg absolute block top-0 w-full h-full bg-[#bfff00] -z-10"></div>

            <div className="loaderContent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[400px] z-20 text-white">
              <div className="count flex-2 text-right py-0 px-[1em]">
                <p>{currentValue}</p>
              </div>
              <div className="flex-6 text-[30px] uppercase overflow-visible">
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

          {/* Background Image Loader */}
          <div
            className="loader2 fixed top-0 left-0 w-full h-full z-40"
            style={{
              background:
                "url('/images/personal/profile.jpg') no-repeat 50% 50%",
              backgroundSize: "cover",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Loading;

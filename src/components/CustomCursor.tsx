import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CustomCursor() {
  const trailsRef = useRef<SVGPathElement[]>([]);
  const smoothPointer = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const pathPoints = useRef<Map<SVGPathElement, { x: number; y: number }[]>>(
    new Map()
  );

  const colors = [
    "#fefa02",
    "#9aa8e1",
    "#f57faa",
    "#fb2832",
    "#559ce2",
    "#e27b63",
    "#e82c31",
  ];
  const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

  useGSAP(() => {
    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(smoothPointer.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePath = () => {
      trailsRef.current.forEach((path, index) => {
        if (!path) return;
        const points = pathPoints.current.get(path) || [];
        points.unshift({ ...smoothPointer.current });
        while (points.length > totalPointsArray[index]) points.pop();
        pathPoints.current.set(path, points);

        if (points.length > 1) {
          let d = `M ${points[0].x} ${points[0].y}`;
          for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i].x} ${points[i].y}`;
          }
          path.setAttribute("d", d);
        }
      });
      requestAnimationFrame(updatePath);
    };

    updatePath();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none bg-transparent z-20">
      <svg className="absolute top-0 left-0 w-full h-full">
        {colors.map((color, i) => (
          <path
            key={i}
            ref={(el) => {
              trailsRef.current[i] = el!;
            }}
            stroke={color}
            strokeWidth={30}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}

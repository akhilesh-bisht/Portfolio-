import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useViewport } from "src/hooks/useViewport";
import { skillArray } from "src/models/skillModels/skillmodel";

const SkillContainer: React.FC = () => {
  const tl = useRef<GSAPTimeline>();
  const width = useViewport(); // assuming this returns a number

  useEffect(() => {
    tl.current = gsap.timeline().to(".skillCard", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.35,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="mt-0 md:mt-16">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {skillArray.map((skill) => (
          <div
            key={skill.name}
            className="skillCard opacity-0 translate-y-2 scale-90 flex flex-col items-center justify-center gap-2 bg-zinc-900/70 border border-zinc-700 rounded-[6px] p-[1.25rem] hover:scale-105 transition-all duration-200"
          >
            <div style={{ color: skill.color }}>
              <div
                className={`${width > 800 ? "text-[1.2rem]" : "text-[1rem]"}`}
              >
                {width > 800 ? skill.logo : skill.mobileLogo}
              </div>
            </div>
            <p className="text-[0.75rem] text-gray-300 text-center font-light leading-tight truncate max-w-[45px]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;

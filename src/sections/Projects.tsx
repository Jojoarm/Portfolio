import Title from '@/components/Title.tsx';
import { projects } from '@/constants/index.ts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    projectRefs.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
      );
    }
  }, []);

  return (
    <div id="projects" className="section" ref={sectionRef}>
      <Title
        title="My Projects"
        sub="Products and Systems I've Built"
        icon="/svgs/software.svg"
        iconAlt="software icon"
      />

      <div className="w-full">
        <div className="flex flex-col gap-15 justify-between mt-10">
          {projects.map((project, index) => (
            <React.Fragment key={project.name}>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="h-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 justify-between"
              >
                <div className="relative w-full h-full min-h-[200px] rounded-2xl image-border group cursor-pointer overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} project cover photo`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-white-50 text-sm lg:text-base font-roboto mt-2">
                        {project.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        <h3 className="font-semibold font-outfit border-b text-navy-50 border-white-50 w-fit">
                          Features
                        </h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={feature + i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 space-y-2">
                        <h3 className="font-semibold font-outfit border-b text-navy-50 border-white-50 w-fit">
                          Impact
                        </h3>
                        <p className="text-white text-sm lg:text-base font-roboto">
                          {project.impact}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={tech + i}
                            className="text-xs bg-navy-500 px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <a
                        href={project.liveLink}
                        className="flex gap-1  border-b border-l border-white-50 p-2 rounded-md w-fit hover:scale-104 transition-transform duration-300 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-sm text-white-50 font-semibold font-outfit">
                          Live Demo
                        </p>
                        <ArrowUpRight className="size-5 text-white-50" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-none h-px bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_60%)] w-4/5 mx-auto" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

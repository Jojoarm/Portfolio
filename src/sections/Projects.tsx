import Title from '@/components/Title';
import { projects } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    projectRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    }
  }, []);

  return (
    <div id="projects" className="section" ref={sectionRef}>
      <Title title="My Projects" sub="🧑💻 My Works" />

      <div className="w-full">
        <div className="flex flex-col gap-10 justify-between">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="h-full flex flex-col md:flex-row md:gap-10 justify-between"
            >
              <div className="relative max-w-xl w-full h-[350px]  rounded-2xl shadow border-b border-gray-200 shadow-gray-600 group cursor-pointer overflow-hidden">
                <img
                  src={project.image}
                  alt="project image"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-5 mt-5">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <p className="text-white-50 mt-2">{project.description}</p>

                    <ul className="mt-4 list-disc list-inside text-sm space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-navy-500 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.liveLink}
                      className="text-sm text-navy-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="text-sm text-navy-50 underline hover:text-muted"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

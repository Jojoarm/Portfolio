import { useGSAP } from '@gsap/react';
import { techStackIcons } from '../constants';
import gsap from 'gsap';
import TechIcon from '../components/models/techLogosModels/TechIcon';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '@/components/Title';

const TechStack = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#tech-stack',
          start: 'top center',
        },
      },
    );
  }, []);
  return (
    <section
      id="tech-stack"
      className="section flex flex-col gap-4 justify-center items-center w-full h-full md:p-10"
    >
      <div className="w-full h-full md:px-10 px-5">
        <Title
          title="My Tech Stack"
          sub="Tools That Power My Web Apps"
          icon="/svgs/tools.svg"
          iconAlt="tools icon"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-16 md:gap-10 gap-5 mt-5 lg:mt-10">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="tech-card w-full border border-black-50 bg-black-100 overflow-hidden group xl:rounded-4xl rounded-lg"
            >
              <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#2D3240] group-hover:bottom-0 transition-all duration-700" />
              <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[200px] overflow-hidden relative z-10 group-hover:cursor-grab">
                <div className="flex justify-center items-center w-26 h-30  relative">
                  <TechIcon model={icon} />
                </div>

                <div className="px-5  w-full">
                  <p className="text-base md:text-lg pb-5 xl:pb-0 font-semibold text-white-50 text-center">
                    {icon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

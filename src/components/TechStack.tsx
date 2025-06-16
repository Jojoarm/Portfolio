import { useGSAP } from '@gsap/react';
import { techStackIcons } from '../constants';
import gsap from 'gsap';
// import Title from './Title';
import TechIcon from './models/techLogosModels/TechIcon';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          trigger: '#skills',
          start: 'top center',
        },
      }
    );
  }, []);
  return (
    <div
      id="skills"
      className="flex flex-col gap-4 justify-center items-center w-full h-full md:p-10 p-5"
    >
      <div className="bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap text-white">
        <p>🤝 Skills I bring to the table </p>
      </div>

      <div className="flex flex-wrap xl:gap-16 md:gap-10 gap-5 mt-16;">
        {techStackIcons.map((icon) => (
          <div
            key={icon.name}
            className="tech-card w-[150px] border border-black-50 bg-black-100 overflow-hidden group xl:rounded-4xl rounded-lg"
          >
            <div className="absolute left-0 top-[-100%] w-full h-full bg-[#2D3240] group-hover:top-0 transition-all duration-700" />
            <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[200px] overflow-hidden relative z-10 group-hover:cursor-grab">
              <div className="flex justify-center items-center w-26 h-30  relative">
                <TechIcon model={icon} />
              </div>

              <div className="px-5  w-full">
                <p className="text-lg pb-5 xl:pb-0 font-semibold text-white-50 text-center">
                  {icon.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

import GlowCard from '@/components/GlowCard';
import Title from '@/components/Title';
import { skillsCard } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Services = () => {
  useGSAP(() => {
    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      });
    });
  }, []);

  return (
    <div id="services" className="section">
      <Title title="My Services" sub="🧑‍💼 What I offer" />

      <div className="mt-5 md:mt-10 relative">
        <div className="relative z-50 xl:space-y-32 space-y-10">
          {skillsCard.map((card, index) => (
            <div key={index} className="flex items-start">
              <div className="timeline-wrapper absolute top-0 left-5 md:left-10 h-full flex justify-center">
                <div className="timeline absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-black" />
                <div className="gradient-line w-1 h-full" />
              </div>

              <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-2 border border-black-50 bg-black-100">
                  <img src={card.logoPath} alt="logo" />
                </div>
                <GlowCard index={index}>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-xl md:text-3xl">
                      {card.title}
                    </h1>
                    <p className="text-[#839cb5] italic">Responsibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 md:gap-5 text-white-50">
                      {card.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-sm md:text-lg">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {card.tools.map((tool, index) => (
                        <p
                          key={index}
                          className={`text-xs md:text-sm px-2 py-1 border border-navy-500 shadow-white rounded bg-navy-50 text-navy-500 shadow`}
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

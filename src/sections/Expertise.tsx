import GlowCard from '@/components/GlowCard';
import Title from '@/components/Title';
import { skillsCard } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  useGSAP(() => {
    const texts = gsap.utils.toArray<HTMLElement>('.expText');
    const totalCards = texts.length;

    // Set gradient line to start at 0 height
    gsap.set('.gradient-line', {
      scaleY: 0,
      transformOrigin: 'top center',
    });

    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, x: -30 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 70%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            onUpdate: (self) => {
              const progressPerCard = 1 / totalCards;
              const totalProgress =
                index * progressPerCard + self.progress * progressPerCard;

              gsap.set('.gradient-line', {
                scaleY: totalProgress,
                transformOrigin: 'top center',
              });
            },
            onLeaveBack: () => {
              const progressPerCard = 1 / totalCards;
              const totalProgress = index * progressPerCard;

              gsap.set('.gradient-line', {
                scaleY: totalProgress,
                transformOrigin: 'top center',
              });
            },
          },
        },
      );
    });
  }, []);

  return (
    <div id="expertise" className="section">
      <Title
        title="My Expertise"
        sub="What I Bring to the Table"
        icon="/svgs/tools-and-utensils-programmer.svg"
        iconAlt="code icon"
      />

      <div className="mt-5 md:mt-10 relative">
        <div className="relative z-50 space-y-5">
          {skillsCard.map((card, index) => (
            <div key={index} className="flex items-start">
              <div className="timeline-wrapper absolute top-0 left-5 md:left-10 h-full flex justify-center">
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
                      {card.tools.map((tool, idx) => (
                        <p
                          key={idx}
                          className="text-xs md:text-sm px-2 py-1 border border-navy-500 shadow-white rounded bg-navy-50 text-navy-500 shadow"
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

export default Expertise;

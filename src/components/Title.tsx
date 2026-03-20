import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

type TitleProps = {
  title: string;
  sub?: string;
  icon?: string;
  iconAlt?: string;
};

const Title = ({ title, sub, icon, iconAlt }: TitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const children = containerRef.current.querySelectorAll('.title-animate');

      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-5">
      <div className="title-animate font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
      <div className="title-animate bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap font-semibold text-white flex gap-2 items-center justify-center">
        {icon && (
          <img
            src={icon}
            alt={iconAlt}
            className="xl:size-7 md:size-6 size-5"
          />
        )}
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default Title;

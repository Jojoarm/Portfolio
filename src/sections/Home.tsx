import gsap from 'gsap';
import Button from '../components/Button';
import { words } from '../constants';
import { useGSAP } from '@gsap/react';
import BgImage from '@/components/BgImage';

const Home = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.hero-section').forEach((section) => {
      const tl = gsap.timeline();

      const textContainers = section.querySelectorAll('.text-container');
      const textDescriptions = section.querySelectorAll('.text-description');

      if (textContainers.length > 0) {
        tl.fromTo(
          textContainers,
          {
            y: 40,
            x: 100,
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 2.2,
            ease: 'power2.in',
            // stagger: 0.5,
            onComplete: () => {
              const wrapper = document.querySelector<HTMLElement>('.wrapper');
              if (wrapper) {
                wrapper.style.animationPlayState = 'running';
              }
            },
          },
        );
      }

      if (textDescriptions.length > 0) {
        tl.fromTo(
          textDescriptions,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.in',
          },
          0.5,
        );
      }
    });

    gsap.utils.toArray<HTMLElement>('.scale-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 2.2, // wait for text-container animation to finish
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        },
      );
    });
  });
  return (
    <section
      id="home"
      className="relative flex items-center w-full h-full min-h-screen hero-section"
    >
      {/* Large screens */}
      <img
        src="/images/hero-background-07.webp"
        alt="Hero background"
        className="absolute w-full h-full inset-0 z-5 object-cover object-center hidden md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/85 z-10 hidden md:block" />

      {/* Small screens */}
      <img
        src="/images/hero-section-mobile-04.webp"
        alt="Hero background"
        className="absolute w-full h-full inset-0 z-5 object-cover object-right block md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/70 z-10 block md:hidden" />

      {/* decorative boxes */}
      <BgImage top="0" left="0" />
      <BgImage bottom="0" left="0" />

      <div className="mt-10 md:mt-15 xl:mt-20  h-vh flex xl:items-center items-start justify-center w-full text-white">
        <div className="flex flex-col justify-center w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="text-container flex flex-col justify-center w-full max-w-4xl text-[34px] md:text-[50px] lg:text-[60px] font-semibold relative z-10 pointer-events-none">
              <h1>
                Turning
                <span className="slide absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          width={48}
                          height={48}
                          className="xl:size-12 md:size-10 size-7 p-1 rounded-full bg-white-50 image-border"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Scalable Digital Products that Solve Real Problems</h1>
              {/* <h1>that Solve Real Problems</h1> */}
            </div>
            <p className="text-description text-white-50 md:text-lg relative z-10 pointer-events-none max-w-4xl">
              Web developer and product builder focused on building high
              performance web applications and intelligent systems that turn
              complex ideas into scalable, real world solutions.
            </p>
            <p className="text-description z-10 text-white ">
              Explore my work, projects, and the systems I'm building.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="View My Projects"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

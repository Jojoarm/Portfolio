import gsap from 'gsap';
import Button from '../components/Button';
import { words } from '../constants';
import { useGSAP } from '@gsap/react';

const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });
  return (
    <div id="home" className="relative h-screen flex items-center">
      <video
        playsInline
        autoPlay
        poster="/images/background2.jpg"
        muted
        loop
        id="bgvid"
        className="absolute w-full h-screen top-0 left-0 bottom-0 right-0 z-5 object-cover"
      >
        <source src="/images/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="absolute bottom-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className=" xl:mt-20 mt-32 h-vh flex xl:items-center items-start justify-center text-white">
        <div className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>
                Transforming
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
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real World Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-lg relative z-10 pointer-events-none max-w-4xl">
              Hi, I'm George — a web developer based in Nigeria with a strong
              passion for crafting clean, efficient, and impactful code. Let's
              collaborate and build something amazing together.
            </p>
            <p className="z-10 text-gray-200">Welcome to my Portfolio</p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="View My Work"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

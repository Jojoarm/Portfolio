import AnimatedCounter from '@/components/AnimatedCounter';
import Title from '@/components/Title.tsx';
import { counterItems } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Bio card entrance
    if (cardRef.current) {
      const paragraphs = cardRef.current.querySelectorAll('p');
      const image = cardRef.current.querySelector('img');

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        },
      );

      // Image slides in from the side it floats
      gsap.fromTo(
        image,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        },
      );

      // Paragraphs stagger up after card enters
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        },
      );
    }

    // Counter animation (unchanged)
    gsap.utils.toArray<HTMLElement>('.counter').forEach((element) => {
      const target = element.getAttribute('data-target');
      if (!target) return;

      const numericValue = parseInt(target.replace(/[^0-9]/g, '')) || 0;
      const counter = { value: 0 };

      gsap.to(counter, {
        value: numericValue,
        duration: 1,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: element,
          start: 'top-=300 bottom-=100',
          once: true,
          invalidateOnRefresh: true,
        },
        onUpdate: function () {
          element.textContent = Math.floor(counter.value).toLocaleString();
        },
      });
    });
  }, {});

  return (
    <section id="about" className="section">
      <Title
        title="About Me"
        sub="Who I Am"
        icon="/svgs/male-programmer.svg"
        iconAlt="about icon"
      />

      <div
        ref={cardRef}
        style={{ opacity: 0 }} // prevent flash before GSAP runs
        className="relative flex flex-col md:flex-row p-6 xl:p-8 w-full md:max-w-7xl xl:max-w-5xl shadow-lg rounded-2xl border border-gray-200 text-white my-5"
      >
        <div className="space-y-6 text-gray-300 text-sm md:text-lg xl:text-lg leading-relaxed">
          <img
            src="/images/George.png"
            alt="Profile"
            style={{ opacity: 0 }} // prevent flash before GSAP runs
            className="w-2/5 bg-white-50 lg:w-[220px] mr-4 md:ml-4 float-left md:float-right rounded-4xl image-border"
          />
          <p>
            Hello, I'm <span className="font-semibold">George Ofogba</span> - a
            web developer and product builder focused on building scalable web
            applications and digital platforms that solve real world problems. I
            work across the modern JavaScript ecosystem, using React, Next.js,
            Node.js, Express, MongoDB, and PostgreSQL to deliver high
            performance systems end to end.
          </p>
          <p>
            I specialize in turning ideas into structured, production ready
            products; from designing intuitive user interfaces to building
            robust backend architectures and integrating intelligent, data
            driven features. My work is driven by performance, usability, and
            the ability to scale as products grow.
          </p>
          <p>
            Currently, I'm focused on building and refining platforms that
            support real users and real workflows, while continuously improving
            my approach to system design, testing, and overall product quality.
          </p>
        </div>
      </div>

      <div id="counter" className="mt-5 xl:mt-10 w-full">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {counterItems.map((item, index) => (
            <AnimatedCounter
              key={index}
              suffix={item.suffix}
              figure={item.value}
              description={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import TechStack from '@/components/TechStack.tsx';
import Title from '@/components/Title.tsx';

const About = () => {
  return (
    <div id="about" className="section">
      <Title title="About Me" sub="ℹ️ Who I am" />

      <div className="relative flex flex-col md:flex-row p-6 w-full md:max-w-7xl shadow-lg rounded-2xl border border-gray-200 text-white my-5">
        {/* Image for larger screens */}
        <div className="hidden w-full md:absolute md:w-1/4 right-0 bottom-0 md:block">
          <img
            src="/images/dp2.png"
            alt="Profile"
            className="w-1/2 float-right ml-4 mb-2 md:float-none md:w-[80%] md:h-[500px]"
          />
        </div>

        {/* <div className="absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] bg-gray-300 border-gray-300" /> */}

        {/* Text container */}
        <div className="w-full md:w-3/4 space-y-6 text-gray-300 text-sm md:text-lg xl:text-lg leading-relaxed clear-right">
          {/* Image for smaller screens */}
          <img
            src="/images/dp.png"
            alt="Profile"
            className="w-1/3 float-left mr-4 mb-2 rounded-xl md:hidden"
          />

          <p>
            Hello! I’m <span className="font-semibold">George Ofogba</span>, a
            passionate MERN stack developer with a strong focus on building
            full-stack applications that solve real-world problems. I specialize
            in React, Node.js, Express, and MongoDB.
          </p>

          <p>
            My journey started with curiosity about how websites work and
            quickly evolved into a full-blown passion for creating interactive
            web experiences. I enjoy designing user-friendly interfaces,
            building secure and scalable backend systems, and continuously
            learning new tools to stay up to date.
          </p>

          <p>
            When I’m not coding, I enjoy exploring new technologies, reading dev
            blogs, and occasionally helping others on dev forums. I’m actively
            looking for opportunities to grow as a developer and contribute to
            meaningful projects.
          </p>
        </div>
      </div>

      <TechStack />
    </div>
  );
};

export default About;

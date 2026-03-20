import type { ModelProps } from '@/components/models/techLogosModels/TechIcon';

const navLinks = [
  {
    name: 'About',
    link: '#about',
    target: '',
  },
  {
    name: 'Tech Stack',
    link: '#tech-stack',
    target: '',
  },
  {
    name: 'Expertise',
    link: '#expertise',
    target: '',
  },
  {
    name: 'Projects',
    link: '#projects',
    target: '',
  },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1zz6YIz-ilOUTr5C-1E929OnI7J94eTC4/view?usp=sharing',
    target: '_blank',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/svgs/idea.svg' },
  { text: 'Codes', imgPath: '/svgs/code-2.svg' },
  { text: 'Concepts', imgPath: '/svgs/brainstorm.svg' },
  { text: 'Designs', imgPath: '/svgs/design-systems.svg' },
  { text: 'Ideas', imgPath: '/svgs/idea.svg' },
  { text: 'Codes', imgPath: '/svgs/code-2.svg' },
  { text: 'Concepts', imgPath: '/svgs/brainstorm.svg' },
  { text: 'Designs', imgPath: '/svgs/design-systems.svg' },
];

const counterItems = [
  { value: 2, suffix: '+', label: 'Years in Web Development' },
  { value: 12, suffix: '+', label: 'Clients & Collaborations' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Timely Delivery' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons: ModelProps[] = [
  {
    name: 'React',
    modelPath: '/tech-logos/react-logo-v1.glb',
    scale: 1.5,
    rotation: [0, 0, 0],
    floatOffset: 0,
  },
  {
    name: 'Next.js',
    modelPath: '/tech-logos/nextjs-logo.glb',
    scale: 1.5,
    rotation: [0, 0, 0],
    floatOffset: 1,
  },
  {
    name: 'Node.js',
    modelPath: '/tech-logos/node-v1.glb',
    scale: 1.5,
    rotation: [0, 0, 0],
    floatOffset: 2,
  },

  {
    name: 'MongoDB',
    modelPath: '/tech-logos/mongodb.glb',
    scale: 1.8,
    rotation: [0, 0, 0],
    floatOffset: 3,
  },
  {
    name: 'PostgreSQL',
    modelPath: '/tech-logos/postgresql.glb',
    scale: 1.2,
    rotation: [0, 0, 0],
    floatOffset: 4,
  },
  {
    name: 'Tailwind CSS',
    modelPath: '/tech-logos/tailwindcss.glb',
    scale: 1.5,
    rotation: [0, 0, 0],
    floatOffset: 5,
  },
  {
    name: 'Typescript',
    modelPath: '/tech-logos/typescript.glb',
    scale: 1.2,
    rotation: [0, 0, 0],
    floatOffset: 6,
  },
  {
    name: 'Github',
    modelPath: '/tech-logos/github.glb',
    scale: 1.5,
    rotation: [0, 0, 0],
    floatOffset: 7,
  },
];

const projects = [
  {
    name: 'Edity',
    description:
      'An Edtech AI powered platform designed to support teachers with lesson planning, activity generation, and classroom insights through intelligent, curriculum aligned tools.',
    impact:
      'Reduced manual lesson preparation time and improved classroom efficiency by providing AI assisted teaching workflows.',
    liveLink: 'https://www.edity.co/',
    image: '/images/edity.webp',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Zustand',
      'AI Integration',
      'Tailwind CSS',
      'Sentry',
    ],
    features: [
      'AI powered tools for lesson planning, activity generation, and concept explanation.',
      'Curriculum aligned content tailored for low resource classroom environments.',
      'Professional development tracking with analytics and reporting.',
      'Modular architecture supporting multiple educator focused tools.',
    ],
  },

  {
    name: 'Jerou Hospital Platform',
    description:
      'A modern healthcare web platform that enables patients to explore services, access medical information, book appointments, and stay updated through a dynamic content system.',
    impact:
      'Improved patient engagement and reduced administrative friction by digitizing appointment workflows and hospital communication.',
    liveLink: 'https://www.jerouhospital.com/',
    image: '/images/jerou.webp',
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Tanstack Query',
      'Clerk',
      'Cloudinary',
    ],
    features: [
      'Structured appointment booking system with validation and email handling.',
      'Dynamic blog and content management for medical updates.',
      'Optimized media handling using Next.js Image and Cloudinary.',
      'Reusable and scalable component architecture with server/client separation.',
    ],
  },

  {
    name: 'Ruderf',
    description:
      'A digital platform for a nonprofit organization empowering women and girls through education, entrepreneurship, and technology, with integrated content and donation systems.',
    impact:
      'Enabled seamless online donations and improved visibility for community programs through integrated content and payment systems.',
    liveLink: 'https://www.ruderfngo.org/',
    image: '/images/ruderf.webp',
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Flutterwave',
      'Tailwind CSS',
      'React Query',
      'Clerk',
    ],
    features: [
      'Secure donation processing using Flutterwave integration.',
      'Dynamic blog system for articles and projects updates.',
      'Authentication and session management with Clerk.',
      'Scalable architecture supporting both content and financial transactions.',
    ],
  },

  {
    name: 'Premier Care',
    description:
      'A professional healthcare staffing and support services platform designed to connect healthcare providers with qualified personnel while streamlining communication and operations.',
    impact:
      'Simplified access to healthcare staffing services by structuring offerings and improving how clients interact with the platform.',
    liveLink: 'https://www.premiercare.life/',
    image: '/images/premier-care.webp',
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Supabase',
      'Tailwind CSS',
      'React Query',
      'Clerk',
      'Zustand',
    ],
    features: [
      'Structured service modules for healthcare staffing and support.',
      'Authentication and secure user interaction flows.',
      'Hybrid backend integration using MongoDB and Supabase.',
      'Responsive and modular UI built for scalability.',
    ],
  },
];

const skillsCard = [
  {
    logoPath: '/images/logo1.png',
    title: 'Frontend Developer',
    tools: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'HTML5',
      'CSS3',
    ],
    responsibilities: [
      'Build interactive, reusable, and high-performance UI components using React and TypeScript.',
      'Design responsive and pixel-perfect layouts with Tailwind CSS and modern CSS techniques.',
      'Manage state efficiently with Redux or React Context for scalable applications.',
      'Optimize frontend performance with lazy loading, code splitting, and memoization.',
      'Implement accessible, user-friendly designs directly from Figma prototypes.',
    ],
  },
  {
    logoPath: '/images/logo2.png',
    title: 'Backend Developer',
    tools: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'JWT',
    ],
    responsibilities: [
      'Design and develop secure, scalable RESTful APIs using Node.js and Express.',
      'Work with PostgreSQL and MongoDB for robust data modeling and querying.',
      'Implement authentication and authorization using JWT and industry-standard security practices.',
      'Build reusable middleware for logging, validation, and error handling.',
      'Leverage database aggregations and indexing for efficient data retrieval and reporting.',
    ],
  },
  {
    logoPath: '/images/logo3.png',
    title: 'Deployment & DevOps',
    tools: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'CI/CD Workflows'],
    responsibilities: [
      'Manage version control effectively with Git and collaborate seamlessly on GitHub.',
      'Deploy and maintain full stack applications on platforms like Vercel and Render.',
      'Test and document APIs using Postman for smooth integration.',
      'Configure environment variables and automate deployments through CI/CD pipelines.',
      'Monitor and troubleshoot deployments using cloud hosting dashboards and logs.',
    ],
  },
  {
    logoPath: '/images/logo4.png',
    title: 'Advanced Frontend Tools & State Management',
    tools: ['Zustand', 'React Hook Form', 'Recharts', 'Chart.js'],
    responsibilities: [
      'Manage global state efficiently using Zustand for modern React apps.',
      'Build complex forms with React Hook Form, including validation and error handling.',
      'Create interactive and visually appealing dashboards using Chart.js or Recharts.',
      'Implement optimistic UI updates, error boundaries, and smooth user experiences.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: '/images/insta.png',
    url: 'https://www.instagram.com/dev_armani',
  },
  {
    name: 'github',
    imgPath: '/images/github.png',
    url: 'https://github.com/Jojoarm',
  },
  {
    name: 'x',
    imgPath: '/images/x.png',
    url: 'https://x.com/jojoarmani24',
  },
  {
    name: 'linkedin',
    imgPath: '/images/linkedin.png',
    url: 'linkedin.com/in/george-ofogba-075ba6203',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  skillsCard,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};

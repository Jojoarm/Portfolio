import type { ModelProps } from '@/components/models/techLogosModels/TechIcon';

const navLinks = [
  {
    name: 'About',
    link: '#about',
    target: '',
  },
  {
    name: 'Services',
    link: '#services',
    target: '',
  },
  {
    name: 'Projects',
    link: '#projects',
    target: '',
  },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1i2wm1GKba4xX57IE3mw6eNVy7u4iGTSJ/view',
    target: '_blank',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Codes', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Codes', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 1, suffix: '+', label: 'Years of Experience' },
  { value: 8, suffix: '+', label: 'Satisfied Clients' },
  { value: 10, suffix: '+', label: 'Completed Projects' },
  { value: 70, suffix: '%', label: 'Client Retention Rate' },
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
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Node JS',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const projects = [
  {
    name: 'TripTeller',
    description:
      'A full-stack travel booking platform that allows users to explore and filter curated trips by destination, budget, and travel interests.',
    liveLink: 'https://trip-teller-web.vercel.app/',
    githubLink: 'https://github.com/Jojoarm/TripTeller',
    image: '/images/project1.png',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Recharts',
    ],
    features: [
      'Trip filtering by location, budget, group size, and travel style.',
      'Authentication with JWT and protected route handling.',
      'Interactive admin dashboard with charts and statistics.',
      'Responsive design and modular UI components.',
    ],
  },
  {
    name: 'Jerou Hospital Management App',
    description:
      'A modern hospital management system that helps clinics manage patients, appointments, and staff in a secure and efficient way.',
    liveLink: 'https://jerou-hospital-management-app-frontend.onrender.com/',
    githubLink:
      'https://github.com/Jojoarm/Jerou-Hospital-Management-App-Frontend',
    image: '/images/project2.png',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Zustand',
    ],
    features: [
      'Patient and staff registration and management.',
      'Doctor appointment scheduling and tracking.',
      'Admin dashboard for analytics and user management.',
      'Role-based access control for doctors, nurses, and admins.',
    ],
  },
  {
    name: 'JoJoEats',
    description:
      'An online food ordering platform built with the MERN stack, allowing users to browse restaurants, order meals, and track deliveries.',
    liveLink: 'https://food-ordering-app-frontend-bvot.onrender.com/',
    githubLink: 'https://github.com/Jojoarm/Food-ordering-app-frontend',
    image: '/images/project3.png',
    techStack: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
    ],
    features: [
      'User authentication and secure checkout flow.',
      'Cart system with real-time updates and order tracking.',
      'Restaurant and menu management for vendors.',
      'Image uploads and optimized delivery dashboard.',
    ],
  },
];

const skillsCard = [
  {
    logoPath: '/images/logo1.png',
    title: 'Frontend Developer',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'],
    responsibilities: [
      'Able to build interactive and reusable UI components using React and TypeScript.',
      'Capable of styling responsive layouts using Tailwind CSS and modern CSS techniques.',
      'Comfortable managing application state with Redux or React Context.',
      'Familiar with optimizing frontend performance using lazy loading and memoization.',
      'Can implement accessible and pixel-perfect designs from tools like Figma.',
    ],
  },
  {
    logoPath: '/images/logo2.png',
    title: 'Backend Developer',
    tools: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT'],
    responsibilities: [
      'Able to design and build RESTful APIs using Express and Node.js.',
      'Skilled at working with MongoDB and Mongoose for data modeling and queries.',
      'Can implement secure authentication and authorization using JWT and hashing.',
      'Familiar with building reusable middleware for validation, logging, and error handling.',
      'Comfortable using MongoDB aggregations for filtering, sorting, and reporting.',
    ],
  },
  {
    logoPath: '/images/logo3.png',
    title: 'DevOps & Tools',
    tools: ['Git', 'GitHub', 'Vercel', 'Postman', 'Render'],
    responsibilities: [
      'Able to manage version control using Git and collaborate effectively on GitHub.',
      'Capable of deploying full-stack apps to platforms like Vercel and Render.',
      'Familiar with testing APIs and documenting requests using Postman.',
      'Can configure environment variables and automate deployments through GitHub workflows.',
      'Able to monitor and troubleshoot deployments through cloud hosting dashboards.',
    ],
  },
  {
    logoPath: '/images/logo4.png',
    title: 'Others',
    tools: ['Zustand', 'React Hook Form', 'Chart.js / Recharts'],
    responsibilities: [
      'Capable of managing global state with tools like Zustand in React apps.',
      'Able to build complex forms using React Hook Form with validation and error handling.',
      'Familiar with creating visual dashboards using Chart.js or Recharts.',
      'Can implement optimistic UI updates and error boundaries for improved UX.',
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

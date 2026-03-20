import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Expertise from './sections/Expertise';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Services from './sections/Services';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

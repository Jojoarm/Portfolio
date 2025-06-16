import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Services from './sections/Services';

const App = () => {
  return (
    <div>
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

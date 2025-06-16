import Navbar from './components/Navbar';
import About from './sections/About';
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
    </div>
  );
};

export default App;

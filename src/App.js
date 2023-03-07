import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects /> 
        <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Hero from './Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000,
      once: true,
     });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


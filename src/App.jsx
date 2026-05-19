import { useEffect } from 'react';
import data from './data/portfolio.json';
import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useScrollReveal();

  // Set initial theme
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    document.documentElement.setAttribute('data-theme', saved || 'dark');
  }, []);

  return (
    <div className="app">
      <Navbar name={data.personal.name} />
      <main>
        <Hero data={data.personal} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Certifications data={data.certifications} />
        <Contact data={data.contact} socials={data.personal.socials} />
      </main>
      <Footer name={data.personal.name} socials={data.personal.socials} />
    </div>
  );
}

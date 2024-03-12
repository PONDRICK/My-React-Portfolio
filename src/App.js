import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Sorrawit Nuernuam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

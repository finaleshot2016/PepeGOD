import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Developers from './components/Developers';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <Footer />
    </div>
  );
}

export default App;

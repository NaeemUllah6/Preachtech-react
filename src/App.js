import './App.css';
import Navbar from '../src/components/header';
import Footer from '../src/components/footer';
import Home from '../src/layout/home';
import About from '../src/layout/about';
import Services from '../src/layout/services';
import Contact from '../src/layout/contact';
import Partner from '../src/components/partner';
import { Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Partner/>
      <Footer />
    </div>
  );
}

export default App;

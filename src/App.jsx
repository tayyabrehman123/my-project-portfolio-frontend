import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import Skills from './pages/skills.jsx';
import Snake from './pages/snake.jsx';

function App() {
  return (
    <>
    <Navbar />
      <div className='app min-h-screen'>  
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Snake/>
        <Contact/>
      </div>
      <Footer />
    </>
  );
}

export default App

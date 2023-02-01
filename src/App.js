import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portifolio from './components/Portifolio';
import SidebarToggle from './components/SidebarToggle'
import Tech from './components/Tech';

function App() {
  return (
    <div className='overflow-x-hidden' >
      <Navbar/>
      <SidebarToggle/>
      <Hero/>
      <About/>
      <Tech/>
      <Portifolio/>
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portifolio from './components/Portifolio';
import SidebarToggle from './components/SidebarToggle'
import Tech from './components/Tech';

function App() {
  return (
    <div >
      <Navbar/>
      <SidebarToggle/>
      <Hero/>
      <About/>
      <Tech/>
      <Portifolio/>
      <Contacts/> 
      <Footer/>
    </div>
  );
}

export default App;

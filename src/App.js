import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SidebarToggle from './components/SidebarToggle'

function App() {
  return (
    <div >
      <Navbar/>
      <SidebarToggle/>
      <Hero/>
      
    </div>
  );
}

export default App;

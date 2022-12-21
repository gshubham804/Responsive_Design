import './App.css';
import Footer from './Component/Footer/Footer';
import HeroSection from './Component/HeroSection/HeroSection';
import Navbar from './Component/Navbar/Navbar'
import Portfolio from './Component/Portfolio/Portfolio';
import Service from './Component/Premium Services/Service'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Service/>
    <Portfolio/>
    <Footer/>
    </>
  );
}

export default App;

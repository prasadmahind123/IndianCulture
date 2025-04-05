import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar'
import  JTempleList  from '../Components/JTempleList';
import {  useNavigate } from "react-router-dom";
import { PiGreaterThanThin } from 'react-icons/pi'; 
export default function Jyotirling() {
  const navigate = useNavigate();
  return (
        <div className="temple-container">
            <div className="nav">
                <NavBar/>
            </div>

            <header className="list-hero-header">
            <div className="list-overlay">
            </div>
            <div className="list-header-content">
              <h1>UNESCO World Heritage Temples of India</h1>
              <p className="tagline">Discover the architectural marvels and spiritual heritage of ancient India</p>
            </div>
          </header>
          <div className="heading">              
                <p >
                    <span onClick={() => navigate('/')}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={() => navigate('/heritage')}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={() => navigate('/architecture')}>Architecture</span> <PiGreaterThanThin className='greater'/>
                    <span onClick={() => navigate('/temples')}>Temples</span> <PiGreaterThanThin className='greater'/>
                    Jyotirlinga Temples
                </p>
            </div>
          <main>
            <div className="list-container">
              <section className="list-intro-section">
                <h2>India&apos;s Sacred Architecture</h2>
                <p className="list-intro">
                  India, with its rich cultural heritage spanning thousands of years, is home to numerous magnificent
                  temples that have been recognized as UNESCO World Heritage Sites. These architectural marvels stand as
                  testimony to India&apos;s glorious past, exceptional craftsmanship, and spiritual traditions. Explore these
                  sacred monuments by clicking on any temple name below.
                </p>
                <div className="divider">
                  <span className="divider-symbol">☸</span>
                </div>
              </section>
    
              <JTempleList/>
            </div>
          </main>
    
            <Footer></Footer>
        </div>
  )
}

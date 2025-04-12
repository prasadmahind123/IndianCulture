import NavBar from '../Components/NavBar'
import { useState , useEffect } from 'react'
import { otherTemples } from '../Data/otherTemples';
import { Link , useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

import './Temples.css'
export default function Temples() {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

    
  useEffect(() => {
    const loadData = async () => {
      // Simulate data loading
      await new Promise((resolve) => setTimeout(resolve,2000));
      setIsLoading(false);
    };
    loadData();
  }, []);
if (isLoading) {
    return (
      <div className="loader-container">
        <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        </div>
      </div>
   
    );
    }

  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>
      
             <main className="temple-main-content">
        <section className="temple-hero-section">
          <div className="temple-hero-content">
            <h2>Discover India&apos;s Sacred Architecture</h2>
            <p>
              Explore the magnificent temples that showcase India&apos;s rich cultural and architectural heritage spanning
              thousands of years.
            </p>
            <div className="temple-cta-buttons">
              <p onClick={() => navigate('/unescoTemples')}  className="temple-cta-button primary">
                UNESCO Heritage Temples
              </p>
              <p onClick={() => navigate('/jyotirling')}  className="temple-cta-button secondary">
                Jyotirlinga Temples
              </p>
            </div>
          </div>
          <div className="temple-hero-image">
            <img
              src="/images/Temples/Kedarnath2.jpg"
              alt="Indian Temple Architecture"
              width={800}
              height={500}
              className="temple-featured-image"
            />
          </div>
        </section>

        <section className="temple-info-section">
          <h2>India&apos;s Temple Heritage</h2>
          <p>
            India is home to thousands of temples that represent various architectural styles, religious traditions, and
            historical periods. These temples are not just places of worship but also stand as testimonies to India&apos;s
            rich cultural heritage, artistic excellence, and architectural innovation.
          </p>

          <div className="temple-categories">
            <div className="temple-category-card">
              <img
                src="/images/Temples/Badrinath1.jpg"
                alt="North Indian Temple Architecture"
                width={400}
                height={300}
              />
              <h3>North Indian (Nagara) Style</h3>
              <p>Characterized by their beehive-shaped towers, these temples are primarily found in northern India.</p>
            </div>

            <div className="temple-category-card">
              <img
                src="/images/Dravida-Style.webp"
                alt="South Indian Temple Architecture"
                width={400}
                height={300}
              />
              <h3>South Indian (Dravida) Style</h3>
              <p>Known for their pyramid-shaped towers, these temples dominate the southern landscape of India.</p>
            </div>

            <div className="temple-category-card">
              <img
                src="/images/Vesara.webp"
                alt="Vesara Temple Architecture"
                width={400}
                height={300}
              />
              <h3>Vesara Style</h3>
              <p>
                A hybrid style that combines elements from both Nagara and Dravida styles, found mostly in central
                India.
              </p>
            </div>
          </div>
        </section>

        <section className="featured-temples">
          <h2>Other Famous Indian Temples</h2>
          <div className="temple-grid">
            {
                otherTemples.map((temple, index) => (
                  <div key={index} className="temple-card">
                    <img src={temple.img} alt={temple.title} width={350} height={250} />
                    <h3>{temple.title}</h3>
                    <p>{temple.description}</p>
                    <Link to={`/temples/${temple.id}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                ))
  
            }
           
          </div>
        </section>
      </main>
        <Footer></Footer>
    </div>
  )
}

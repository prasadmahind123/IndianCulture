import NavBar from '../Components/NavBar'
import  { useState, useEffect } from 'react';
import './Heritage.css'
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, MapPin, Book, Info } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';
export default function Heritage() {
   const navigate = useNavigate();

      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const loadData = async () => {
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
    <div className='heritage'>
        <div className="nav">
            <NavBar />
        </div>

       
        <section className="hero">
            <div className="hero-content">
                <h1>Discover India&apos;s Rich Heritage</h1>
                <p>India&apos;s rich heritage is a blend of its diverse cultures, religions, languages, and traditions that have evolved over thousands of years. From ancient civilizations like the Indus Valley to the spiritual teachings of the Vedas, India's history reflects its deep-rooted values, art, and architecture. Temples, forts, classical dance, music, and festivals all showcase the vibrant cultural tapestry of the nation.</p>
            </div>
            <div className="hero-image">
                <img
                    src="/images/BG/page3-1.webp"
                    alt="Indian Heritage"
                    width={800}
                    height={500}
                    className="hero-img"
                />
            </div>
      </section>

      {/* Heritage Categories */}
      <section className="categories">
        <h2 className="section-title">Heritage Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-image">
              <img src="/images/forts/red.webp" alt="Monuments" width={400} height={300} />
            </div>
            <div className="category-info">
              <h3>Monuments & Architecture</h3>
              <p>Ancient temples, forts, and palaces that showcase India&apos;s architectural brilliance</p>
            </div>
           
            <div className="read-more">
              Explore <ChevronRight className="icon" size={16} onClick={() => navigate('/architecture')} />
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/Paintings/Tanjore-2.jpeg" alt="Art Forms" width={400} height={300} />
            </div>
            <div className="category-info"> 
              <h3>Classical Art Forms</h3>
              <p>Explore India&apos;s classical art forms, including dance, music, and painting</p>
            </div>
            
            <div className="read-more">
              Explore <ChevronRight className="icon" size={16} onClick={() => navigate('/art')} />
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/wild/Kaziranga.webp" alt="Handicrafts" width={400} height={300} />
            </div>
            <div className="category-info">
              <h3>National Parks & Wildlife</h3>
              <p>Discover India&apos;s rich biodiversity and wildlife sanctuaries</p>
            </div>
            
            <div className="read-more">
              Explore <ChevronRight className="icon" size={16} onClick={() => navigate('/wild')} />
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/CuisinePage/dhokla1.jpeg" alt="Literature" width={400} height={300} />
            </div>
            <div className="category-info">
              <h3>Indian Cuisine</h3>
              <p>Explore the diverse flavors and culinary traditions of India</p>
            </div>
            
            <div className="read-more">
              Explore <ChevronRight className="icon" size={16} onClick={() => navigate('/cuisine')} />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Heritage Site */}
      <section className="featured-site">
        <div className="featured-content">
          <div className="featured-tag">Featured Heritage Site</div>
          <h2>Taj Mahal</h2>
          <p>
            The iconic ivory-white marble mausoleum on the southern bank of the river Yamuna in Agra, built by Mughal
            emperor Shah Jahan in memory of his beloved wife.
          </p>
          <ul className="featured-details">
            <li>
              <MapPin className="icon" size={16} /> Agra, Uttar Pradesh
            </li>
            <li>
              <Calendar className="icon" size={16} /> Built: 1632-1653
            </li>
            <li>
              <Info className="icon" size={16} /> UNESCO World Heritage Site
            </li>
          </ul>
        </div>
        <div className="featured-image">
          <img src="/images/TajMahal.webp" alt="Taj Mahal" width={800} height={600} />
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">Journey Through Time</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">3300-1300 BCE</div>
            <div className="timeline-content">
              <h3>Indus Valley Civilization</h3>
              <p>
                One of the world&apos;s earliest urban civilizations with sophisticated city planning and drainage systems
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">600 BCE-600 CE</div>
            <div className="timeline-content">
              <h3>Classical Period</h3>
              <p>Rise of major religions, philosophies, and classical arts during the Maurya and Gupta Empires</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">8th-18th Century</div>
            <div className="timeline-content">
              <h3>Medieval India</h3>
              <p>
                Cultural synthesis during Delhi Sultanate and Mughal Empire, producing unique Indo-Islamic architecture
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">19th-20th Century</div>
            <div className="timeline-content">
              <h3>Colonial & Modern Era</h3>
              <p>Cultural renaissance and independence movement leading to modern Indian cultural identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Artifacts Gallery */}
      <section className="heitage-gallery-section">
        <h2 className="section-title">Cultural Artifacts</h2>
        <div className="heitage-gallery-grid">
          {['/images/images.jpeg' , '/images/Masjid.webp' , '/images/Agra fort.webp' , '/images/Arcitecture/BadamiCaves.webp' , '/images/Thanjavur-001.png', '/images/Celestial-Woman.jpg'].map((item) => (
            <div key={item} className="heitage-gallery-item">
              <img
                src={item}
                alt={`Cultural Artifact ${item}`}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>

      </section>

      {/* Heritage Preservation */}
      <section className="preservation-section">
        <div className="preservation-content">
          <h2>Preserving Our Heritage</h2>
          <p>
            Learn about ongoing efforts to document, preserve, and promote India&apos;s cultural heritage for future
            generations.
          </p>
          <div className="preservation-stats">
            <div className="stat">
              <h3>40</h3>
              <p>UNESCO World Heritage Sites in India</p>
            </div>
            <div className="stat">
              <h3>3600+</h3>
              <p>Monuments protected by Archaeological Survey of India</p>
            </div>
            <div className="stat">
              <h3>13</h3>
              <p>Living traditions on UNESCO&aposs Intangible Cultural Heritage list</p>
            </div>
          </div>
          {/* <button className="secondary-button">Support Preservation</button> */}
        </div>
        <div className="preservation-image">
          <img src="/images/preservation.webp" alt="Heritage Preservation" width={600} height={400} />
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <h2 className="section-title">Heritage Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <Book className="resource-icon" size={40} />
            <h3>   Research Papers</h3>
            <p>Academic publications on Indian cultural heritage</p>
            <li className="resource-link">
             <a target='_blank' href="http://indianculture.gov.in/research-papers">Access Library</a> 
            </li>
          </div>
          <div className="resource-card">
            <Calendar className="resource-icon" size={40} />
            <h3>Events Calendar</h3>
            <p>Upcoming heritage walks, exhibitions and cultural events</p>
            <li className="resource-link">
              <a target='_blank' href="https://www.drikpanchang.com/calendars/indian/indiancalendar.html?lang=en">View Calendar</a>
            </li>
          </div>
          <div className="resource-card">
            <Info className="resource-icon" size={40} />
            <h3>Educational Materials</h3>
            <p>Learning resources for students and educators</p>
            <li className="resource-link">
              <a target='_blank' href="https://ddceutkal.ac.in/Syllabus/MA_history/paper-8-N.pdf">Browse Materials</a>
            </li>
          </div>
        </div>
      </section>
      
        <Footer></Footer>
    </div>
  )
}

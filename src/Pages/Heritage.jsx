import NavBar from '../Components/NavBar'
import  { useState, useEffect } from 'react';
import './Heritage.css'
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, MapPin, Book, Info } from "lucide-react"
// import { PiGreaterThanThin } from "react-icons/pi";
// import Typewriter from 'typewriter-effect';
 import { useNavigate } from 'react-router-dom';
// import ScrollUp from '../Components/ScrollUp.jsx';
import Footer from '../Components/Footer.jsx';
export default function Heritage() {
   const navigate = useNavigate();
    // const handleHome = () => {
    //     navigate('/');
    // }
    // const handleCuisine = () => {
    //     navigate('/cuisine')
    // }
    // const handleHeritage = () => {
    //     navigate('/architecture')
    // }
    // const handleYoga = () => {
    //     navigate('/yoga')
    // }
    // const handleArt = () => {
    //     navigate('/art')
    // }
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

        {/* <div className="page-1"> 
        <div className="content-right">
            <img src="/images/igate.webp" alt="" />
        </div>
            <div className="heading">               
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> Heritage</p>
            </div>
            
            <div className="content">
                <div className="content-left">
                    <span className="t">Timeless Traditions, Eternal Legacy</span>
                    <h1>Indian Heritage: A Legacy of Culture and Tradition...!</h1>

                </div> 
            </div>

        </div>
        <ScrollUp />
        <div className="page-2">
            <div className="heitageData">
                <div className="heritagecard">
                    <p>
                        India&apos;s heritage is a vibrant tapestry woven with history, culture, traditions, and diversity. Spanning thousands of years, it reflects the influence of various dynasties, religions, and civilizations that have shaped the nation. From awe-inspiring monuments like the Taj Mahal, Ajanta & Ellora Caves, and the temples of Khajuraho to the majestic forts and palaces of Rajasthan, India architectural wonders stand as timeless symbols of its glorious past.
                        The country is a spiritual hub, being the birthplace of Hinduism, Buddhism, Jainism, and Sikhism.
                    </p>
                </div>
                <div className="heritagecard">
                    <p>
                        India, with its 5,000-year-old civilization, is home to some of the world&apos;s most iconic heritage sites. These places tell the story of ancient kingdoms, architectural brilliance, cultural diversity, and spiritual traditions. From grand palaces to sacred temples, every site reflects the essence of India&apos;s rich history.
                        India’s heritage is a blend of history, architecture, nature, and traditions. From the magnificent Taj Mahal to the sacred temples of Hampi, and the forests of Kaziranga, these sites connect us to our past and inspire the future.
                    </p>
                </div>
                <div className="heritagecard">
                    <p>
                        India’s architectural heritage is a blend of spiritual, royal, and artistic excellence. From the temples of South India to the forts of Rajasthan, from Mughal palaces to Buddhist caves, every structure tells a story of India’s glorious past. These landmarks continue to inspire architects, historians, and travelers from around the world.
                        India&apos;s monuments and historical sites offer a deep dive into its royal heritage, architectural brilliance, and cultural diversity. These landmarks stand as symbols of India’s glorious past, preserving the stories of emperors, warriors, saints, and artisans.
                    </p>
                </div>
            </div>
            
           
           
           
            <div className="heading">
                <h2>
                    {
                         <Typewriter
                         onInit={(typewriter) => {
                             typewriter.typeString('India’s Glorious Heritage Categorized into the following types  : ')
                             .start();
                         }}
                      />
                      }  
                    </h2>
            </div>
            <div className="page-2-content">
                <div className="page-2-left">
    
                   
                    <h3>1.  Historic Monuments & Architecture</h3>
                    <p>India is home to magnificent architectural wonders like the Taj Mahal, Qutub Minar, Sun Temple, and Ajanta-Ellora Caves, reflecting the artistic genius of our ancestors.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. UNESCO World Heritage Sites (Taj Mahal, Qutub Minar, Hampi, etc.)</p>
                        </li>
                        <li>
                            <p>2. Temples, Forts, and Palaces (Khajuraho, Jaipur Palaces, Sun Temple)</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleHeritage}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="/images/Memorial.webp" alt="" />
                </div>
            </div>
        </div>
        
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="images/Paintings/warli-1.png" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>2.  Indian Art & Dance</h3>
                    <p>India’s art&apos;s are centuries old, deeply rooted in its diverse cultures and regional influences. They reflect the country’s history, mythology, and daily life.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Traditional Paintings</p>
                        </li>
                        <li>
                            <p>2. Classical Dance Forms (Bharatanatyam, Kathak, Odissi)</p>
                        </li>
                    </ul>
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" onClick={handleArt}>Explore</span>
                    </button>
                </div>
        
            </div>
        </div>
        <div className="page-2">
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>3.  Indian Cuisine</h3>
                    <p>Indian cuisine is diverse, flavorful, and deeply rooted in tradition. It varies by region, influenced by geography, climate, and history.</p>
                    <p>Indian cuisine blends tradition, taste, and health, making it one of the most loved cuisines worldwide! 🍽️</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Tamil Nadu – Dosa 🥞🥥</p>
                        </li>
                        <li>
                            <p>2. Maharashtra – Vada Pav 🍔🔥</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleCuisine}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="/images/HeritagePage/food.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="/images/HeritagePage/yoga.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>4.  Spirituality & Yoga</h3>
                    <p>India, the birthplace of yoga and spirituality, has practiced meditation and self-realization for over 5,000 years. Yoga, mentioned in the Rigveda and systematized by Patanjali (200 BCE), promotes physical, mental, and spiritual well-being. Rishikesh and Varanasi are key spiritual centers, and June 21 is celebrated as International Yoga Day. 🕉️</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Role of Yoga & Meditation (Ayurveda, Vipassana, Patanjali)</p>
                        </li>
                        <li>
                            <p>2. Spiritual Destinations (Varanasi, Rishikesh, Bodh Gaya)</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleYoga}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                    </button>
                </div>
        
            </div>
            
        </div> */}
        <section className="hero">
            <div className="hero-content">
                <h1>Discover India&apos;s Rich Heritage</h1>
                <p>Explore the vibrant tapestry of traditions, art, and culture spanning thousands of years</p>
                <button className="primary-button">Explore Now</button>
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
              <img src="/images/Arcitecture/architecture.webp" alt="Monuments" width={400} height={300} />
            </div>
            <h3>Monuments & Architecture</h3>
            <p>Ancient temples, forts, and palaces that showcase India&apos;s architectural brilliance</p>
            <li className="read-more" onClick={() => navigate('/architecture')}>
              Explore <ChevronRight className="icon" size={16} />
            </li>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/Paintings/Tanjore-2.jpeg" alt="Art Forms" width={400} height={300} />
            </div>
            <h3>Classical Art Forms</h3>
            <p>Traditional dance, music, and theatrical performances passed down through generations</p>
            <li className="read-more" onClick={() => navigate('/art')}>
              Explore <ChevronRight className="icon" size={16}  />
            </li>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/wild/Kaziranga.webp" alt="Handicrafts" width={400} height={300} />
            </div>
            <h3>National Parks & Wildlife</h3>
            <p>Explore Indian National Parks & Wildlife Sanctuaries, Where Conservation Comes Alive!</p>
            <li className="read-more" onClick={() => navigate('/wild')}>
              Explore <ChevronRight className="icon" size={16} />
            </li>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="/images/CuisinePage/dhokla1.jpeg" alt="Literature" width={400} height={300} />
            </div>
            <h3>Indian Cuisine</h3>
            <p>Healthy and Delicious : A Culinary Journey Through Flavors</p>
            <li className="read-more" onClick={() => navigate('/cuisine')}>
              Explore <ChevronRight className="icon" size={16}  />
            </li>
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

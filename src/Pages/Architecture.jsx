import NavBar from '../Components/NavBar'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Architecture.css'
 import { useNavigate } from 'react-router-dom';
import { ChevronRight} from "lucide-react"
import Footer from '../Components/Footer';
export default function Architecture() {
     const navigate = useNavigate();
    // const handleHome = () => {
    //     navigate('/')
    // }
    // const handleHeritage = () => {
    //     navigate('/heritage');
    // }
    // const handleSites = () => {
    //     navigate('/historicalSites');
    // }
    // const handleTemples = () => {
    //     navigate('/temples');
    // }
    // const handleCaves = () => {
    //     navigate('/caves');
    // }
    // const handleWild= () => {
    //     navigate('/wild');
    // }
    // const handleFort = () => {
    //     navigate('/forts');
    // }
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
        <section className="arch-hero">
        <div className="arch-hero-overlay">
          <h1>Monuments & Architecture</h1>
          <p>Explore the magnificent architectural heritage of India spanning centuries of cultural evolution</p>
        </div>
        <div className="arch-hero-background">
          <img
            src="/images/Agra fort.webp"
            alt="Indian Architecture"
            width={1600}
            height={600}
            className="arch-hero-bg-image"
          />
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/heritage">Heritage</Link>
            </li>
            <li>Monuments & Architecture</li>
          </ul>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="arch-container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Ancient Marvels of Engineering & Artistry</h2>
              <p>
                India&apos;s architectural heritage stands as a testament to its rich cultural diversity and historical
                depth. From ancient rock-cut caves to medieval forts and temples, and from colonial structures to modern
                marvels, Indian architecture displays a remarkable continuity while adapting to changing aesthetic
                sensibilities, cultural influences, and technological innovations.
              </p>
              <p>
                These monuments not only showcase the artistic and engineering genius of their creators but also serve
                as windows into the social, religious, and political dimensions of their times.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <h3>3,600+</h3>
                  <p>Protected Monuments</p>
                </div>
                <div className="stat-item">
                  <h3>5,000+</h3>
                  <p>Years of Architectural History</p>
                </div>
                <div className="stat-item">
                  <h3>40</h3>
                  <p>UNESCO World Heritage Sites</p>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img
                src="/images/Memorial.webp"
                alt="Indian Architecture History"
                width={700}
                height={500}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="arch-styles">
        <div className="arch-container">
          <h2 className="arch-section-title">Major Architectural Styles</h2>
          <div className="arch-styles-grid">


            <div className="arch-style-card">
              <div className="arch-style-image">
                <img
                  src="/images/Temples/Badrinath1.jpg"
                  alt="Dravidian Architecture"
                  width={450}
                  height={350}
                />
              </div>
              <div className="arch-style-content">
                <h3>Temples & Religious Heritage</h3>
                <p>
                 Hindu temples evolved over centuries, featuring intricate carvings, towering gateways, and elaborate sanctuaries. Indian temples are not just places of worship but also masterpieces of art and engineering.
                </p>
                <ul className="arch-style-features">
                  <li>Horizontally stepped pyramidal towers</li>
                  <li>Huge temple complexes with multiple courtyards</li>
                  <li>Examples: Brihadeshwara Temple, Meenakshi Temple</li>
                </ul>
                <p onClick={() => navigate('/temples')} className="learn-more">
                  Explore Style <ChevronRight className="icon" size={16} />
                </p>
              </div>
            </div>

            <div className="arch-style-card">
              <div className="arch-style-image">
                <img
                  src="/images/Charminar.webp"
                  alt="Indo-Islamic Architecture"
                  width={450}
                  height={350}
                />
              </div>
              <div className="arch-style-content">
                <h3>Monuments & Historical Sites</h3>
                <p>
                    India has been home to powerful empires, leaving behind majestic forts, tombs, and palaces that showcase architectural excellence
                </p>
                <ul className="arch-style-features">
                  <li>Domes, arches, and minarets</li>
                  <li>Ornate calligraphy and geometric patterns</li>
                  <li>Examples: Taj Mahal, Qutub Minar, Fatehpur Sikri</li>
                </ul>
                <Link href="/monuments/indo-islamic" className="learn-more">
                  Explore Style <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div>

            <div className="arch-style-card">
              <div className="arch-style-image">
                <img
                  src="/images/Ajintha.webp"
                  alt="Rock-Cut Architecture"
                  width={450}
                  height={350}
                />
              </div>
              <div className="arch-style-content">
                <h3>Rock-Cut Architecture</h3>
                <p>Structures carved out of solid rock faces, including caves, temples, and monasteries.</p>
                <ul className="arch-style-features">
                  <li>Monolithic structures carved from top to bottom</li>
                  <li>Elaborate sculptures and pillared halls</li>
                  <li>Examples: Ajanta and Ellora Caves, Elephanta Caves</li>
                </ul>
                <Link href="/monuments/rock-cut" className="learn-more">
                  Explore Style <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div>

            <div className="arch-style-card">
              <div className="arch-style-image">
                <img
                  src="/images/Hawa.webp"
                  alt="Colonial Architecture"
                  width={450}
                  height={350}
                />
              </div>
              <div className="arch-style-content">
                <h3>Colonial Architecture</h3>
                <p>Structures built during the British colonial period, often blending European and Indian styles.</p>
                <ul className="arch-style-features">
                  <li>Neo-Gothic, Neo-Classical, and Indo-Saracenic designs</li>
                  <li>Monumental public buildings and churches</li>
                  <li>Examples: Victoria Memorial, Gateway of India</li>
                </ul>
                <Link href="/monuments/colonial" className="learn-more">
                  Explore Style <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div>

            <div className="arch-style-card">
              <div className="arch-style-image">
                <img
                  src="/images/forts/jaislmer.webp"
                  alt="Vernacular Architecture"
                  width={450}
                  height={350}
                />
              </div>
              <div className="arch-style-content">
                <h3>Indian Heritage Forts</h3>
                <p>
                    Forts in India stand as symbols of power, resilience, and architectural brilliance, built by different dynasties over centuries. These forts were not just military strongholds but also centers of culture, trade, and governance.
                </p>
                <ul className="arch-style-features">
                  <li>Exapmles : Raigad Fort (Capital of the Maratha Empire)</li>
                  <li>Red Fort</li>
                </ul>
                <Link href="/monuments/vernacular" className="learn-more">
                  Explore Style <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Timeline */}
      <section className="timeline-section">
        <div className="arch-container">
          <h2 className="section-title">Evolution of Indian Architecture</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">3300-1300 BCE</div>
              <div className="timeline-content">
                <h3>Indus Valley Civilization</h3>
                <p>
                  Urban planning with grid-based streets, advanced drainage systems, public baths, and granaries.
                  Notable sites include Mohenjo-daro and Harappa.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">600 BCE-200 CE</div>
              <div className="timeline-content">
                <h3>Early Rock-Cut Architecture</h3>
                <p>
                  Buddhist caves and chaitya halls. Notable examples include Barabar Caves, early Ajanta Caves, and
                  Karla Caves.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">320-550 CE</div>
              <div className="timeline-content">
                <h3>Gupta Period</h3>
                <p>
                  Development of early structural temples and continued evolution of rock-cut architecture. Examples
                  include Dashavatara Temple at Deogarh and later Ajanta Caves.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">600-1200 CE</div>
              <div className="timeline-content">
                <h3>Mature Temple Architecture</h3>
                <p>
                  Distinct regional styles emerge - Nagara in North India, Dravidian in South India, and Vesara in the
                  Deccan. Notable examples include Khajuraho Temples, Brihadeshwara Temple.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">1200-1526 CE</div>
              <div className="timeline-content">
                <h3>Delhi Sultanate Period</h3>
                <p>
                  Introduction of Islamic architectural elements - arches, domes, minarets blended with Indian
                  traditions. Examples include Qutub Minar, Alai Darwaza.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">1526-1857 CE</div>
              <div className="timeline-content">
                <h3>Mughal Period</h3>
                <p>
                  Synthesis of Persian and Indian styles creating a distinct Indo-Islamic aesthetic. Examples include
                  Taj Mahal, Red Fort, Fatehpur Sikri.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">1757-1947 CE</div>
              <div className="timeline-content">
                <h3>Colonial Period</h3>
                <p>
                  European architectural styles adapted to Indian context. Neo-Classical, Neo-Gothic, and Indo-Saracenic
                  styles emerge. Examples include Victoria Memorial, Gateway of India.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Post 1947</div>
              <div className="timeline-content">
                <h3>Modern & Contemporary</h3>
                <p>
                  Modernist architecture with Indian influences. Works by architects like Charles Correa, B.V. Doshi,
                  and Raj Rewal blend international modernism with Indian traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monuments by Region */}
      {/* <section className="monuments-by-region">
        <div className="container">
          <h2 className="section-title">Monuments By Region</h2>
          <div className="region-map">
            <div className="map-container">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="India Map"
                width={800}
                height={600}
                className="india-map"
              />
            </div>
            <div className="region-list">
              <div className="region-item">
                <h3>North India</h3>
                <ul>
                  <li>
                    <Link href="/region/delhi">Delhi & NCR</Link>
                  </li>
                  <li>
                    <Link href="/region/rajasthan">Rajasthan</Link>
                  </li>
                  <li>
                    <Link href="/region/uttar-pradesh">Uttar Pradesh</Link>
                  </li>
                  <li>
                    <Link href="/region/himachal">Himachal & Uttarakhand</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>South India</h3>
                <ul>
                  <li>
                    <Link href="/region/tamil-nadu">Tamil Nadu</Link>
                  </li>
                  <li>
                    <Link href="/region/karnataka">Karnataka</Link>
                  </li>
                  <li>
                    <Link href="/region/kerala">Kerala</Link>
                  </li>
                  <li>
                    <Link href="/region/andhra-telangana">Andhra Pradesh & Telangana</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>East & North-East</h3>
                <ul>
                  <li>
                    <Link href="/region/west-bengal">West Bengal</Link>
                  </li>
                  <li>
                    <Link href="/region/odisha">Odisha</Link>
                  </li>
                  <li>
                    <Link href="/region/bihar">Bihar & Jharkhand</Link>
                  </li>
                  <li>
                    <Link href="/region/northeast">North-Eastern States</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>West & Central</h3>
                <ul>
                  <li>
                    <Link href="/region/maharashtra">Maharashtra</Link>
                  </li>
                  <li>
                    <Link href="/region/gujarat">Gujarat</Link>
                  </li>
                  <li>
                    <Link href="/region/madhya-pradesh">Madhya Pradesh</Link>
                  </li>
                  <li>
                    <Link href="/region/goa">Goa</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Conservation Efforts */}
      <section className="conservation">
        <div className="arch-container">
          <div className="conservation-grid">
            <div className="conservation-content">
              <h2>Conservation & Preservation</h2>
              <p>
                India&apos;s architectural treasures face numerous challenges including weathering, pollution, urbanization,
                and neglect. Various organizations work tirelessly to preserve these monuments for future generations.
              </p>
              <div className="conservation-orgs">
                <div className="org-item">
                  <h3>Archaeological Survey of India (ASI)</h3>
                  <p>
                    The primary organization responsible for the protection and conservation of India&apos;s monumental
                    heritage, managing over 3,600 protected monuments.
                  </p>
                </div>
                <div className="org-item">
                  <h3>INTACH</h3>
                  <p>
                    The Indian National Trust for Art and Cultural Heritage works to protect and conserve India&apos;s
                    natural, cultural, living, movable and immovable heritage.
                  </p>
                </div>
                <div className="org-item">
                  <h3>UNESCO World Heritage Centre</h3>
                  <p>Provides technical support for the preservation of World Heritage Sites in India.</p>
                </div>
              </div>
              {/* <Link href="/conservation" className="primary-button">
                Learn About Conservation Efforts
              </Link> */}
            </div>
            <div className="conservation-image">
              <img
                src="/images/monuments.webp"
                alt="Monument Conservation"
                width={700}
                height={500}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery-section">
        <div className="arch-container">
          <h2 className="section-title">Architectural Gallery</h2>
          <div className="gallery-grid">
            {['/images/igate.webp', '/images/kutubMinar.webp', '/images/Masjid.webp', '/images/IndiaGate.webp', '/images/Gumbaz.webp', '/images/Rashtrapati-Bhavan.webp', '/images/TajMahal.webp', '/images/Church.webp', '/images/csmt.webp'].map((item) => (
              <div key={item} className="gallery-item">
                <img
                  src={item}
                  alt={`Indian Monument ${item}`}
                  width={400}
                  height={300}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
          {/* <div className="gallery-cta">
            <button className="primary-button">View All Photos</button>
          </div> */}
        </div>
      </section>

      {/* Virtual Tours */}
      {/* <section className="virtual-tours">
        <div className="arch-container">
          <h2 className="section-title">Virtual Experiences</h2>
          <div className="tours-content">
            <p className="tours-intro">
              Experience India&apos;s architectural wonders from anywhere in the world through our immersive virtual tours.
            </p>
          </div>
          <div className="tours-grid">
            <div className="tour-card">
              <div className="tour-image">
                <img
                  src="/placeholder.svg?height=350&width=500"
                  alt="Taj Mahal Virtual Tour"
                  width={500}
                  height={350}
                />
                <div className="tour-badge">360° Tour</div>
              </div>
              <div className="tour-details">
                <h3>Taj Mahal</h3>
                <p>Explore the ivory-white marble mausoleum in this immersive virtual experience</p>
                <Link href="/virtual-tours/taj-mahal" className="secondary-button">
                  Start Tour <Globe className="icon" size={16} />
                </Link>
              </div>
            </div>
            <div className="tour-card">
              <div className="tour-image">
                <img src="/placeholder.svg?height=350&width=500" alt="Hampi Virtual Tour" width={500} height={350} />
                <div className="tour-badge">360° Tour</div>
              </div>
              <div className="tour-details">
                <h3>Hampi</h3>
                <p>Walk through the ruins of the Vijayanagara Empire with detailed historical context</p>
                <Link href="/virtual-tours/hampi" className="secondary-button">
                  Start Tour <Globe className="icon" size={16} />
                </Link>
              </div>
            </div>
            <div className="tour-card">
              <div className="tour-image">
                <img
                  src="/placeholder.svg?height=350&width=500"
                  alt="Ajanta Caves Virtual Tour"
                  width={500}
                  height={350}
                />
                <div className="tour-badge">360° Tour</div>
              </div>
              <div className="tour-details">
                <h3>Ajanta Caves</h3>
                <p>Discover the ancient Buddhist cave monuments with their paintings and sculptures</p>
                <Link href="/virtual-tours/ajanta" className="secondary-button">
                  Start Tour <Globe className="icon" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Plan Your Visit */}
      {/* <section className="plan-visit">
        <div className="arch-container">
          <h2 className="section-title">Plan Your Visit</h2>
          <div className="visit-grid">
            <div className="visit-card">
              <div className="visit-icon">
                <Calendar className="big-icon" size={48} />
              </div>
              <h3>Best Times to Visit</h3>
              <p>Learn about the optimal seasons and times to visit different monuments across India</p>
              <Link href="/visit/best-times" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
            <div className="visit-card">
              <div className="visit-icon">
                <Info className="big-icon" size={48} />
              </div>
              <h3>Visitor Guidelines</h3>
              <p>Important information about entry fees, photography permissions, and etiquette</p>
              <Link href="/visit/guidelines" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
            <div className="visit-card">
              <div className="visit-icon">
                <MapPin className="big-icon" size={48} />
              </div>
              <h3>Heritage Trails</h3>
              <p>Curated itineraries for exploring monuments in different regions of India</p>
              <Link href="/visit/trails" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Resources Section */}
      {/* <section className="resources-section">
        <div className="arch-container">
          <h2 className="section-title">Resources & References</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Books & Publications</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/books">Indian Temple Architecture: Form and Transformation</Link>
                </li>
                <li>
                  <Link href="/resources/books">Mughal Architecture: An Outline of Its History and Development</Link>
                </li>
                <li>
                  <Link href="/resources/books">Architecture of the Indian Subcontinent</Link>
                </li>
                <li>
                  <Link href="/resources/books">Temple Architecture and Art of the Early Chalukyas</Link>
                </li>
                <li>
                  <Link href="/resources/books">View All Publications</Link>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Academic Research</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/research">Conservation Techniques for Historic Structures</Link>
                </li>
                <li>
                  <Link href="/resources/research">Symbolism in Indian Architecture</Link>
                </li>
                <li>
                  <Link href="/resources/research">Mapping Heritage Sites: GIS Applications</Link>
                </li>
                <li>
                  <Link href="/resources/research">Traditional Building Materials of India</Link>
                </li>
                <li>
                  <Link href="/resources/research">View All Research</Link>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Educational Materials</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/education">Architectural Styles Guide for Students</Link>
                </li>
                <li>
                  <Link href="/resources/education">History of Indian Architecture Timeline</Link>
                </li>
                <li>
                  <Link href="/resources/education">Monument Preservation Awareness</Link>
                </li>
                <li>
                  <Link href="/resources/education">Heritage Site Field Trip Resources</Link>
                </li>
                <li>
                  <Link href="/resources/education">View All Educational Materials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 */}


        {/* <div className="page-1"> 
        <div className="content-right">
            <img src="/images/TajMahal.webp" alt="" />
        </div>
            <div className="heading">
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/>Historic Monuments & Architecture</p>
            </div>
            <div className="content">
                <div className="content-left">
                    <span className="t">Timeless Treasures</span>
                    <h1>Exploring India&apos;s Glorious Heritage Through Its Monuments...!</h1>
                   
                </div>
            </div>

        </div>
        <ScrollUp />
        <div className="page-2">
            <div className="heitageData">
                <div className="heritagecard">
                    <p>India&apos;s historic monuments and architecture are a testament to its cultural diversity and artistic excellence. From ancient rock-cut caves to Mughal masterpieces and colonial landmarks, each structure tells a unique story of the past. These sites are not only tourist attractions but also symbols of India has rich heritage, making them essential elements for your website on Cultural and Heritage Aspects of India.</p>
                </div>
                <div className="heritagecard">
                    <p>India is home to some of the worlds most magnificent historic monuments and architectural wonders, reflecting its rich and diverse cultural heritage. These structures, built over thousands of years, showcase the artistic excellence, engineering brilliance, and religious influences of different eras and dynasties. From ancient temples and rock-cut caves to grand forts and Mughal palaces, Indias architecture is a blend of indigenous styles and foreign influences. Below is a detailed explanation of the key architectural styles and significant historic monuments in India.</p>
                </div>
                <div className="heritagecard">
                    <p>India, with its vast history spanning thousands of years, is home to some of the most remarkable monuments and historical sites in the world. These structures not only showcase India’s architectural brilliance but also serve as a testament to its rich cultural, religious, and political history. Many of these sites have been recognized as UNESCO World Heritage Sites, attracting millions of visitors every year.</p>
                </div>
            </div>
            <div className="heading">
                <h2>
                    {
                         <Typewriter
                         onInit={(typewriter) => {
                             typewriter.typeString("Indian Heritage Places – A Glorious Legacy 🏛️✨  : ")
                             .start();
                         }}
                      />
                      }  
                    </h2>
            </div>
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>🏰 1. Monuments & Historical Sites : </h3>
                    <p>India has been home to powerful empires, leaving behind majestic forts, tombs, and palaces that showcase architectural excellence</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>A. Taj Mahal (Agra, Uttar Pradesh) - A symbol of love, this white marble wonder was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.</p>
                        </li>
                        <li>
                            <p>B. Red Fort (Delhi) - A Mughal fort famous for its massive walls, historical importance, and Independence Day celebrations.</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleSites}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="/images/TajMahal.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="/images/konark-sun-temple-odisha.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>🛕 2. Temples & Religious Heritage</h3>
                    <p>Hindu temples evolved over centuries, featuring intricate carvings, towering gateways, and elaborate sanctuaries. Indian temples are not just places of worship but also masterpieces of art and engineering.:</p>
                   
                    <ul>
                        <li>
                            <p>A. Konark Sun Temple (Odisha) – A temple shaped like a chariot, dedicated to the Sun God Surya.</p>
                        </li>
                        <li>
                            <p>B. Khajuraho Temples (Madhya Pradesh) – Famous for their detailed sculptures, including erotic carvings.</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleTemples}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                    </button>
                </div>
        
            </div>
        </div>
        <div className="page-2">
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>⛰️ 3. Cave Temples & Rock-Cut Architecture</h3>
                    <p>India’s ancient cave temples are marvels of engineering, carved directly into rock formations.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>A. Ajanta Caves (Maharashtra) – A series of Buddhist caves filled with mesmerizing paintings and sculptures.</p>
                        </li>
                        <li>
                            <p>B. Ellora Caves (Maharashtra) – A collection of Hindu, Jain, and Buddhist temples, including the grand Kailasa Temple.</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleCaves}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="/images/EloraCaves.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="/images/Arcitecture/park.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>🌳 4. Natural Heritage & Wildlife Sanctuaries</h3>
                    <p>India’s biodiversity is protected in various national parks and sanctuaries, some of which are UNESCO-listed.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>A. Kaziranga National Park (Assam) – Home to the world’s largest population of one-horned rhinoceroses.</p>
                        </li>
                        <li>
                            <p>B. Valley of Flowers (Uttarakhand) – A stunning high-altitude meadow filled with rare Himalayan flowers.</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleWild}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                    </button>
                </div>
        
            </div>
        </div>
        <div className="page-2">
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>🏰 5. Indian Heritage Forts – Guardians of History</h3>
                    <p>Forts in India stand as symbols of power, resilience, and architectural brilliance, built by different dynasties over centuries. These forts were not just military strongholds but also centers of culture, trade, and governance.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>🔹 1. Raigad Fort (Capital of the Maratha Empire)</p>
                        </li>
                        <li>
                            <p>🔹 2. Sinhagad Fort</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleFort}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="/images/FortImages/Raigad.webp" alt="" />
                </div>
            </div>
        </div> */}
        <Footer></Footer>
        {/* <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="/images/Arcitecture/Statue.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>6. Modern Indian Architecture (Post-Independence)</h3>
                    <p>In the 20th and 21st centuries, India embraced contemporary and futuristic architecture while preserving traditional elements.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>A. Lotus Temple (Delhi) – A temple shaped like a lotus flower.</p>
                        </li>
                        <li>
                            <p>B. Akshardham Temple (Delhi) – A grand Hindu temple showcasing intricate carvings.</p>
                        </li>
                        <li>
                            <p>C. Statue of Unity (Gujarat) – The world’s tallest statue, honoring Sardar Vallabhbhai Patel.</p>
                        </li>
                    </ul>
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                    </button>
                </div>
        
            </div>
        </div> */}
    </div>
  )
}

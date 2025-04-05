import  { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../Components/NavBar';
import { ChevronRight, MapPin } from "lucide-react"
import Footer from '../Components/Footer';
// import ImageSlider from '../Components/ImageSlider';
// import SetDate from '../Components/SetDate.jsx';
// import Typewriter from 'typewriter-effect';
import {  useNavigate } from 'react-router-dom';

//  import ScrollUp from '../Components/ScrollUp.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const handleMusic = () => {
  //   navigate('/music');
  // }
  // const handleArch = () => {
  //   navigate('/architecture');
  // }
  // const handleDance = () => {
  //   navigate('/art');
  // }
  // const handleDress = () => {
  //   navigate('/cultural');
  // }
  // const handleForts = () => {
  //   navigate('/forts');
  // }
  // const handleLang = () => {
  //   navigate('/language');
  // }
  const handleHeritage = () => {
    navigate('/heritage');
  }
  const handleFest = () => {
    navigate('/festivals')
  }

  useEffect(() => {
    const loadData = async () => {
      // Simulate data loading
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className="home-container">
      <div className="nav">
        <NavBar />
      </div>
      {/* <div className="page1">
        <div className="Slide-Img">
          <ImageSlider />
        </div>
      </div>
      <div className="page2">
        <div className="page2-content">
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Traditional Music of India 🎶...!');
                typewriter.start();
              }}
            />
          </h2>
          <div className="page-2-container">
            <div className="page2-left">
              <p>
              ndia has a rich and diverse musical heritage that spans classical, folk, and devotional traditions. Indian music is deeply rooted in spirituality, culture, and storytelling, with distinct styles evolving across different regions.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text" onClick={handleMusic}>Explore</span>
              </button>
            </div>
            <div className="page2-right">
              <figure>
                <img src="/images/Music/indian-1.jpg" alt="" />
                <figcaption><a href="https://commons.wikimedia.org/wiki/File:An_Indian_classical_music_performance.jpg">Karen Blaha from Charlottesville, VA</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>, via Wikimedia Commons</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
        <ScrollUp />
      <div className="set-date-container">
        <SetDate />
      </div>
      <div className="page3">
        <div className="page3-content">
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('✅ Architectural Marvels in India...!');
                typewriter.start();
              }}
            />
          </h2>
          <div className="page-3-container">
            <div className="page3-left">
              <img src="/images/BG/page3-1.webp" alt="" />
            </div>
            <div className="page3-right">
              <p>
                India is architectural heritage is a reflection of its rich history,
                cultural diversity, and artistic excellence. From grand temples and
                majestic forts to intricate cave carvings and colonial-era
                structures, Indian architecture tells the story of ancient
                civilizations, mighty empires, and spiritual traditions.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text" onClick={handleArch}>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="page4">
        <div className="page4-content">
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('✅ Explore more...!');
                typewriter.start();
              }}
            />
          </h2>
            <div className="home-card">
                <p><span><img src="/images/Languages/language-1.png" alt="" onClick={handleLang} /> 
                <div className="home-card-text">
                  <p>Language</p>
                </div></span></p>
                <p><span><img src="/images/dress.webp" alt="" onClick={handleDress} />
                <div className="home-card-text">
                  <p>Traditional Dress</p>
                </div></span></p>
                <p><span><img src="/images/Music/Folk-1.jpg" alt="" onClick={handleMusic} />
                <div className="home-card-text">
                  <p>Traditional Music</p>
                </div></span></p>
                <p><span><img src="/images/forts/jaislmer.webp" alt="" onClick={handleForts} />
                <div className="home-card-text">
                  <p>Forts</p>
                </div></span></p>
                <p><span><img src="/images/Dance/Lavani-1.jpg" alt="" onClick={handleDance} />
                <div className="home-card-text">
                  <p>Traditional Dance</p>
                </div></span></p>
          </div>
          
        </div>
      </div> */}
      
       <main className="main">
        <section className="hero-section">
          <div className="hero-background">
            {/* <img
              src="images/TajMahal.webp"
              alt="Indian Heritage Background"
              className="hero-image"
            /> */}
            <div className="hero-overlay" />
          </div>
          <div className="container hero-container">
            <div className="hero-content">
              <div className="badge orange-badge">Discover India&apos;s Rich Heritage</div>
              <h1 className="hero-title">
                Explore the Vibrant Culture of <span className="highlight">India</span>
              </h1>
              <p className="hero-description">
                Journey through thousands of years of tradition, art, architecture, and spiritual wisdom that have
                shaped one of the world&apos;s oldest civilizations.
              </p>
              <div className="button-group">
                <button className="btn primary-btn btn-lg" onClick={handleHeritage}>
                  Start Exploring
                  <ChevronRight className="btn-icon" />
                </button>
                <a href="https://youtu.be/VxG4MgN7P7k?si=VmAUo4IPe7EI_J2z">
                  <button className="btn outline-btn btn-lg">Watch Video</button>
                </a>
                
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <div className="circle-animation green-circle" />
                <div className="circle-animation blue-circle" />
                <div className="circle-animation dashed-circle" />
                <div className="hero-featured-image">
                  <img
                    src="/images/bgBanner.webp"
                    alt="Taj Mahal"
                    width={400}
                    height={400}
                    className="featured-image"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section className="highlights-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Cultural Highlights</h2>
              <p className="section-description">
                Discover the diverse aspects of Indian culture that have fascinated the world for centuries
              </p>
            </div>
            <div className="highlights-grid">
              {[
                {
                  title: "Classical Dance",
                  description: "From Bharatanatyam to Kathak, explore India's classical dance forms",
                  image: "images/Dance/Kathakali-1.jpg",
                  path : "/art"
                },
                {
                  title: "Ancient Architecture",
                  description: "Marvel at the intricate designs of temples, forts, and palaces",
                  image: "/images/forts/jaislmer.webp",
                  path : "/architecture"
                },
                {
                  title: "Spirituality & Yoga",
                  description: "Inner peace, self-awareness, mindfulness, balance, and enlightenment.",
                  image: "/images/Yoga/banner-2.jpg",
                  path : "/yoga"
                },
                {
                  title: "Melodies of India",
                  description: "Melodic ragas, rhythmic talas, soulful expression.",
                  image: "/images/Music/Folk-1.jpg",
                  path : "/music"
                },
              ].map((item, index) => (
                <div key={index} className="card highlight-card">
                  <div className="card-image-container">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="card-image"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                    <li className="link-with-icon" onClick={() => navigate(item.path)}>
                      Learn more
                      <ChevronRight className="link-icon" />
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        <section className="festivals-section">
          <div className="container">
            <div className="two-column-grid">
              <div className="image-column">
                <img
                  src="/images/Festivals/ganesh-4.webp"
                  alt="Festival celebration"
                  width={800}
                  height={600}
                  className="rounded-image"
                />
              </div>
              <div className="content-column">
                <div className="badge orange-badge">Festivals of India</div>
                <h2 className="section-title">Celebrate the Colors of India</h2>
                <p className="section-description">
                  India is known as the land of festivals, with celebrations occurring throughout the year. Each
                  festival has its unique customs, rituals, and significance, reflecting the country&apos;s cultural
                  diversity.
                </p>
                <ul className="festival-list">
                  {[
                    "Diwali - Festival of Lights",
                    "Holi - Festival of Colors",
                    "Navratri - Nine Nights of Dance",
                    "Ganesh Chaturthi - Festival of Lights",
                    "Durga Puja - Worship of Goddess Durga",
                  ].map((festival, index) => (
                    <li key={index} className="festival-item">
                      <div className="festival-icon">
                        <ChevronRight className="icon-small" />
                      </div>
                      <span>{festival}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn primary-btn" onClick={handleFest}>Explore Festivals</button>
              </div>
            </div>
          </div>
        </section>

        <section className="destinations-section">
          <div className="container destinations-container">
            <div className="destinations-overlay" />
            <div className="destinations-content">
              <h2 className="section-title light">Explore India&apos;s Cultural Destinations</h2>
              <p className="section-description light">
                From the majestic Himalayas to the serene backwaters of Kerala, discover the diverse landscapes that
                have shaped India&apos;s cultural identity
              </p>
              <div className="destinations-grid">
                {[
                  {
                    place: "Temples",
                    description: "Where Spirituality Meets Heritage",
                    path : "/temples",
                  },
                  {
                    place: "Caves",
                    description: "Timeless Echoes of Art, Faith, and History.",
                    path : "/caves",
                  },
                  {
                    place: "Wildlife ",
                    description: "Popular National Parks in India",
                    path : "/wild",
                  },
                ].map((destination, index) => (
                  <div key={index} className="destination-card" onClick={() => navigate(destination.path)}>
                    <div className="destination-header">
                      <MapPin className="destination-icon" />
                      <h3 className="destination-title">{destination.place}</h3>
                    </div>
                    <p className="destination-description">{destination.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Upcoming Cultural Events</h2>
              <p className="section-description">
                Join us in celebrating and preserving India&apos;s rich cultural heritage
              </p>
            </div>
            <div className="events-grid">
              {[
                {
                  title: "Shree Krishna Rukmini Vivah Satkar Samaroh",
                  date: "April 10, 2025",
                  location: "Dwarka , Gujarat",
                  image: "/images/krishna.jpg",
                },
                {
                  title: "World Music Day",
                  date: "June 21, 2025",
                  location: "Chandigarh",
                  image: "/images/music.jpg",
                },
                {
                  title: "Global Wildlife Fair",
                  date: "Oct 10-12, 2025",
                  location: "New Delhi",
                  image: "/images/wildlife.jpeg",
                },
              ].map((event, index) => (
                <div key={index} className="card event-card">
                  <div className="card-image-container event-image-container">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="card-image"
                    />
                  </div>
                  <div className="card-content">
                    <div className="event-meta">
                      <span>{event.date}</span>
                      <span className="meta-separator">•</span>
                      <span>{event.location}</span>
                    </div>
                    <h3 className="card-title">{event.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
      <Footer></Footer>
      {/* <footer className="footer">
        <div className="container footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <Link href="/" className="logo">
                <div className="logo-icon">
                  <div className="logo-text">भा</div>
                </div>
                <span>भारतीय संस्कृति</span>
              </Link>
              <p className="footer-description">Celebrating and preserving the rich cultural heritage of India</p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li className="footer-link" >
                    Home
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#" className="footer-link">
                    Classical Arts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Festivals & Celebrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Heritage Sites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Traditional Crafts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Indian Cuisine
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Connect With Us</h3>
              <div className="contact-info">
                <p className="contact-text">Email: info@indianculture.org</p>
                <p className="contact-text">Phone: +91 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} Indian Culture & Heritage. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

    </div>
  );
};

export default Home;
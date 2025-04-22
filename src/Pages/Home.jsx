import  { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../Components/NavBar';
import { ChevronRight, MapPin } from "lucide-react"
import Footer from '../Components/Footer';

import {  useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleHeritage = () => {
    navigate('/heritage');
  }
  const handleFest = () => {
    navigate('/festivals')
  }

  useEffect(() => {
    const loadData = async () => {
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
     
      
       <main className="main">
        <section className="hero-section">
          <div className="hero-background">
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
                  description: "Bharatanatyam to Kathak, explore India's classical dance forms",
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
                  description: "Inner peace, self-awareness, mindfulness, and enlightenment.",
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
                  className="rounded-image1"
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

    </div>
  );
};

export default Home;

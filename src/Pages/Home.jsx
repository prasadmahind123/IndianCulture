import  { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../Components/NavBar';
import ImageSlider from '../Components/ImageSlider';
import SetDate from '../Components/SetDate.jsx';
import Typewriter from 'typewriter-effect';
import { Page4Buttons } from '../Data/Page4Buttons.jsx';
import { useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/ScrollUp.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const handleMusic = () => {
    navigate('/music');
  }
  const handleArch = () => {
    navigate('/architecture');
  }
  const handleDance = () => {
    navigate('/art');
  }
  const handleDress = () => {
    navigate('/cultural');
  }
  const handleForts = () => {
    navigate('/forts');
  }
  const handleLang = () => {
    navigate('/language');
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
    <div className="Home-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="page1">
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
      </div>
    </div>
  );
};

export default Home;

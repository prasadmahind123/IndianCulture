import NavBar from '../Components/NavBar'
import  { useState, useEffect } from 'react';
import './Heritage.css'
import { PiGreaterThanThin } from "react-icons/pi";
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/Scrollup';
export default function Heritage() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    const handleCuisine = () => {
        navigate('/cuisine')
    }
    const handleHeritage = () => {
        navigate('/architecture')
    }
    const handleYoga = () => {
        navigate('/yoga')
    }
    const handleArt = () => {
        navigate('/art')
    }
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

        <div className="page-1"> 
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
            
        </div>
    </div>
  )
}

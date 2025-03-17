import NavBar from '../Components/NavBar'
import { PiGreaterThanThin } from "react-icons/pi";
import Typewriter from 'typewriter-effect';
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/ScrollUp';
export default function Architecture() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    const handleHeritage = () => {
        navigate('/heritage');
    }
    const handleSites = () => {
        navigate('/historicalSites');
    }
    const handleTemples = () => {
        navigate('/temples');
    }
    const handleCaves = () => {
        navigate('/caves');
    }
    const handleWild= () => {
        navigate('/wild');
    }
    const handleFort = () => {
        navigate('/forts');
    }
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
        <div className="page-1"> 
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
        <p>
                        India’s historic monuments and architecture are a testament to its cultural diversity and artistic excellence. From ancient rock-cut caves to Mughal masterpieces and colonial landmarks, each structure tells a unique story of the past. These sites are not only tourist attractions but also symbols of India has rich heritage, making them essential elements for your website on Cultural and Heritage Aspects of India.
                   </p>
                   <p>
                        India is home to some of the worlds most magnificent historic monuments and architectural wonders, reflecting its rich and diverse cultural heritage. These structures, built over thousands of years, showcase the artistic excellence, engineering brilliance, and religious influences of different eras and dynasties.

                        From ancient temples and rock-cut caves to grand forts and Mughal palaces, Indias architecture is a blend of indigenous styles and foreign influences. Below is a detailed explanation of the key architectural styles and significant historic monuments in India.
                   </p>
                   <p>
                   India, with its vast history spanning thousands of years, is home to some of the most remarkable monuments and historical sites in the world. These structures not only showcase India’s architectural brilliance but also serve as a testament to its rich cultural, religious, and political history. Many of these sites have been recognized as UNESCO World Heritage Sites, attracting millions of visitors every year.
                   </p>
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
        </div>
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

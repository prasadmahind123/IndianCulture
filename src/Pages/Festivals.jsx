import NavBar from '../Components/NavBar';
import './Festival.css'
import { Link  } from 'react-router-dom';
import { FestivalData } from '../Data/FestivalData';
import { useEffect , useState } from 'react';
import Footer from '../Components/Footer';
import { ChevronRight, Calendar, MapPin, Clock, Info, Music, Utensils , Atom} from "lucide-react"

export default function Festivals() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
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
    <div className="heritage">
        <div className="nav">
            <NavBar />
        </div>
        <section className="fest-hero">
  <div className="fest-hero-background">
    <img
      src="/images/Festivals/home-banner.webp"
      alt="Indian Festivals"
      width={1600}
      height={600}
      className="fest-hero-bg-image"
    />
  </div>
  <div className="fest-hero-overlay">
    <div className="fest-hero-text">
      <h1>Indian Festivals</h1>
      <p>Experience the vibrant colors, joyous celebrations, and rich traditions of India&apos;s diverse festivals</p>
    </div>
  </div>
</section>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <div className="fest-container">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Festivals</li>
          </ul>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="fest-introduction">
        <div className="fest-container">
          <div className="fest-intro-grid">
            <div className="fest-intro-content">
              <h2>Celebrating India&apos;s Cultural Diversity</h2>
              <p>
                India, a land of diverse cultures and traditions, celebrates numerous festivals throughout the year.
                These festivals reflect the country&apos;s rich cultural heritage, religious diversity, and historical
                significance. From the colorful Holi to the luminous Diwali, from the harvest celebrations to religious
                observances, Indian festivals are a vibrant tapestry of the nation&apos;s soul.
              </p>
              <p>
                Each festival has its unique customs, rituals, and significance, often varying across different regions
                of the country. These celebrations bring communities together, strengthen social bonds, and pass down
                cultural traditions from one generation to the next.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Festivals Celebrated</p>
                </div>
                <div className="stat-item">
                  <h3>29</h3>
                  <p>States with Unique Celebrations</p>
                </div>
                <div className="stat-item">
                  <h3>365</h3>
                  <p>Days of Festivities</p>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img
                src="/images/Festivals/holi-1.jpg"
                alt="Indian Festival Celebration"
                width={700}
                height={500}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals Calendar */}
      <section className="festival-calendar">
        <div className="fest-container">
          <h2 className="section-title">Upcoming Festivals</h2>
          <div className="calendar-wrapper">
            <div className="calendar-grid">
              <div className="calendar-card upcoming">
                <div className="calendar-date">
                  <span className="date-number">15</span>
                  <span className="date-month">Aug</span>
                </div>
                <div className="calendar-content">
                  <h3>Independence Day</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> Nationwide
                  </p>
                  <p>Celebration of India&apos;s independence from British rule in 1947</p>
                </div>
              </div>

              <div className="calendar-card">
                <div className="calendar-date">
                  <span className="date-number">19</span>
                  <span className="date-month">Aug</span>
                </div>
                <div className="calendar-content">
                  <h3>Raksha Bandhan</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> North & West India
                  </p>
                  <p>Celebration of the bond between brothers and sisters</p>
                </div>
              </div>

              <div className="calendar-card">
                <div className="calendar-date">
                  <span className="date-number">30</span>
                  <span className="date-month">Aug</span>
                </div>
                <div className="calendar-content">
                  <h3>Janmashtami</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> Nationwide
                  </p>
                  <p>Celebration of Lord Krishna&apos;s birth</p>
                </div>
              </div>

              <div className="calendar-card">
                <div className="calendar-date">
                  <span className="date-number">7</span>
                  <span className="date-month">Sep</span>
                </div>
                <div className="calendar-content">
                  <h3>Ganesh Chaturthi</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> Maharashtra & South India
                  </p>
                  <p>Festival honoring the elephant-headed deity Ganesha</p>
                </div>
              </div>

              <div className="calendar-card">
                <div className="calendar-date">
                  <span className="date-number">2</span>
                  <span className="date-month">Oct</span>
                </div>
                <div className="calendar-content">
                  <h3>Gandhi Jayanti</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> Nationwide
                  </p>
                  <p>Birth anniversary of Mahatma Gandhi</p>
                </div>
              </div>

              <div className="calendar-card">
                <div className="calendar-date">
                  <span className="date-number">12</span>
                  <span className="date-month">Oct</span>
                </div>
                <div className="calendar-content">
                  <h3>Dussehra</h3>
                  <p className="calendar-location">
                    <MapPin className="icon" size={14} /> Nationwide
                  </p>
                  <p>Celebration of the victory of good over evil</p>
                </div>
              </div>
            </div>
            <div className="calendar-cta">
            <a target='_blank' href="https://www.drikpanchang.com/calendars/indian/indiancalendar.html?lang=en">View Calendar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Major Festivals Showcase */}
      <section className="major-festivals">
        <div className="fest-container">
          <h2 className="section-title">Major Indian Festivals</h2>

          {/* Diwali */}
          <div className="festival-feature">
            <div className="festival-image">
              <img
                src="/images/Festivals/diwali-3.jpg"
                alt="Diwali Festival"
                width={800}
                height={500}
                className="feature-image"
              />
            </div>
            <div className="festival-info">
              <div className="festival-tag">Festival of Lights</div>
              <h3>Diwali</h3>
              <p>
                Diwali, the festival of lights, is one of India&apos;s most significant celebrations. Homes are decorated
                with oil lamps (diyas), candles, and colorful rangoli patterns. The festival symbolizes the victory of
                light over darkness and good over evil.
              </p>
              <div className="festival-details">
                <div className="detail-item">
                  <Calendar className="icon" size={18} />
                  <span>October/November (based on lunar calendar)</span>
                </div>
                <div className="detail-item">
                  <MapPin className="icon" size={18} />
                  <span>Celebrated nationwide</span>
                </div>
                <div className="detail-item">
                  <Clock className="icon" size={18} />
                  <span>Duration: 5 days</span>
                </div>
                <div className="detail-item">
                  <Info className="icon" size={18} />
                  <span>Key elements: Lighting diyas, fireworks, family gatherings, and prayers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Festival Grid */}
          <div className="festivals-grid">
            {
              FestivalData.map((festival, index) => (
                <div className="festival-card" key={index}>
                  <div className="festival-card-image">
                    <img src={festival.img2} alt={festival.name} width={400} height={300} />
                  </div>
                  <div className="festival-card-content">
                    <h3>{festival.name}</h3>
                    <p className="festival-timing">
                      <Calendar className="icon" size={14} /> {festival.date}
                    </p>
                    <p>{festival.description}</p>
                    <Link to={`/festivals/${festival.id}`} className="read-more">
                      Explore <ChevronRight className="icon" size={16} />
                    </Link>
                  </div>
                </div>
              ))
            }

          </div> 

         
        </div>
      </section>

      {/* Festival Traditions */}
      <section className="festival-traditions">
        <div className="fest-container">
          <h2 className="section-title">Festival Traditions</h2>
          <div className="traditions-grid">
            <div className="tradition-card">
              <div className="tradition-icon">
                <Utensils className="big-icon" size={48} />
              </div>
              <h3>Festival Foods</h3>
              <p>Special dishes and sweets prepared during different festivals across India</p>
              <ul className="tradition-list">
                <li>Modak (Ganesh Chaturthi)</li>
                <li>Gujiya (Holi)</li>
                <li>Biryani (Eid)</li>
                <li>Ladoo (Diwali)</li>
              </ul>

            </div>

            <div className="tradition-card">
              <div className="tradition-icon">
                <Music className="big-icon" size={48} />
              </div>
              <h3>Music & Dance</h3>
              <p>Traditional performances that are integral to festival celebrations</p>
              <ul className="tradition-list">
                <li>Garba during Navratri</li>
                <li>Bhangra during Baisakhi</li>
                <li>Bihu dance during Bihu</li>
                <li>Kathakali during Onam</li>
              </ul>

            </div>

            <div className="tradition-card">
              <div className="tradition-icon">
              <Atom  className="big-icon" size={48} />
              </div>
              <h3>Rituals & Ceremonies</h3>
              <p>Sacred practices and customs observed during festivals</p>
              <ul className="tradition-list">
                <li>Aarti (ceremonial light offering)</li>
                <li>Rangoli (decorative floor patterns)</li>
                <li>Puja (prayer ceremonies)</li>
                <li>Fasting and meditation</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

    

      {/* Festival Gallery */}
      <section className="gallery-section">
        <div className="fest-container">
          <h2 className="section-title">Festival Gallery</h2>
          <div className="gallery-grid">
            {FestivalData.map((item) => (
              <div key={item} className="gallery-item">
                <img
                  src={item.img2}
                  alt={`Indian Festival ${item}`}
                  width={400}
                  height={300}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Festival Foods */}
      <section className="festival-foods">
        <div className="fest-container">
          <h2 className="section-title">Festival Delicacies</h2>
          <p className="fest-section-intro">
            Each festival in India is accompanied by its own special foods and sweets that are integral to the
            celebrations.
          </p>

          <div className="foods-grid">
            <div className="food-card">
              <div className="food-image">
                <img
                  src="/images/CuisinePage/modak.jpg"
                  alt="Modak"
                  width={350}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <div className="food-content">
                <h3>Modak</h3>
                <p className="food-festival">Ganesh Chaturthi</p>
                <p>Sweet dumplings filled with coconut and jaggery, Lord Ganesha&apos;s favorite</p>
              </div>
            </div>

            <div className="food-card">
              <div className="food-image">
                <img
                  src="/images/CuisinePage/Gujiya.jpg"
                  alt="Gujiya"
                  width={350}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <div className="food-content">
                <h3>Gujiya</h3>
                <p className="food-festival">Holi</p>
                <p>Sweet deep-fried dumplings filled with khoya, nuts, and dried fruits</p>
              </div>
            </div>

            <div className="food-card">
              <div className="food-image">
                <img
                  src="/images/CuisinePage/biryani1.jpg"
                  alt="Biryani"
                  width={350}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <div className="food-content">
                <h3>Biryani</h3>
                <p className="food-festival">Eid</p>
                <p>Fragrant rice dish with meat, spices, and aromatics</p>
              </div>
            </div>

            <div className="food-card">
              <div className="food-image">
                <img
                  src="/images/CuisinePage/pngal.jpg"
                  alt="Pongal"
                  width={350}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <div className="food-content">
                <h3>Pongal</h3>
                <p className="food-festival">Pongal Festival</p>
                <p>Rice and lentil dish prepared with ghee and spices</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>

     
        <Footer></Footer>
    </div>
  )
}

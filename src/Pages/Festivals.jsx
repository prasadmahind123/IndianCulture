import NavBar from '../Components/NavBar';
//import { PiGreaterThanThin } from 'react-icons/pi';
import './Festival.css'
//import { FestivalData } from '../Data/FestivalData';
import { Link  } from 'react-router-dom';
// import { useNavigate  } from 'react-router-dom';
// import ScrollUp from '../Components/ScrollUp.jsx';
// import FestCard from '../Components/Festival/FestCard';
import { FestivalData } from '../Data/FestivalData';
import { useEffect , useState } from 'react';
import Footer from '../Components/Footer';
import { ChevronRight, Calendar, MapPin, Clock, Info, Music, Utensils , Atom} from "lucide-react"

export default function Festivals() {
   //const navigate = useNavigate();
    // const handleHome = () => {
    //   navigate('/');  
    // };
    // const handleFood = () => {
    //   navigate('/cuisine');
    // }
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
        {/* <div className="page-1">
          <div className="content-right">
            <img src="/images/Festivals/home-banner.webp" alt="" />
          </div>
          <div className="content">
            <div className="content-left">
              <div className="heading">
                <p>
                  <span onClick={handleHome}>Home</span>
                  <PiGreaterThanThin className="greater" />
                    Festivals
                </p>
              </div>
            <h2>
              <span className='t' >Joyful Moments, Timeless Traditions</span>
              <h1>India’s Festivals: A Celebration of Life and Heritage....!</h1>
            </h2>
              <p>
                India is a land of festivals, where every occasion is marked with vibrant celebrations, deep-rooted traditions, and immense cultural significance. These festivals reflect the country’s rich heritage, bringing people together in joy and harmony. From grand religious events to regional harvest festivals, each celebration has a unique story and significance.
              </p>
              <p>
              India, known for its rich cultural diversity, celebrates a vast number of festivals throughout the year. These festivals reflect the country&apos;s multi-religious, multilingual, and multi-ethnic society, with each festival carrying deep historical, religious, or seasonal significance.
              </p>
              <h2>
                Major Festivals of India
              </h2>
            </div>
              
          </div>
      </div>
      <ScrollUp />
      <div className="wild-page-2">
                <div className="festival">
                
                  {FestivalData.map((festival , id) => (
                      <Link to={`/festivals/${festival.id}`} className='link'  key={id}>
                          <FestCard festival = {festival} />
                      </Link>
                   
                    
                  ))}
                </div> */}
              
              {/* <div className="left-container">
                <img src="/images/Festivals/buddha-1.jpg" alt="tiger" />
            </div> */}
            {/* <div className="right-container">
                <div className="heading">
                    <h3>
                        Quick Info About Indian Major Festivals
                    </h3>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Festivals</th>
                            <th>Religion</th>
                            <th>Month</th>
                        </tr>
                        <tr>
                            <td>Diwali </td>
                            <td>Hindu</td>
                            <td>Octomber-November</td>
                        </tr>
                        <tr>
                            <td>Ganesh Chaturthi </td>
                            <td>Hindu</td>
                            <td>August-September</td>
                        </tr>
                        <tr>
                            <td>Holi</td>
                            <td>Hindu</td>
                            <td>March</td>
                        </tr>
                        <tr>
                            <td>Muharram </td>
                            <td>Muslim</td>
                            <td>first month of the Islamic calendar</td>
                        </tr>
                        <tr>
                            <td>Vaisakhi </td>
                            <td>Sikh</td>
                            <td>April</td>
                        </tr>
                        <tr>
                            <td>Christmas </td>
                            <td>Christian </td>
                            <td>December</td>
                        </tr>
                        <tr>
                            <td>Buddha Purnima </td>
                            <td>Buddhist </td>
                            <td>May</td>
                        </tr>

                    </table>
                </div>
            </div> */}
        {/* </div> */}
        <section className="fest-hero">
        <div className="fest-hero-overlay">
          <h1>Indian Festivals</h1>
          <p>Experience the vibrant colors, joyous celebrations, and rich traditions of India&apos;s diverse festivals</p>
        </div>
        <div className="fest-hero-background">
          <img
            src="/images/Festivals/home-banner.webp"
            alt="Indian Festivals"
            width={1600}
            height={600}
            className="hero-bg-image"
          />
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

      {/* Festival Categories */}
      {/* <section className="festival-categories">
        <div className="fest-container">
          <h2 className="fest-section-title">Festival Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Religious Festivals"
                  width={80}
                  height={80}
                  className="icon-image"
                />
              </div>
              <h3>Religious Festivals</h3>
              <p>Celebrations dedicated to deities and religious observances across different faiths</p>
              <Link href="/festivals/religious" className="learn-more">
                Explore <ChevronRight className="icon" size={16} />
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Harvest Festivals"
                  width={80}
                  height={80}
                  className="icon-image"
                />
              </div>
              <h3>Harvest Festivals</h3>
              <p>Celebrations marking agricultural seasons and expressing gratitude for bountiful harvests</p>
              <Link href="/festivals/harvest" className="learn-more">
                Explore <ChevronRight className="icon" size={16} />
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="National Festivals"
                  width={80}
                  height={80}
                  className="icon-image"
                />
              </div>
              <h3>National Festivals</h3>
              <p>Celebrations of historical events and figures significant to India&apos;s national identity</p>
              <Link href="/festivals/national" className="learn-more">
                Explore <ChevronRight className="icon" size={16} />
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Regional Festivals"
                  width={80}
                  height={80}
                  className="icon-image"
                />
              </div>
              <h3>Regional Festivals</h3>
              <p>Unique celebrations specific to particular states, regions, or communities</p>
              <Link href="/festivals/regional" className="learn-more">
                Explore <ChevronRight className="icon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

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
            {/* Holi */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Holi Festival" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Holi</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> March (Spring)
                </p>
                <p>The festival of colors celebrating the arrival of spring and the triumph of good over evil</p>
                <Link href="/festivals/holi" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}

            {/* Durga Puja */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Durga Puja" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Durga Puja</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> September/October
                </p>
                <p>A celebration honoring the goddess Durga, featuring elaborate pandals and cultural performances</p>
                <Link href="/festivals/durga-puja" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}

            {/* Eid */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Eid" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Eid-ul-Fitr</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> Varies (Islamic calendar)
                </p>
                <p>A celebration marking the end of Ramadan, featuring prayers, feasts, and community gatherings</p>
                <Link href="/festivals/eid" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}

            {/* Onam */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Onam" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Onam</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> August/September
                </p>
                <p>Kerala&apos;s harvest festival featuring boat races, floral decorations, and traditional feasts</p>
                <Link href="/festivals/onam" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}

            {/* Navratri */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Navratri" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Navratri</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> September/October
                </p>
                <p>Nine nights of worship and dance celebrating the goddess Durga in her various forms</p>
                <Link href="/festivals/navratri" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}

            {/* Pongal */}
            {/* <div className="festival-card">
              <div className="festival-card-image">
                <img src="/placeholder.svg?height=300&width=400" alt="Pongal" width={400} height={300} />
              </div>
              <div className="festival-card-content">
                <h3>Pongal</h3>
                <p className="festival-timing">
                  <Calendar className="icon" size={14} /> January
                </p>
                <p>Tamil harvest festival thanking the Sun God for agricultural abundance</p>
                <Link href="/festivals/pongal" className="read-more">
                  Explore <ChevronRight className="icon" size={16} />
                </Link>
              </div>
            </div> */}
          </div> 

          {/* <div className="view-all-link">
            <Link href="/festivals/all">
              View All Festivals <ArrowRight className="icon" size={16} />
            </Link>
          </div> */}
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

      {/* Regional Festivals Map */}
      {/* <section className="regional-festivals">
        <div className="fest-container">
          <h2 className="section-title">Festivals Across India</h2>
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
                    <Link href="/festivals/lohri">Lohri (Punjab)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/chhath">Chhath Puja (Bihar)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/teej">Teej (Rajasthan)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/hemis">Hemis Festival (Ladakh)</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>South India</h3>
                <ul>
                  <li>
                    <Link href="/festivals/pongal">Pongal (Tamil Nadu)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/onam">Onam (Kerala)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/ugadi">Ugadi (Andhra Pradesh)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/mysore-dasara">Mysore Dasara (Karnataka)</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>East India</h3>
                <ul>
                  <li>
                    <Link href="/festivals/durga-puja">Durga Puja (West Bengal)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/bihu">Bihu (Assam)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/rath-yatra">Rath Yatra (Odisha)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/hornbill">Hornbill Festival (Nagaland)</Link>
                  </li>
                </ul>
              </div>
              <div className="region-item">
                <h3>West India</h3>
                <ul>
                  <li>
                    <Link href="/festivals/ganesh-chaturthi">Ganesh Chaturthi (Maharashtra)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/navratri-gujarat">Navratri (Gujarat)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/goa-carnival">Goa Carnival (Goa)</Link>
                  </li>
                  <li>
                    <Link href="/festivals/tarnetar">Tarnetar Fair (Gujarat)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

          {/* <div className="foods-cta">
            <li className="primary-button" onClick={handleFood}>
              Explore Festival Recipes
            </li>
          </div> */}
        </div>
      </section>

      {/* Plan Your Visit */}
      {/* <section className="plan-visit">
        <div className="fest-container">
          <h2 className="section-title">Experience Indian Festivals</h2>
          <div className="visit-content">
            <p className="visit-intro">
              Planning to experience an Indian festival? Here&apos;s what you need to know to make the most of your visit.
            </p>
          </div>
          <div className="visit-grid">
            <div className="visit-card">
              <div className="visit-icon">
                <Calendar className="big-icon" size={48} />
              </div>
              <h3>Best Times to Visit</h3>
              <p>Learn about the optimal seasons to experience India&apos;s major festivals</p>
              <Link href="/festivals/best-times" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
            <div className="visit-card">
              <div className="visit-icon">
                <Info className="big-icon" size={48} />
              </div>
              <h3>Visitor Guidelines</h3>
              <p>Important information about cultural etiquette and participation in festivals</p>
              <Link href="/festivals/guidelines" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
            <div className="visit-card">
              <div className="visit-icon">
                <MapPin className="big-icon" size={48} />
              </div>
              <h3>Festival Tours</h3>
              <p>Curated itineraries for experiencing India&apos;s most vibrant festivals</p>
              <Link href="/festivals/tours" className="read-more">
                Read More <ChevronRight className="icon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Resources Section */}
      {/* <section className="resources-section">
        <div className="fest-container">
          <h2 className="section-title">Festival Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Books & Publications</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/books">Festivals of India: A Cultural Kaleidoscope</Link>
                </li>
                <li>
                  <Link href="/resources/books">Sacred Rituals and Celebrations</Link>
                </li>
                <li>
                  <Link href="/resources/books">The Cultural Heritage of Indian Festivals</Link>
                </li>
                <li>
                  <Link href="/resources/books">Regional Festivals of India</Link>
                </li>
                <li>
                  <Link href="/resources/books">View All Publications</Link>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Videos & Documentaries</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/videos">Colors of India: Festival Series</Link>
                </li>
                <li>
                  <Link href="/resources/videos">The Making of Durga Idols</Link>
                </li>
                <li>
                  <Link href="/resources/videos">Holi Celebrations Across India</Link>
                </li>
                <li>
                  <Link href="/resources/videos">Diwali: The Festival of Lights</Link>
                </li>
                <li>
                  <Link href="/resources/videos">View All Videos</Link>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Educational Materials</h3>
              <ul className="resource-list">
                <li>
                  <Link href="/resources/education">Festival Guide for Students</Link>
                </li>
                <li>
                  <Link href="/resources/education">Cultural Significance of Indian Festivals</Link>
                </li>
                <li>
                  <Link href="/resources/education">Festival Calendar and Lunar Cycles</Link>
                </li>
                <li>
                  <Link href="/resources/education">Regional Variations in Festival Celebrations</Link>
                </li>
                <li>
                  <Link href="/resources/education">View All Educational Materials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

        {/* <div className="wild-page-3">
            <div className="wild-page-3-1">
              <h2>Hindu Festivals</h2>
              <p>A Hindu festival is a religious and cultural celebration observed by followers of Hinduism to honor deities, commemorate mythological events, and celebrate seasonal changes. These festivals are deeply rooted in spirituality, tradition, and devotion, reflecting the diverse beliefs, customs, and regional variations within Hindu culture. Most Hindu festivals follow the lunar calendar (Hindu Panchang), and their dates vary each year based on the position of the moon and other celestial bodies.</p>
              <p>Hindu festivals are not just religious observances but also expressions of joy, gratitude, and cultural heritage. They bring people together, reinforce moral values, and serve as reminders of divine teachings and the importance of righteousness. Whether through prayers, fasting, rituals, or festivities, these celebrations keep Hindu traditions alive and continue to inspire generations with their spiritual significance.</p>
              <p>Some Major Festivals : </p>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Diwali')}>Diwali</h3>
                    <h3 onClick={() => handleInfoClick('Holi')}>Holi</h3>
                    <h3 onClick={() => handleInfoClick('Navratri')}>Navratri & Durga Puja</h3>
                    <h3 onClick={() => handleInfoClick('Raksha')}>Raksha Bandhan</h3>
                    <h3 onClick={() => handleInfoClick('Ganesh')}>Ganesh Chaturthi</h3>
                    <h3 onClick={() => handleInfoClick('Janmashtami')}>Janmashtami</h3>
                </div>
          {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Diwali' && (
                <div className="info-content"> 
                    <h2>Diwali: The Festival of Lights
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h2>
                    <p>Diwali, also known as Deepavali, is one of the most widely celebrated festivals in India. It signifies the victory of light over darkness, good over evil, and knowledge over ignorance. Observed by Hindus, Jains, Sikhs, and Buddhists across India and beyond, Diwali is a festival of immense cultural and spiritual significance. It usually falls between October and November, depending on the Hindu lunar calendar.</p>
                    <h3>Mythological :</h3>
                    <p>Rama’s Return to Ayodhya: The most widely known legend associates Diwali with Lord Rama’s return to Ayodhya after 14 years of exile and his victory over the demon king Ravana. To welcome him, the people of Ayodhya lit thousands of oil lamps (diyas), marking the origin of the festival.</p>
                    <div className="image-container">
                      <img src="/images/Festivals/diwali-2.webp" alt="" />
                      <img src="/images/Festivals/diwali-1.jpg" alt="" />
                    </div>
                    <p>Diwali is a five-day-long festival, each day having its own significance and rituals: </p>
                    <h3>Day 1 - Dhanteras (Worship of Wealth and Health) :</h3>
                    <p>
                      <ul>
                        <li>The festival begins with Dhanteras, a day dedicated to Lord Dhanvantari (the god of Ayurveda) and Goddess Lakshmi.</li>
                        <li>People buy gold, silver, or utensils, as it is believed to bring prosperity and good fortune.</li>
                        <p>Homes and shops are cleaned and decorated, symbolizing the removal of negativity.</p>
                      </ul>
                    </p>
                    <h3>Day 2 - Naraka Chaturdashi (Chhoti Diwali) :</h3>
                    <p>
                      <ul>
                        <li>Also known as Chhoti Diwali, this day signifies the defeat of the demon Narakasura by Lord Krishna.</li>
                        <li>People apply oil on their bodies before bathing to cleanse impurities.</li>
                        <li>In some regions, small-scale fireworks are lit in the evening.</li>
                      </ul>
                    </p>
                    <h3>Day 3 - Lakshmi Puja (Main Diwali)</h3>
                    <p>
                      <ul>
                        <li>The most important day of Diwali is dedicated to Goddess Lakshmi, Lord Ganesha, and Lord Kuber (God of Wealth).</li>
                        <li>Families perform Lakshmi Puja in the evening, seeking prosperity and blessings.</li>
                        <li>Houses are decorated with diyas (oil lamps), rangoli (colored powder art), and flowers.</li>
                        <li>People wear new clothes, exchange sweets, and burst fireworks.</li>
                      </ul>
                    </p>
                    <h3>Day 4 - Padwa (Bali Pratipada)</h3>
                    <p>
                      <ul>
                        <li>This day is special for married couples, as it symbolizes love and mutual respect.</li>
                        <li>Wives perform an aarti for their husbands, applying tilak and offering sweets, seeking their well-being and long life.</li>
                        <li>Husbands, in return, give gifts to their wives, usually new clothes, jewelry, or other meaningful presents.</li>
                        <li>This tradition signifies the renewal of marital bonds and commitment.</li>
                      </ul>
                    </p>
                    <h3>Day 5 - Bhai Dooj (Celebration of Sibling Bond)</h3>
                    <p>
                      <ul>
                        <li>The last day of Diwali is Bhai Dooj, a festival celebrating the bond between brothers and sisters.</li>
                        <li>Sisters apply tilak (vermilion mark) on their brothers’ foreheads and pray for their well-being, similar to Raksha Bandhan.</li>
                        <li>Brothers give gifts to their sisters as a token of love.</li>
                      </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Holi' && (
                <div className="info-content"> 
                    <h2>Holi – The Festival of Colors
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h2>
                    <p>Holi is one of the most vibrant and joyful festivals celebrated in India and among Indian communities worldwide. Known as the Festival of Colors, Holi signifies the arrival of spring, the victory of good over evil, and the strengthening of relationships.</p>
                    <p>It is celebrated on the full moon day (Purnima) of the Hindu month of Phalguna, usually falling in March. The festival is marked by colorful celebrations, joyous gatherings, and festive foods.</p>
                    <p>Different parts of India celebrate Holi with unique traditions. In Punjab, Sikhs observe Hola Mohalla, where martial arts demonstrations and horse-riding events showcase strength and valor. In West Bengal, Holi is known as Basanta Utsav, inspired by Rabindranath Tagore, where people dress in yellow and celebrate with songs and dance. In Maharashtra and Madhya Pradesh, the festival extends to Rang Panchami, keeping the celebrations alive for several more days. Regardless of regional variations, Holi carries a common message—it dissolves social barriers, strengthens relationships, and spreads love and positivity.</p>
                    <div className="image-container">
                      <img src="/images/Festivals/holi-2.webp" alt="" />
                      <img src="/images/Festivals/holi-3.webp" alt="" />
                      <img src="/images/Festivals/holi-4.jpg" alt="" />
                      </div>
                    <h3>Mythological Significance of Holi</h3>
                    <p>1. The Legend of Prahlad and Holika (Victory of Good over Evil) :</p>
                    <p>Holi, the vibrant festival of colors, is deeply rooted in Hindu mythology and is celebrated with immense joy across India. One of the most significant legends associated with Holi is the story of Prahlad and Holika, which symbolizes the victory of good over evil. According to Hindu scriptures, there was once a powerful demon king named Hiranyakashipu, who had gained a boon that made him nearly invincible. Blinded by arrogance, he demanded that everyone in his kingdom worship him as God. However, his own son, Prahlad, was a devoted follower of Lord Vishnu and refused to obey his father’s orders. This defiance enraged Hiranyakashipu, who made several attempts to kill Prahlad, but each time, Lord Vishnu protected him. <br /> In his final attempt, Hiranyakashipu sought the help of his sister, Holika, who had a magical boon that made her immune to fire. She tricked Prahlad into sitting on a burning pyre with her, hoping the flames would consume him while she remained unharmed. However, due to her evil intentions, Holika’s protection failed, and she was burned to ashes, while Prahlad emerged unscathed, saved by his unwavering faith in Vishnu. This event is commemorated on the eve of Holi with the ritual of Holika Dahan, where bonfires are lit to signify the burning of evil and the triumph of righteousness. <br />The next day, Holi is celebrated with colors, symbolizing the joy of Prahlad’s victory and the arrival of spring. The festival unites people across all barriers, spreading happiness, forgiveness, and renewed relationships. Through the legend of Prahlad and Holika, Holi teaches us that no matter how powerful evil may seem, devotion, faith, and goodness will always prevail.</p>
                    <p>2. The Divine Love of Radha-Krishna (The Play of Colors) :</p>
                    <p>The second significant legend associated with Holi is the divine love of Lord Krishna and Radha. According to mythology, young Krishna, who had a dark complexion, was worried that Radha’s fair skin would create a barrier between them. His mother, Yashoda, playfully suggested that he apply colors on Radha’s face, and Krishna did so, marking the beginning of the tradition of playing with colors. This playful act of Krishna and Radha became a symbol of love, joy, and the breaking of societal differences. In regions like Mathura and Vrindavan, where Krishna spent his early years, Holi is celebrated with great enthusiasm, including special celebrations such as Phoolon ki Holi (where people play with flowers) and Lathmar Holi (where women playfully hit men with sticks, reenacting Radha and Krishna’s playful moments).</p>
                    <h3>How is Holi Celebrated?</h3>
                    <p>1. Holika Dahan (Chhoti Holi) – The Bonfire Night
                      <ul>
                        <li>On the night before Holi, large bonfires are lit to signify the burning of Holika and the victory of good over evil.</li>
                        <li>People gather around the fire, sing devotional songs, perform rituals, and seek blessings.</li>
                        <li>It is believed that walking around the fire removes negativity and evil influences from life.</li>
                      </ul>
                    </p>
                    <p>2. Rangwali Holi (Dhulandi) – The Festival of Colors
                      <ul>
                        <li> Throw colors (gulal) and water on each other.</li>
                        <li>Dance to festive music and drums (dhol).</li>
                        <li> Enjoy sweets like Gujiya, Thandai, and Malpua</li>
                      </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Navratri' && (
                <div className="info-content"> 
                    <h2>Navratri – The Nine Nights of Worship & Celebration
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h2>
                    <p>Navratri (meaning nine nights) is a festival dedicated to Goddess Durga and her nine divine forms. It is celebrated twice a year—Chaitra Navratri in March-April and Sharad Navratri in September-October—with the latter being the most prominent. These nine nights and ten days are devoted to intense prayers, fasting, and cultural festivities.</p>
                    <p>Durga Puja, primarily celebrated in West Bengal, Odisha, Assam, and Tripura, is a five-day festival marking the victory of Goddess Durga over the demon Mahishasura. It is a grand event filled with artistic decorations, cultural performances, prayers, and feasting.</p>
                    <p>According to Hindu mythology, Mahishasura, a powerful demon, had received a boon that made him invincible against gods and men. Drunk with power, he terrorized the heavens and earth. Unable to defeat him, the Trinity of Gods – Brahma, Vishnu, and Shiva – combined their energies to create Goddess Durga, an embodiment of divine feminine power. Riding a lion and armed with multiple weapons, she fought Mahishasura for nine days and ultimately slayed him on the tenth day, symbolizing the triumph of good over evil.</p>
                    <div className="image-container">
                      <img src="/images/Festivals/navratri-3.webp" alt="" />
                      <img src="/images/Festivals/navratri-1.jpg" alt="" />
                      <img src="/images/Festivals/navratri-2.webp" alt="" />
                    </div>
                    <h3>The Nine Days of Navratri & Their Significance</h3>
                    <p>Each day of Navratri is dedicated to a different form of Goddess Durga (Navadurga), who represents different aspects of power, wisdom, and devotion:</p>
                    <p>
                      <ul>
                        <li>Day 1 - Shailaputri: The daughter of the mountains, symbolizing strength and purity. </li>
                        <li>Day 2 - Brahmacharini: The goddess of wisdom and penance, representing peace and knowledge.</li>
                        <li>Day 3 - Chandraghanta: The warrior goddess, who destroys demons and evil forces.</li>
                        <li>Day 4 - Kushmanda: The creator of the universe, who blesses with health and wealth.</li>
                        <li>Day 5 - Skandamata: The mother of Lord Kartikeya, symbolizing motherly love and protection.</li>
                        <li>Day 6 - Katyayani: The fierce goddess who slays the demon Mahishasura.</li>
                        <li>Day 7 - Kalaratri: The destroyer of darkness and ignorance.</li>
                        <li>Day 8 - Mahagauri: The goddess of peace and wisdom, bringing spiritual enlightenment.</li>
                        <li>Day 9 - Siddhidatri: The goddess who grants supernatural powers and divine blessings.</li>
                      </ul>
                    </p>
                    <h3>Regional Variations of Navratri & Durga Puja :</h3>
                    <p>
                      <ul>
                        <li>Gujarat – Famous for Garba and Dandiya, where people gather in colorful attire and dance joyfully.</li>
                        <li>West Bengal – Known for the grand Durga Puja celebrations, where beautifully decorated idols are worshipped for five days.</li>
                        <li>Tamil Nadu – Celebrated as Bommai Golu, where families display dolls of gods and goddesses on tiered platforms.</li>
                        <li>Maharashtra – People perform Ghatasthapana, placing a Kalash (sacred pot) as a symbol of divine energy.</li>
                        <li>Karnataka & Mysore – The famous Mysore Dasara includes a grand royal procession and cultural events.</li>
                      </ul>
                    </p>
                    <p>Navratri and Durga Puja are more than just festivals; they are celebrations of divine energy, righteousness, and the cultural diversity of India. Whether through the fasting and prayers of Navratri or the grandeur of Durga Puja, the message remains the same—to invoke the inner strength, embrace positivity, and celebrate life with devotion and joy. As the sound of dhols (drums) echoes and the lights of diyas illuminate homes, these festivals bring people together, filling hearts with happiness and faith in the divine power of Goddess Durga.</p>
                </div>
              )}
              {selectedInfo === 'Raksha' && (
                <div className="info-content"> 
                  <h2>Raksha Bandhan – The Festival of Sibling Bond
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                  </h2>
                  <p>Raksha Bandhan, also known as Rakhi, is a cherished Hindu festival that celebrates the bond of love, protection, and duty between brothers and sisters. Observed on the full moon day (Purnima) of the Shravan month (July-August), this festival is a symbol of sibling love, care, and lifelong commitment to protection. The name Raksha Bandhan itself means the bond of protection, where Raksha stands for protection, and Bandhan means a sacred bond or relationship.</p>
                  <p>Raksha Bandhan is rooted in multiple legends and mythological stories, each reflecting the festival’s essence of protection, faith, and duty.</p>
                  <h3>The Legend & Mythology Behind Raksha Bandhan : </h3>
                  <p>
                    <ul>
                      <li>1. Krishna & Draupadi – One of the most famous legends associated with Rakhi comes from the Mahabharata. When Lord Krishna injured his finger while using the Sudarshan Chakra, Draupadi tore a piece of her saree and tied it around his wound to stop the bleeding. Moved by her gesture, Krishna promised to protect her forever. Later, during the infamous disrobing incident in the Kaurava court, Krishna miraculously saved Draupadi by ensuring her saree remained endless, preventing her dishonor.</li>
                      <li>2. Rani Karnavati & Emperor Humayun – During the Mughal period, Rani Karnavati, the widowed queen of Mewar, sent a Rakhi to Mughal Emperor Humayun, seeking his protection against an invasion by Bahadur Shah. Honoring the sacred bond, Humayun immediately marched with his army to defend her kingdom, reinforcing the idea that Raksha Bandhan transcends religious and political barriers.</li>
                      <li>3. Yama & Yamuna – According to Hindu mythology, Yama, the god of death, had a sister, Yamuna. When she tied a Rakhi on his wrist, Yama was deeply touched and granted her immortality. Since then, it is believed that a brother who receives a Rakhi from his sister and vows to protect her will be blessed with long life and prosperity.</li>
                    </ul>
                  </p>
                  <h3>Rituals & Traditions of Raksha Bandhan</h3>
                  <p>Raksha Bandhan is a joyous and emotional festival, celebrated with enthusiasm in households across India and beyond. The day begins with family gatherings, prayers, and various rituals.</p>
                  <div className="image-container">
                    <img src="/images/Festivals/raksha-1.webp" alt=""/>
                    <img src="/images/Festivals/raksha-2.webp" alt=""/>
                    <img src="/images/Festivals/raksha-3.webp" alt=""/>
                  </div>
                  <p>
                    <h3>1. Tying the Rakhi</h3>
                    <ul>
                      <li>The sister ties a sacred thread (Rakhi) around her brother’s wrist, symbolizing love and protection.</li>
                      <li>She applies a tilak (vermilion or sandalwood paste) on his forehead and performs Aarti (a ritual with a lamp) to bless him with health, happiness, and success.</li>
                    </ul>
                  </p>
                  <p>
                    <h3>2. The Brother’s Promise</h3>
                    <ul>
                      <li>The brother promises to protect his sister and their family from harm, providing them with protection and safety.</li>
                      <li>He also promises to protect his brothers and sisters from harm, making them stronger and more loyal.</li>
                    </ul>
                  </p>
                  <p>
                    <h3>3. Gift-Giving</h3>
                    <ul>
                      <li>The brother gives gifts to his sister and their family, such as food, clothes, and medicines.</li>
                      <li>He also gives gifts to his brothers and sisters, making them more comfortable and loved.</li>
                    </ul>
                  </p>
                  <p>
                    <h3>4. Celebrations</h3>
                    <ul>
                      <li>The festival is incomplete without indulging in delicious sweets such as Rasgulla, Barfi, and Kaju Katli, along with a lavish family meal.</li>
                      <li>Some families organize pujas (prayers), where they seek blessings from the gods for the well-being of siblings.</li>
                    </ul>
                  </p>
                  <p>Raksha Bandhan is not just a festival; it is an expression of love, responsibility, and lifelong commitment. It reinforces the importance of family bonds, protection, and gratitude. Over the years, the festival has evolved, embracing new traditions while keeping the essence of sibling love intact. Whether celebrated with grand family gatherings or a simple Rakhi sent across miles, the spirit of Raksha Bandhan continues to unite hearts and spread joy.</p>
                </div>
              )}
              {selectedInfo === 'Ganesh' && (
                <div className="info-content"> 
                    <h2>Ganesh Jayanti – The Birth Anniversary of Lord Ganesha
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span></h2>              
                    <img src="/images/Festivals/ganesh-2.jpg" alt=""/>

                    <p>Ganesh Jayanti, also known as Maghi Ganesh Chaturthi, is the festival that marks the birth anniversary of Lord Ganesha, the beloved elephant-headed deity of wisdom, prosperity, and new beginnings. It is primarily observed in Maharashtra, Goa, and some parts of Karnataka on the fourth day (Chaturthi) of the Shukla Paksha (waxing moon) in the Magha month (January-February). Unlike Ganesh Chaturthi, which is widely celebrated in Bhadrapada month (August-September), Ganesh Jayanti holds a more spiritual and religious significance, focusing on prayers, fasting, and temple rituals.</p>
                    <h3>The Legend Behind Ganesh Jayanti</h3>
                    <p>According to Hindu mythology, Lord Ganesha was created by Goddess Parvati to be her guardian while she took a bath. She made him from sandalwood paste and infused life into him. When Lord Shiva returned, Ganesha, unaware of his father’s identity, stopped him from entering. In a fierce battle, Shiva beheaded Ganesha. Seeing Parvati’s distress, Shiva restored Ganesha’s life by placing an elephant’s head on his body, making him the divine lord of wisdom and remover of obstacles.</p>
                    <div className="image-container">
                      <img src="/images/Festivals/ganesh-1.webp" alt=""/>
                      <img src="/images/Festivals/ganesh-3.webp" alt=""/>
                    </div>
                    <h3>Rituals and Celebrations of Ganesh Jayanti</h3>
                    <p>Ganesh Jayanti is observed with great devotion in various parts of India, particularly in Maharashtra, Goa, and Karnataka. The festival involves a series of religious ceremonies and customs aimed at seeking the blessings of Lord Ganesha, the remover of obstacles and the harbinger of success. Below are the detailed rituals and celebrations associated with Ganesh Jayanti:</p>
                    <p>
                      <b>1. Special Temple Worship : </b> <br />
                      On Ganesh Jayanti, devotees visit Ganesh temples early in the morning after taking a holy bath. Temples, particularly those dedicated to Lord Ganesha, such as the Siddhivinayak Temple in Mumbai, Dagdusheth Halwai Ganpati Temple in Pune, and Ashtavinayak temples in Maharashtra, witness large gatherings of devotees.
                    </p>
                    <p>
                      <b>2. Fasting & Offerings : </b> <br />
                      Fasting on Ganesh Jayanti is considered highly auspicious. Many devotees keep a full-day fast (Upvas or Vrat) as a way of expressing their devotion and seeking Ganesha’s blessings for wisdom and prosperity.
                    </p>
                    <p>
                      <b>3. Recitation of Ganesh Purana : </b> <br />
                      Devotees read the Ganesh Purana, which contains stories, teachings, and prayers about Lord Ganesha. The purana is a popular resource for devotees and is read during Ganesh Jayanti.
                      By reading these texts, devotees seek peace, knowledge, and prosperity. Some temples organize spiritual discourses (kirtans and pravachans) explaining the meaning and importance of these scriptures.
                    </p>
                    <p>
                      <b>4. Ganesh Murti Sthapana (Idol Installation at Home)</b> <br />
                      Ganesh Murti Sthapana, or the installation of Lord Ganesha&apos;s idol, is a sacred ritual performed by devotees at home to invoke the presence of the deity. This ritual is conducted with great devotion, following traditional customs and prayers. The installation begins with selecting a suitable idol, preferably an eco-friendly clay idol, symbolizing the divine presence of Lord Ganesha. The idol is placed on a decorated altar or in a designated puja space, adorned with fresh flowers, banana leaves, and rangoli (colorful floor designs) to create a spiritually uplifting environment. <br /> 
                      The installation ceremony follows the Pran Pratishta ritual, where devotees invoke the divine energy of Lord Ganesha into the idol by chanting Vedic mantras and performing rituals under the guidance of a priest or an elder family member. This is followed by the Shodashopachara Puja, a 16-step worship process that includes offering sandalwood paste, kumkum, durva grass, modaks (sweet dumplings), fruits, and coconut. Devotees light incense sticks and lamps (diyas) to create a holy atmosphere and recite Ganesh Atharvashirsha, Ganesh Stotra, and other sacred hymns to seek the blessings of the lord. <br /> <br />
                      Aarti (devotional singing) is performed with burning camphor, symbolizing the removal of darkness and obstacles from life. Family members take turns offering prayers, seeking Lord Ganesha’s guidance, wisdom, and prosperity. The idol is worshipped for a specific duration, depending on the devotee’s tradition—some keep it for a single day, while others retain it for one and a half days or more before immersing it in a water body (visarjan). During the stay, daily offerings of bhog (prasad), including modaks, laddoos, and bananas, are made, and devotees continue their prayers with devotion.<br />
                      Ganesh Murti Sthapana signifies the presence of divinity in one&apos;s home, fostering positivity, peace, and spiritual growth. The ritual strengthens family bonds as all members come together in devotion, reinforcing the values of faith, gratitude, and cultural traditions. It is believed that performing this sacred ceremony ensures blessings, success, and obstacle-free progress in life.
                    </p>
                    <h3>Spiritual and Cultural Significance of Ganesh Jayanti</h3>
                    <p>Ganesh Jayanti holds immense spiritual and cultural significance, as it marks the divine birth of Lord Ganesha, the remover of obstacles and the harbinger of wisdom, prosperity, and success. Spiritually, this day is considered highly auspicious for prayers, meditation, and seeking inner strength, as Lord Ganesha is revered as the God of intellect and new beginnings. Devotees believe that worshiping him on this day brings blessings for a trouble-free life, intelligence, and prosperity. Special rituals, such as fasting, temple visits, and reciting sacred texts like the Ganesh Purana and Ganapati Atharvashirsha, help in purifying the mind and fostering a deep spiritual connection with the deity.</p>
                    <p>Culturally, Ganesh Jayanti strengthens family bonds and social harmony. The tradition of exchanging tilgul (sesame and jaggery sweets) emphasizes the importance of forgiveness, goodwill, and speaking sweetly throughout the year. The festival promotes environmental consciousness, as many devotees now opt for eco-friendly idols made of clay instead of harmful plaster of Paris. Community gatherings, devotional singing (bhajans), and acts of charity, such as food distribution (annadanam) to the needy, reflect the festival’s spirit of selflessness and compassion. Additionally, it is considered an auspicious time to start new ventures, businesses, or important life decisions, as Lord Ganesha symbolizes success and the removal of obstacles. Through these traditions, Ganesh Jayanti not only deepens one’s faith but also reinforces values of positivity, kindness, and unity, making it a significant celebration in Hindu culture.</p>
                </div>
              )}
              {selectedInfo === 'Janmashtami' && (
                <div className="info-content"> 
                    <h2>Janmashtami: The Birth of Lord Krishna
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h2>
                    <div className="image-container">
                      <img src="/images/Festivals/krishn-5.webp" alt=""/>
                      <img src="/images/Festivals/krishn-6.webp" alt=""/>
                    </div>
                    <p>Janmashtami is a festival of joy, devotion, and spiritual awakening, celebrating the divine presence of Lord Krishna. His teachings in the Bhagavad Gita continue to inspire people across the world, guiding them toward righteousness, wisdom, and inner strength. Whether through fasting, prayers, or cultural festivities, devotees immerse themselves in the divine love of Krishna, seeking his blessings for prosperity, happiness, and enlightenment.</p>
                    <p>Janmashtami, also known as Krishna Janmashtami or Gokulashtami, is a sacred Hindu festival that celebrates the birth of Lord Krishna, the eighth incarnation of Lord Vishnu. Observed on the eighth day (Ashtami) of Krishna Paksha in the month of Shravana or Bhadrapada, Janmashtami is one of the most revered festivals in India. Devotees celebrate this day with great devotion, marking the divine arrival of Krishna, who is believed to be the protector of dharma (righteousness) and the destroyer of evil.</p>
                    <h3>Spiritual Significance of Janmashtami :</h3>
                    <p>Janmashtami holds profound spiritual significance, as Lord Krishna’s birth symbolizes the victory of good over evil and the establishment of righteousness. According to Hindu mythology, Krishna was born in Mathura to Devaki and Vasudeva, but due to the tyrannical rule of King Kansa, he was secretly taken to Gokul, where he was raised by Nanda and Yashoda. His life and teachings, as described in the Bhagavad Gita, emphasize devotion (bhakti), righteousness (dharma), and selfless action (karma yoga). Devotees believe that observing fasts, chanting prayers, and meditating on Krishna’s name on this day helps in attaining spiritual growth, inner peace, and divine blessings.</p>
                    <div className="image-container">
                      <img src="/images/Festivals/krishn-1.webp" alt=""/>
                      <img src="/images/Festivals/krishn-4.webp" alt=""/>
                    </div>
                    <h3>Rituals and Celebrations : </h3>
                    <p>The celebrations of Janmashtami begin at midnight, believed to be the exact time of Krishna’s birth. Devotees observe fasts (upvas), visit temples, and participate in bhajans (devotional songs) dedicated to Lord Krishna. Temples and homes are beautifully decorated with flowers, rangoli, and lights, creating a vibrant and festive atmosphere. Krishna idols are bathed in milk, honey, and water (Abhishek), dressed in new clothes, and placed in decorated cradles as devotees sing songs of devotion.</p>
                    <h3>Dahi Handi: The Joyful Tradition :</h3>
                    <p>A unique and exciting part of Janmashtami is Dahi Handi, especially in Maharashtra. Inspired by Krishna’s childhood pastime of stealing butter (Makhan Chor), groups of young men form human pyramids to break a clay pot filled with curd, butter, and milk, which is suspended at a height. This tradition reflects teamwork, perseverance, and the playful spirit of Krishna’s youth.</p>
                    <h3>Cultural and Social Importance :</h3>
                    <p>Janmashtami is not just a religious event but also a festival that brings communities together. Devotional plays and dances, known as Rasleela, are performed to depict Krishna’s life, miracles, and love for Radha. The festival encourages people to embrace love, humility, and selfless service, as taught by Krishna. Many devotees engage in charity work, distributing food and clothes to the needy, following Krishna’s message of compassion and dharma.</p>
                </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="wild-page-3">
          <div className="wild-page-3-1">
            <h2>Muslim Festival</h2>
            <p>A Muslim festival is a religious and cultural celebration observed by followers of Islam to commemorate important events in Islamic history, honor religious duties, and strengthen faith in Allah (God). These festivals are based on the Islamic lunar calendar (Hijri calendar) and follow the teachings of the Quran and Hadith (sayings of Prophet Muhammad, peace be upon him).</p>
            <p>Muslim festivals emphasize faith, devotion, charity, and community unity. They remind followers of Islamic values such as compassion, gratitude, and patience while fostering a sense of togetherness. Whether through fasting, prayers, or acts of kindness, these celebrations help Muslims deepen their connection with Allah and strengthen their commitment to righteousness and good deeds.</p>
            <p>Some Major Festivals : </p>
            <div className="content">
                <h3 onClick={() => handleInfoClick('Fitr')}> Eid al-Fitr </h3>
                <h3 onClick={() => handleInfoClick('Adha')}> Eid al-Adha</h3>
                <h3 onClick={() => handleInfoClick('Ramadan')}>Ramadan </h3>
                <h3 onClick={() => handleInfoClick('Muharram')}> Muharram</h3>
            </div>
            {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Fitr' && (
                <div className="info-content"> 
                    <h2>Eid al-Fitr: The Festival of Breaking the Fast
                      <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                          &times;
                      </span>
                    </h2>
                    <p>Eid al-Fitr, also known as the Festival of Breaking the Fast, is one of the most important Islamic festivals, celebrated by Muslims worldwide. It marks the end of Ramadan, the holy month of fasting, prayer, and spiritual reflection. Eid al-Fitr falls on the first day of Shawwal, the tenth month of the Islamic lunar calendar, and is a day of joy, gratitude, and togetherness. The festival is not just a time of celebration but also a reminder of faith, devotion, and generosity.</p>
                    <h3>Religious and Spiritual Significance :</h3>
                    <p>The significance of Eid al-Fitr lies in its connection to Ramadan, during which Muslims fast from dawn to sunset, engage in additional prayers, and seek closeness to Allah. The festival represents spiritual renewal and thankfulness for the strength and patience shown during the fasting period. It is believed that Allah rewards His followers on this day for their devotion and piety. The festival is also a time for self-purification, forgiveness, and acts of charity, reinforcing the core Islamic values of compassion and unity.</p>
                    <h3>Zakat al-Fitr: The Charity Before Eid :</h3>
                    <p>One of the key aspects of Eid al-Fitr is Zakat al-Fitr, a mandatory form of charity given to the less fortunate before the Eid prayer. This ensures that even the underprivileged can take part in the celebrations. The charity is usually given in the form of food or money and is considered a way to cleanse one’s wealth while promoting social equality. It also reflects the spirit of empathy and generosity, which are fundamental teachings of Islam.</p>
                    <h3>Eid Prayer and Celebrations : </h3>
                    <p>The Eid prayer (Salat al-Eid) is performed in mosques or large open areas (Eidgahs) in the morning, where Muslims gather to offer thanks to Allah. The prayer is followed by a sermon and supplications for peace, prosperity, and unity. It is a moment of spiritual joy as people greet each other with the phrase Eid Mubarak (Blessed Eid), embracing one another as a gesture of love and goodwill. <br />After the prayer, families and friends come together to enjoy lavish meals and traditional delicacies. Popular Eid dishes include Sheer Khurma (a sweet dish made of milk, dates, and vermicelli), biryani, kebabs, and various sweets. The festival is also known for the tradition of Eidi, where elders give gifts or money to children as a token of love and blessings.</p>
                    <h3>Cultural and Social Importance :</h3>
                    <p>Eid al-Fitr is more than just a religious festival; it is a time of unity, harmony, and social bonding. It brings together families, neighbors, and communities, fostering a sense of togetherness and mutual respect. The festival also encourages forgiveness and reconciliation, where people mend broken relationships and strengthen social ties. Across different countries and cultures, the celebrations may vary, but the essence of Eid—faith, gratitude, and generosity—remains the same.</p>
                    <p>Eid al-Fitr is a festival of spiritual fulfillment, joy, and community spirit. It serves as a reminder of the values of compassion, gratitude, and selflessness that Ramadan instills in every Muslim. By engaging in prayers, charity, and celebrations, Muslims express their thankfulness to Allah and spread happiness among those around them. This festival beautifully highlights the message of peace, love, and kindness, making it one of the most cherished occasions in the Islamic calendar.</p>
                </div>
              )}
              {selectedInfo === 'Adha' && (
                 <div className="info-content"> 
                 <h2>Eid al-Adha: The Festival of Sacrifice
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Eid al-Adha is a deeply spiritual festival that emphasizes faith, sacrifice, and kindness. It reminds Muslims of their duty to help others, share their blessings, and remain devoted to Allah. Through prayers, sacrifices, and acts of charity, the festival spreads the message of love, humility, and togetherness, making it a truly significant occasion in the Islamic calendar.</p>
                 <p>Eid al-Adha, also known as Bakrid or the Festival of Sacrifice, is one of the most significant Islamic festivals celebrated by Muslims worldwide. It falls on the 10th day of Dhul-Hijjah, the final month of the Islamic lunar calendar, and coincides with the completion of the Hajj pilgrimage in Mecca. The festival commemorates Prophet Ibrahim’s (Abraham’s) willingness to sacrifice his son, Ismail (Ishmael), in obedience to Allah’s command. Before the sacrifice could take place, Allah replaced Ismail with a ram, symbolizing divine mercy. To honor this act of devotion, Muslims across the world perform Qurbani (ritual animal sacrifice) and distribute the meat among family, friends, and the less fortunate.</p>
                 <h3>Religious and Spiritual Significance</h3>
                 <p>Eid al-Adha represents the values of faith, obedience, and selflessness. The story of Prophet Ibrahim’s unwavering trust in Allah serves as a lesson in devotion and surrendering to divine will. The sacrifice symbolizes purity of heart, gratitude, and the importance of sharing blessings with others. It is also a reminder that true devotion lies in faith and good deeds, rather than just rituals.</p>
                 <h3>Qurbani: The Ritual of Sacrifice</h3>
                 
                 <p>
                 One of the main traditions of Eid al-Adha is Qurbani, where an animal—such as a goat, sheep, cow, or camel—is sacrificed following strict Islamic guidelines. The meat is divided into three equal parts:
                  <ul>
                    <li>1. Qurbani: The Ritual of Sacrifice</li>
                    <li>2. One-third for relatives and friends</li>
                    <li>3. One-third for the poor and needy</li>
                  </ul>
                  This act of charity ensures that even those who cannot afford meat regularly can enjoy a hearty meal during the festival. It also reinforces the Islamic principles of generosity, community, and caring for others.
                 </p>
                 <h3>Eid Prayer and Celebrations</h3>
                 <p>The day begins with special Eid prayers (Salat al-Eid), performed in mosques or open prayer grounds. After the prayer, Muslims listen to a sermon that highlights the significance of sacrifice, charity, and righteousness. People greet each other with Eid Mubarak and exchange warm wishes. Families gather to prepare festive meals, often featuring dishes made from the sacrificial meat, such as biryani, kebabs, and stews.</p>
                 <h3>Social and Cultural Importance</h3>
                 <p>Eid al-Adha is not just about sacrifice; it is a celebration of compassion, unity, and gratitude. The festival strengthens social ties as people come together to share food, visit relatives, and extend help to the less fortunate. In many countries, governments and organizations arrange charitable programs to distribute meat among those in need. The festival also marks the conclusion of Hajj, the pilgrimage to Mecca, which is one of the five pillars of Islam and a once-in-a-lifetime obligation for able Muslims.</p>
             </div>
              )}
              {selectedInfo === 'Ramadan' && (
                 <div className="info-content"> 
                 <h2>Ramadan: The Holy Month of Fasting and Spiritual Reflection
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Ramadan is a time of faith, self-discipline, and renewal. It teaches patience, gratitude, and empathy while bringing communities together through fasting, prayer, and charity. The lessons learned during Ramadan inspire Muslims to continue practicing kindness, humility, and devotion throughout the year, making it one of the most significant and spiritually uplifting months in the Islamic calendar.</p>
                 <p>Ramadan is the ninth month of the Islamic lunar calendar and is considered the holiest month for Muslims worldwide. It is a time of fasting (Sawm), prayer, self-discipline, spiritual reflection, and charity, observed as an act of devotion to Allah. The month is significant because it marks the revelation of the Quran to Prophet Muhammad (PBUH) through the Angel Jibreel (Gabriel). Fasting during Ramadan is one of the Five Pillars of Islam, and it serves as a means of purifying the soul, strengthening faith, and practicing self-control.</p>
                 <h3>The Purpose and Spiritual Significance of Ramadan :</h3>
                 <p>Ramadan is more than just abstaining from food and drink from dawn to sunset; it is a time for spiritual purification, self-restraint, and devotion to Allah. It is meant to strengthen faith, encourage gratitude, and remind Muslims of the hardships faced by the less fortunate. By experiencing hunger and thirst, individuals develop compassion and empathy for those who struggle with poverty and deprivation.</p>
                 <p>Fasting is seen as a way to cleanse the soul, develop self-control, and focus on worship and good deeds. It is also a month of forgiveness and mercy, where Muslims seek repentance for past sins and strive to improve their character.</p>
                 <h3>Daily Routine During Ramadan : </h3>
                 <p><b>1. Suhoor (Pre-Dawn Meal):</b> <br />
                    <ul>
                      <li>Muslims wake up before Fajr (dawn prayer) to eat Suhoor, a meal that provides energy for the day.</li>
                      <li>After eating, they make the intention (Niyyah) to fast for Allah and begin their fast at dawn.</li>
                    </ul>
                 </p>
                 <p><b>2. Fasting from Fajr to Maghrib (Sunset):</b><br />
                    <ul>
                      <li>Throughout the day, Muslims abstain from food, drink, smoking, and sinful behavior.</li>
                      <li>The focus is on prayer, reading the Quran, and performing acts of kindness.</li>
                    </ul>
                 </p>
                 <p>
                    <b>3. Iftar (Breaking the Fast at Sunset):</b> <br />
                    <ul>
                      <li>The fast is broken at Maghrib (sunset prayer), usually with dates and water, following the tradition of Prophet Muhammad (PBUH).</li>
                      <li>Families and communities gather to share an Iftar meal, which often includes traditional dishes.</li>
                    </ul>
                 </p>
                 <p>
                    <b>4. Taraweeh Prayers (Night Worship):</b> <br />
                    <ul>
                      <li>After the Isha prayer, special prayers called Taraweeh are performed in mosques.</li>
                      <li>During these prayers, long portions of the Quran are recited, and the entire Quran is often completed by the end of the month.</li>
                    </ul>
                 </p>
                 <h3>The Last Ten Nights and Laylat al-Qadr :</h3>
                 <p>The last ten nights of Ramadan are considered the most sacred. Among these nights is Laylat al-Qadr (The Night of Power), which is believed to be the night when the Quran was revealed. Worship on this night is said to be more valuable than a thousand months of worship. Muslims spend these nights in deep prayer, seeking Allah’s mercy and forgiveness.</p>
                 <h3>Charity and Zakat in Ramadan :</h3>
                 <p>Ramadan is also known as the month of charity, where Muslims give Zakat (obligatory charity) and Sadaqah (voluntary charity). It is believed that charitable deeds earn greater rewards during this month. Before Eid al-Fitr, Muslims must give Zakat al-Fitr, a special charity to ensure that the poor can also celebrate the festival.</p>
                 <h3>Eid al-Fitr: The Celebration After Ramadan :</h3>
                 <p>At the end of Ramadan, Muslims celebrate Eid al-Fitr, a joyous festival marking the completion of fasting. The day begins with a special Eid prayer, followed by feasting, family gatherings, and giving gifts (Eidi) to children. It is a day of gratitude, joy, and unity, where Muslims express their thanks to Allah for the strength to complete the fasting month.</p>
             </div>
              )}
              {selectedInfo === 'Muharram' && (
                 <div className="info-content"> 
                 <h2>Muharram: The Sacred Month of Remembrance and Reflection
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Muharram is a month of deep spiritual and historical significance. While it marks the beginning of the Islamic New Year, it is also a time of fasting, reflection, and mourning—particularly for Shia Muslims, who remember the martyrdom of Imam Hussain (RA) at Karbala. The lessons of justice, sacrifice, and standing against oppression from Karbala continue to inspire Muslims today. Whether through fasting, prayer, or acts of charity, Muharram encourages faith, patience, and remembrance of Allah.</p>
                 <p>Muharram is the first month of the Islamic lunar calendar and one of the four sacred months in Islam. It is a period of deep spiritual significance, reflection, and mourning, especially for Shia Muslims, as it marks the martyrdom of Imam Hussain (RA), the grandson of Prophet Muhammad (PBUH), in the Battle of Karbala. For Sunni Muslims, Muharram is also a time of fasting and devotion, particularly on the 10th day, known as Ashura, which is associated with important historical events in Islamic tradition.</p>
                 <h3>Significance of Muharram in Islam : </h3>
                 <p>Muharram, the first month of the Islamic lunar calendar, holds immense spiritual and historical significance for Muslims worldwide. It is one of the four sacred months mentioned in the Quran, during which warfare and violence were traditionally forbidden, emphasizing peace and devotion. Muharram is a time for increased worship, reflection, and seeking Allah’s blessings. For Sunni Muslims, the 10th day of Muharram, known as Ashura, is particularly important as it is believed to be the day when Prophet Musa (Moses) and the Israelites were saved from Pharaoh’s oppression. Prophet Muhammad (PBUH) encouraged fasting on this day as an act of gratitude to Allah. For Shia Muslims, Muharram is a month of mourning, marking the martyrdom of Imam Hussain (RA), the grandson of Prophet Muhammad (PBUH), at the Battle of Karbala in 680 CE. His tragic sacrifice is remembered as a symbol of resistance against injustice and tyranny. Throughout the month, Muslims engage in prayer, fasting, charity, and remembrance of historical events that shaped Islamic teachings. The observance of Muharram fosters a sense of spiritual renewal, patience, and devotion, reminding Muslims of the values of faith, sacrifice, and standing for truth.</p>
                 <h3>The Battle of Karbala: A Story of Sacrifice and Justice :</h3>
                 <p>The Battle of Karbala, fought on the 10th of Muharram in 680 CE, is one of the most tragic and significant events in Islamic history. This battle was not just a military conflict but a struggle between truth and tyranny, justice and oppression. It took place in the desert of Karbala (modern-day Iraq), where Imam Hussain (RA), the beloved grandson of Prophet Muhammad (PBUH), and his small group of followers faced the massive army of the Umayyad ruler, Yazid I. Imam Hussain (RA) refused to pledge allegiance to Yazid, as he saw him as a corrupt and unjust leader who strayed from Islamic principles. Instead, he chose to uphold truth, integrity, and righteousness, even at the cost of his life.</p>
                 <p>Imam Hussain (RA), along with 72 companions, including his family members, was surrounded and deprived of water for days in the scorching heat. Despite suffering from extreme thirst and exhaustion, he and his followers displayed immense faith and courage, refusing to surrender to Yazid’s forces. On the 10th of Muharram, known as Ashura, the battle reached its tragic climax. One by one, Imam Hussain’s loyal companions, including his young son, Ali Asghar, and his brother, Abbas, were martyred in brutal combat. In the end, Imam Hussain (RA) himself was mercilessly killed, his head was severed, and his body left on the battlefield. The surviving women and children, including his sister Zainab (RA) and son Imam Zain-ul-Abidin (RA), were taken captive and paraded to Yazid’s court in Damascus.</p>
                 <p>The Battle of Karbala is remembered as a symbol of sacrifice, resilience, and the fight against oppression. Imam Hussain’s stand continues to inspire millions, teaching that truth and justice must be upheld, even in the face of persecution. His martyrdom is mourned deeply by Shia Muslims worldwide, who observe Muharram as a time of mourning and remembrance, while Sunni Muslims also recognize the battle as a historic lesson in faith and righteousness. The legacy of Karbala lives on as a reminder that standing for justice, no matter the cost, is the true path of Islam.</p>
                 <h3>3. Observances and Traditions During Muharram :</h3>
                 <p>Muharram is a deeply spiritual and historical month in the Islamic calendar, observed with various traditions by Muslims worldwide. While it marks the beginning of the Islamic New Year, it is primarily a time of prayer, reflection, fasting, and mourning. The 10th day of Muharram, known as Ashura, holds special significance and is observed differently by Sunni and Shia Muslims.</p>
                 <p>For Sunni Muslims, Muharram is a month of devotion and fasting. Prophet Muhammad (PBUH) recommended fasting on the 10th of Muharram (Ashura) as an act of gratitude, as it is believed that Prophet Musa (Moses) and the Israelites were saved from Pharaoh on this day. Many Sunni Muslims also choose to fast on the 9th and 10th or 10th and 11th of Muharram following the Prophet’s tradition. It is also a time to engage in extra prayers, charity, and good deeds, seeking Allah’s blessings.</p>
                 <p>For Shia Muslims, Muharram is a period of mourning and remembrance, especially the first ten days leading up to Ashura, which marks the martyrdom of Imam Hussain (RA) at the Battle of Karbala. During this time, majlis (gatherings) are held, where the story of Imam Hussain’s sacrifice is recited, and sermons emphasize the values of justice and resistance against oppression. Many Shia Muslims participate in processions, reenactments, and elegies to express their grief. Some also practice matam (self-flagellation or chest-beating) as a symbolic expression of sorrow for Imam Hussain’s suffering.</p>
                 <p>Across the Muslim world, Muharram is observed with increased acts of worship, fasting, charity, and remembrance of historical lessons. The message of Muharram, particularly the story of Karbala, continues to inspire people to stand for truth, justice, and righteousness, making it one of the most significant and solemn months in Islamic tradition.</p>
                 <h3>4. Lessons from Muharram and Karbala :</h3>
                 <p> <b>1. Standing Against Injustice :</b> <br />
                    Imam Hussain (RA) and his followers stood firm in their faith and principles, choosing martyrdom over surrender to oppression.
                 </p>
                 <p> <b>2. Patience and Endurance :</b><br />
                    The suffering endured at Karbala teaches resilience, patience (sabr), and trust in Allah, even in the face of great hardship.
                 </p>
                <p>
                  <b>3. The Power of Faith and Sacrifice :</b> <br />
                  The story of Karbala is a reminder that true faith requires sacrifice, and those who uphold justice may face persecution but will be remembered with honor.
                </p>
                <p>
                  <b>4. Unity and Compassion :</b> <br />
                  Muharram is a time to remember history, reflect on moral values, and promote peace and unity among Muslims worldwide.
                </p>
             </div>
              )}
            </div>
          )}
          </div>
        </div>
        <div className="wild-page-3">
            <div className="wild-page-3-1">
                <h2>
                    Sikh Festivals
                </h2>
                <p>Sikhism, founded by Guru Nanak Dev Ji in the 15th century, has a rich tradition of festivals that celebrate spiritual enlightenment, historical events, and the teachings of the Sikh Gurus. These festivals, known as Gurpurabs and other Sikh observances, hold great religious and cultural significance for Sikhs around the world. Many of these celebrations involve prayers, kirtan (devotional singing), langar (community meals), and processions.</p>
                <p>Sikh festivals reflect faith, sacrifice, bravery, and community service. Each celebration is a reminder of Sikh history, the teachings of the Gurus, and the principles of equality, selfless service, and devotion to God. Whether through Gurpurabs, Vaisakhi, or Hola Mohalla, Sikhs come together to celebrate their rich heritage, honor their martyrs, and strengthen their spiritual journey.</p>
                <p>Some Major Festivals : </p>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Gurpurabs')}>Guru Nanak Jayanti</h3>
                    <h3 onClick={() => handleInfoClick('Vaisakhi')}>Vaisakhi</h3>
                    <h3 onClick={() => handleInfoClick('Hola')}>Hola Mohalla</h3>
                    <h3 onClick={() => handleInfoClick('sikh-Diwali')}>Bandi Chhor Divas</h3>
                    <h3 onClick={() => handleInfoClick('Maghi')}>Maghi </h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Gurpurabs' && (
                <div className="info-content"> 
                    <h2>Guru Nanak Gurpurab (Guru Nanak Jayanti) : 
                      <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                          &times;
                      </span>
                    </h2>
                    <p>Guru Nanak Gurpurab, also known as Guru Nanak Jayanti, is one of the most important and widely celebrated festivals in Sikhism. It marks the birth anniversary of Guru Nanak Dev Ji, the founder of Sikhism and the first of the ten Sikh Gurus. The festival is observed by Sikhs and followers of Guru Nanak’s teachings across the world with great devotion and reverence.</p>
                    <p>Guru Nanak Gurpurab is a festival of spiritual awakening, devotion, and selfless service. It inspires people to follow Guru Nanak Dev Ji’s teachings of love, harmony, and humanity. The celebrations not only honor Guru Nanak’s legacy but also reinforce the core values of Sikhism – devotion to God, hard work, and helping others.</p>
                    <h3>Significance of Guru Nanak Gurpurab :</h3>
                    <p>Guru Nanak Gurpurab, also known as Guru Nanak Jayanti, holds immense spiritual and historical significance in Sikhism. It commemorates the birth anniversary of Guru Nanak Dev Ji, the founder of Sikhism and the first of the ten Sikh Gurus. Guru Nanak’s teachings emphasized devotion to one God (Ek Onkar), equality among all human beings, selfless service (seva), and leading an honest and truthful life. His message of universal brotherhood, compassion, and righteousness continues to inspire millions worldwide. The festival is celebrated with great devotion, including prayers, processions, kirtan (devotional singing), and langar (community meals), reflecting Guru Nanak’s principles of equality, humility, and sharing with others. Observing Guru Nanak Jayanti is not just a tribute to his legacy but also a reminder to incorporate his teachings into daily life, fostering a society based on love, harmony, and justice.</p>
                    <h3>Date and Observance :</h3>
                    <p>Guru Nanak Jayanti falls on Kartik Purnima, the full moon day of the Kartik month (October or November), as per the Hindu lunar calendar.Guru Nanak Gurpurab is celebrated on Kartik Purnima, the full moon day of the Kartik month in the Hindu lunar calendar. This typically falls in October or November according to the Gregorian calendar. The festival is observed with great devotion by Sikhs and followers of Guru Nanak across the world, particularly in India, Pakistan, the UK, Canada, and the USA.</p>
                    <p>The festival is celebrated with prayers, kirtan (devotional singing), processions, and langar (community meals) in Gurdwaras and Sikh communities worldwide.The celebrations usually begin two days before the main event, with a 48-hour Akhand Path, a continuous reading of the Guru Granth Sahib (Sikh holy scripture) in Gurdwaras. A day before Guru Nanak Jayanti, a Nagar Kirtan (religious procession) is carried out, where devotees sing hymns and display martial arts performances (Gatka). On the main day, devotees visit Gurdwaras, participate in kirtan (devotional singing), katha (spiritual discourses), and langar (free community meals). Many Sikhs also engage in Prabhat Pheris, early morning processions where hymns are sung while walking through neighborhoods. These observances reflect the spiritual, social, and humanitarian values of Sikhism, reinforcing Guru Nanak’s teachings of unity, humility, and service to humanity.</p>
                    <h3>Rituals and Celebrations :</h3>
                    <p>Guru Nanak Gurpurab is celebrated with deep devotion, prayers, and community service, reflecting the core values of Sikhism – equality, humility, and devotion to God. The festivities last for several days and include various religious and social activities.The rituals and celebrations of Guru Nanak Gurpurab are deeply rooted in spiritual devotion, community service, and selfless giving. The festival is a reminder of Guru Nanak Dev Ji’s teachings that promote peace, equality, and devotion to God. Through prayers, kirtan, processions, and langar, Sikhs across the world come together to honor the legacy of Guru Nanak and reinforce his vision of a just and harmonious society.</p>
                    <p>
                      <b>1. Akhand Path (Continuous Reading of Guru Granth Sahib) :</b>
                      <ul>
                        <li>The celebrations begin two days before the festival with the Akhand Path, a 48-hour continuous and uninterrupted recitation of the Guru Granth Sahib, the Sikh holy scripture.</li>
                        <li>This is conducted in Gurdwaras and Sikh households, where devotees gather to listen and reflect on the teachings of Guru Nanak Dev Ji.</li>
                      </ul>
                    </p>
                    <p>
                      <b>2. Nagar Kirtan (Religious Procession) :</b>
                      <ul>
                        <li>A day before Guru Nanak Jayanti, a Nagar Kirtan is organized, led by the Panj Pyare (Five Beloved Ones), who symbolize Sikh unity and devotion.</li>
                        <li>The Guru Granth Sahib is carried in a decorated palanquin, followed by devotees singing shabads (hymns) and playing musical instruments.</li>
                        <li>Gatka (Sikh martial arts) performances are displayed, showcasing traditional combat skills and bravery.</li>
                        <li>Devotees distribute karah prasad (sacred offering) and refreshments to people along the way.</li>
                      </ul>
                    </p>
                    <p>
                      <b>3. Prabhat Pheris (Early Morning Processions) :</b>
                      <ul>
                        <li>Prabhat Pheris are held in the early morning in the days leading up to Guru Nanak Jayanti.</li>
                        <li>Devotees gather before dawn and walk through neighborhoods, singing hymns and praises of Guru Nanak Dev Ji, spreading the message of love and unity.</li>
                      </ul>
                    </p>
                    <p>
                      <b>4. Gurdwara Services and Kirtan</b>
                      <ul>
                        <li>On the main day of Guru Nanak Gurpurab, devotees visit Gurdwaras and participate in special kirtan (devotional singing) and katha (spiritual discourses).</li>
                        <li>Religious sermons are delivered by Sikh scholars, focusing on Guru Nanak’s teachings, life, and messages of equality and devotion.</li>
                        <li>The Guru Granth Sahib is beautifully adorned, and special prayers are offered.</li>
                      </ul>
                    </p>
                    <p>
                      <b>5. Langar (Community Meal Service) :</b>
                      <ul>
                        <li>One of the most important aspects of the celebration is the langar, a free community meal served to all, regardless of caste, religion, or social background.</li>
                        <li>Volunteers, known as sewadars, prepare and serve food in Gurdwaras and community centers, following Guru Nanak’s principle of selfless service (seva) and equality.</li>
                        <li>The langar represents the spirit of sharing, humility, and unity among all people.</li>
                      </ul>
                    </p>
                    <p>
                      <b>6. Lighting and Decorations :</b>
                      <ul>
                        <li>Gurdwaras and homes are beautifully decorated with lights, flowers, and candles.</li>
                        <li>Many Sikh communities light diyas (earthen lamps) and fireworks in celebration, making the festival visually vibrant.</li>
                      </ul>
                    </p>
                    <p>
                      <b>7. Reflection on Guru Nanak’s Teachings :</b>
                      <ul>
                        <li>Devotees take time to read Guru Nanak’s hymns from the Guru Granth Sahib, focusing on his messages of oneness of God, honest living, and service to humanity.</li>
                        <li>Many engage in acts of charity, distribute food, clothes, and help the needy, emphasizing Guru Nanak’s principles of compassion and kindness.</li>
                      </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Vaisakhi' && (
                 <div className="info-content"> 
                 <h2>Vaisakhi: The Festival of Harvest and the Birth of Khalsa 
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Vaisakhi, also known as Baisakhi, is one of the most significant festivals in Sikhism and Punjab. It is celebrated on April 13 or 14 every year and marks both an agricultural and a religious milestone. For farmers in Punjab and northern India, Vaisakhi is the harvest festival, signifying the end of the rabi crop season and the beginning of a new agricultural cycle. However, for Sikhs, Vaisakhi holds even deeper spiritual importance as it commemorates the formation of the Khalsa Panth in 1699 by Guru Gobind Singh Ji, the tenth Sikh Guru. This day is considered the foundation of Sikh identity and values, emphasizing courage, equality, and selfless service.</p>
                 <h3>1. Historical and Religious Significance :</h3>
                 <p>Vaisakhi holds profound historical and religious importance, particularly in Sikhism and Punjab’s cultural heritage. Religiously, it marks the formation of the Khalsa Panth on April 13, 1699, by Guru Gobind Singh Ji, the tenth Sikh Guru. On this day, Guru Gobind Singh Ji gathered thousands of Sikhs at Anandpur Sahib and tested their faith by asking for five volunteers willing to sacrifice their lives for Sikhism. These five men, later known as the Panj Pyare (Five Beloved Ones), were initiated into the Khalsa through the Amrit Sanchar (baptism ceremony). This event established the Khalsa as a community of warrior-saints, dedicated to justice, righteousness, and selfless service. Guru Gobind Singh Ji also introduced the Five Ks (Kesh, Kangha, Kara, Kirpan, and Kachera) as symbols of Sikh identity and equality. From that day, Sikh men adopted the surname “Singh” (Lion), and Sikh women took the surname “Kaur” (Princess), rejecting caste-based discrimination and promoting unity.</p>
                 <p>Beyond its religious significance, Vaisakhi is also celebrated as a harvest festival in Punjab and northern India, marking the end of the rabi crop season and the beginning of a new agricultural cycle. Farmers express their gratitude to God for a bountiful harvest and pray for prosperity in the coming year. The festival is observed with traditional folk music, dance (Bhangra and Gidda), and fairs, reflecting the joy and cultural richness of Punjab. Thus, Vaisakhi represents not only a spiritual rebirth for Sikhs but also a celebration of nature’s abundance, making it a day of both devotion and festivity.</p>
                 <h3>2. Rituals and Celebrations :</h3>
                 <p>
                    Vaisakhi is celebrated with great devotion, enthusiasm, and community spirit, both as a religious festival and a cultural event. The day begins with prayers and rituals in Gurdwaras, followed by processions, community service, and cultural festivities. The celebration unites Sikhs and Punjabis worldwide, emphasizing the principles of faith, unity, and gratitude. <br />
                    One of the most significant rituals of Vaisakhi is the Akhand Path, a 48-hour continuous recitation of the Guru Granth Sahib, held in Gurdwaras to seek divine blessings. On the morning of Vaisakhi, special kirtan (hymns) and katha (spiritual discourses) are conducted, reflecting on the teachings of Guru Nanak Dev Ji and Guru Gobind Singh Ji. The Amrit Sanchar (baptism ceremony) is also held, where many Sikhs choose Vaisakhi as the day to take Amrit and formally join thore Khalsa Panth. This tradition reinfces the values of courage, self-discipline, and commitment to Sikhism. <br /> <br />
                    A major highlight of Vaisakhi is the Nagar Kirtan, a grand religious procession led by the Panj Pyare (Five Beloved Ones). The Guru Granth Sahib is placed in a beautifully decorated palanquin, accompanied by devotees singing hymns, playing musical instruments, and performing Gatka (Sikh martial arts demonstrations). The procession moves through streets, spreading the message of peace, equality, and community service, with devotees distributing prasad (sacred food), sweets, and refreshments to the public. <br />
                    Langar, the free community kitchen, plays a crucial role in Vaisakhi celebrations. Gurdwaras and Sikh communities organize langar services, offering food to people from all walks of life, regardless of caste or religion. Volunteers, known as sewadars, actively participate in cooking, serving, and cleaning, reflecting Guru Nanak’s principle of selfless service and equality. <br /><br />
                    In Punjab, Vaisakhi is also a harvest festival, marked by joyful fairs, folk music, and dance performances. Farmers celebrate the success of their rabi crop harvest by performing Bhangra and Gidda, wearing vibrant traditional attire. The festival is accompanied by feasting, fairs (melas), and displays of rural culture, symbolizing the prosperity and hard work of farmers. The celebration extends beyond Punjab, with Sikh communities across the world, including Canada, the USA, and the UK, organizing large-scale processions, prayers, and cultural programs. <br /> <br />
                    Through these rituals and celebrations, Vaisakhi serves as a spiritual and cultural milestone, bringing people together in gratitude, devotion, and joy. It is a day to honor Sikh history, reaffirm faith, and celebrate the values of unity and service to humanity.
                 </p>
                 <h3>Global Significance of Vaisakhi :</h3>
                 <p>Vaisakhi is not only a significant festival in Punjab and India but also holds global importance, especially among the Sikh diaspora. As Sikh communities have spread across the world, Vaisakhi has become an occasion for cultural pride, religious devotion, and social unity. Countries like Canada, the United Kingdom, the United States, Australia, and Malaysia witness grand Vaisakhi celebrations, attracting thousands of people, including Sikhs and non-Sikhs alike. These events provide an opportunity to share Sikh values, traditions, and history with the wider global community.</p>
                 <p>One of the most prominent aspects of Vaisakhi’s global significance is the massive Nagar Kirtan processions held in major cities worldwide. These processions, led by the Panj Pyare (Five Beloved Ones), feature devotional singing, Gatka (Sikh martial arts), and community service activities. Cities such as London, Vancouver, Toronto, New York, and Melbourne host large-scale processions, where streets are filled with thousands of participants, including local officials and dignitaries, showcasing the spirit of Sikh unity and hospitality. These events promote interfaith harmony and cultural appreciation, inviting people from different backgrounds to experience Sikh traditions firsthand.</p>
                 <p>Vaisakhi also serves as a platform for social service and humanitarian initiatives. Sikh communities worldwide organize free food drives, blood donation camps, charity events, and community service projects in celebration of the festival. The Langar (community kitchen), an essential part of Sikh tradition, is extended beyond Gurdwaras to serve food to the homeless, underprivileged, and those in need, emphasizing Guru Nanak’s teachings of selfless service and equality. These acts of generosity highlight Sikhism’s core principles of compassion, justice, and inclusivity.</p>
                 <p></p>
             </div>
              )}
              {selectedInfo === 'Hola' && (
                 <div className="info-content"> 
                 <h2>Hola Mohalla: The Sikh Festival of Martial Spirit and Brotherhood
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Hola Mohalla is a unique Sikh festival that combines spiritual devotion, martial arts, and community service. Celebrated primarily in Anandpur Sahib, Punjab, it was established by Guru Gobind Singh Ji in 1701, a year after the formation of the Khalsa Panth. Unlike traditional Hindu Holi, which is known for colors and festivities, Hola Mohalla focuses on martial displays, processions, and reinforcing Sikh values of courage and self-defense. The festival continues to be one of the most spectacular and vibrant events in Sikh tradition, attracting thousands of devotees and tourists from around the world.</p>
                 <p>Hola Mohalla is more than just a festival—it is a powerful expression of Sikh courage, discipline, and spiritual devotion. It serves as a reminder of Guru Gobind Singh Ji’s vision to create a community of warrior-saints who uphold justice, protect the weak, and serve humanity. Through martial displays, devotional processions, and acts of selfless service, the festival reinforces the core Sikh principles of bravery, unity, and righteousness.</p>
                 <h3>1. Historical and Religious Significance :</h3>
                 <p>Hola Mohalla was initiated by Guru Gobind Singh Ji, the tenth Sikh Guru, to instill martial discipline among Sikhs and prepare them for self-defense against oppression. The name Hola is derived from Holi, while Mohalla means a procession or gathering in an organized manner. Unlike the playful Holi celebrations, Guru Gobind Singh Ji turned the occasion into a festival of military exercises, mock battles, and demonstrations of bravery, emphasizing that Sikhs must be ready to defend righteousness and justice at all times.</p>
                 <p>This festival played a crucial role in uniting and strengthening the Khalsa, preparing them for battles against the Mughal Empire and other invaders. The spirit of Hola Mohalla reflects the Sikh principles of Sant Sipahi (Saint-Soldier), where devotion to God is combined with the duty to protect the weak and fight against injustice. Even today, Hola Mohalla continues to revive this martial tradition, reminding Sikhs of their heritage of valor and resilience.</p>
                 <h3>2. Celebrations and Rituals :</h3>
                 <p>The main celebrations take place over three days at Takht Sri Keshgarh Sahib in Anandpur Sahib, Punjab, one of the five Takhats (seats of Sikh authority). The festival features a blend of spiritual, martial, and cultural activities, including :</p>
                 <p>
                  <ul>
                    <li>
                      <b>a) Martial Arts and Gatka Performances :</b>
                      One of the key highlights of Hola Mohalla is the demonstration of Gatka, the traditional Sikh martial art. Skilled warriors, including the Nihang Sikhs (a warrior sect of Sikhism), perform sword fights, archery, horseback riding, mock battles, and acrobatic stunts to showcase their strength, agility, and combat techniques. These displays are meant to preserve the martial traditions of Sikhism and inspire future generations.
                    </li>
                    <br />
                    <li>
                      <b>b) Nagar Kirtan and Processions :</b>
                      Massive Nagar Kirtan (religious processions) are organized, where the Guru Granth Sahib (Sikh holy scripture) is carried on a beautifully decorated palanquin, accompanied by devotional singing, drumbeats, and spiritual chants. Devotees walk in large numbers, singing hymns (shabads) and listening to discourses on Sikh history and values.
                    </li>
                    <br />
                    <li>
                      <b>c) Langar and Community Service (Seva) : </b>
                      As with all major Sikh festivals, Langar (free community meal) is served on a massive scale, embodying Guru Nanak&apos;s teachings of equality, selfless service, and generosity. Volunteers (sewadars) prepare and distribute food to thousands of visitors, regardless of caste, religion, or social status, reinforcing Sikh principles of humility and service to humanity.
                    </li>
                    <br />
                    <li>
                      <b>d) Bathing in the Holy Sarovars : </b>
                      Many devotees participate in ritualistic bathing in the holy Sarovars (sacred pools) near Gurdwaras, believing that it purifies their soul and brings spiritual blessings. This practice is considered auspicious and a way to seek divine guidance and strength.
                    </li>
                    <br />
                    <li>
                      <b>e) Poetry and Spiritual Discourses : </b>
                      Historically, Guru Gobind Singh Ji encouraged his followers to compose spiritual and heroic poetry during Hola Mohalla. Today, this tradition continues with Kavi Darbars (poetry recitals), Gurbani Kirtan (hymn singing), and discourses that spread Sikh teachings and inspire devotion, bravery, and righteousness.
                    </li>
                  </ul>
                 </p>
                 <h3>4. Global Celebrations and Cultural Impact :</h3>
                 <p>While the grandest celebrations take place in Punjab, Sikh communities worldwide, including in Canada, the United States, the United Kingdom, and Australia, organize Nagar Kirtans, Gatka competitions, and Sikh heritage exhibitions to keep the spirit of Hola Mohalla alive. These events serve as platforms to educate the younger generation about Sikh history and values, fostering cultural pride and community bonding.</p>
                 <p>Governments in Canada and the UK officially recognize Hola Mohalla, and it has gained international recognition as an important Sikh festival that promotes martial arts, cultural traditions, and humanitarian service.</p>
             </div>
              )}
              {selectedInfo === 'sikh-Diwali' && (
                 <div className="info-content"> 
                 <h2>Bandi Chhor Divas: The Sikh Festival of Freedom and Justice
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Bandi Chhor Divas, meaning “The Day of Liberation”, is a significant Sikh festival that celebrates Guru Hargobind Sahib Ji’s release from imprisonment along with 52 Hindu kings. It is observed on the same day as Diwali, making it one of the most important festivals in Sikh history. This festival symbolizes freedom, justice, and the victory of righteousness over oppression. It is celebrated with prayers, Nagar Kirtans, lighting of lamps, and community service, reinforcing Sikh values of compassion, courage, and selfless service.</p>
                 <p>Bandi Chhor Divas is not just a festival but a powerful reminder of Sikh values—courage, compassion, justice, and selfless service. Guru Hargobind Sahib Ji’s act of liberating the 52 kings symbolizes the Sikh mission of fighting against oppression and standing for the rights of all people.</p>
                 <h3>Historical Significance of Bandi Chhor Divas :</h3>
                 <p>The origins of Bandi Chhor Divas date back to the early 17th century during the reign of the Mughal Emperor Jahangir. The sixth Sikh Guru, Guru Hargobind Sahib Ji, was wrongfully imprisoned in Gwalior Fort for his growing influence and his decision to arm the Sikh community for self-defense. While in prison, Guru Hargobind Sahib Ji developed strong relations with 52 Hindu Rajput kings, who had also been unjustly detained.</p>
                 <p>After several appeals, Emperor Jahangir agreed to release Guru Hargobind Sahib Ji, but the Guru refused to leave unless the 52 kings were also freed. To make this possible, Guru Sahib devised a clever strategy—he asked for a robe with 52 tassels so that each king could hold onto one and walk out with him. Seeing this as a harmless request, the emperor agreed. On this day, Guru Hargobind Sahib Ji walked out of the fort with all 52 kings, earning the title “Bandi Chhor” (Liberator of Captives).</p>
                 <p>This act of compassion, leadership, and justice remains a powerful symbol of Sikh values—freedom, equality, and standing up for the oppressed.</p>
                 <h3>How Bandi Chhor Divas is Celebrated :</h3>
                 <p>
                  <ul>
                    <li>
                      <b>a) Gurdwara Celebrations and Akhand Path : </b>
                      On Bandi Chhor Divas, Gurdwaras (Sikh temples) across the world hold special prayers, kirtans (hymns), and discourses on Sikh history. The festival usually begins with an Akhand Path, a 48-hour continuous reading of the Guru Granth Sahib, to seek divine blessings and reflect on the teachings of Guru Hargobind Sahib Ji.
                    </li>
                    <br />
                    <li>
                      <b>b) Nagar Kirtan (Processions) : </b>
                      Large Nagar Kirtans (Sikh religious processions) are held in many cities. These processions are led by the Panj Pyare (Five Beloved Ones) and include devotees singing hymns, playing musical instruments, and carrying the Sikh flag (Nishan Sahib). Martial arts performances, such as Gatka (Sikh sword fighting), are also displayed to honor the Sikh warrior spirit.
                    </li>
                    <br />
                    <li>
                      <b>c) Lighting of Lamps and Fireworks : </b>
                      Since Bandi Chhor Divas coincides with Diwali, Gurdwaras, homes, and streets are illuminated with diyas (oil lamps), candles, and colorful lights. The Golden Temple (Harmandir Sahib) in Amritsar is beautifully decorated, and thousands of devotees gather to witness the spectacular fireworks display, which symbolizes the joy of liberation and the victory of righteousness.
                    </li>
                    <br />
                    <li>
                      <b>d) Langar and Seva (Community Service) : </b>
                      Sikh communities around the world engage in seva (selfless service), which includes serving free food (Langar), donating to the needy, and organizing charity events. The spirit of Bandi Chhor Divas aligns with the Sikh principle of Sarbat da Bhala (welfare of all). Many Sikhs also participate in blood donation camps, feeding the homeless, and offering free medical services on this day.
                    </li>
                  </ul>
                 </p>
                 <h3>Global Significance of Bandi Chhor Divas :</h3>
                 <p>Bandi Chhor Divas is celebrated by Sikh communities worldwide, especially in India, Canada, the United Kingdom, the United States, and Australia. The Golden Temple in Amritsar is the center of Sikh celebrations, attracting millions of devotees who gather to witness the mesmerizing display of lights, fireworks, and spiritual ceremonies.</p>
                 <p>Governments in countries with large Sikh populations, such as Canada and the UK, officially recognize Bandi Chhor Divas, highlighting its historical importance and Sikh contributions to society. The festival also promotes unity, peace, and the message of standing up for human rights and justice.</p>
             </div>
              )}
              {selectedInfo === 'Maghi' && (
                 <div className="info-content"> 
                 <h2>Maghi: The Sikh Festival of Martyrdom and Courage
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Maghi is a Sikh festival that commemorates the martyrdom of the Forty Mukte (Liberated Ones) who sacrificed their lives in the Battle of Muktsar Sahib while fighting against the Mughal forces of Aurangzeb. The festival falls on the first day of the Magh month in the Punjabi calendar (January 13/14 in the Gregorian calendar), a day after Lohri. Maghi is observed with prayers, processions, recitations of Gurbani (Sikh scriptures), and community service, honoring the spirit of bravery and devotion in Sikh history.</p>
                 <h3>Historical Significance of Maghi :</h3>
                 <p>The origins of Maghi date back to 1705, during the time of Guru Gobind Singh Ji, the tenth Sikh Guru. At this time, the Mughal Emperor Aurangzeb was actively persecuting Sikhs, and Guru Gobind Singh Ji was forced to leave Anandpur Sahib due to the betrayal of local rulers.</p>
                 <p>
                  <b>The Story of the Forty Mukte :</b> <br />
                  While fleeing, Guru Gobind Singh Ji and his followers were attacked at Chamkaur, leading to the famous Battle of Chamkaur, where the Guru&apos;s two elder sons and many Sikhs were martyred. Seeing the intensity of the battle, forty Sikhs who had earlier abandoned the Guru at Anandpur Sahib out of exhaustion and hardship later felt deep regret. <br />
                  Under the leadership of Mai Bhago, a brave Sikh woman, these forty Sikhs reunited, repented for their mistake, and pledged to fight for the Guru. They engaged in battle at Khidrana di Dhab (now known as Muktsar Sahib) against a large Mughal army. Despite being vastly outnumbered, these warriors fought courageously and sacrificed their lives. <br />
                  When Guru Gobind Singh Ji arrived at the battlefield, he blessed the forty fallen warriors as “Mukte” (Liberated Ones), assuring them of their place in Sikh history and spirituality. Since then, Maghi has been observed as a day to honor their sacrifice.
                 </p>
                 <h3>Rituals and Celebrations of Maghi :</h3>
                 <p>
                  <ul>
                    <li>
                      <b>a) Bathing in Holy Sarovars (Tanks) and Gurdwara Visits :</b>
                      On Maghi, Sikhs visit Gurdwaras (Sikh temples) and take a holy dip in sacred sarovars (water tanks) to purify themselves spiritually. The most important pilgrimage site is Muktsar Sahib, where the battle took place. Thousands of Sikhs visit Gurdwara Sri Muktsar Sahib to pay homage to the Forty Mukte.
                    </li>
                    <br />
                    <li>
                      <b>b) Akhand Path (Continuous Recitation of Guru Granth Sahib) :</b>
                      Gurdwaras organize Akhand Paths, which are 48-hour continuous recitations of the Guru Granth Sahib, the holy scripture of Sikhism. Devotees listen to kirtans (hymns) and spiritual discourses reflecting on the values of bravery, devotion, and faith in Guru Gobind Singh Ji’s teachings.
                    </li>
                    <br />
                    <li>
                      <b>c) Nagar Kirtans (Religious Processions) :</b>
                      Large Nagar Kirtans (Sikh religious processions) take place in cities and towns, led by the Panj Pyare (Five Beloved Ones). These processions include:
                      <ul>
                        <li>1. Singing of Gurbani (Sikh hymns)</li>
                        <li>2. Display of Gatka (Sikh martial arts)</li>
                        <li>3. Speeches on Sikh history and bravery</li>
                        <li>4. Distribution of Prasad and Langar (Community Kitchen Food)</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      <b>e) Offering Langar (Free Meals) and Seva (Selfless Service) :</b>
                      On Maghi, Sikhs actively participate in seva (selfless service) by offering Langar (free meals) in Gurdwaras, serving food to all regardless of caste, creed, or religion. Many also engage in charitable activities like helping the needy and organizing blood donation drives.
                    </li>
                  </ul>
                 </p>
                 <h3>The Spiritual Message of Maghi :</h3>
                 <p>
                 Maghi is not just about remembering a historical battle but also learning valuable Sikh teachings: <br /> <br />
                 <ul>
                  <li>Commitment to Guru and Sikh values – The Forty Mukte demonstrated that faith and loyalty to the Guru should be unwavering.</li>
                  <li>Sacrifice for righteousness – Their battle against the Mughals symbolizes the fight against oppression and injustice.</li>
                  <li>Equality and courage – The role of Mai Bhago, the warrior woman who led the battle, highlights gender equality in Sikhism.</li>
                 </ul>
                 <br />
                 Through prayers, recitations, and celebrations, Maghi inspires Sikhs to uphold truth, bravery, and unwavering faith in their beliefs.
                 </p>
                 <h3>Global Significance of Maghi :</h3>
                 <p>Maghi is observed by Sikhs across the world, particularly in India, Canada, the UK, the US, and Australia. The festival is an occasion for community gatherings, religious discussions, and remembering Sikh history. Gurdwaras worldwide conduct special kirtans and langar services, reinforcing the spirit of Sikh unity and service to humanity.</p>
             </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="wild-page-3">
            <div className="wild-page-3-1">
                <h2>
                  Christian Festivals
                </h2>
                <p>Christian festivals are religious celebrations observed by Christians worldwide to commemorate significant events in the life of Jesus Christ and other key aspects of Christianity. These festivals are celebrated with prayers, church services, feasts, and various traditions depending on the denomination and region. The most famous Christian festivals include:</p>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Christmas')}>Christmas </h3>
                    <h3 onClick={() => handleInfoClick('Friday')}>Good Friday</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Christmas' && (
                <div className="info-content"> 
                    <h2>Christmas: The Celebration of the Birth of Jesus Christ :
                      <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                          &times;
                      </span>
                    </h2>
                    <p>Christmas is one of the most significant festivals in Christianity, celebrated on December 25th each year to mark the birth of Jesus Christ, the central figure of Christianity. It is observed by millions of people worldwide, not only as a religious event but also as a cultural celebration. The festival symbolizes peace, love, joy, and the spirit of giving.</p>
                    <p>Christmas is a festival of faith, joy, and togetherness. It reminds people of Jesus Christ’s message of love, hope, and salvation. Whether through religious observances, family gatherings, or acts of kindness, Christmas unites people in a spirit of peace, generosity, and goodwill.</p>
                    <h3>Religious Significance of Christmas</h3>
                    <p>Christmas commemorates the birth of Jesus Christ, believed to be the Son of God and the Savior of humanity. According to the New Testament of the Bible, Jesus was born in Bethlehem to Mary and Joseph. His birth fulfilled the prophecies in the Old Testament about the coming of the Messiah, who would bring salvation and hope to the world.</p>
                    <p>Christians believe that Jesus’ birth brought hope, salvation, and eternal life, making Christmas a deeply spiritual and joyous occasion.</p>
                    <h3>Traditions and Celebrations of Christmas :</h3>
                    <p>Christmas is celebrated with various traditions that vary across cultures and regions. Some of the most common customs include: </p>
                    <p>
                      <ul>
                        <li>
                          <b>a) Decorating the Christmas Tree :</b> The Christmas tree is a symbol of everlasting life and joy. People decorate trees with lights, ornaments, stars, bells, and angels. The star on top represents the Star of Bethlehem that guided the Wise Men.
                        </li>
                        <li>
                          <b>b) Nativity Scenes and Church Services :</b> Christian families set up Nativity scenes (Cribs) depicting the birth of Jesus with figures of Mary, Joseph, baby Jesus, shepherds, Wise Men, and animals. Churches organize special midnight Mass services on Christmas Eve (December 24th) and Christmas Day (December 25th).
                        </li>
                        <li>
                          <b>c)  Santa Claus and Stockings :</b> In many cultures, children eagerly await Santa Claus (Saint Nicholas), who is believed to deliver gifts on Christmas Eve. They hang stockings by the fireplace or bed, hoping to receive presents.
                        </li>
                        <li>
                          <b>d) Christmas Feast and Special Dishes :</b> Christmas is a time for festive meals, which vary across cultures. Traditional dishes include:
                          <ul>
                            <li>1. Roast turkey or ham (Western countries)</li>
                            <li>2. Plum cake and Christmas pudding</li>
                            <li>3. Cookies, pies, and gingerbread houses</li>
                            <li>4. Special sweets like ‘Kuswar’ in India</li>
                          </ul>
                        </li>
                      </ul>
                    </p>
                    <h3>The Spirit of Giving and Charity :</h3>
                    <p>Christmas promotes the values of compassion, kindness, and charity. Many people donate to charities, orphanages, and homeless shelters during this time. The tradition of helping the needy reflects the teachings of Jesus Christ, who emphasized love and service to others.</p>
                    <h3>Global Celebrations of Christmas :</h3>
                    <p>
                      <ul>
                        <li><b>United States & Europe –  </b> Decorated homes, Santa Claus parades, ice skating, and Christmas markets.</li>
                        <li><b>India –  </b> Midnight Mass, Christmas sweets (Kuswar in Goa), and decorated churches.</li>
                        <li><b>Philippines –  </b> The longest Christmas season with a mix of Catholic and local traditions.</li>
                        <li><b>Mexico – </b> Las Posadas, a reenactment of Mary and Joseph’s journey.</li>
                        <li><b>Australia - </b> Summer Christmas with barbecues on the beach.</li>
                      </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Friday' && (
                 <div className="info-content"> 
                 <h2>Good Friday: The Day of Christ’s Crucifixion
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h2>
                 <p>Good Friday is one of the most solemn and important days in Christianity, observed to commemorate the crucifixion and death of Jesus Christ at Calvary (Golgotha). It is observed on the Friday before Easter Sunday during Holy Week, and it is a day of mourning, reflection, and prayer. Despite the sorrowful nature of the day, it is called Good Friday because it marks the sacrifice of Jesus for humanity’s salvation, leading to the resurrection on Easter Sunday.</p>
                 <h3>Religious Significance of Good Friday</h3>
                 <p>Good Friday is significant because it marks the day Jesus Christ was crucified by the Roman authorities. According to the New Testament, Jesus was falsely accused, betrayed by one of his disciples (Judas Iscariot), arrested, and put on trial by the Jewish religious leaders and the Roman governor, Pontius Pilate.</p>
                 <p>Despite finding no fault in Jesus, Pilate succumbed to public pressure and sentenced him to death by crucifixion—a brutal punishment reserved for criminals. Jesus was mocked, flogged, and forced to carry his own cross to Golgotha, where he was nailed to the cross between two criminals.</p>
                 <p>Christians believe that Jesus&apos;s death was a sacrifice for the sins of humanity, fulfilling God’s plan for salvation. His death paved the way for his resurrection on Easter Sunday, symbolizing victory over sin and death.</p>
                 <h3> The Meaning of “Good” in Good Friday :</h3>
                 <p>Many wonder why such a sorrowful day is called “Good” Friday. The word Good in this context refers to the benefit of Jesus’ sacrifice for humanity:</p>
                 <p>
                  <ul>
                    <li>1. Jesus&apos;s death led to salvation, making it a day of redemption rather than just sorrow.</li>
                    <li>2. The term Good may have originated from God&apos;s Friday, later evolving into Good Friday.</li>
                  </ul>
                 </p>
                 <h3>Observances and Traditions of Good Friday :</h3>
                 <p>Good Friday is a solemn day of mourning, prayer, and reflection for Christians around the world, observed with deep reverence and devotion. One of the most significant traditions is attending church services, where special prayers and readings from the Passion of Christ recount Jesus&apos;s suffering and crucifixion. Many churches hold The Three-Hour Service, from 12:00 PM to 3:00 PM, symbolizing the hours Jesus spent on the cross before his death. A key ritual observed in many Christian communities is the Stations of the Cross, a devotional practice that follows Jesus&apos;s final journey from his trial to his crucifixion through 14 stations, each representing a significant moment of his suffering. Another essential observance is fasting and abstinence, especially in the Catholic Church, where believers fast by eating only one full meal and abstain from consuming meat as an act of penance and mourning. Many churches remove decorations, cover crosses with black cloth, and leave altars bare, symbolizing grief and respect for Jesus’ sacrifice. In various parts of the world, processions and reenactments of the Passion of Christ take place, with participants carrying crosses or enacting scenes from Jesus&apos;s crucifixion. Countries like the Philippines and Spain have elaborate processions, where devout believers sometimes engage in acts of extreme penance to express their faith. Good Friday is a time for deep introspection, where Christians reflect on the love, sacrifice, and redemption associated with Jesus&apos;s death, preparing spiritually for the joyous celebration of Easter Sunday, which marks his resurrection.</p>
             </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="wild-page-3">
            <div className="wild-page-3-1">
                <h2>
                  Buddhist Festivals
                </h2>
                <p>Buddhism has several important festivals that are observed by followers around the world. These festivals are often linked to significant events in the life of Gautama Buddha or important teachings of Buddhism. The celebrations vary by region and Buddhist tradition (Theravāda, Mahāyāna, and Vajrayāna), but they all emphasize peace, wisdom, and spiritual growth. </p>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Buddha')}>Buddha Purnima</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Buddha' && (
                <div className="info-content"> 
                    <h2>Buddha Purnima – The Birth, Enlightenment, and Parinirvana of Buddha
                      <span className="close-button" onClick={(e) => handleInfoClose(e, 'Buddha')}>
                          &times;
                      </span>
                    </h2>
                    <p>Vesak, also known as Buddha Purnima, is the most significant Buddhist festival, celebrated to commemorate the birth, enlightenment, and passing (parinirvana) of Gautama Buddha. It is observed by Buddhists worldwide, especially in countries like India, Sri Lanka, Nepal, Thailand, Myanmar, Cambodia, China, Japan, and Tibet. The festival falls on the full moon day of the month of Vaisakha (April-May) according to the lunar calendar.</p>
                    <p>Vesak (Buddha Purnima) is the holiest day for Buddhists, marking the birth, enlightenment, and liberation of Gautama Buddha. It is celebrated with prayers, meditation, generosity, and cultural festivities, spreading Buddha’s timeless message of peace, wisdom, and compassion. The festival serves as a reminder to follow the path of righteousness (Dharma) and cultivate kindness toward all beings.</p>
                    <h3>Historical and Religious Significance :</h3>
                    <p>Vesak is important because it marks the three most sacred events in Buddha’s life: </p>
                    <p>
                      <ul>
                        <li><b>Birth of Prince Siddhartha Gautama: </b> He was born in Lumbini, Nepal, in 623 BCE as a prince of the Shakya clan. A prophecy foretold that he would either become a great king or a spiritual teacher.</li>
                        <li><b>Enlightenment (Nirvana) of Buddha: </b> At the age of 35, Siddhartha attained enlightenment under the Bodhi tree in Bodh Gaya, India, becoming the Buddha (The Enlightened One) and discovering the Four Noble Truths and the Eightfold Path.</li>
                        <li><b>Parinirvana (Death and Liberation): </b> At the age of 80, Buddha attained Mahaparinirvana in Kushinagar, India, achieving final liberation from the cycle of birth and death (samsara).</li>
                      </ul>

                    </p>
                    <h3> Rituals and Traditions of Vesak :</h3>
                    <p>Vesak, also known as Buddha Purnima, is observed with deep devotion, spiritual reflection, and acts of kindness. On this sacred day, Buddhists visit temples and monasteries, offering flowers, candles, and incense while chanting sacred scriptures. These offerings symbolize the impermanence of life and the need for mindfulness. Many devotees engage in meditation and prayer, seeking inner peace and enlightenment by reflecting on Buddha’s teachings. Acts of generosity (Dana) play a significant role in Vesak, with people donating food, clothes, and money to the poor and monks. Releasing captive birds and animals is also a common practice, representing compassion and liberation. Lighting oil lamps and lanterns is a prominent tradition, symbolizing the light of wisdom dispelling ignorance. In many countries, grand processions and cultural performances are held, showcasing scenes from Buddha’s life. Some followers observe vegetarianism or fasting, emphasizing non-violence (Ahimsa) and self-discipline. The festival is a time for self-purification, kindness, and spreading the message of peace, making Vesak a deeply meaningful and spiritually enriching occasion. </p>
                    <h3>Significance of Vesak in Modern Times :</h3>
                    <p>Vesak remains highly relevant in today&apos;s world, not only as a religious festival but also as a reminder of peace, compassion, and wisdom. In an era marked by conflicts, materialism, and stress, Buddha’s teachings on non-violence (Ahimsa), mindfulness, and selflessness offer valuable guidance for individuals and societies. The festival promotes acts of generosity, inspiring people to help the needy through charity, donations, and community service, fostering a culture of kindness and social responsibility.</p>
                    <p>Moreover, in modern times, the practice of meditation and mindfulness, which is central to Buddhism, has gained global recognition for improving mental well-being, reducing stress, and enhancing inner peace. Many people, regardless of religion, turn to Buddhist principles to find harmony in life. Vesak also serves as a call for environmental consciousness, as Buddha emphasized the respect and care for all living beings, aligning with modern sustainability efforts.</p>
                    <p>In 1999, the United Nations (UN) officially recognized Vesak as an international holiday, acknowledging its universal values of peace and harmony. The festival encourages individuals to adopt moral discipline, practice patience, and cultivate wisdom, making it highly relevant in today’s fast-paced and often chaotic world. As people across cultures and backgrounds embrace the essence of Vesak, it continues to inspire a global movement toward compassion, mindfulness, and a better world for all. </p>
                </div>
              )}
            </div>
          )}
            </div>
        </div> */}
        <Footer></Footer>
    </div>
  )
}

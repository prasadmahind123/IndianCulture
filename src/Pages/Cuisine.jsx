import NavBar from '../Components/NavBar';
import { IndianCuisine } from '../Data/IndianCuisine';
import './Cuisine.css';
import { useState , useEffect } from 'react';
 import {Link , useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ChevronRight, Utensils, MapPin, BookOpen, Award, Clock  } from "lucide-react"


const Cuisine = () => {
        const [isLoading, setIsLoading] = useState(true);
        const [activeTab, setActiveTab] = useState('north');

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


          const tabs = [
            { id: 'north', label: 'North Indian' },
            { id: 'south', label: 'South Indian' },
            { id: 'east', label: 'East Indian' },
            { id: 'west', label: 'West Indian' },
          ];
        
          const tabContent = {
            north: (
              <div className='tab-content'>
                <div className="tab-container">
                  <img className='tab-img' src="/images/CuisinePage/Meal.webp" alt="" />
                </div>
                <div className="tab-text">
                  <h3>North Indian Cuisine</h3>
                  <p>Known for its rich, creamy gravies and tandoor-cooked breads, North Indian cuisine has been influenced by Mughal cooking techniques. The region is famous for dishes like butter chicken, various types of naan, kebabs, and rich dairy-based desserts.</p>
                  <ul>
                    <li> <ChevronRight color="#f00000" /> Signature dishes: Butter Chicken, Rogan Josh, Chole Bhature</li>
                    <li><ChevronRight color="#f00000"  />Key ingredients: Dairy, wheat, aromatic spices</li>
                    <li><ChevronRight color="#f00000"  />Cooking techniques: Tandoor, dum cooking</li>
                  </ul>
                </div>
              </div>
            ),
            south: (
              <div className='tab-content'>
                <div className="tab-container">
                <img  className='tab-img' src="/images/CuisinePage/Idali.jpg" alt="" />
                </div>
                <div className="tab-text">
                  <h3>South Indian Cuisine</h3>
                  <p>South Indian cuisine is characterized by its light, digestible dishes with an emphasis on rice, lentils, and stews. The liberal use of coconut and curry leaves gives the food its distinctive flavor, while fermentation techniques add complexity.</p>
                  <ul>
                    <li><ChevronRight color="#f00000" />Signature dishes: Dosa, Idli, Sambar, Rasam</li>
                    <li><ChevronRight color="#f00000" />Key ingredients: Rice, coconut, curry leaves, tamarind</li>
                    <li><ChevronRight color="#f00000" />Cooking techniques: Fermentation, steaming, tempering</li>
                  </ul>
                </div>
                
              </div>
            ),
            east: (
              <div className='tab-content'>
                <div className="tab-container">
                  <img className='tab-img' src="/images/CuisinePage/Dalma.jpg" alt="" />
                </div>
                <div className="tab-text">
                  <h3>East Indian Cuisine</h3>
                  <p>Eastern Indian cuisine is known for its subtle flavors, with an emphasis on fish, rice, and mustard. Bengali cuisine, in particular, is famous for its complex preparation methods and the perfect balance of sweet and spicy flavors.</p>
                  <ul>
                    <li><ChevronRight color="#f00000" />Signature dishes: Machher Jhol, Rasgulla, Mishti Doi</li>
                    <li><ChevronRight color="#f00000" />Key ingredients: Fish, mustard, panch phoron, rice</li>
                    <li><ChevronRight color="#f00000" />Cooking techniques: Steaming, slow cooking</li>
                  </ul>
                </div>
              </div>
            ),
            west: (
              <div className='tab-content'>
                <div className="tab-container">
                  <img className='tab-img' src="/images/CuisinePage/vadapav.jpeg" alt="" />
                </div>
                <div className="tab-text">
                  <h3>West Indian Cuisine</h3>
                  <p>Western Indian cuisine varies from the coastal seafood dishes of Goa and Maharashtra to the vegetarian fare of Gujarat. The region is known for its use of coconut, jaggery, and a variety of spices that create bold, distinctive flavors.</p>
                  <ul>
                    <li> <ChevronRight color="#f00000" />Signature dishes: Dhokla, Vindaloo, Vada Pav</li>
                    <li><ChevronRight color="#f00000" />Key ingredients: Coconut, seafood, jaggery, kokum</li>
                    <li><ChevronRight color="#f00000" />Cooking techniques: Pickling, frying, sun-drying</li>
                  </ul>
                </div>
              </div>
              
            ),
          };
        
        
  return (
    <div className="cuisine-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="page-container">
      {/* Hero Section */}
      <section className="cuisine-hero-section">
        <div className="cuisine-hero-overlay" />
        <div className="container cuisine-hero-content">

          <h1 className="cuisine-hero-title" style={{color:`white`}}>The Rich Tapestry of Indian Cuisine</h1>
          <p className="cuisine-hero-description">
            Discover the diverse flavors, ancient techniques, and cultural significance behind India&apos;s culinary
            traditions.
          </p>
          
        </div>
      </section>

      {/* Introduction Section */}
      <section className="cuisine-intro-section">
        <div className="cuisine-container">
          <div className="cuisine-grid-container">
            <div className='cuisine-intro-text'>
              <h2 className="cuisine-section-title">A 5,000-Year Culinary Journey</h2>
              <p className="cuisine-section-text">
                Indian cuisine is one of the world&apos;s oldest culinary traditions, with a rich history dating back over
                5,000 years. It represents a harmonious blend of diverse religious beliefs, cultural practices, and
                regional influences that have evolved over centuries.
              </p>
              <p className="cuisine-section-text">
                The cuisine is characterized by its sophisticated use of spices, herbs, and vegetables, developed across
                different periods of history including ancient kingdoms, medieval sultanates, and the colonial era, each
                leaving their distinct mark on the food culture.
              </p>
              <div className="cuisine-feature-container">
                <div className="cuisine-feature-item">
                  <div className="cuisine-feature-icon">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="cuisine-feature-title">Diverse Techniques</h3>
                    <p className="cuisine-feature-subtitle">From tandoor to dum cooking</p>
                  </div>
                </div>
                <div className="cuisine-feature-item">
                  <div className="cuisine-feature-icon">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="cuisine-feature-title">Regional Variety</h3>
                    <p className="cuisine-feature-subtitle">28 states, 28 cuisines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cuisine-image-container">
              <img
                src="/images/CuisinePage/health.webp"
                alt="Traditional Indian cooking methods"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Cuisines Section */}
      <section className="regional-section">
        <div className="cuisine-container">
          <div className="cuisine-section-header">
            <h2 className="cuisine-section-title">Regional Culinary Treasures</h2>
            <p className="cuisine-section-description">
              India&apos;s vast geography has given rise to distinct regional cuisines, each with its own ingredients,
              techniques, and flavor profiles shaped by local climate, culture, and history.
            </p>
          </div>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tabs-container">
            <div className="cuisine-tab-content">{tabContent[activeTab]}</div>
          </div>
        </div>
      </section>

      {/* Spices Section */}
      <section className="spices-section">
        <div className="cuisine-container">
          <div className="cuisine-section-header">
            <h2 className="cuisine-section-title">The Art of Spices</h2>
            <p className="cuisine-section-description">
              Spices are the soul of Indian cuisine, used not just for flavor but also for their medicinal properties
              according to Ayurvedic principles.
            </p>
          </div>

          <div className="spice-grid">
            {[
              {
                name: "Turmeric",
                description: "Known for its anti-inflammatory properties and golden color",
                uses: "Curries, rice dishes, medicinal drinks",
              },
              {
                name: "Cardamom",
                description: "The 'Queen of Spices' with a sweet, floral aroma",
                uses: "Biryanis, desserts, chai tea",
              },
              {
                name: "Cumin",
                description: "Earthy flavor that forms the base of many spice blends",
                uses: "Tempering, garam masala, chutneys",
              },
              {
                name: "Cinnamon",
                description: "Sweet and woody spice used in both savory and sweet dishes",
                uses: "Biryanis, curries, desserts",
              },
              {
                name: "Coriander",
                description: "Citrusy seeds that balance heat in dishes",
                uses: "Spice blends, chutneys, marinades",
              },
              {
                name: "Fenugreek",
                description: "Bitter seeds that add complexity to dishes",
                uses: "Pickles, curries, spice blends",
              },
              {
                name: "Mustard Seeds",
                description: "Pungent seeds that pop when heated in oil",
                uses: "Tempering, pickles, Bengali cuisine",
              },
              {
                name: "Asafoetida",
                description: "Pungent resin with a unique flavor when cooked",
                uses: "Lentil dishes, vegetarian recipes",
              },
            ].map((spice, index) => (
              <div key={index} className="spice-card">
                <div className="spice-header">
                  <h3 className="spice-title">{spice.name}</h3>
                </div>
                <div className="spice-content">
                  <p className="spice-description">{spice.description}</p>
                  <div className="spice-uses">
                    <BookOpen className="spice-uses-icon h-5 w-5" />
                    <p className="spice-uses-text">
                      <span className="spice-uses-label">Common uses:</span> {spice.uses}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="dishes-section">
        <div className="cuisine-container">
          <div className="cuisine-section-header">
            <h2 className="cuisine-section-title">Celebrated Indian Delicacies</h2>
            <p className="cuisine-section-description">
              From royal kitchens to street food stalls, these iconic dishes represent the diversity and richness of
              Indian culinary traditions.
            </p>
          </div>

          <div className="dish-grid">
           {  IndianCuisine.map((dish, index) => (
              <div key={index} className="dish-card">
                <div className="dish-image">
                  <img src={dish.img || "/placeholder.svg"} alt={dish.title}  className="object-cover" />
                </div>
                <div className="dish-header">
                  <div className="dish-header-content">
                    <h3 className="dish-title">{dish.title}</h3>
                    <span className="dish-region">{dish.state}</span>
                  </div>
                </div>
                <div className="dish-content">
                  <p className="dish-description">{dish.description}</p>
                </div>
                <div className="read-more">
                  <Link to={`/cuisine/${dish.index}`}>
                    <button className="dish-link">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="cultural-section">
        <div className="container">
          <div className="cultural-grid">
            <div className="cultural-content">
              <h2 className="cuisine-section-title">Food in Indian Culture & Celebrations</h2>
              <p className="cuisine-section-text">
                In Indian culture, food transcends mere sustenance—it&apos;s an expression of love, hospitality, and
                spiritual devotion. Every festival, ceremony, and life event has its associated traditional dishes that
                carry deep cultural significance.
              </p>

              <div className="cultural-features">
                <div className="cultural-feature">
                  <div className="cultural-feature-icon">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="cultural-feature-title">Festivals & Food</h3>
                    <p className="cultural-feature-text">
                      From Diwali sweets to Eid biryanis, each festival has its special dishes that are prepared with
                      reverence and shared with family and community.
                    </p>
                  </div>
                </div>

                <div className="cultural-feature">
                  <div className="cultural-feature-icon">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="cultural-feature-title">Ancient Food Wisdom</h3>
                    <p className="cultural-feature-text">
                      Ayurvedic principles guide traditional Indian cooking, with foods classified according to their
                      effects on body and mind, creating a holistic approach to nutrition.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="cultural-images">
              <div className="cultural-image">
                <img src="/images/CuisinePage/diwali.jpg" alt="Diwali sweets"  className="object-cover" />
              </div>
              <div className="cultural-image cultural-image-offset">
                <img src="/images/CuisinePage/wedding.jpg" alt="Wedding feast"  className="object-cover" />
              </div>
              <div className="cultural-image">
                <img src="/images/CuisinePage/temple.jpg" alt="Temple prasad"  className="object-cover" />
              </div>
              <div className="cultural-image cultural-image-offset">
                <img src="/images/CuisinePage/family.jpg" alt="Family dinner"  className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
      <Footer></Footer>
    </div>
  );
};

// Export the component
export default Cuisine;

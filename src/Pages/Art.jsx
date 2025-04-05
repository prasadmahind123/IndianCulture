import NavBar from "../Components/NavBar"
 import { Link ,useNavigate  } from 'react-router-dom';
import { useState , useEffect } from "react";
import './Art.css'
 import { TDance } from "../Data/TDance";
import Footer from "../Components/Footer";
 import ScrollUp from "../Components/ScrollUp";
 import { X} from "lucide-react"
export default function Art() {
    // const [showInfo, setShowFoodInfo] = useState(false);
    // const [selectedFoodState, setSelectedFoodInfo] = useState(null);
    //   const handleInfoClickFood = (state) => {
    //     setSelectedFoodInfo(state);
    //     setShowFoodInfo(true);
    //   };
    const navigate = useNavigate();
        const [selectedInfo, setSelectedInfo] = useState(null);
        const handleInfoClick = (info) => {
            setSelectedInfo(info);
          }
          const handleHideDetails = () => {
            setSelectedInfo(null);
          };
    const handleHome = () => {
        navigate('/'); 
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
        
      {/* Hero Section */}
      <section className="arch-hero">
        <div className="arch-hero-overlay">
          <h1>Indian Art & Dance</h1>
          <p>Explore the rich tapestry of India&apos;s classical and folk art traditions spanning millennia</p>
        </div>
        <div className="arch-hero-background">
          <img
            src="/images/Paintings/Tanjore-2.jpeg"
            alt="Indian Art"
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
            <li onClick={handleHome}>
                Home
            </li>
            <li>Art & Dance</li>
          </ul>
        </div>
      </div>
      <section className="introduction">
        <div className="arch-container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>The Living Canvas of Indian Expression</h2>
              <p>
                Indian art is one of the world&apos;s oldest and most diverse artistic traditions, with a history spanning
                thousands of years. From the ancient cave paintings of Ajanta to the classical dance forms that continue
                to thrive today, India&apos;s artistic heritage represents a continuous dialogue between tradition and
                innovation.
              </p>
              <p>
                The artistic expressions of India are deeply intertwined with its philosophical, religious, and cultural
                contexts. They serve not merely as aesthetic pursuits but as vehicles for spiritual elevation, cultural
                preservation, and community celebration.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <h3>5,000+</h3>
                  <p>Years of Artistic Tradition</p>
                </div>
                <div className="stat-item">
                  <h3>8</h3>
                  <p>Classical Dance Forms</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Major Painting Styles</p>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img
                src="/images/Paintings/Tanjore-1.jpeg"
                alt="Indian Art Collage"
                width={700}
                height={500}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      
        <div className="page-1">
        <div className="content-right">
                    <img src="images/Paintings/Miniature-1.jpg" alt="" />
                </div>
           
            <div className="wild-content">
                <div className="left-container">
                    <span className="t">
                    Artistic Legacy
                    </span>
                    <h3>
                    Explore the Timeless Beauty of Indian Art!
                    </h3>
                    <p>
                    Indian art is a reflection of the country’s rich cultural, religious, and historical heritage. It has evolved over thousands of years, influenced by different dynasties, traditions, and spiritual beliefs. From ancient rock paintings and temple sculptures to intricate folk art and modern abstract styles, Indian art showcases a diverse range of expressions.
                    </p>
                    <p>The earliest forms of Indian art can be seen in prehistoric cave paintings like those in Bhimbetka. Later, grand temple carvings, Mughal miniatures, and folk paintings flourished, each representing different aspects of life, mythology, and nature. Traditional art forms such as Madhubani, Warli, and Tanjore continue to be practiced today, while contemporary Indian artists are making a global impact with modern interpretations.</p>
                    <p>Indian art is not just limited to paintings and sculptures; it also includes textile arts, pottery, and decorative crafts that showcase India&apos;s deep artistic traditions. The fusion of traditional and modern elements makes Indian art a vibrant and dynamic field that continues to evolve while preserving its roots.</p>
                </div> 
                
            </div>    
        </div>
        <ScrollUp/>
        <div className="wild-page-2">
            <div className="left-container">
            <img src="images/Paintings/Madhubani-4.jpg" alt="" />
            </div>
            <div className="right-container">
                <div className="heading">
                    <h3>
                        Quick Info About Indian art forms, their location, type, and period of origin
                    </h3>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>
                            Art Form</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Period/Year</th>
                        </tr>
                        <tr>
                            <td>Bhimbetka Rock Paintings</td>
                            <td>Madhya Pradesh</td>
                            <td>Cave Paintings	</td>
                            <td>30,000 BCE – 10,000 BCE</td>
                        </tr>
                        <tr>
                            <td>Ajanta Cave Paintings</td>
                            <td>Maharashtra</td>
                            <td>Mural Paintings</td>
                            <td>2nd Century BCE – 5th Century CE</td>
                        </tr>
                        <tr>
                            <td>Ellora Cave Art</td>
                            <td>Maharashtra</td>
                            <td>Mural & Sculpture Art</td>
                            <td>6th – 9th Century CE</td>
                        </tr>
                        <tr>
                            <td>Madhubani Painting</td>
                            <td>Bihar</td>
                            <td>Folk Painting</td>
                            <td>Ancient – Present</td>
                        </tr>
                        <tr>
                            <td>Warli Painting</td>
                            <td>Maharashtra</td>
                            <td>Tribal Painting</td>
                            <td>10th Century CE</td>
                        </tr>
                        <tr>
                            <td>Pattachitra Painting</td>
                            <td>Odisha, West Bengal</td>
                            <td>Scroll Painting</td>
                            <td>5th Century BCE</td>
                        </tr>
                        <tr>
                            <td>Tanjore Painting</td>
                            <td>Tamil Nadu</td>
                            <td>Religious Painting</td>
                            <td>1974</td>
                        </tr>
                        <tr>
                            <td>Kalamkari Painting</td>
                            <td>Andhra Pradesh, Telangana</td>
                            <td>Hand-Painted Textile Art</td>
                            <td>15th Century CE</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="wild-page-3">
            <div className="wild-page-3-1">
                <h1>
                    Indian Popular Paintings
                </h1>
                <p>Indian paintings are a diverse and ancient art form that reflects the country&apos;s rich history, cultural traditions, and spiritual heritage. Ranging from prehistoric cave paintings to classical temple murals and intricate folk and miniature art, Indian paintings have evolved over thousands of years, influenced by religion, mythology, nature, and daily life.</p>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Rock')}>Bhimbetka Rock Paintings</h3>
                    <h3 onClick={() => handleInfoClick('Cave')}>Ajanta Cave Paintings</h3>
                    <h3 onClick={() => handleInfoClick('Madhubani')}>Madhubani Painting</h3>
                    <h3 onClick={() => handleInfoClick('Warli')}>Warli Painting</h3>
                    <h3 onClick={() => handleInfoClick('Pattachitra')}>Pattachitra Painting</h3>
                    <h3 onClick={() => handleInfoClick('Tanjore')}>Tanjore Painting</h3>
                    <h3 onClick={() => handleInfoClick('Kalamkari')}>Kalamkari Painting</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Rock' && (
                <div className="info-content"> 
                    <h2>Bhimbetka Rock Paintings  <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2> 
                    <p>The Bhimbetka Rock Paintings, located in the Raisen district of Madhya Pradesh, India, are one of the oldest known examples of prehistoric art in the world. These rock shelters contain paintings that date back as far as 30,000 BCE, spanning the Paleolithic (Old Stone Age), Mesolithic (Middle Stone Age), and later periods, making them a crucial source of information about early human life in India. Discovered in 1957 by archaeologist Dr. V.S. Wakankar, Bhimbetka was declared a UNESCO World Heritage Site in 2003 due to its immense historical and cultural significance.</p>
                    <h3>Art and Themes :</h3>
                    <p>The paintings at Bhimbetka primarily depict hunting scenes, dancing, communal activities, rituals, and various animals like bison, tigers, elephants, and deer. Many images feature stick-figure humans, often shown with weapons like bows and arrows, spears, or stone tools, giving us insights into the lifestyle and survival techniques of early humans. Some paintings also show handprints, geometric patterns, and religious symbols, suggesting an early form of artistic and spiritual expression.</p>
                    <div className="image-container">
                        <figure>
                            <img src="/images/Paintings/Bhimbetka-1.jpeg" alt="" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Rock_Shelter_8,_Bhimbetka_02.jpg">Bernard Gagnon</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                        </figure>
                        <figure>
                            <img src="/images/Paintings/Bhimbetka-2.jpeg" alt="" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Rock_Shelter_8,_Bhimbetka_03.jpg">Bernard Gagnon</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                        </figure>
                    </div>
                    <h3>Materials and Techniques :</h3>
                    <p>The natural pigments used in these paintings were derived from locally available materials such as red and yellow ochre (hematite), white limestone, charcoal, and plant extracts. These colors were mixed with animal fat or plant sap, making them durable enough to withstand thousands of years. Most of the paintings are found inside natural rock shelters, which helped protect them from weathering due to rain, wind, and sunlight.</p>
                    <h3>Evolution of Art Over Time :</h3>
                    <p>
                        <b>The Bhimbetka paintings evolved over different periods, reflecting changes in human society :</b>
                        <ul>
                            <li>
                                <b>1. Paleolithic Period (30,000 BCE – 10,000 BCE): </b> Simple stick figures, hunting scenes, and animal drawings in red and white.
                            </li>
                            <li>
                                <b>2. Mesolithic Period (10,000 BCE – 5,000 BCE): </b> More detailed depictions of humans, showing clothing, ornaments, and group activities.
                            </li>
                            <li>
                                <b>3. Chalcolithic to Early Historic Period (5,000 BCE – 1,500 BCE): </b> Complex scenes with multiple colors, depicting social structures, rituals, and even warfare.
                            </li>
                        </ul>
                    </p>
                    <h3>Cultural and Historical Significance :</h3>
                    <p>The Bhimbetka rock paintings provide one of the earliest records of human artistic expression in India. They offer crucial insights into prehistoric life, including hunting techniques, religious beliefs, and social organization. These artworks bridge the gap between prehistoric tribes and early civilizations, showing how art evolved as a means of communication before the advent of written language.</p>
                    <p>Today, Bhimbetka remains an archaeological treasure and an important tourist and research site, drawing historians, artists, and travelers fascinated by India’s ancient heritage. The paintings serve as a testament to humanity’s deep-rooted connection with nature and storytelling through art.</p>
                   
                    
                </div>
              )}
              {selectedInfo === 'Cave' && (
                 <div className="info-content"> 
                 <h2>Ajanta Cave Paintings: A Timeless Masterpiece of Indian Art <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>The Ajanta Cave Paintings, located in Aurangabad, Maharashtra, India, are among the finest surviving examples of ancient Indian mural art. These paintings, found within 30 rock-cut Buddhist caves, date back to the 2nd century BCE to the 6th century CE and are considered one of the greatest achievements of Indian art. The caves were discovered by a British officer, John Smith, in 1819, during a hunting expedition. Today, Ajanta is a UNESCO World Heritage Site, celebrated for its exquisite paintings and sculptures that reflect the artistic, religious, and cultural richness of ancient India.</p>
                 <h3>Art and Themes :</h3>
                 <p>The Ajanta cave paintings primarily depict Jataka tales—stories of Buddha’s past lives—along with scenes from his life, celestial beings, processions, and courtly life. These paintings emphasize graceful figures, expressive facial features, elaborate jewelry, and detailed clothing, showcasing the artistic brilliance of ancient Indian painters. Some key themes include:</p>
                 <div className="image-container">
                        <figure>
                            <img src="/images/Paintings/Ajantha-1.jpeg" alt="" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Ajanta_cave_2,_girls_detail.jpg">Woudloper</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                        </figure>
                        <figure>
                            <img src="/images/Paintings/Ajantha-2.jpeg" alt="" />
                        </figure>
                    </div>
                 <h3>Architectural and Artistic Features :</h3>
                 <p>Ajanta consists of 30 rock-cut caves, divided into Viharas (monasteries) and Chaityas (prayer halls). Some important caves include: </p>
                 <p>
                    <ul>
                        <li>
                            <b>Cave 1: </b> Features the famous painting of Padmapani and Vajrapani Bodhisattvas, depicting divine compassion.
                        </li>
                        <li>
                            <b>Cave 2: </b> Rich in ceiling paintings, showcasing intricate floral designs.
                        </li>
                        <li>
                            <b>Cave 16 & 17: </b> Contain some of the most detailed Jataka tales with vibrant colors and expressive figures.
                        </li>
                        <li>
                            <b>Cave 19: </b> A remarkable chaitya (prayer hall) with a beautifully carved stupa and pillars.
                        </li>
                    </ul>
                 </p>
                 <h3>Materials and Techniques : </h3>
                 <p>The paintings at Ajanta were created using the fresco-secco technique, where artists applied natural pigments on a dry plaster surface. The colors were derived from minerals and plants:</p>
                 <p>
                    <b>The Bhimbetka paintings evolved over different periods, reflecting changes in human society:</b>
                    <ul>
                        <li>
                            <b>1.  Red – : </b> Hematite (iron oxide)
                        </li>
                        <li>
                            <b>2. Yellow : </b> Lapis lazuli (imported from Afghanistan).
                        </li>
                        <li>
                            <b>3. Green :  </b> Terra verde (natural green earth)
                        </li>
                        <li>
                            <b>4. Black  :  </b> Charcoal
                        </li>
                    </ul>
                 </p>
                 <p>The paintings were made in multiple layers with a smooth lime surface, ensuring their longevity. The artists used thin brushes and natural fiber tools to create fine details, delicate shading, and lifelike expressions.</p>
                 <h3>Cultural and Historical Significance :</h3>
                 <p>Ajanta represents the golden age of Indian art, particularly the Gupta period, known for its sophisticated artistry and spiritual depth. The caves provide insights into the religious, cultural, and social life of ancient India, reflecting Buddhist philosophy, royal patronage, and artistic excellence.</p>
                 <p>Today, the Ajanta Cave Paintings continue to inspire artists, historians, and travelers from around the world. They stand as a testament to India’s artistic heritage, preserving the spirit of Buddhism and classical Indian aesthetics.</p>
             </div>
              )}
              {selectedInfo === 'Madhubani' && (
                 <div className="info-content"> 
                 <h2>Madhubani Painting: A Vibrant Folk Art of India <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>Madhubani Painting, also known as Mithila Art, is a traditional Indian folk art form originating from the Mithila region of Bihar and Nepal. It is known for its intricate patterns, vibrant colors, and deeply symbolic themes. This art form is believed to be over 2,500 years old, with its origins tracing back to the time of the Ramayana, when King Janaka commissioned paintings for his daughter Sita’s wedding to Lord Rama.</p>
                 <h3>Themes and Symbolism in Madhubani Paintings :</h3>
                 <p>Madhubani paintings are deeply rooted in the cultural, spiritual, and social traditions of the Mithila region. One of the most prominent themes in these paintings is the depiction of Hindu deities, including Krishna, Rama, Lakshmi, Shiva, Durga, and Saraswati, symbolizing devotion, divine blessings, and religious faith. Mythological narratives from the Ramayana and Mahabharata are also frequently illustrated, connecting this art form to India&apos;s rich storytelling traditions. Apart from religious themes, nature plays a significant role in Madhubani art, with elements like the sun, moon, fish, peacocks, trees, and lotus flowers appearing in many paintings. These elements symbolize prosperity, harmony, fertility, and the eternal cycle of life.</p>
                 <p>In addition to religious and natural themes, Madhubani paintings often capture social life and rituals, including wedding ceremonies, festivals, and daily activities. The Kohbar style, for example, is specifically associated with wedding traditions and is believed to bring prosperity and good fortune to newlyweds. Another unique aspect of Madhubani art is the use of tantric symbols and geometric patterns, which represent fertility, love, energy, and protection. The intricate motifs and detailed backgrounds are designed to enhance the beauty of the composition while also conveying deeper symbolic meanings.</p>
                 <p>Through these vibrant and symbolic representations, Madhubani paintings serve as a visual reflection of India’s artistic and cultural heritage. This traditional art form is not just a means of decoration but also a way of preserving stories, beliefs, and values that have been passed down through generations.</p>
                 <div className="image-container">
                    <figure>
                        <img src="/images/Paintings/Madhubani-3.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Mithila_Painting_at_Patna_Junction.jpg">Sntshkumar750</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Paintings/Madhubani-1.jpeg" alt="" />
                    </figure>
                </div>
                 <h3>Styles and Techniques : </h3>
                 <p>Madhubani painting is traditionally done using natural dyes and pigments, extracted from plants and minerals. The colors are derived from :</p>
                 <p>
                    <ul>
                        <li>
                            <b>1. Black – </b> Charcoal or soot
                        </li>
                        <li>
                            <b>2. Yellow  – </b> Turmeric
                        </li>
                        <li>
                            <b>3. Green  – </b> Leaves of plants
                        </li>
                        <li>
                            <b>4. Blue  – </b> Indigo
                        </li>
                        <li>
                            <b>5. White  – </b> Rice paste
                        </li>
                    </ul>
                 </p>
                 <p>The paintings are made using fingers, twigs, matchsticks, and brushes, maintaining the original folk tradition. No empty spaces are left in Madhubani paintings; the background is filled with intricate floral, animal, or geometric patterns.</p>
                 <p>
                    <b>There are five distinct styles of Madhubani painting :</b>
                    <ul>
                        <li>
                            <b>1. Kohbar – </b> Traditional Madhubani style, with a focus on wedding ceremonies and rituals.
                        </li>
                        <li>
                            <b>2. Bharni  – </b> Filled with vibrant colors, usually depicting gods and goddesses.
                        </li>
                        <li>
                            <b>3. Tantric – </b> Incorporating tantric symbols and geometric
                        </li>
                        <li>
                            <b>4. Katchni  – </b> Features fine line work and intricate detailing.
                        </li>
                        <li>
                            <b>5. Godna  – </b> Inspired by tattoo patterns, made with simple black and white designs.
                        </li>
                    </ul>
                 </p>
                 <h3>Cultural and Historical Significance :</h3>
                 <p>Madhubani paintings were originally created by women on the walls of their homes as a form of decoration and storytelling. In the 20th century, the art form gained recognition when an Indian civil servant encouraged local women to paint on paper and cloth, leading to its global appreciation. Today, Madhubani art is used for commercial products, textiles, and home décor, while still preserving its traditional values.</p>
                 <p>This unique folk art continues to thrive, symbolizing the rich cultural heritage of India and the artistic expressions of rural women. Madhubani paintings are now internationally recognized and are an essential part of India’s artistic legacy.</p>
             </div>
              )}
              {selectedInfo === 'Warli' && (
                 <div className="info-content"> 
                 <h2>Warli Painting: The Tribal Art of Maharashtra <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>Warli Painting is a traditional tribal art form that originated in the Warli region of Maharashtra, primarily practiced by the Warli, Malkhar Koli, Kathodi, and Kokna tribes. This art form dates back to 2500–3000 BCE, making it one of India’s oldest folk art traditions. Warli paintings are characterized by simple geometric shapes—circles, triangles, and squares—which are used to depict humans, animals, trees, and everyday life activities. Despite its minimalistic style, Warli art conveys profound messages about nature, community life, and tribal beliefs.</p>
                 <div className="image-container">
                    <figure>
                        <img src="/images/Paintings/warli-2.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Warli_art_at_Borivali_Stn_01.jpg">PratishKhedekar</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Paintings/warli-3.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Warli_Paintings_SGNP_by_Raju_Kasambe_DSCF0200_(1)_07.jpg">Dr. Raju Kasambe</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
                 <h3>Themes and Symbolism :</h3>
                 <p>Warli paintings primarily focus on themes related to nature, daily life, and tribal rituals. Some common themes include :</p>
                 <p>
                    <ul>
                        <li>
                            <b>1. Human Figures and Community Life: </b> Warli art portrays simple stick-like human figures, engaged in activities like farming, dancing, hunting, and celebrations, highlighting the unity and joy in tribal life.
                        </li>
                        <li>
                            <b>2. Nature and Animals: </b> Elements such as trees, mountains, rivers, the sun, and the moon play a crucial role, signifying the close relationship between humans and nature. Animals like bulls, horses, birds, and deer are often depicted.
                        </li>
                        <li>
                            <b>3. Warli Tarpa Dance: </b> One of the most iconic images in Warli paintings is the Tarpa dance, where people form a circular pattern around a musician playing the Tarpa (a traditional wind instrument), symbolizing harmony and togetherness.
                        </li>
                        <li>
                            <b>4. Marriage and Rituals: </b> A significant theme in Warli art is the Lagnachitra, a sacred painting made during weddings, depicting the goddess Palaghata, who is believed to bless the couple.
                        </li>
                        <li>
                            <b>5. Hunting and Harvesting: </b> Scenes of hunting, sowing seeds, fishing, and harvesting crops showcase the tribe’s dependence on agriculture.
                        </li>
                    </ul>
                    <h3>Materials and Techniques : </h3>
                    <p>Warli paintings are traditionally done on mud walls using white pigment made from rice paste, water, and gum. The contrast of white figures on a red or ochre background gives these paintings a distinctive look. Modern adaptations of Warli art can be found on paper, cloth, and canvas, making it accessible beyond the tribal communities.</p>
                    <h3>Cultural and Historical Significance : </h3>
                    <p>Unlike other tribal art forms, Warli paintings do not depict religious deities but rather focus on the harmony between humans and nature. They reflect the tribal philosophy of coexistence, making them a unique representation of Indian folk traditions. Today, Warli art has gained global recognition and is widely used in home décor, textiles, and commercial designs, preserving its legacy while adapting to contemporary aesthetics.</p>
                 </p>
               
             </div>
              )}
              {selectedInfo === 'Pattachitra' && (
                 <div className="info-content"> 
                 <h2>Pattachitra Painting: The Timeless Art of Odisha and Bengal <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>Pattachitra is a traditional Indian painting style known for its intricate details, mythological themes, and vibrant colors. Originating from Odisha and West Bengal, Pattachitra literally means cloth painting (Patta = cloth, Chitra = painting). This art form is believed to date back to the 5th century BCE, making it one of the oldest living art traditions in India. Traditionally, Pattachitra paintings were created by chitrakars (artists) to depict stories of Hindu deities, temple rituals, and folklore.</p>
                 <div className="image-container">
                    <figure>
                        <img src="/images/Paintings/Pattachitra-1.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Pattachitra_Painting_(17042370365).jpg">Mike Prince from Bangalore, India</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Paintings/Pattachitra-2.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Pattachitra_Painting_(17041543331).jpg">Mike Prince from Bangalore, India</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
                 <h3>Themes and Symbolism  :</h3>
                 <p>Pattachitra paintings primarily illustrate religious and mythological themes, including :</p>
                 <p>
                    <ul>
                        <li>
                            <b>1. Jagannath Culture:  </b> The most famous Pattachitra paintings are dedicated to Lord Jagannath, Balabhadra, and Subhadra, closely associated with the Jagannath Temple in Puri, Odisha.
                        </li>
                        <li>
                            <b>2. Hindu Mythology: </b> Scenes from the Ramayana, Mahabharata, and Puranas, including Krishna Leela, Dashavatara (ten incarnations of Vishnu), and the life of Lord Krishna, are commonly depicted.
                        </li>
                        <li>
                            <b>3. Temple and Rituals: </b> Pattachitra paintings were traditionally used as backdrops for temples and played a role in religious ceremonies.
                        </li>
                        <li>
                            <b>4.Nature and Folklore: </b> Some paintings also depict animals, birds, flowers, and rural life, symbolizing harmony between humans and nature.
                        </li>

                    </ul>
                    <h3>Materials and Techniques : </h3>
                    <p>
                        <b>Pattachitra is created using natural materials, and its traditional process includes: </b>
                        <ul>
                            <li>
                                <b>1. Cloth Preparation: </b> A piece of cotton or silk cloth is first coated with a mixture of tamarind paste and chalk, making it smooth and durable.
                            </li>
                            <li>
                                <b>2. Natural Colors: </b> Artists use handmade colors derived from minerals and plants:
                                <ul>
                                    <li>
                                        <b>a. Red: </b> Made from the root of the madder plant
                                    </li>
                                    <li>
                                        <b>b. Ochre: </b> Made from the root of the poppy plant
                                    </li>
                                    <li>
                                        <b>c. Blue: </b> Made from the leaves of the bluebell plant
                                    </li>
                                    <li>
                                        <b>d. Yellow: </b> Made from turmeric
                                    </li>
                                    <li>
                                        <b>e. Green: </b> Made from the leaves of the neem plant
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Fine Brushes: </b> The paintings are made using fine-tipped brushes, often crafted from animal hair, allowing for intricate detailing.
                            </li>
                        </ul>
                    </p>
                    <h3>Cultural and Historical Significance : </h3>
                    <p>Pattachitra holds deep religious and artistic importance in Odisha and Bengal. In Odisha, it is closely linked to the Rath Yatra festival of Lord Jagannath, where Pattachitra replaces temple idols when they are taken for ceremonial baths. In West Bengal, Scroll Pattachitra (Patua art) is popular, where paintings are created on long vertical scrolls and used by folk storytellers to narrate mythological tales through songs.</p>
                    <p>Today, Pattachitra has gained global recognition and is widely used in home décor, fashion, and commercial artwork, ensuring that this centuries-old tradition continues to thrive.</p>
                 </p>
               
             </div>
              )}
              {selectedInfo === 'Tanjore' && (
                 <div className="info-content"> 
                 <h2>Tanjore Painting: The Royal Art of South India <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>Tanjore Painting, also known as Thanjavur Painting, is a classical South Indian art form that originated in the 16th century in the town of Thanjavur (Tamil Nadu) under the rule of the Chola dynasty. Known for its rich colors, gold embellishments, and three-dimensional effect, Tanjore paintings primarily depict Hindu gods and goddesses and are considered a symbol of devotion, prosperity, and artistic heritage.</p>
                 <div className="image-container">
                    <figure>
                        <img src="/images/Paintings/Tanjore-1.jpeg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Tanjore_mural_painting_on_cloth1.JPG">Kannan shanmugam, Shanmugam studio, Kollam</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Paintings/Tanjore-2.jpeg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Tanjore_Paintings_-_Big_temple_01.JPG">Ankushsamant</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
                 <h3>Themes and Symbolism  :</h3>
                 <p>Tanjore paintings are deeply rooted in religious themes and are often placed in temples and homes as a form of worship. Common themes include:</p>
                 <p>
                    <ul>
                        <li>
                            <b>1. Hindu Deities:  </b> The most common subjects are Lord Krishna, Rama, Lakshmi, Saraswati, Ganesha, and Shiva, depicted in divine grandeur.
                        </li>
                        <li>
                            <b>2. Hindu Mythology:Mythological Stories: </b> Episodes from the Ramayana, Mahabharata, and Puranas are frequently illustrated.
                        </li>
                        <li>
                            <b>3. Royal Portraits and Saints: </b> Some Tanjore paintings depict Maratha kings, saints, and spiritual leaders, reflecting historical influences.
                        </li>
                        <li>
                            <b>4. Ornamental Backgrounds: </b> The paintings often feature floral motifs, temple structures, and arches, symbolizing grandeur and divinity.
                        </li>

                    </ul>
                    <h3>Materials and Techniques : </h3>
                    <p>
                        <b>Tanjore paintings are known for their unique process and use of precious materials, which include: </b>
                        <ul>
                            <li>
                                <b>1. Wooden Panel Base: </b> Unlike other paintings on paper or cloth, Tanjore paintings are done on wooden boards coated with a mixture of chalk powder and tamarind paste for durability.
                            </li>
                            <li>
                                <b>2. Gold Foil Embellishments: </b> A distinctive feature of Tanjore paintings is the use of 22-karat gold leaf, which gives the artwork a radiant, three-dimensional look.
                                
                            </li>
                            <li>
                                <b>Natural and Bright Colors: </b> Traditionally, natural dyes and vibrant colors such as red, green, blue, and white are used to enhance the beauty of the paintings.
                            </li>
                            <li>
                                <b>Relief Work:  </b> The figures and ornaments are slightly raised, giving them a three-dimensional effect.
                            </li>
                        </ul>
                    </p>
                    <h3>Cultural and Historical Significance : </h3>
                    <p>Tanjore paintings flourished during the Maratha rule (17th–19th century), blending Dravidian and Maratha influences. These paintings were traditionally commissioned for temples, royal courts, and homes of aristocrats, signifying spiritual devotion and wealth. Today, Tanjore paintings continue to be a cherished art form, widely used in home décor, religious spaces, and art exhibitions, preserving their legacy for future generations.</p>
                 </p>
               
             </div>
              )}

              {selectedInfo === 'Kalamkari' && (
                 <div className="info-content"> 
                 <h2>Kalamkari Painting: The Art of Hand-Painted Textiles <button onClick={handleHideDetails}><X color="#ff0000" /></button></h2>
                 <p>Kalamkari is a traditional hand-painted or block-printed textile art that originated in Andhra Pradesh and Telangana. The name Kalamkari is derived from two Persian words—Kalam (pen) and Kari (work)—meaning pen craft. This art form dates back over 3000 years and was historically used for depicting Hindu epics, temple murals, and Persian motifs on fabric. Kalamkari is known for its detailed storytelling, intricate designs, and natural dyes, making it a unique fusion of art and textile craftsmanship.</p>
                 <div className="image-container">
                    <figure>
                        <img src="/images/Paintings/Kalamkari-1.jpeg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:KALAMKARI_HAND_PAINTED_CLOTH_SRIKALAHASTI_AP_-_panoramio.jpg">rajaraman sundaram</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Paintings/kalamkari-2.jpeg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Gita-kalamkari-painting.JPG">కాసుబాబు</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
                <h3>Types of Kalamkari Painting :</h3>
                <p>There are two main types of Kalamkari paintings: </p>
                <p>
                    <ul>
                        <li>
                            <b>1. Srikalahasti Style (Hand-Painted) </b>
                            <ul>
                                <li>Origin: Srikalahasti, Andhra Pradesh</li>
                                <li>Technique: Freehand painting using a kalam (bamboo pen)</li>
                                <li>Themes: Depicts Hindu gods, epics (Ramayana, Mahabharata), temple scenes, and mythological narratives.</li>
                                <li>Process: Artists sketch intricate designs with natural dyes, followed by multiple washes and color applications.</li>
                                <li>Specialty: Used in temple murals, scrolls, and religious textiles.</li>
                            </ul>
                        </li>
                        <li>
                            <b>2. Machilipatnam Style (Block-Printed)</b>
                            <ul>
                                <li>Origin: Machilipatnam, Andhra Pradesh</li>
                                <li>Technique: Wooden blocks are carved and dipped in natural dyes for printing on fabric.</li>
                                <li>Themes: Features floral motifs, Persian-inspired designs, peacocks, and Mughal influences.</li>
                                <li>Process: Fabrics are treated with milk and myrobalan to enhance color absorption, then printed with vegetable dyes.</li>
                                <li>Specialty: Used in sarees, dupattas, home décor, and garments.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                 <h3>Themes and Symbolism  :</h3>
                 <p>Kalamkari paintings are deeply narrative-driven, depicting:</p>
                 <p>
                    <ul>
                        <li>
                            <b>1. Hindu Mythology:  </b> Gods like Krishna, Rama, Vishnu, and Shiva are common subjects.
                        </li>
                        <li>
                            <b>2. Epic Stories: </b>  Scenes from the Ramayana, Mahabharata, and Bhagavad Gita.
                        </li>
                        <li>
                            <b>3.Persian and Mughal Motifs: </b> Floral patterns, vines, and decorative peacocks and elephants, influenced by Persian art.
                        </li>
                        <li>
                            <b>4. Spiritual and Nature Elements: </b> Trees, rivers, birds, and celestial symbols, representing harmony and balance.
                        </li>

                    </ul>
                </p>
                    <h3>Materials and Techniques : </h3>
                    <p>
                        <b>Kalamkari is a highly organic and eco-friendly art form, using: </b>
                        <ul>
                            <li>
                                <b>1. Natural Dyes: </b> Extracted from plants, roots, flowers, and minerals (e.g., indigo for blue, turmeric for yellow, pomegranate for red).
                            </li>
                            <li>
                                <b>2. Fabric Preparation: </b> Cotton or silk fabric is first treated with buffalo milk and myrobalan fruit extract to prevent color spreading.
                                
                            </li>
                            <li>
                                <b>3. Pen and Brush Work: </b> Fine bamboo pens are used for hand-painted details, while carved wooden blocks are used for printing patterns.
                            </li>
                            <li>
                                <b>4. Multiple Dyeing and Washing Steps:  </b> The fabric undergoes up to 20 washes to achieve its final vibrant look.
                            </li>
                        </ul>
                    </p>
                    <h3>Cultural and Historical Significance : </h3>
                    <p>
                        <b>Kalamkari flourished under the Golconda Sultanate, Mughal emperors, and South Indian temple patronage. It was historically used for : </b>
                        <ul>
                            <li>
                                <b>1. Temple Cloths and Scrolls: </b> Used as wall hangings in temples to narrate Hindu stories.
                            </li>
                            <li>
                                <b>2. Royal and Court Textiles: </b> Worn by aristocrats and traded globally, especially during the Mughal and Persian eras.
                            </li>
                            <li>
                                <b>3. Handcrafted Fashion: </b> Today, Kalamkari designs are widely used in sarees, dupattas, kurtas, home décor, and contemporary art.
                            </li>
                        </ul>
                    </p>
                 <p>Kalamkari remains a living tradition, blending ancient storytelling with modern textiles, keeping its legacy alive in both traditional and global fashion markets.</p>
               
             </div>
              )}
            </div>
          )}

            </div>
        </div>
        <div className="dance-container">
            <h1>Indian Classical Dance</h1>
            <div className="dance-heading">
                <p>Indian dance is a vibrant and diverse art form that has evolved over thousands of years. It is deeply rooted in tradition, mythology, and spirituality, reflecting India&apos;s rich cultural heritage. Indian dance can be broadly categorized into Classical, Folk, and Contemporary styles, each with its unique significance, movements, and expressions.</p>
                <h3>Types of Indian Dance :</h3>
            </div>
            <div className="dance-types">
                <div className="type-1">
                    <h2>1. Classical Dance</h2>
                    <p>Classical dances of India follow the principles of the Natya Shastra, an ancient Sanskrit text on performing arts written by Bharata. These dances are highly structured, expressive, and often devotional, with intricate footwork, hand gestures (mudras), facial expressions (abhinaya), and rhythmic movements.</p>
                    <p><b>The eight major classical dance forms of India are:</b></p>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Dance Form</th>
                                <th>Key Features</th>
                                <th>Popular Themes</th>
                            </tr>
                            <tr>
                                <td>Bharatanatyam (Tamil Nadu)</td>
                                <td>Precise footwork, expressive hand gestures, and sculpturesque poses</td>
                                <td>Hindu temple dances, devotion to gods (Shiva, Vishnu, Krishna)</td>
                            </tr>
                            <tr>
                                <td>Kathak <br /> (West Bengal)</td>
                                <td>Fast spins, rhythmic footwork, and storytelling through expressions</td>
                                <td>Mythological stories, Mughal influences, Sufi poetry</td>
                            </tr>
                            <tr>
                                <td>Kathakali (Kerala)</td>
                                <td>Elaborate costumes, heavy makeup, dramatic expressions</td>
                                <td>Epics like Ramayana, Mahabharata</td>
                            </tr>
                            <tr>
                                <td>Odissi (Odisha)</td>
                                <td>Graceful postures, intricate movements, temple sculptures influence</td>
                                <td>Depictions of Lord Jagannath, Radha-Krishna love stories</td>
                            </tr>
                            <tr>
                                <td>Manipuri (Manipur)</td>
                                <td>Slow, graceful movements, flowing costumes</td>
                                <td>Stories of Krishna and Radha</td>
                            </tr>
                            <tr>
                                <td>Mohiniyattam (Kerala)</td>
                                <td>Feminine, delicate movements, swaying body motions</td>
                                <td>Devotional themes, mostly dedicated to Lord Vishnu</td>
                            </tr>
                            <tr>
                                <td>Sattriya (Assam)</td>
                                <td>Spiritual dance-drama, energetic movements</td>
                                <td>Themes from Bhagavata Purana, Krishna Leela</td>
                            </tr>
                        </table>
                    </div>
                    <div className="image-container">
                        <figure>
                            <img src="/images/Dance/Bharat-1.jpg" alt="Kathak Dance" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Bharatanatyam_dance_performance_by_Guru_Saroja_Vaidyanathan%27_disciples_at_Youth_Festival_2012_IMG_3165_19.jpg">Sumita Roy Dutta</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                            <p>Bharatanatyam</p>
                        </figure>
                        <figure>
                            <img src="/images/Dance/Kathakali-1.jpg" alt="Kathak Dance" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_(266).jpg">Shagil Kannur</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                            <p>Kathakali</p>
                        </figure>
                    </div>
                </div>
                <div className="type-1">
                    <h2>2. Folk Dances of India</h2>
                    <p>Folk dances of India are vibrant, energetic, and deeply rooted in the cultural traditions of different regions. These dances are often performed during festivals, harvest seasons, weddings, and social gatherings, showcasing the joy, unity, and lifestyle of the people. Unlike classical dances, folk dances are more spontaneous, community-driven, and passed down through generations.</p>
                    <p><b>Some famous Indian folk dances include:</b></p>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Folk Dance</th>
                                <th>Key Features</th>
                                <th>Occasion</th>
                            </tr>
                            <tr>
                                <td>Bhangra (Punjab)</td>
                                <td>High-energy dance with dhol beats, vigorous movements</td>
                                <td>Harvest festival (Baisakhi), celebrations</td>
                            </tr>
                            <tr>
                                <td>Giddha (Punjab)</td>
                                <td>Performed by women, expressive claps, storytelling through dance</td>
                                <td>Festivals, weddings</td>
                            </tr>
                            <tr>
                                <td>Garba (Gujarat)</td>
                                <td>Circular movements with claps and twirls</td>
                                <td>Navratri festival</td>
                            </tr>
                            <tr>
                                <td>Ghoomar (Rajasthan)</td>
                                <td>Graceful women’s dance with twirls and colorful attire</td>
                                <td>Weddings, festivals</td>
                            </tr>
                            <tr>
                                <td>Lavani (Maharashtra)</td>
                                <td>Fast-paced, rhythmic movements, expressive storytelling</td>
                                <td>Social gatherings, stage performances</td>
                            </tr>
                            <tr>
                                <td>Koli  (Maharashtra)</td>
                                <td>Depicts life of fishermen, rhythmic boat-like movements</td>
                                <td>Fishing festivals, social celebrations</td>
                            </tr>
                            <tr>
                                <td>Bihu Dance (Assam)</td>
                                <td>Energetic movements, performed with drums and folk song</td>
                                <td>Bohag Bihu (New Year festival)</td>
                            </tr>
                            <tr>
                                <td>Matki Dance (Madhya Pradesh)</td>
                                <td>Women balance pots on their heads while dancing</td>
                                <td>Weddings, celebrations</td>
                            </tr>
                        </table>
                    </div>
                    <div className="image-container">
                        <figure>
                            <img src="/images/Dance/garba-1.jpg" alt="Kathak Dance" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Navratri_garba_at_Ambaji_temple.jpg">anurag agnihotri</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons</figcaption>
                            <p>Garba</p>
                        </figure>
                        <figure>
                            <img src="/images/Dance/Lavani-1.jpg" alt="Kathak Dance" />
                            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Lavani_Dancers.jpg">Ramesh Lalwani</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons</figcaption>
                            <p>Lavani</p>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="sign-dance">
                <h3>Significance of Indian Dance</h3>
                <p>
                    <ul>
                        <li>
                            <b>1. Spiritual and Religious Importance – </b> Many classical dances originated as devotional performances in temples.
                        </li>
                        <li>
                            <b>2. Cultural Identity –  </b> Folk dances preserve regional traditions, music, and costumes.
                        </li>
                        <li>
                            <b>3. Storytelling through Expressions – </b>  Classical dances use mudras (hand gestures) and abhinaya (facial expressions) to narrate stories.
                        </li>
                        <li>
                            <b>4. Entertainment and Social Bonding –  </b> Bollywood and folk dances bring people together for joy and celebration.
                        </li>
                        <li>
                            <b>5. Global Influence –  </b> Indian dance has gained worldwide recognition, influencing international dance forms and performances.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <section className="classical-dance">
        <div className="arch-container">
          <h2 className="section-title">Traditional Dance Of Each State</h2>
          <p className="section-intro">
            India recognizes eight classical dance forms, each with its own distinct technique, style, and regional
            origin. These dance forms are not merely performances but complex artistic systems that combine rhythm,
            expression, and storytelling.
          </p>

          <div className="dance-state-container">
            {
                TDance.map((button, index) => {
                return (
                        <div className="dance-forms-grid" key={index} >
                        <div className="dance-form-card">
                        <div className="dance-form-image">
                            <img src={button.img} width={400} height={300} />
                        </div>
                        <div className="dance-form-content">
                            <h3>{button.dance}</h3>
                            <p className="dance-form-region">{button.state}</p>
                            <p>
                                {button.description}  
                            </p>
                            <Link to={`/art/${button.dance}`}>
                                <button
                                    className="cart-button">
                                    <span>Learn More</span>
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                )
            })}
                    

          </div>
         
          
        </div>
      </section>

        {/* <div className="page4">
        <div className="page4-content">
          <h2>Traditional Dance Of Each State</h2>
          <div className="state-container">
            {TDance.map((button, index) => (
              <div className="state-card" key={index}>
                <div className="image_container">
                  <img src={button.img} alt="" />
                </div>
                <div className="state-title">
                  <span>{button.dance}</span>
                </div>
                <div className="state-state">
                  <span>State : {button.state}</span>
                </div>
                <Link to={`/art/${button.dance}`}>
                    <button
                        className="cart-button">
                        <span>Learn More</span>
                    </button>
                </Link>
                
              </div>
            ))}
          </div>
        
        </div>
      </div> */}
        <Footer></Footer>
    </div>
  )
}

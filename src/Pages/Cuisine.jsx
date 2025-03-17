// Import React and any necessary dependencies
import NavBar from '../Components/NavBar';
import Typewriter from 'typewriter-effect';
import { PiGreaterThanThin } from 'react-icons/pi';
import { IndianCuisine } from '../Data/IndianCuisine';
import './Cuisine.css';
import { useState , useEffect } from 'react';
import {Link , useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/Scrollup';


const Cuisine = () => {
    const navigate = useNavigate();

    const [selectedInfo, setSelectedInfo] = useState(null);
    const handleInfoClick = (info) => {
        setSelectedInfo(info);
      }
  

  const handleHome = () => {
    navigate('/');
  };

  const handleHeritage = () => {
    navigate('/heritage');
  };


  const handleInfoClose = (e) => {
    e.stopPropagation();
    setSelectedInfo(null);
  };
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
    <div className="cuisine-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="page-1">
         <div className="content-right">
            <figure>
              <img src="/images/CuisinePage/dhokla1.jpeg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Besan_Dhokla_-_Howrah_2015-04-26_8478.JPG">Biswarup Ganguly</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons</figcaption>
            </figure>
          </div>
        <div className="content">
          <div className="content-left">
            <div className="heading">
              <p>
                <span onClick={handleHome}>Home</span>
                <PiGreaterThanThin className="greater" />
                <span onClick={handleHeritage}>Heritage</span>
                <PiGreaterThanThin className="greater" />
                  Cuisine
              </p>
          </div>
          
          <h2>
            <p>Healthy and Delicious</p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('A Culinary Journey Through Flavors!');
                typewriter.start();
              }}
            />
          </h2>
            <p>
              Indian cuisine is one of the most diverse and flavorful culinary
              traditions in the world. Rooted in ancient history and influenced
              by various cultures, it offers a blend of aromatic spices, diverse
              cooking techniques, and a vast variety of ingredients. From rich
              curries to crispy snacks and delectable sweets, Indian food is
              known for its complexity and depth of flavor.
            </p>
            <p>
              Indian cuisine has gained worldwide fame, with Indian restaurants
              found in every major city across the globe. Dishes like Chicken
              Tikka Masala, Naan, and Biryani have become international
              favorites. Many Western chefs and food lovers embrace Indian spices
              and cooking techniques in their dishes.
            </p>
          </div>
          <div className="content-right">
          </div>
        </div>
      </div>
      <ScrollUp />
      <div className="page-2">
        <div className="content">
          <div className="content-right">
            <figure>
              <img src="/images/CuisinePage/back-food2.jpg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Spicy_Indian_full_meals.jpg">Sneha G Gupta</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
          </div>
          <div className="content-left">
            <p>
            Indian cuisine has evolved over thousands of years, influenced by
              various dynasties, traders, and invaders. The Aryans introduced the
              concept of simple, sattvic (pure) food, while the Mughals brought
              rich, creamy gravies, kebabs, and biryanis. The Portuguese
              introduced ingredients like potatoes, tomatoes, and chilies, which
              are now essential in Indian cooking. The British popularized tea,
              making it an integral part of Indian culture.
            </p>
            <p>
              Indian cuisine has gained worldwide fame, with Indian restaurants
              found in every major city across the globe. Dishes like Chicken
              Tikka Masala, Naan, and Biryani have become international
              favorites. Many Western chefs and food lovers embrace Indian spices
              and cooking techniques in their dishes.
            </p>
          </div>
        </div>
      </div>
      <div className="wild-page-3">
            <div className="wild-page-3-1">

                <div className="content">
                    <h3 onClick={() => handleInfoClick('Spices')}>Spices</h3>
                    <h3 onClick={() => handleInfoClick('Cooking')}>Cooking Techniques</h3>
                    <h3 onClick={() => handleInfoClick('Meal')}>Meal Structure</h3>
                    <h3 onClick={() => handleInfoClick('Health')}>Health Benefits</h3>
                    <h3 onClick={() => handleInfoClick('Festivals')}>Food in Festivals</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Spices' && (
                <div className="info-content"> 
                    <h3>Spices
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Spices are the heart of Indian cuisine, playing a crucial role not only in enhancing flavor but also in offering numerous medicinal benefits as per Ayurveda. Some of the most essential spices include turmeric, known for its anti-inflammatory properties and vibrant yellow color, and cumin, which adds an earthy aroma while aiding digestion. Coriander imparts a citrusy flavor and has a cooling effect on the body, whereas cardamom is highly fragrant and commonly used in desserts and chai. Mustard seeds contribute a nutty taste and are essential for tempering dishes, while asafoetida (hing), despite its strong aroma, enhances the flavor of lentil-based recipes. Fenugreek, with its distinct bitter taste, is frequently used in curries and traditional Indian breads.</p>
                    <p>Staple ingredients in Indian cuisine vary by region, but certain elements form the backbone of Indian meals across the country. Rice, wheat, lentils, dairy, and legumes are fundamental components, providing sustenance and variety to Indian diets. Additionally, a wide range of vegetables such as eggplant, okra, and gourds are commonly incorporated into daily meals, while fruits like mangoes, bananas, and coconuts add natural sweetness and nutrition. These diverse ingredients, combined with the skillful use of spices, make Indian cuisine a rich and flavorful culinary tradition enjoyed worldwide.</p>
                    <h3>For Example : </h3>
                    <h3>1. Turmeric (Haldi) – The Golden Healer</h3>
                    <p>Turmeric is one of the most important spices in Indian cuisine, known for its vibrant yellow color and anti-inflammatory properties. It contains curcumin, a powerful antioxidant that helps in boosting immunity, reducing joint pain, improving digestion, and promoting skin health. Turmeric is used in curries, rice dishes, and even in milk as the popular “Haldi Doodh” (Turmeric Latte).</p>
                    <h3>2. Cumin (Jeera) – The Digestive Booster</h3>
                    <p>Cumin seeds have a warm, earthy aroma and a slightly nutty flavor. They are widely used in tadka (tempering) for dals, vegetables, and rice dishes. Cumin aids digestion, improves metabolism, and helps relieve bloating. It is also a rich source of iron, making it beneficial for overall health. Jeera water, made by soaking cumin seeds in water overnight, is a traditional remedy for digestion.</p>
                    <h3>3. Coriander (Dhania) – The Cooling Agent</h3>
                    <p>Coriander seeds and leaves are widely used in Indian cooking. The seeds have a citrusy, slightly sweet flavor, while the leaves (cilantro) add freshness to dishes. Coriander helps cool the body, aids digestion, and supports heart health. It is commonly used in curries, spice blends, and chutneys.</p>
                    <h3>4. Mustard (Amla) – The Antioxidant</h3>
                    <p>Mustard seeds are small, round, and have a nutty, slightly pungent taste when cooked. They are widely used in South Indian tempering (tadka) for dishes like sambhar, rasam, and pickles. Mustard seeds help in boosting metabolism, improving digestion, and reducing inflammation.</p>
                    <h3>5.Cardamom (Elaichi) – The Fragrant Spice</h3>
                    <p>Cardamom is a highly aromatic spice with a sweet, floral taste. It is used in desserts, chai (tea), and savory dishes like biryanis and curries. Rich in antioxidants, cardamom aids in digestion, freshens breath, and helps regulate blood pressure.</p>
                    <h3>6. Asafoetida (Hing) – The Pungent Powerhouse</h3>
                    <p>Asafoetida is a strong-smelling spice derived from the resin of a plant. Though it has a strong sulfuric aroma, when cooked, it provides a savory umami depth to dishes. It is widely used in dal (lentil dishes), curries, and pickles. Asafoetida is known for its anti-bloating properties, aiding digestion, and relieving gas and stomach discomfort.</p>                
                </div>
              )}
              {selectedInfo === 'Cooking' && (
              <div className="info-content"> 
                    <h3>Cooking Techniques
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Indian cooking employs a variety of techniques that enhance the depth of flavors and textures in dishes. One of the most essential methods is Tadka (Tempering), where whole or ground spices are fried in hot oil or ghee to release their aroma before being added to dals, vegetables, or curries. Another widely used technique is Dum (Slow Cooking), commonly seen in dishes like biryanis, where ingredients cook together in a sealed pot to allow the flavors to blend harmoniously. Bhuna (Sautéing) involves frying spices and ingredients slowly over low heat to intensify their taste, often forming the rich base of many Indian curries. The Tandoor (Clay Oven Cooking) method is used for making breads like naan, as well as smoky, charred dishes such as tandoori chicken and kebabs. Additionally, Fermentation plays a significant role in preparing dishes like dosa, idli, and yogurt-based recipes, improving digestibility and adding a distinctive tangy flavor. These techniques, passed down through generations, contribute to the unique taste and diversity of Indian cuisine.</p>
                    <h3>For Example : </h3>
                    <h3>1. Tadka (Tempering) – The Flavor Booster</h3>
                    <p>Tadka, also known as seasoning or tempering, is a technique where whole or ground spices are fried in hot oil or ghee to release their essential oils and deep aromas. This seasoned oil is then added to dals, curries, and vegetables, instantly elevating the dish’s flavor. Common spices used in tadka include mustard seeds, cumin, curry leaves, and dried red chilies. </p>
                    <h3>2. Dum (Slow Cooking) – The Secret Behind Aromatic Biryani</h3>
                    <p>Dum is a slow-cooking technique where ingredients are cooked in a sealed pot over low heat. This method allows the spices and flavors to blend harmoniously while retaining moisture. Dum cooking is commonly used in biryani, kebabs, and rich Mughlai gravies, ensuring soft textures and deep flavors. A dough-sealed lid traps the steam inside, enhancing the taste further.</p>
                    <h3>3. Coriander (Dhania) – The Cooling Agent3. Bhuna (Sautéing) – Deepening the Flavors</h3>
                    <p>Bhuna involves slowly frying spices, onions, and tomatoes in oil until they develop a deep, rich, and caramelized texture. This process intensifies flavors and forms the base for many Indian curries, making them thicker and more aromatic. This technique is essential for dishes like chicken curry, masala gravies, and dal makhani.</p>
                    <h3>Tandoor (Clay Oven Cooking) – The Smoky Perfection</h3>
                    <p>The tandoor is a traditional clay oven heated by charcoal or wood fire, allowing food to cook at high temperatures. This method gives dishes a distinct smoky flavor. It is used for making naan, tandoori chicken, kebabs, and even smoky-flavored vegetables like paneer tikka. The intense heat ensures a crispy exterior while keeping the inside tender and juicy.</p>
                    <h3>5. Fermentation – The Magic Behind Soft & Fluffy Dosas and Idlis</h3>
                    <p>Fermentation is a natural process used to prepare dishes like idli, dosa, dhokla, and yogurt-based foods. It enhances the nutritional value, improves digestion, and adds a subtle tangy flavor. The live cultures in fermented foods help maintain gut health, making them an essential part of Indian cuisine.</p>
             </div>
              )}
              {selectedInfo === 'Meal' && (
              <div className="info-content"> 
                    <h3>Meal Structure
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>A traditional Indian meal is a harmonious blend of diverse flavors, textures, and nutrients, ensuring a well-balanced and wholesome dining experience. It typically includes a grain component such as rice, roti, or paratha, serving as the staple carbohydrate. Lentils in the form of dal, sambhar, or rajma provide a rich source of protein and fiber, while a variety of vegetables, whether stir-fried, curried, or pickled, contribute essential vitamins and minerals.</p>,
                    <p>For protein, the meal may feature paneer, chicken, fish, or mutton, catering to both vegetarian and non-vegetarian preferences. Complementary side dishes like chutneys, pickles, and yogurt-based raita enhance the meal with additional flavors, from tangy and spicy to cooling and refreshing. No Indian meal is complete without a sweet dish, such as gulab jamun, rasgulla, or kheer, adding a touch of indulgence. To round off the experience, traditional beverages like masala chai, lassi, or filter coffee are enjoyed, making the meal both satisfying and culturally rich. This combination reflects the diversity of Indian cuisine, where every dish is crafted to create a perfect balance of taste and nutrition.</p>
                    <h3>For Example : </h3>
                    <h3>1. Grains: The Staple Base of Indian Meals</h3>
                    <p>Grains form the foundation of an Indian meal, providing carbohydrates for energy. The most common grains include rice, wheat (roti, paratha), and millet. Rice is a staple in South and East India, often paired with curries, dals, or yogurt. Roti, chapati, and paratha, made from whole wheat, are essential in North India, usually served with vegetables, lentils, and meats. Some regions also use millets (bajra, jowar, ragi) for added nutrition.</p>
                    <h3>2. Lentils: The Protein-Packed Powerhouses</h3>
                    <p>Lentils and legumes are a major source of plant-based protein, fiber, and essential nutrients in Indian cuisine. Popular lentil dishes include dal (lentil soup), sambhar (a South Indian spicy lentil stew), and rajma (kidney beans curry). Each region has its own unique way of preparing lentils, using a blend of spices and herbs that enhance both taste and nutrition.</p>
                    <h3>3. Vegetables: A Burst of Colors and Nutrients</h3>
                    <p>Vegetables are an integral part of an Indian meal, providing vitamins, minerals, and fiber. They can be stir-fried, curried, roasted, or pickled. Some popular vegetable-based dishes include Aloo Gobi (potato-cauliflower curry), Bhindi Masala (spiced okra), and Baingan Bharta (smoky mashed eggplant). Pickled vegetables, known as achar, add a tangy and spicy element to meals and aid digestion.</p>
                    <h3>4. Sweets: The Perfect Ending to a Meal</h3>
                    <p>Indian desserts are rich and diverse, offering a sweet conclusion to meals. Gulab Jamun (deep-fried milk dumplings in syrup), Rasgulla (spongy cheese balls in sugar syrup), and Kheer (rice pudding with milk and nuts) are some of the most beloved Indian sweets. Each region has its own specialty, often made using milk, sugar, jaggery, and aromatic spices like saffron and cardamom.</p>
             </div>
              )}
              {selectedInfo === 'Health' && (
              <div className="info-content"> 
                  <h3>Health Benefits
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                  </h3>
                  <p>Indian cuisine isn’t just about delicious flavors—it’s also packed with numerous health benefits due to its use of natural, nutrient-rich ingredients, medicinal spices, and diverse cooking techniques. Ayurveda, the ancient Indian science of life, has long emphasized the importance of a balanced diet for maintaining good health. Let’s explore the key health benefits of Indian food.Indian cuisine is considered healthy due to its high fiber content from lentils and vegetables, a variety of antioxidants from spices like turmeric and cumin, potential for heart-healthy fats from coconut oil (in South Indian dishes), and its emphasis on fresh ingredients, which contribute to overall nutritional value and can support digestion, weight management, and potentially reduce the risk of chronic diseases like cancer and heart disease; Ancient ingredients contain functional components like antioxidants, fibers, and probiotics. These components help in providing medicinal benefits and have healing properties that have been used for several years in our country. Wisdom of traditional Indian food can be easily seen through its process of preparing food, and its preservation techniques. For example, turmeric, an ancient spice, used in most Indian food is good for inflammation, digestion, and heart diseases.</p>
                  <h3>For Example : </h3>
                  <h3>1. Lentils & Pulses: High in Protein, Perfect for Vegetarians</h3>
                  <p>Lentils and pulses, such as moong dal, masoor dal, chickpeas, and kidney beans, are an essential part of Indian cuisine. They are rich in plant-based protein, fiber, iron, and essential minerals, making them an excellent protein source for vegetarians. These legumes help in muscle repair, maintaining energy levels, and promoting digestive health due to their high fiber content.</p>
                  <h3>2. Curd/Yogurt: Probiotic, Aids Digestion</h3>
                  <p>Curd (yogurt) is a staple in Indian meals, consumed as raita, buttermilk (chaach), or plain yogurt. It contains probiotics, which are beneficial bacteria that support gut health, improve digestion, and strengthen immunity. Curd is also a great source of calcium and protein, promoting strong bones and overall well-being.</p>
                  <h3>3. Ghee: Rich in Good Fats, Enhances Brain Function</h3>
                  <p>Ghee (clarified butter) has been used in Indian cooking for centuries and is highly valued in Ayurveda. It is packed with healthy saturated fats, omega-3 fatty acids, and fat-soluble vitamins (A, D, E, and K). Ghee is known to enhance brain function, support digestion, boost immunity, and reduce inflammation. Unlike processed fats, ghee is easily digestible and helps in the absorption of nutrients.</p>
                  <h3>4. Coconut & Nuts: Energy-Boosting, Good for Heart Health</h3>
                  <p>Coconut, widely used in South Indian and coastal cuisines, is rich in medium-chain triglycerides (MCTs), which provide quick energy and support brain function. It also contains antioxidants, fiber, and essential minerals like potassium and magnesium, which contribute to heart health. Similarly, nuts like almonds, cashews, and walnuts are loaded with healthy fats, protein, and vitamins, helping to reduce bad cholesterol, improve brain function, and provide sustained energy.</p>
             </div>
              )}
              {selectedInfo === 'Festivals' && (
              <div className="info-content"> 
                  <h3>Food in Festivals
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                  </h3>
                  <p>In Indian festivals, food plays a central role, serving as a tangible expression of celebration, community, and cultural heritage, with each dish often holding deep symbolic meaning tied to the specific festival, signifying prosperity, happiness, and togetherness through shared meals; essentially, food is more than just nourishment, it is a way to connect with tradition and history during festive occasions.Food is a powerful element in festivals and celebrations, transcending mere sustenance to become a symbol of cultural identity, tradition, and communal joy. In every corner of the globe, the culinary aspects of festivals are deeply embedded in artistic practices and hold a wealth of significance. These unique dishes often embody historical narratives, religious beliefs, and regional diversity.</p>,
                  <h3>For Example : </h3>
                  <h3>1. Diwali: A Festival of Sweets</h3>
                  <p>Diwali, the festival of lights, is synonymous with an array of delicious sweets. Popular treats include Ladoo, Kaju Katli, and Jalebi, which are often prepared at home and shared with family, friends, and neighbors. These sweets symbolize prosperity, happiness, and the sweetness of relationships.</p>
                  <h3>2. Holi: A Burst of Flavors</h3>
                  <p>Holi, the festival of colors, is incomplete without festive delicacies. Gujiya, a deep-fried pastry filled with sweetened khoya and dry fruits, is the highlight of the celebrations. Another signature drink is Thandai, a refreshing milk-based beverage infused with nuts, saffron, cardamom, and fennel seeds, known for its cooling and energizing properties.</p>
                  <h3>3. Eid: A Feast of Unity</h3>
                  <p>Eid is celebrated with elaborate feasts that bring families together. Biryani, a fragrant and flavorful rice dish cooked with spices, meat, or vegetables, is a must-have. Sheer Khurma, a rich dessert made with vermicelli, milk, dry fruits, and dates, is traditionally prepared and shared with loved ones, symbolizing warmth and generosity.</p>
                  <h3>4. Navratri: Fasting with Sattvic Food</h3>
                  <p>During Navratri, many devotees observe a special diet, avoiding grains, onions, and garlic. Instead, they consume Sattvic foods like Sabudana Khichdi, a light and nutritious dish made with sago pearls, peanuts, and potatoes. These fasting foods are believed to cleanse the body and enhance spiritual discipline.</p>
                  <h3>5. Onam: The Grand Sadya Feast</h3>
                  <p>Onam, the harvest festival of Kerala, is celebrated with the traditional Sadya, a grand vegetarian feast served on banana leaves. This elaborate meal consists of 26 different dishes, including Avial, Thoran, Sambar, Rasam, and Payasam, showcasing Kerala’s rich culinary heritage and the abundance of seasonal ingredients.</p>
             </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="page-2">
        <div className="content">
          <div className="content-right">
          <h1>North Indian cuisine</h1>
            <p>North India has extreme climates – summers are hot, and winters are cold. The region includes the following states: Jammu & Kashmir, Himachal Pradesh, Punjab, Uttaranchal, Uttar Pradesh, Haryana, Bihar, Jharkhand, Chattisgarh, and Madhya Pradesh.</p>
            <p>North Indian cuisine is one of the most popular and widely enjoyed culinary traditions in India. Known for its rich flavors, creamy textures, and aromatic spices, this cuisine features a variety of breads, curries, lentils, and desserts. The use of ghee (clarified butter), yogurt, and dry fruits is common, giving the dishes a distinct taste. North Indian food is heavily influenced by the Mughal, Persian, and Central Asian culinary traditions, resulting in the creation of dishes like biryani, kebabs, and kormas.</p>
            <figure>
              <img src="/images/CuisinePage/dhokla1.jpeg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Besan_Dhokla_-_Howrah_2015-04-26_8478.JPG">Biswarup Ganguly</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons</figcaption>
            </figure>
            
          </div>
          <div className="content-left">
            <figure>
              <img src="/images/CuisinePage/back-food3.jpeg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Vegetarian_Curry.jpeg">GracinhaMarco Abundo</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons</figcaption>
            </figure>
            <p>North Indian cuisine is a perfect blend of flavors, textures, and traditions, offering something for every taste. Whether you enjoy spicy street food, creamy curries, or rich desserts, the diversity of this cuisine makes it one of the most loved in India and across the world.</p>
            <p>There is an abundance of fresh seasonal fruit and vegetable to be had. Its geographical position with relation to the rest of the Sub-continent means that this region of the country has had strong Central Asian influences both in its culture and its food. Mughlai and Kashmiri styles of cooking are not just prevalent; they are also popular.</p>

          </div>
        </div>
      </div>
      <div className="page-2">
        <div className="content">
          <div className="content-right">
          <h1>South Indian cuisine</h1>
            <p>South India has a hot, humid climate and all its states are coastal. Rainfall is abundant and so is the supply of fresh fruit, vegetables, and rice. Andhra Pradesh produces fiery Andhra cuisine which is largely vegetarian yet has a huge range of seafood in its coastal areas. Tamilnadu has Chettinad cuisine, perhaps the fieriest of all Indian food. This style too is largely vegetarian.</p>
            <p>South Indian cuisine usually encompasses the five Southern states of Karnataka, Andhra Pradesh, Tamilnadu, Telangana, and Kerala. Both the geography and cultural influence of the South has an influence on the region&apos;s cuisine. As with most countries, there are large regional differences and each state&apos;s cuisine can vary greatly even within a specific state. There are typically vegetarian and non-vegetarian dishes for all five states. Additionally, all regions have typical main dishes, snacks, light meals, desserts, and drinks that are well-known in their respective region.</p>
            <figure>
              <img src="/images/CuisinePage/dhosa.jpg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:South_Indian_Tiffin_Items_2.jpg">Sushant savla</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
          </div>
          <div className="content-left">
            <figure>
              <img src="/images/CuisinePage/Idali.jpg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:South_Indian_Uttapam.jpg">Harshaddhawale</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
            <p>From Kerala comes Malabari cooking, with its repertoire of tasty seafood dishes. Hyderabad is the home of the Nizams (rulers of Hyderabad) and regal Nizami food rich and flavorful with tastes ranging from spicy to sour to sweet. Hyderabadi food is full of nuts, dried fruits, and expensive spices like saffron.</p>
            <p>By and large, South Indian cuisine is perhaps the hottest of all Indian food. Meals are centered around rice or rice-based dishes. Rice is combined with Sambaar (a soup-like lentil dish tempered with whole spices and chilies) and rasam (a hot-sour soup-like lentil dish), dry and curried vegetables, meat dishes, and a host of coconut-based chutneys and poppadums (deep-fried crispy lentil pancakes). South Indians are great lovers of coffee, which is usually a special type made with chicory.</p>

          </div>
        </div>
      </div>
      <div className="page-2">
        <div className="content">
          <div className="content-right">
          <h1>East Indian cuisine</h1>
            <p>East India is comprised of the states of West Bengal, Sikkim, Assam, Arunachal Pradesh, Meghalaya, Manipur, Nagaland, Mizoram, Tripura, and Orissa. This region is home to beaches and mountains and Cherrapunji, the city with the highest rainfall in the world.</p>
            <p>Because of the climate, Eastern India grows a lot of rice! Green vegetables and fruit are also abundant and thus are the recipes using them. People, though, are a balanced mix of vegetarian and non-vegetarian. The geographical location of this region means its food bears the strong influence of Chinese and Mongolian cuisine. </p>
            <figure>
              <img src="/images/CuisinePage/rasgulla-1.jpeg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Fruity_rasgulla_cropped.JPG">Deepesh chadha (original image); reprocessed by Off-shell</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
          </div>
          <div className="content-left">
            <figure>
              <img src="/images/CuisinePage/Dalma.jpg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Dalma(dish).jpg">Sibani</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
            <p>Although East India has three schools of cuisine—Bengali and Assam, the Northeastern states and then Orissa—simple is the keyword for food of this region. Preparation is not elaborate and neither are most of the ingredients. Steaming and frying are popular methods of cooking. In coastal regions fish is the food of choice while further inland pork wins the position on the plate. People of no other region in India can rival the Eastern Indian&apos;s love for sweets and desserts. Some of India’s most popular and world-renowned sweets come from here.</p>
            <p>East Indian cuisine&apos;s distinct character sets it apart from other areas of the country. The dishes feature less spice than their neighboring region&apos;s recipes, allowing the main ingredients to really shine through. The coastal section allows for a variety of fresh seafood, the warm climate and lush forest for ample produce. The European explorers and Muslim settlers left their mark, resulting in a unique style of cooking that is purely East Indian.</p>

          </div>
        </div>
      </div>
      <div className="page-2">
        <div className="content">
          <div className="content-right">
          <h1>West Indian cuisine</h1>
            <p>The western region of India includes the following states: Rajasthan, Gujarat, Maharashtra, and Goa. Even within these states, the cuisine varies based on the climate, history, and geographic particulars of each region. For example, Rajasthan and Gujarat have hot, dry climates, so the relatively smaller variety of vegetables available are preserved as pickles and chutneys. Goa is a major port known for trade and was colonized by Portugal, so is known for beef, port, and vinegar, which are all Portuguese influenced ingredients.</p>
            <p>Culturally, these Indian states are largely Hindu and vegetarian. Parts of cosmopolitan Maharashtra are coastal, and parts arid, and the food varies accordingly. Peanuts and coconut are important ingredients as they are freely available. Goa is known for its lush green coastline and busy trade port, so it has an abundance of fresh fish and seafood. Local dishes like Vindaloo and Xacuti testify to the fact that it was subject to Portuguese colonial rule until the 1960s.</p>
            <figure>
              <img src="/images/CuisinePage/Thepla.jpg" alt="" />
              <figcaption><a href="https://commons.wikimedia.org/wiki/File:Mung_Dal_-_Bhindi_with_Methi_Thepla.jpg">Anupama1002</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
            </figure>
          </div>
          <div className="content-left">
            <figure>
            <img src="/images/CuisinePage/vadapav.jpeg" alt="" />
            <figcaption><a href="https://commons.wikimedia.org/wiki/File:Vada_Pav-Indian_street_food.JPG">Rutvi Mistry</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>

            </figure>
            <p>This region probably has the most diverse styles of food in India. Rajasthani food is spicy and largely vegetarian but includes many delicious meat dishes like Laal Maas (red meat curry) while Gujarat’s cuisine is known for its slight sweet touch (at least a pinch of sugar is added to most dishes! and is traditionally entirely vegetarian. This area historically had a Chinese influence, which has influenced the sweetness of the cuisine.</p>
            <p>Some of the more popular Western Indian dishes are likely easier to find in the United States. Whether at a restaurant or searching for recipes on your own, look for Pork Vindaloo, Chicken Xacuti, Fish Curry, Bhelpuri, Thepla, Daal-Baati-Choorma, Laal Maas, and Ghewar. Shop at an Indian or international grocery store for any hard-to-find recipe ingredients.</p>

          </div>
        </div>
      </div>


      <div className="page4">
        <div className="page4-content">
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Famous food of each State...!');
                typewriter.start();
              }}
            />
          </h2>
          <div className="state-container">
            {IndianCuisine.map((button, index) => (
              <div className="state-card" key={index}>
                <div className="image_container">
                  <img src={button.img} alt="" />
                </div>
                <div className="state-title">
                  <span>{button.title}</span>
                </div>
                <div className="state-state">
                  <span>State : {button.state}</span>
                </div>
                <Link to ={`/cuisine/${button.index}`}>
                  <button>
                    <span>Learn More</span>
                  </button>
                </Link>
               
              </div>
            ))}
          </div>
   
        </div>
      </div>
    </div>
  );
};

// Export the component
export default Cuisine;
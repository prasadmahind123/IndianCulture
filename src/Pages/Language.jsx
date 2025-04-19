import NavBar from '../Components/NavBar'
import { PiGreaterThanThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import ScrollUp from '../Components/ScrollUp';
import { TopLanguage } from '../Data/TopLanguage';
import Footer from '../Components/Footer';
import { useEffect } from "react";

import './Language.css'
export default function Language() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
      }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      
  return (
    <div>
        <div className="nav">
            <NavBar />
        </div>
        <div className="lang-page-1">
        
            <div className="content">
            <div className="content-right">
                <div className="heading">
                    <p>
                        <span onClick={handleHome}>Home</span>
                        <PiGreaterThanThin className="greater" />
                        Languages
                    </p>
                </div>
            <ScrollUp/>
            <h2>
                <span className="t">Indian Language Diversity</span>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Explore the A Tapestry of Multilingual Heritage!');
                    typewriter.start();
                }}
                />
            </h2>
                <p className='para'> India is one of the most linguistically diverse countries in the world, with a rich heritage of languages, dialects, and scripts. The Constitution of India recognizes 22 official languages under the Eighth Schedule, but the country is home to more than 1,600 spoken languages and over 19,500 dialects! This vast linguistic landscape is a reflection of India&apos;s cultural, regional, and historical diversity.</p>
                <p className='para'>India&apos;s language diversity is its strength, reflecting its history, culture, and unity in diversity. While each state has its own language, Indians embrace multilingualism as a way of life. Whether through literature, films, or daily conversations, India’s linguistic heritage continues to thrive in modern times.</p>
            </div>
            <div className="content-right">
            <figure>
                <img src="/images/Languages/language-2.jpg" alt="" />
                <figcaption><a href="https://commons.wikimedia.org/wiki/File:Indian_Languages_Map.jpg">Jure Snoj, Call of Travel</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
            </figure>
        </div>
           
            </div>
        </div>
        <div className="lanuage-1">
        <h1>🔹 Language Families in India </h1>
        <p>India does not have a national language, but it has two official languages at the national level : </p>
        <p>🔹Hindi – The most widely spoken language, used in administration and governance.</p>
        <p>🔹English – Used for official communication, legal matters, and business.</p>
            <div className="content">
                {/* <div className="content-left">
                    <h2> 1. Indo-Aryan Languages – The Largest Language Family in India 🌏🗣️ </h2>
                    <p>The Indo-Aryan language family is the largest linguistic group in India, spoken by approximately 75% of the Indian population. It belongs to the Indo-European language family and has deep historical roots tracing back to Vedic Sanskrit, the language of the ancient Vedas. Over thousands of years, Indo-Aryan languages evolved into a vast and diverse set of modern languages spoken across North, West, East, and Central India.</p>
                </div> */}
                <h2>🔸 Official & Scheduled Languages of India</h2>
                <div className="table">
                    <table>
                        <tr>
                            <th>Language</th>
                            <th>Region(s) Spoken</th>
                            <th>Script Used</th>
                        </tr>
                        <tr>
                            <td>Assamese</td>
                            <td>Assam</td>
                            <td>Assamese</td>
                        </tr>
                        <tr>
                            <td>Bengali</td>
                            <td>West Bengal, Tripura</td>
                            <td>Bengali</td>
                        </tr>
                        <tr>
                            <td>Bodo</td>
                            <td>Assam</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Dogri</td>
                            <td>Jammu & Kashmir, HP</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Gujarati</td>
                            <td>Gujarat</td>
                            <td>Gujarati</td>
                        </tr>
                        <tr>
                            <td>Hindi</td>
                            <td>North & Central India</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Kashmiri</td>
                            <td>Jammu & Kashmir</td>
                            <td>Perso-Arabic, Devanagari</td>
                        </tr>
                        <tr>
                            <td>Konkani</td>
                            <td>Goa, Maharashtra, Karnataka</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Maithili</td>
                            <td>Bihar</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Malayalam</td>
                            <td>Kerala</td>
                            <td>Malayalam</td>
                        </tr>
                        <tr>
                            <td>Manipuri</td>
                            <td>Manipur</td>
                            <td>Meitei Mayek, Bengali</td>
                        </tr>
                        <tr>
                            <td>Marathi</td>
                            <td>Maharashtra</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Nepali</td>
                            <td>Sikkim, Northeast</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Odia</td>
                            <td>Odisha</td>
                            <td>Odia</td>
                        </tr>
                        <tr>
                            <td>Punjabi</td>
                            <td>Punjab</td>
                            <td>Gurmukhi</td>
                        </tr>
                        <tr>
                            <td>Sanskrit</td>
                            <td>Pan-India (Classical)</td>
                            <td>Devanagari</td>
                        </tr>
                        <tr>
                            <td>Sindhi</td>
                            <td>Gujarat, Rajasthan</td>
                            <td>Perso-Arabic, Devanagari</td>
                        </tr>
                        <tr>
                            <td>Tamil</td>
                            <td>Tamil Nadu</td>
                            <td>Tamil</td>
                        </tr>
                        <tr>
                            <td>Telugu</td>
                            <td>Andhra Pradesh, Telangana</td>
                            <td>Telugu</td>
                        </tr>
                        <tr>
                            <td>Urdu</td>
                            <td>Jammu & Kashmir, UP, Bihar</td>
                            <td>Perso-Arabic, Urdu</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="language-2">
            
                    <h1>🔹Top 10 Official Languages of India</h1>
                    <p>🔸India is home to a vast number of languages, but some are spoken by millions of people across different states. Below is a detailed breakdown of the top 10 most spoken languages in India, based on the number of native speakers.</p>
                <div className="lang-content">
                {
                    TopLanguage.map((lang) =>{
                        return(
                            <div  className='lang-card' key={lang.id}>
                                <h3>{lang.id}. {lang.name}</h3>
                                <p>{lang.info}</p>
                            </div>
                        )
                    })
                   }
                </div>
              
                
            
        </div>
        <Footer></Footer>
    </div>
  )
}

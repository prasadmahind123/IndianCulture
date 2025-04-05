// FestivalInfo.js
import { useState } from 'react';
import './Calender.css';
import NavBar from "../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import { useNavigate  } from 'react-router-dom';
import Scrollup from "../Components/Scrollup.jsx"
import { useEffect } from 'react';

const Calender = () => {
  const [festivalName, setFestivalName] = useState('');
  const [festivalInfo, setFestivalInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/'); 
  }
  const [selectedFestival, setSelectedFestival] = useState(null);
  console.log(selectedFestival)
  const handleFestivalClick = (festival) => {
    setSelectedFestival(festival);
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
  const festivals = {
    "new_year": {
      description: "Celebration of the beginning of the new year.",
      location: "Worldwide",
      date: "January 1, 2025"
    },
    "lohri": {
      description: "Punjabi festival marking the harvest season.",
      location: "Punjab, North India",
      date: "January 13, 2025"
    },
    "makar_sankranti": {
      description: "Harvest festival celebrated across India.",
      location: "Pan India",
      date: "January 14, 2025"
    },
    "pongal": {
      description: "Harvest festival celebrated in Tamil Nadu.",
      location: "Tamil Nadu",
      date: "January 15, 2025"
    },
    "republic_day": {
      description: "Celebrates the adoption of the Indian Constitution.",
      location: "Nationwide",
      date: "January 26, 2025"
    },
    "maha_shivratri": {
      description: "Festival honoring Lord Shiva.",
      location: "Pan India",
      date: "February 26, 2025"
    },
    "shivaji_maharaj_jayanti": {
      description: "Birth anniversary of Shivaji Maharaj.",
      location: "Maharashtra",
      date: "February 19, 2025"
    },
    "holi": {
      description: "Festival of colors celebrated with enthusiasm.",
      location: "Pan India",
      date: "March 14, 2025"
    },
    "bhagat_singh_shaheed_diwas": {
      description: "Martyrdom day of Bhagat Singh.",
      location: "Nationwide",
      date: "March 23, 2025"
    },
    "eid_al_fitr": {
      description: "Celebrated at the end of Ramadan.",
      location: "Muslim Community, Pan India",
      date: "March 30, 2025"
    },
    "ram_navami": {
      description: "Celebration of the birth of Lord Rama.",
      location: "Pan India",
      date: "April 6, 2025"
    },
    "hanuman_jayanti": {
      description: "Birth anniversary of Lord Hanuman.",
      location: "Pan India",
      date: "April 14, 2025"
    },
    "ambedkar_jayanti": {
      description: "Birth anniversary of Dr. Ambedkar.",
      location: "Nationwide",
      date: "April 14, 2025"
    },
    "good_friday": {
      description: "Commemoration of the crucifixion of Jesus Christ.",
      location: "Christian Community, Worldwide",
      date: "April 18, 2025"
    },
    "buddha_purnima": {
      description: "Celebration of the birth of Gautama Buddha.",
      location: "Buddhist Community, Pan India",
      date: "May 15, 2025"
    },
    "rabindranath_tagore_jayanti": {
      description: "Birth anniversary of Rabindranath Tagore.",
      location: "West Bengal",
      date: "May 7, 2025"
    },
    "independence_day": {
      description: "Marks India's independence from British rule.",
      location: "Nationwide",
      date: "August 15, 2025"
    },
    "bal_gangadhar_tilak_punyatithi": {
      description: "Death anniversary of Bal Gangadhar Tilak.",
      location: "Maharashtra, Nationwide",
      date: "August 1, 2025"
    },
    "raksha_bandhan": {
      description: "Festival celebrating the bond between siblings.",
      location: "Pan India",
      date: "August 18, 2025"
    },
    "janmashtami": {
      description: "Celebration of the birth of Lord Krishna.",
      location: "Pan India",
      date: "August 26, 2025"
    },
    "bhagat_singh_jayanti": {
      description: "Birth anniversary of Bhagat Singh.",
      location: "Punjab, Nationwide",
      date: "September 28, 2025"
    },
    "gandhi_jayanti": {
      description: "Birth anniversary of Mahatma Gandhi.",
      location: "Nationwide",
      date: "October 2, 2025"
    },
    "navratri": {
      description: "Nine-day festival dedicated to Goddess Durga.",
      location: "Pan India",
      date: "September 25 - October 3, 2025"
    },
    "dussehra": {
      description: "Victory of good over evil.",
      location: "Pan India",
      date: "October 7, 2025"
    },
    "karwa_chauth": {
      description: "Fasting festival observed by married women for the well-being of their husbands.",
      location: "North India",
      date: "October 29, 2025"
    },
    "diwali": {
      description: "Festival of lights celebrated across India.",
      location: "Pan India",
      date: "October 29, 2025"
    },
    "sardar_patel_jayanti": {
      description: "Birth anniversary of Sardar Patel.",
      location: "Nationwide",
      date: "October 31, 2025"
    },
    "bhai_dooj": {
      description: "Festival celebrating the bond between brothers and sisters.",
      location: "North India",
      date: "October 31, 2025"
    },
    "guru_nanak_jayanti": {
      description: "Birth anniversary of Guru Nanak.",
      location: "Sikh Community, Punjab",
      date: "November 15, 2025"
    },
    "ambedkar_punyatithi": {
      description: "Death anniversary of Dr. Ambedkar.",
      location: "Nationwide",
      date: "December 6, 2025"
    },
    "christmas": {
      description: "Celebration of the birth of Jesus Christ.",
      location: "Worldwide",
      date: "December 25, 2025"
    },
    "basant_panchami": {
      description: "Festival marking the arrival of spring, dedicated to Goddess Saraswati.",
      location: "Pan India",
      date: "February 2, 2025"
    },
    "chhatrapati_shivaji_maharaj_punyatithi": {
      description: "Death anniversary of Chhatrapati Shivaji Maharaj.",
      location: "Maharashtra",
      date: "April 3, 2025"
    },
    "maharana_pratap_jayanti": {
      description: "Birth anniversary of Maharana Pratap.",
      location: "Rajasthan",
      date: "May 9, 2025"
    },
    "lokmanya_tilak_jayanti": {
      description: "Birth anniversary of Bal Gangadhar Tilak.",
      location: "Maharashtra, Nationwide",
      date: "July 23, 2025"
    },
    "onam": {
      description: "Harvest festival celebrated in Kerala.",
      location: "Kerala",
      date: "September 5, 2025"
    },
    "muharram": {
      description: "Islamic New Year, observed in memory of the martyrdom of Imam Hussain.",
      location: "Muslim Community, Pan India",
      date: "September 26, 2025"
    },
    "cheti_chand": {
      description: "Sindhi New Year, celebrating the birth of Jhulelal.",
      location: "Sindhi Community, India",
      date: "April 2, 2025"
    },
    "mahavir_jayanti": {
      description: "Birth anniversary of Lord Mahavir, the founder of Jainism.",
      location: "Jain Community, Pan India",
      date: "April 10, 2025"
    },
    "parshuram_jayanti": {
      description: "Birth anniversary of Lord Parshuram.",
      location: "Hindu Community, Pan India",
      date: "May 1, 2025"
    },
    "guru_gobind_singh_jayanti": {
      description: "Birth anniversary of Guru Gobind Singh, the tenth Sikh Guru.",
      location: "Sikh Community, Punjab",
      date: "January 5, 2025"
    },
    "international_yoga_day": {
      description: "Global celebration promoting yoga for health and well-being.",
      location: "Worldwide",
      date: "June 21, 2025"
    },
    "world_environment_day": {
      description: "Day to promote environmental awareness and action.",
      location: "Worldwide",
      date: "June 5, 2025"
    },
    "kargil_vijay_diwas": {
      description: "Commemorates India's victory in the Kargil War.",
      location: "Nationwide",
      date: "July 26, 2025"
    },
    "teachers_day": {
      description: "Honoring teachers and educators in India.",
      location: "Nationwide",
      date: "September 5, 2025"
    },
    "children_day": {
      description: "Celebration of childhood and tribute to Jawaharlal Nehru.",
      location: "Nationwide",
      date: "November 14, 2025"
    },
    "national_science_day": {
      description: "Celebrates the discovery of the Raman Effect by C.V. Raman.",
      location: "Nationwide",
      date: "February 28, 2025"
    },
    "world_women_day": {
      description: "International day celebrating women's achievements.",
      location: "Worldwide",
      date: "March 8, 2025"
    },
    "national_youth_day": {
    description: "Celebrates the birth anniversary of Swami Vivekananda.",
    location: "Nationwide",
    date: "January 12, 2025"
  },
  "army_day": {
    description: "Honors the Indian Army and its achievements.",
    location: "Nationwide",
    date: "January 15, 2025"
  },
  "martyrs_day": {
    description: "Observed in memory of Mahatma Gandhi’s assassination.",
    location: "Nationwide",
    date: "January 30, 2025"
  },
  "national_women_day": {
    description: "Observed in honor of Sarojini Naidu’s birth anniversary.",
    location: "Nationwide",
    date: "February 13, 2025"
  },
  "world_water_day": {
    description: "Raises awareness about the importance of fresh water.",
    location: "Worldwide",
    date: "March 22, 2025"
  },
  "national_panchayati_raj_day": {
    description: "Celebrates the establishment of the Panchayati Raj system in India.",
    location: "Nationwide",
    date: "April 24, 2025"
  },
  "labour_day": {
    description: "Recognizes the contributions of workers.",
    location: "Worldwide",
    date: "May 1, 2025"
  },
  "national_technology_day": {
    description: "Celebrates India's technological advancements.",
    location: "Nationwide",
    date: "May 11, 2025"
  },
  "world_population_day": {
    description: "Raises awareness about global population issues.",
    location: "Worldwide",
    date: "July 11, 2025"
  },
  "indian_air_force_day": {
    description: "Honors the establishment of the Indian Air Force.",
    location: "Nationwide",
    date: "October 8, 2025"
  },
  "world_food_day": {
    description: "Raises awareness about food security and hunger.",
    location: "Worldwide",
    date: "October 16, 2025"
  },
  "national_education_day": {
    description: "Commemorates the birth anniversary of Maulana Abul Kalam Azad.",
    location: "Nationwide",
    date: "November 11, 2025"
  },
  "constitution_day": {
    description: "Marks the adoption of the Indian Constitution.",
    location: "Nationwide",
    date: "November 26, 2025"
  },
  "navy_day": {
    description: "Honors the achievements of the Indian Navy.",
    location: "Nationwide",
    date: "December 4, 2025"
  },
  "sarojini_naidu_jayanti": {
    description: "Birth anniversary of Sarojini Naidu.",
    location: "Nationwide",
    date: "February 13, 2025"
  },
  "shaurya_diwas": {
    description: "Commemorates the valor of soldiers in the Battle of Rezang La.",
    location: "Nationwide",
    date: "November 18, 2025"
  },
  "world_heritage_day": {
    description: "Raises awareness about the importance of cultural heritage.",
    location: "Worldwide",
    date: "April 18, 2025"
  },
  "national_energy_conservation_day": {
    description: "Encourages energy efficiency and conservation.",
    location: "Nationwide",
    date: "December 14, 2025"
  },
  "world_hindi_day": {
    description: "Celebrates Hindi as a global language.",
    location: "Worldwide",
    date: "January 10, 2025"
  },
  "national_voters_day": {
    description: "Encourages citizens to participate in elections.",
    location: "India",
    date: "January 25, 2025"
  },
  "international_mother_language_day": {
    description: "Promotes linguistic and cultural diversity.",
    location: "Worldwide",
    date: "February 21, 2025"
  },
  "zero_discrimination_day": {
    description: "Promotes equality and inclusion.",
    location: "Worldwide",
    date: "March 1, 2025"
  },
  "world_wildlife_day": {
    description: "Raises awareness about wildlife conservation.",
    location: "Worldwide",
    date: "March 3, 2025"
  },
  "world_health_day": {
    description: "Highlights global health issues.",
    location: "Worldwide",
    date: "April 7, 2025"
  },
  "national_fire_service_day": {
    description: "Honors firefighters and their service.",
    location: "India",
    date: "April 14, 2025"
  },
  "world_earth_day": {
    description: "Promotes environmental protection.",
    location: "Worldwide",
    date: "April 22, 2025"
  },
  "world_press_freedom_day": {
    description: "Raises awareness about press freedom.",
    location: "Worldwide",
    date: "May 3, 2025"
  },
  "world_red_cross_day": {
    description: "Honors humanitarian efforts worldwide.",
    location: "Worldwide",
    date: "May 8, 2025"
  },
  "world_no_tobacco_day": {
    description: "Promotes awareness about the dangers of tobacco.",
    location: "Worldwide",
    date: "May 31, 2025"
  },
  "teacher's_day": {
    description: "Honors teachers and their contributions to society.",
    location: "India",
    date: "September 5, 2025"
  },
  "engineer's_day": {
    description: "Celebrates the contributions of engineers.",
    location: "India",
    date: "September 15, 2025"
  },
  "international_day_of_non_violence": {
    description: "Marks Mahatma Gandhi’s philosophy of non-violence.",
    location: "Worldwide",
    date: "October 2, 2025"
  },
  "children's_day": {
    description: "Celebrates childhood and Jawaharlal Nehru’s birth anniversary.",
    location: "India",
    date: "November 14, 2025"
  },
  "national_milk_day": {
    description: "Honors Dr. Verghese Kurien, the Father of the White Revolution in India.",
    location: "India",
    date: "November 26, 2025"
  },
  "armed_forces_flag_day": {
    description: "Acknowledges the sacrifices of Indian armed forces personnel.",
    location: "India",
    date: "December 7, 2025"
  },
  "world_human_rights_day": {
    description: "Promotes human rights and freedoms.",
    location: "Worldwide",
    date: "December 10, 2025"
  }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const lowerCaseFestivalName = festivalName.toLowerCase();
    if (festivals[lowerCaseFestivalName]) {
      setFestivalInfo(festivals[lowerCaseFestivalName]);
    } else {
      setFestivalInfo({
        description: 'No information available.',
        location: '',
        date: '',
      });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFestivals = Object.keys(festivals).filter((festival) => {
    return festival.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
       <div className="nav">
            <NavBar />
        </div>
        <div className="wild-page-1">
          <div className="heading">              
              <p >
                  <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> Calender
              </p>
          </div>
          <Scrollup />
          <div className="wild-content">
              <div className="festival-info-container">
                <h1>Calender 2025</h1>
                <form onSubmit={handleSubmit} className="festival-info-form">
                  <label className="festival-info-label">
                    
                    <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="festival-info-input"
                  placeholder="Search festivals..."
                />
                  </label>

                </form>
              
                {searchTerm && filteredFestivals.length > 0 && (
                  <div className="festival-list">
                    {filteredFestivals.map((festival) => (
                      <div key={festival} className="festival-info-result">
                        <h2 onClick={() => handleFestivalClick(festival)} className="festival-info-result-title">{festival}</h2>
                        { selectedFestival=== festival && (
                          <div>
                            <p className="festival-info-result-description">{festivals[festival].description}</p>
                            <p className="festival-info-result-location">
                              Location: {festivals[festival].location}
                            </p>
                            <p className="festival-info-result-date">Date: {festivals[festival].date}</p>
                          </div>
                        )}
                      </div>

                    ))}
                  </div>
                )}
              </div>
          </div>    
        </div>
      
    </div>
  );
};

export default Calender;
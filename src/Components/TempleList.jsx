

import { useState , useRef , useEffect } from "react"
import './TempleList.css' 
// Temple data with expanded information
const temples = [
  {
    id: 1,
    name: "Khajuraho Group of Monuments",
    location: "Madhya Pradesh",
    year: 1986,
    period: "950-1050 CE",
    dynasty: "Chandela Dynasty",
    architecturalStyle: "Nagara Style",
    description:
      "The Khajuraho Group of Monuments is a collection of Hindu and Jain temples renowned for their nagara-style architectural symbolism and exquisite sculptures. These temples celebrate various aspects of human life, including spirituality, sensuality, and the interconnectedness of human existence.",
    significance:
      "The temples at Khajuraho represent one of the finest examples of temple art in Northern India. Of the original 85 temples, only 25 remain today. The temples are famous for their intricate carvings that depict celestial beings, divine figures, and scenes from everyday life, showcasing the artistic excellence of medieval Indian sculptors.",
    visitingInfo:
      "Best time to visit is from October to March. The nearest airport is at Khajuraho, and the site is well-connected by road from major cities like Jhansi and Orchha.",
    imageUrl: "/images/1024px-Khajuraho_Group_of_Monuments_4.jpg",
    facts: [
      "The temples were lost to the outside world until 1838 when they were rediscovered by British engineer T.S. Burt",
      "The Kandariya Mahadeva Temple is the largest and most ornate temple in the complex",
      "A sound and light show is held every evening narrating the history of the temples",
    ],
  },
  {
    id: 2,
    name: "Group of Monuments at Hampi",
    location: "Karnataka",
    year: 1986,
    period: "14th-16th century CE",
    dynasty: "Vijayanagara Empire",
    architecturalStyle: "Dravidian with Islamic influences",
    description:
      "Hampi was the capital of the Vijayanagara Empire and one of the richest cities of its time. The ruins spread over an area of more than 25 square kilometers and comprise numerous temples, palaces, market streets, royal pavilions, and military structures, reflecting the grandeur of a bygone era.",
    significance:
      "The monuments at Hampi exemplify the Vijayanagara style of architecture, which blended indigenous Dravidian architectural elements with Islamic influences. The site includes the magnificent Virupaksha Temple, which is still an active place of worship, the iconic stone chariot at the Vittala Temple, and the remarkable musical pillars that produce musical notes when tapped.",
    visitingInfo:
      "Best time to visit is from October to February. The nearest railway station is at Hospet (13 km away), and the nearest airport is at Bellary (60 km away).",
    imageUrl: "/images/Temples/hampi.jpg",
    facts: [
      "The Virupaksha Temple has been functioning uninterruptedly since the 7th century CE",
      "The stone chariot at Vittala Temple is actually a shrine built in the form of a chariot",
      "Hampi was described by foreign travelers as 'a city greater than Rome'",
    ],
  },
  {
    id: 3,
    name: "Sun Temple, Konark",
    location: "Odisha",
    year: 1984,
    period: "13th century CE",
    dynasty: "Eastern Ganga Dynasty",
    architecturalStyle: "Kalinga Architecture",
    description:
      "The Konark Sun Temple is a 13th-century CE sun temple at Konark, Odisha, attributed to king Narasimhadeva I. The temple is designed in the form of a colossal chariot with 12 pairs of elaborately carved wheels drawn by seven horses, dedicated to the sun god Surya.",
    significance:
      "The temple represents the culmination of Kalinga temple architecture and is renowned for its exquisite stone carvings. The precision of the chariot wheels is such that they serve as sundials, accurately calculating time. The temple symbolizes the majestic stride of the Sun god across the heavens and showcases the astronomical knowledge of ancient India.",
    visitingInfo:
      "Best time to visit is from October to March. The nearest airport is at Bhubaneswar (65 km away), and the site is well-connected by road from Puri and Bhubaneswar.",
    imageUrl: "/images/konark-sun-temple-odisha.webp",
    facts: [
      "The wheels of the temple chariot function as accurate sundials",
      "The temple was called the 'Black Pagoda' by European sailors who used it as a landmark for navigation",
      "The main sanctum tower collapsed in the late 16th century",
    ],
  },
  {
    id: 4,
    name: "Great Living Chola Temples",
    location: "Tamil Nadu",
    year: 1987,
    period: "11th-12th century CE",
    dynasty: "Chola Dynasty",
    architecturalStyle: "Dravidian Architecture",
    description:
      "The Great Living Chola Temples were built by the Chola dynasty kings between the 11th and 12th centuries CE. They include the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikonda Cholapuram, and the Airavatesvara Temple at Darasuram. These temples are masterpieces of Dravidian architecture and showcase the artistic excellence achieved during the Chola period.",
    significance:
      "These temples are living examples of the Chola architecture and represent the heights of achievement of Dravidian architecture. The Brihadisvara Temple at Thanjavur, built by Raja Raja Chola I, features a 216-foot vimana (tower) topped by a massive stone cupola weighing 80 tons. The temples are adorned with exquisite sculptures and frescoes and continue to be active places of worship.",
    visitingInfo:
      "Best time to visit is from November to February. The nearest airport is at Trichy, and the temples are well-connected by road from major cities in Tamil Nadu.",
    imageUrl: "/images/Temples/Inside-image-temple.webp",
    facts: [
      "The Brihadisvara Temple at Thanjavur was the tallest temple in India when it was built",
      "The shadow of the temple's cupola never falls on the ground",
      "The temples contain valuable inscriptions that provide insights into Chola administration, economy, and society",
    ],
  },
  {
    id: 5,
    name: "Group of Monuments at Mahabalipuram",
    location: "Tamil Nadu",
    year: 1984,
    period: "7th-8th century CE",
    dynasty: "Pallava Dynasty",
    architecturalStyle: "Pallava Architecture",
    description:
      "The Group of Monuments at Mahabalipuram consists of rock-cut cave temples, monolithic rathas (chariots), sculpted reliefs, and structural temples. The site includes the famous Shore Temple, the Pancha Rathas (Five Chariots), and the massive bas-relief 'Descent of the Ganges' or 'Arjuna's Penance', which is one of the largest open-air rock reliefs in the world.",
    significance:
      "These monuments were built by the Pallava dynasty and showcase the transition from rock-cut architecture to structural building. The Shore Temple is one of the oldest structural stone temples of South India and has withstood the shore's weathering for centuries. The site demonstrates the Pallavas' architectural innovation and artistic vision.",
    visitingInfo:
      "Best time to visit is from November to February. The site is about 60 km from Chennai, which has the nearest airport and railway station.",
    imageUrl: "/images/Temples/Mhabalipuram.jpg",
    facts: [
      "The Shore Temple acts as the backdrop for the annual Mamallapuram Dance Festival",
      "The Pancha Rathas are named after the Pandavas and Draupadi from the Mahabharata, though they have no connection to the epic",
      "After the 2004 tsunami, the receding waters revealed previously submerged structures near the Shore Temple",
    ],
  },
  {
    id: 6,
    name: "Elephanta Caves",
    location: "Maharashtra",
    year: 1987,
    period: "5th-8th century CE",
    dynasty: "Kalachuri Dynasty",
    architecturalStyle: "Rock-cut Architecture",
    description:
      "The Elephanta Caves are a complex of ancient cave temples dedicated to Lord Shiva, located on Elephanta Island in Mumbai Harbour. The main cave contains a 6-meter high masterpiece sculpture of Trimurthi Sadashiva (three-faced Shiva) representing Shiva as the creator, preserver, and destroyer.",
    significance:
      "The caves are a remarkable example of rock-cut architecture and sculptural art. The main cave's layout is designed to enhance the central Trimurthi sculpture, with supporting pillars and subsidiary shrines creating a sacred atmosphere. The sculptures depict various manifestations of Shiva and narrate important Hindu mythological stories.",
    visitingInfo:
      "Best time to visit is from November to February. The caves are accessible by ferry from the Gateway of India in Mumbai.",
    imageUrl: "/images/ElephantaCaves.webp",
    facts: [
      "The Portuguese named the island 'Elephanta' after finding a large stone elephant sculpture there",
      "The original name of the island was Gharapuri (city of caves)",
      "The caves were damaged during Portuguese rule when they used the sculptures for target practice",
    ],
  },
  {
    id: 7,
    name: "Group of Monuments at Pattadakal",
    location: "Karnataka",
    year: 1987,
    period: "7th-8th century CE",
    dynasty: "Chalukya Dynasty",
    architecturalStyle: "Blend of Nagara and Dravidian styles",
    description:
      "Pattadakal is a complex of 7th and 8th-century CE Hindu and Jain temples in northern Karnataka. The site showcases the blending of architectural styles from northern and southern India, with temples built in both Nagara (North Indian) and Dravidian (South Indian) styles.",
    significance:
      "Pattadakal served as the ceremonial center where Chalukya kings were crowned. The site is particularly notable for its harmonious blend of architectural forms from northern and southern India. The Virupaksha Temple, built by Queen Lokamahadevi to commemorate her husband's victory over the Pallavas, is the largest and most sophisticated temple in the complex.",
    visitingInfo:
      "Best time to visit is from October to March. The nearest airport is at Belgaum (164 km away), and the site is accessible by road from Badami and Aihole.",
    imageUrl: "/images/Temples/pattadakal-monuments.jpg",
    facts: [
      "Pattadakal was a royal coronation site for the Chalukya dynasty",
      "The Virupaksha Temple continues to be an active place of worship",
      "The site demonstrates the experimental phase in temple architecture where different styles were being explored",
    ],
  },
  {
    id: 8,
    name: "Rani ki Vav (The Queen's Stepwell)",
    location: "Gujarat",
    year: 2014,
    period: "11th century CE",
    dynasty: "Solanki Dynasty",
    architecturalStyle: "Maru-Gurjara Architecture",
    description:
      "Rani ki Vav is an intricately constructed stepwell built as a memorial to King Bhimdev I by his widowed queen Udayamati. It is a unique water management system and showcases the artistic and technological heights of the time. The stepwell is designed as an inverted temple highlighting the sanctity of water and is divided into seven levels of stairs with sculptural panels.",
    significance:
      "The stepwell is an architectural marvel that combines utility with beauty. It features more than 500 principal sculptures and over a thousand minor ones that combine religious, mythological, and secular imagery. The central theme is the Dasavataras (ten incarnations of Vishnu), with the walls adorned with images of Vishnu, other deities, apsaras (celestial dancers), and various geometric patterns.",
    visitingInfo:
      "Best time to visit is from October to March. The nearest airport is at Ahmedabad (130 km away), and the site is accessible by road from Ahmedabad and Mehsana.",
    imageUrl: "/images/Temples/ranikivav.jpg",
    facts: [
      "Rani ki Vav was featured on the new ₹100 note issued by the Reserve Bank of India",
      "The stepwell was flooded by the nearby Saraswati River and silted over until the late 1980s when it was excavated by the Archaeological Survey of India",
      "The stepwell is designed with mathematical precision to prevent direct sunlight from hitting the water",
    ],
  },
]


export default function TempleList() {
  const [activeTemple, setActiveTemple] = useState(null);
  const detailsRefs = useRef({});
  
  useEffect(() => {
    if (activeTemple !== null && detailsRefs.current[activeTemple]) {
      detailsRefs.current[activeTemple].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeTemple]);

  return (
    <div className="temple-list">
           
      {temples.map((temple) => {
        const isActive = activeTemple === temple.id;

        return (
          <div
            key={temple.id}
            className={`list-temple-card ${isActive ? 'active' : ''}`}
            ref={(el) => {
              if (el) detailsRefs.current[temple.id] = el;
            }}
          >
            <div className="temple-header">
              <div className="temple-title">
                <span className="temple-icon">🏛️</span>
                <h2 className="temple-name">{temple.name}</h2>
              </div>

              <div className="temple-preview">
                <div className="temple-preview-info">
                  <span>
                    <strong>Location:</strong> {temple.location}
                  </span>
                  <span>
                    <strong>UNESCO:</strong> {temple.year}
                  </span>
                </div>

                <button
                  className={`temple-button ${isActive ? 'hide' : 'view'}`}
                  onClick={() => setActiveTemple(isActive ? null : temple.id)}
                >
                  {isActive ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>

            <div className={`temple-details-container ${isActive ? 'expanded' : ''}`}>
              <div className="temple-details">
                <div className="temple-image-container">
                  <img src={temple.imageUrl || '/placeholder.svg'} alt={temple.name} className="temple-image" />
                  <div className="temple-quick-facts">
                    <div className="quick-fact">
                      <span>Location:</span> {temple.location}
                    </div>
                    <div className="quick-fact">
                      <span>UNESCO Recognition:</span> {temple.year}
                    </div>
                    <div className="quick-fact">
                      <span>Period:</span> {temple.period}
                    </div>
                    <div className="quick-fact">
                      <span>Dynasty:</span> {temple.dynasty}
                    </div>
                    <div className="quick-fact">
                      <span>Style:</span> {temple.architecturalStyle}
                    </div>
                  </div>
                </div>

                <div className="temple-info">
                  <div className="info-section">
                    <h3>Description</h3>
                    <p>{temple.description}</p>
                  </div>

                  <div className="info-section">
                    <h3>Historical & Cultural Significance</h3>
                    <p>{temple.significance}</p>
                  </div>

                  <div className="info-section">
                    <h3>Visiting Information</h3>
                    <p>{temple.visitingInfo}</p>
                  </div>

                  <div className="info-section">
                    <h3>Interesting Facts</h3>
                    <ul className="facts-list">
                      {temple.facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="hide-button" onClick={() => setActiveTemple(null)}>
                    Hide Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
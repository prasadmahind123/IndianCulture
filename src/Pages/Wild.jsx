import NavBar from "../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import { useState } from "react";
import { WildData } from "../Data/WildData";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import ScrollUp from "../Components/ScrollUp";
import './wild.css';
export default function Wild() {
    const navigate = useNavigate();
    const [selectedInfo, setSelectedInfo] = useState(null);
    const handleInfoClick = (info) => {
        setSelectedInfo(info);
      }

    const handleHome = () => {
        navigate('/'); 
    }
    const handleHeritage = () => {
        navigate('/heritage'); 
    }
    const handleCuisine = () => {
        navigate('/architecture');
    }
    const handleInfoClose = (e) => {
        e.stopPropagation();
        setSelectedInfo(null);
      };
  return (
    <div>
        <div className="nav">
            <NavBar />
        </div>
        <div className="wild-page-1">
            <div className="right-container">
                <img src="images/wild/kaziranga-top.webp" alt="" />
            </div>
            <div className="heading">              
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                    WildLife
                     
                </p>
            </div>
            <div className="wild-content">
                <div className="left-container">
                    <span className="t">
                        Popular National Parks in India
                    </span>
                    <h3>
                        Explore Indian National Parks & Wildlife Sanctuaries, Where Conservation Comes Alive!
                    </h3>
                    <p>
                        National Parks are an important part to preserve the natural heritage of India. India is blessed with a rich variety of living creatures. These wildlife destinations are now home to approximately 426 species of mammals, 529 reptiles, 1,317 birds, and more than 18,000 species of flowering plants. At present, India boasts a remarkable number of over 100 National Parks, over 560 wildlife sanctuaries, and 53 tiger reserves. These protected areas are dedicated to the ongoing preservation of various animal and plant species, safeguarding them from the brink of endangerment. The primary objectives of National Parks and Wildlife Sanctuaries in India are to protect wildlife, conserve biodiversity, and educate people about the significance of conservation and the need to safeguard our natural resources. It's important to note that the term "national parks" encompasses not only wildlife sanctuaries but also tiger reserves as National parks have a broad focus on protecting entire ecosystems, which means they safeguard species of plants, animals, and natural features within a specific area.
                    </p>
                </div> 
            
            </div>    
        </div>
        <ScrollUp />
        <div className="wild-page-2">
            <div className="left-container">
                <img src="/images/wild/tiger.webp" alt="tiger" />
            </div>
            <div className="right-container">
                <div className="heading">
                    <h3>
                        Quick Info About Indian National Parks & Wildlife Sanctuaries
                    </h3>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>National Parks Name</th>
                            <th>State</th>
                            <th>Year of Establishment</th>
                        </tr>
                        <tr>
                            <td>Jim Corbett National Park</td>
                            <td>Uttarakhand</td>
                            <td>1936</td>
                        </tr>
                        <tr>
                            <td>Kaziranga National Park</td>
                            <td>Assam</td>
                            <td>1974</td>
                        </tr>
                        <tr>
                            <td>Ranthambore National Park</td>
                            <td>Rajasthan</td>
                            <td>1980</td>
                        </tr>
                        <tr>
                            <td>Kanha National Park</td>
                            <td>Madhya Pradesh</td>
                            <td>1955</td>
                        </tr>
                        <tr>
                            <td>Sundarbans National Park</td>
                            <td>West Bengal</td>
                            <td>1984</td>
                        </tr>
                        <tr>
                            <td>Periyar National Park</td>
                            <td>Kerala</td>
                            <td>1982</td>
                        </tr>
                        <tr>
                            <td>Bandipur National Park</td>
                            <td>Karnataka</td>
                            <td>1974</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="wild-page-3">
            <div className="wild-page-3-1">
                <h1>
                    WILDLIFE IN INDIA
                </h1>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('nationalPark')}>National Park </h3>
                    <h3 onClick={() => handleInfoClick('wildSanctuaries')}>Wild Sanctuaries </h3>
                    <h3 onClick={() => handleInfoClick('tigerReserves')}>Tiger Reserves </h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'nationalPark' && (
                <div className="info-content"> 
                    <h3>National Park
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>National parks are areas designated by the government for the preservation of the natural environment. They are important for several reasons, including the protection of wildlife, conserving biodiversity, providing recreation opportunities, and educating people about conservation and the need to protect our natural resources. India is home to a great diversity of plants and animals, and its national parks play an important role in protecting this biodiversity. Currently, there are 106 national parks in India, covering an area of over 44,000 square kilometres. These parks are home to a wide range of wildlife, such as tigers, elephants, lions, and many more. Some popular wildlife destination in India includes Sundarban, Jim Corbett, Ranthambore, Kaziranga, and Hemis. The government of India actively protects these national parks by employing park rangers to prevent illegal activities like poaching. Additionally, they provide funds for research and conservation projects. National parks are an important part of India's natural heritage. They safeguard wildlife, preserve biodiversity, offer recreational opportunities, and educate the public about conservation.</p>
                    <img src="/images/wild/park.webp" alt="" />
                </div>
              )}
              {selectedInfo === 'wildSanctuaries' && (
                 <div className="info-content"> 
                 <h3>Wild Sanctuaries
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h3>
                 <p>India's wildlife sanctuaries are a crucial part of the country's natural heritage by protecting endangered species. Thanks to these sanctuaries, India has seen a remarkable 20% increase in its tiger population since the 1970s. With a vast network of 567 sanctuaries spanning over 122,000 sq. km., they provide a safe and comfortable habitat for animals amidst dense forests, majestic mountains, and flowing rivers. These sanctuaries prioritize the well-being of animals by avoiding the need for constant relocation and instead focusing on preserving their natural environment. Endangered species are carefully monitored and biologists conduct valuable research here to deepen our understanding of the animals. Additionally, injured and abandoned animals receive compassionate care and rehabilitation before being released back into the wild. Wildlife sanctuaries play a vital role in preserving endangered species, shielding them from human interference and predatory threats. To maintain a peaceful environment for the animals, tourism is restricted, and the sanctuaries serve as educational hubs, teaching humans about responsible behaviour towards animals.</p>
                 <img src="/images/wild/wild.webp" alt="" />
             </div>
              )}
              {selectedInfo === 'tigerReserves' && (
                 <div className="info-content"> 
                 <h3>Tiger Reserves
                    <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                        &times;
                    </span>
                 </h3>
                 <p>Tiger reserves are special areas set aside to protect and conserve tigers. They were established as part of Project Tiger, a government initiative in India launched in 1972. The main objective of Project Tiger is to ensure the survival and growth of the tiger population in specially designated reserves across the country. These reserves are managed by the National Tiger Conservation Authority (NTCA), which takes care of the land and ensures it is used in a way that supports the needs of tigers. The NTCA also creates pathways and habitats that allow tigers to move between different protected areas. Today, India has 53 tiger reserves, with Bandipur in Karnataka being the first one established. Out of these 53 reserves, 35 have been approved and are actively working towards conservation, while the others are currently being prepared or reviewed. National parks have the important goal of protecting entire ecosystems, which means they safeguard all the plants, animals, and natural features found in a specific area. On the other hand, wildlife sanctuaries focus on protecting specific animal species or their habitats. Lastly, tiger reserves are specifically created to save endangered tigers. Their main focus is to conserve tiger populations that are at risk of disappearing forever.</p>
                 <img src="/images/wild/tiger1.webp" alt="" />
             </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="wild-page-4">
            <div className="heading">
                <h1>Popular National Parks</h1>
            </div>
            <div className="title">
                <p>India is a world-famous wildlife tourist destination. There is no dearth of wildlife places for travelers to visit in India. Here is a list of some of the most famous wildlife sanctuaries, national parks, and tiger reserves to explore in India:</p>
            </div>
            {
                WildData.map((data, id) => {
                    return (
                        <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/wild/${data.id}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/wild/${data.id}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                                <div className="right1">
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                            )}
                        </div>
                        )
                    })
                }
          </div>
                        
        </div>
  )
}

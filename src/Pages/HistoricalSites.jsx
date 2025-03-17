import NavBar from '../Components/NavBar'
import { HeritagePlaces } from '../Data/HeritagePlaces';
import { PiGreaterThanThin } from "react-icons/pi";
import { Link , useNavigate} from "react-router-dom";
import ScrollUp from '../Components/Scrollup';
import './historicalplacs.css'
export default function HistoricalSites() {
    const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
}
const handleHeritage = () => {
    navigate("/heritage");
}
const handleCuisine = () => {
    navigate("/architecture");
}

  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>

      <div className="page-1">
            <div className="content-right">
                <img src="/images/Charminar.webp" alt="" />
            </div>
            <div className="heading">              
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                    Historical Sites
                </p>
            </div>
                  
            <div className="content">
                <div className="content-left">
                    <span className='t'>
                        Historical Sites in India
                    </span>
                    <h1>
                        Exploring the Rich Historical Sites in India
                    </h1>
                    <p>Indian heritage dates back several centuries. It is vast and vibrant. Flora and fauna, music, architecture, classical dance, and the innate secular philosophy of its people are the highlights of India's treasure. Ever since the beginning, we have preserved culture and tradition beautifully for our upcoming generations. We can never forget our tradition and culture as they are embedded in us and are an inseparable part of our lives no matter how far we plan to reach and how much we have progressed in all these years.</p> <br /> <br />
                    <p>Every religion has its own set of music, dance forms, festivals, and several other forms of art that have their own charming essence. Our respect towards our culture is equally divided in the culture and tradition of other religions as well, which is the reason for the survival of the vivid Indian heritage for centuries.</p> <br /> <br />
                    <p>Indian history is as rich as its culture. If we look at the architectural marvels of the heritage sites such as Hampi, Khajuraho, Taj Mahal, Lal Kila, Qutub Minar, Fatehpur Sikri, Bhulbhulaiya, these still hold immense significance in terms of their marvelous art, engineering, construction, and labor behind each site. There are many ancient and historical monuments that stand alive. Some of them took literally one decade to hundred years to be built properly. Such beautiful heritage sites are very rarely seen these days if we talk about modern-day architecture.    </p>

                </div> 
             
            </div>
        </div>
        <ScrollUp />
              <div className="wild-page-2">
            <div className="left-container">
                <img src="/images/TajMahal.webp" alt="tiger" />
            </div>
            <div className="right-container">
                <div className="heading">
                    <h3>
                        Quick Info About Indian Heritage Monuments & Historical Sites
                    </h3>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Site</th>
                            <th>Location</th>
                            <th>Year of Built</th>
                        </tr>
                        <tr>
                            <td>Tajmahal</td>
                            <td>Aagra</td>
                            <td>1632 </td>
                        </tr>
                        <tr>
                            <td>India Gate</td>
                            <td>Delhi</td>
                            <td>1921-1931</td>
                        </tr>
                        <tr>
                            <td>Gateway of India</td>
                            <td>Maharashtra</td>
                            <td>1911-1924</td>
                        </tr>
                        <tr>
                            <td>Victoria Memorial</td>
                            <td>West Bengal</td>
                            <td>1906-1921</td>
                        </tr>
                        <tr>
                            <td>Gol Gumbaz</td>
                            <td>Karnataka</td>
                            <td>1656</td>
                        </tr>
                        <tr>
                            <td>Hawa Mahal</td>
                            <td>Rajasthan</td>
                            <td>1799</td>
                        </tr>
                        <tr>
                            <td>Charminar</td>
                            <td>Telangana</td>
                            <td>1591</td>
                        </tr>
                        <tr>
                            <td>Jama Masjid</td>
                            <td>Delhi</td>
                            <td>1650-1656</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="wild-page-4">
            <div className="heading">
                <h1>Popular Places</h1>
            </div>
            <div className="title">
                <p>India is extremely rich in its culture and heritage and it is apparent by the royal existence of around one thousands of forts.</p>
            </div>
            {
                HeritagePlaces.map((data, id) => {
                    return (
                        <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/historicalSites/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/historicalSites/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
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

import NavBar from "../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import { FortsData } from "../Data/FortsData";
import { Link , useNavigate } from "react-router-dom";
import './Forts.css'
import ScrollUp from '../Components/ScrollUp';
import { useEffect , useState} from "react";
import Footer from '../Components/Footer';

export default function Forts() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    const handleHeritage = () => {
        navigate('/heritage');
    }
    const handleCuisine = () => {
        navigate('/architecture');
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
    <div className="forts-page">
        <div className="nav">
            <NavBar />
        </div>
        <div className="page-1">
        <div className="content-right">
                    <img src="/images/forts/red.webp" alt="" />
                </div>
            <div className="heading">              
                    <p >
                        <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                        Forts
                    </p>
                </div>
            
            <div className="wild-content">
                <div className="left-container">
                    <spam className='t'>
                        Forts and Palaces of India
                    </spam>
                    <h3>
                        Exploring the Rich History and Architectural Marvels
                    </h3>
                    <p>The legacy of India's Forts and Palaces dates back to ancient times, with their origins dating as far back as the 8th century AD. These structures were not merely fortifications; they were symbols of power, centers of administration, and opulent residences for the royalty. From strategic hilltop forts to ornate palaces adorned with intricate carvings, each monument carries a story of valor, romance, and architectural brilliance.</p>
                    <p>India, with its vast and rich history, is home to numerous forts that symbolize the country’s architectural grandeur, battles, and cultural heritage. These forts were built by various dynasties over centuries, serving as military strongholds, royal residences, and centers of administration.</p>
                </div> 
               
            </div>
        </div>
        <ScrollUp />
        <div className="wild-page-2">
            <div className="left-container">
                <img src="/images/forts/jaislmer.webp" alt="tiger" />
            </div>
            <div className="right-container">
                <div className="heading">
                    <h3>
                        Quick Info About Indian Heritage Forts – Guardians of History
                    </h3>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Fort Name</th>
                            <th>State</th>
                            <th>Year of Built</th>
                        </tr>
                        <tr>
                            <td>Red Fort</td>
                            <td>Delhi</td>
                            <td>1948</td>
                        </tr>
                        <tr>
                            <td>Chittorgarh Fort</td>
                            <td>Rajasthan</td>
                            <td>7th century</td>
                        </tr>
                        <tr>
                            <td>Mehrangarh Fort</td>
                            <td>Rajasthan</td>
                            <td>1459</td>
                        </tr>
                        <tr>
                            <td>Gwalior Fort</td>
                            <td>Madhya Pradesh</td>
                            <td>8th century</td>
                        </tr>
                        <tr>
                            <td>Golconda Fort</td>
                            <td>Telangana</td>
                            <td>13th century</td>
                        </tr>
                        <tr>
                            <td>Jhansi Fort</td>
                            <td>Uttar Pradesh</td>
                            <td>17th century</td>
                        </tr>
                        <tr>
                            <td>Raigad Fort</td>
                            <td>Maharashtra</td>
                            <td>1974</td>
                        </tr>
                        <tr>
                            <td>Jaisalmer Fort</td>
                            <td>Rajasthan</td>
                            <td>1156</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        <div className="wild-page-4">
            <div className="heading">
                <h1>Popular Forts</h1>
            </div>
            <div className="title">
                <p>India is extremely rich in its culture and heritage and it is apparent by the royal existence of around one thousands of forts.</p>
            </div>
            {
                FortsData.map((data, id) => {
                    return (
                        <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/forts/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/forts/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                                <div className="right1">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                            )}
                        </div>
                        )
                    })
                }
          </div>
          <Footer></Footer>
    </div>
  )
}

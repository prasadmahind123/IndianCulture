import NavBar from '../Components/NavBar'
import { PiGreaterThanThin } from "react-icons/pi";
import { useState , useEffect } from 'react'
import './Caves.css'
import { CavesData } from '../Data/CavesData';
import { Link , useNavigate} from 'react-router-dom';
import ScrollUp from '../Components/ScrollUp';
export default function Caves() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    const handleHeritage = () => {
        navigate('/heritage');
    }
    const handleArch = () => {
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
    <div className='caves'>
      <div className="nav">
        <NavBar />
      </div>
      <div className="page-1"> 
             <div className="content-right">
                <img src="/images/Arcitecture/BorraCaves.webp" alt="" />
            </div>
            <div className="heading">               
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> <span onClick={handleHeritage}>Heritage</span><PiGreaterThanThin className='greater'/><span onClick={handleArch}>Architecture</span><PiGreaterThanThin className='greater'/> caves</p>
            </div>
            <div className="content">
                <div className="content-left">
                  <span className='t'> Timeless Echoes of Art, Faith, and History.</span>
                  <h1>Explore India's Timeless Caves </h1>
                  <ul>
                    <li>Indian caves are an integral part of the country's rich cultural and historical heritage, showcasing architectural brilliance, religious significance, and artistic excellence. These caves, dating back to different periods, serve as a testament to India's ancient civilizations, religious practices, and artistic traditions. Many of these caves were carved out of solid rock and were used as places of worship, meditation, and dwelling by monks and ascetics. Some of the most famous cave complexes in India include the Ajanta and Ellora Caves in Maharashtra, the Elephanta Caves near Mumbai, and the Badami Caves in Karnataka.</li>
                    <li>The Ajanta Caves, dating back to the 2nd century BCE, are renowned for their exquisite Buddhist paintings and sculptures, depicting the life of Buddha and various Jataka tales. The Ellora Caves, on the other hand, represent a confluence of three major religions—Hinduism, Buddhism, and Jainism—featuring grand rock-cut temples like the Kailasa Temple, which is an architectural marvel. The Elephanta Caves, dedicated to Lord Shiva, contain impressive rock-cut sculptures, including the famous Trimurti, which symbolizes the three aspects of Shiva—creation, preservation, and destruction.</li>
                   </ul>
                </div>

               
            </div>

        </div>
        <ScrollUp />
        <div className="wild-page-2">
            <div className="left-container">
                <img src="/images/EloraCaves.webp" alt="tiger" />
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
                            <td>Ajanta Caves</td>
                            <td>Maharashtra</td>
                            <td>2nd Century BCE - 6th Century CE</td>
                        </tr>
                        <tr>
                            <td>Ellora Caves</td>
                            <td>Maharashtra</td>
                            <td>5th - 8th Century CE</td>
                        </tr>
                        <tr>
                            <td>Badami Cave Temples</td>
                            <td>Karnataka</td>
                            <td>6th - 7th Century CE</td>
                        </tr>
                        <tr>
                            <td>Udayagiri and Khandagiri Caves</td>
                            <td>Odisha</td>
                            <td>2nd Century BCE</td>
                        </tr>
                        <tr>
                            <td>Bagh Caves</td>
                            <td>Madhya Pradesh</td>
                            <td>5th - 7th Century CE</td>
                        </tr>
                        <tr>
                            <td>Bhimbetka Caves</td>
                            <td>Madhya Pradesh</td>
                            <td>Paleolithic Age (Approx. 30,000 BCE)</td>
                        </tr>
                        <tr>
                            <td>Borra Caves</td>
                            <td>Andhra Pradesh</td>
                            <td>Over a Million Years Old</td>
                        </tr>
                        <tr>
                            <td>Varaha Cave Temple</td>
                            <td>Tamil Nadu</td>
                            <td>7th Century CE</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
        <div className="wild-page-4">
            <div className="heading">
                <h1>Popular Caves</h1>
            </div>
            <div className="title">
                <p>Indian caves are an integral part of the country's rich cultural and historical heritage, showcasing architectural brilliance, religious significance, and artistic excellence.</p>
            </div>
            {
                CavesData.map((data, id) => {
                    return (
                        <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/caves/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/caves/${data.index}`}><h3>{data.title} , {data.location}</h3></Link>
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
        {/* <div className="cave-page2">
            <CaveData />
        </div> */}

    </div>
  )
}

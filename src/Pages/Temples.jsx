import NavBar from '../Components/NavBar'
import { useState , useEffect } from 'react'
import { PiGreaterThanThin } from "react-icons/pi";
import { unescoTemples } from '../Data/unescoTemples';
import { otherTemples } from '../Data/otherTemples';
import { Jyotirlings } from '../Data/Jyotirlings';
import { Link , useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/ScrollUp';

import './Temples.css'
export default function Temples() {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const handleInfoClick = (info) => {
      setSelectedInfo(info);
    }
    
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
    const handleHome = () => {
        navigate('/')
  }
  const handleHeritage = () => {
        navigate('/heritage')
  }
  const handleCuisine = () => {
        navigate('/architecture')
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
        <div className="page-1">
            <div className="content-right">
                <img src="images/Temples/sun1.jpg" alt="" />
            </div>
            <div className="heading">              
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                    Temples
                     
                </p>
            </div>
            <div className="content" >
                <div className="conten-left">
                    <span className='t' style={{ width : `90%`, textAlign:`justify` , margin : `0 auto`}}>
                    Where Spirituality Meets Heritage
                    </span>
                    <h1 style={{color:`black` , width : `90%`, textAlign:`justify` , margin : `0 auto`}}>
                    Explore Indian Temples: A Journey Through Spirituality, History, and Divine Architecture!
                    </h1>
                    <p style={{color:`black` , fontSize:`1.5rem` , width : `90%`, textAlign:`justify` , margin : `0 auto`}}>
                    Indian temples are architectural marvels and spiritual centers that hold immense religious, cultural, and historical significance. These temples are places of worship dedicated to various Hindu deities such as Shiva, Vishnu, Durga, and many others. They serve as a bridge between human devotion and divine presence, offering a space for prayer, meditation, and rituals. </p> <br />
                    <p style={{color:`black` , fontSize:`1.5rem` , width : `90%`, textAlign:`justify` , margin : `0 auto`}}> Indian temples are not just religious structures but cultural treasures that reflect India’s rich heritage, traditions, and spirituality. Whether ancient or modern, these temples continue to be centers of devotion, drawing millions of worshippers and tourists from around the world.</p>
                </div> 
           
            </div>    
        </div>
        <ScrollUp />
        <div className="wild-page-2">
            <div className="left-container">
                <img src="/images/Temples/Khajuraho.webp" alt="tiger" />
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
                            <td>Khajuraho Group of Temples</td>
                            <td>Madhya Pradesh</td>
                            <td>950-1050 AD</td>
                        </tr>
                        <tr>
                            <td>Sun Temple, Konark</td>
                            <td>Odisha</td>
                            <td>13th Century</td>
                        </tr>
                        <tr>
                            <td>Mahabalipuram Monuments</td>
                            <td>Tamil Nadu</td>
                            <td>7th-8th Century</td>
                        </tr>
                        <tr>
                            <td>Brihadeeswarar Temple</td>
                            <td>Thanjavur, Tamil Nadu</td>
                            <td>1010 AD</td>
                        </tr>
                        <tr>
                            <td>Gangaikonda Cholapuram Temple</td>
                            <td>Tamil Nadu</td>
                            <td>11th Century</td>
                        </tr>
                        <tr>
                            <td>Airavatesvara Temple</td>
                            <td>Tamil Nadu</td>
                            <td>12th Century</td>
                        </tr>
                        <tr>
                            <td>Pattadakal Temples</td>
                            <td>Karnataka</td>
                            <td>7th-8th Century</td>
                        </tr>
                        <tr>
                            <td>Virupaksha Temple</td>
                            <td>Hampi, Karnataka</td>
                            <td>7th Century</td>
                        </tr>
                        <tr>
                            <td>Rani ki Vav</td>
                            <td>Patan, Gujarat</td>
                            <td>11th Century</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="temples-page-3">
            <div className="wild-page-3-1">
                <h1>
                    TEMPLES IN INDIA
                </h1>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('UNESCO')}>UNESCO Temples</h3>
                    <h3 onClick={() => handleInfoClick('Jyotirlingas')}>Jyotirlingas Temples</h3>
                    <h3 onClick={() => handleInfoClick('Other')}>Other Temples</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'UNESCO' && (
                <div className="info-content"> 
                    <h3>UNESCO Temples
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>India is home to several UNESCO World Heritage temples that showcase the country&apos;s rich cultural and architectural heritage. Here are some of the most significant ones:</p>
                    {
                      unescoTemples.map((temp , id) =>{
                        return(
                          <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={temp.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                    <p>{temp.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                    <p>{temp.description}</p>
                                </div>
                                <div className="right1">
                                    <img src={temp.img} alt="" />
                                </div>
                            </div>
                            )}
                        </div>
                        )
                      })
                    }
                </div>
              )}
              {selectedInfo === 'Jyotirlingas' && (
                 <div className="info-content"> 
                 <h3>Jyotirlingas Temples
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                 </h3>
                 <p>The Jyotirlingas are 12 sacred shrines dedicated to Lord Shiva, each representing a different manifestation of his divine energy. These temples hold immense religious significance in Hinduism.</p>
                 
                  {
                    Jyotirlings.map((temp , id) =>{
                      return(
                        <div key={id}>
                          {id % 2 === 0 ? (
                          <div className="main-container">
                              <div className="left">
                                  <img src={temp.img} alt="" />
                              </div>
                              <div className="right">
                                  <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                  <p>{temp.description}</p>
                              </div>
                          </div>
                          ) : (
                          <div className="main-container">
                              <div className="left1">
                                  <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                  <p>{temp.description}</p>
                              </div>
                              <div className="right1">
                                  <img src={temp.img} alt="" />
                              </div>
                          </div>
                          )}
                      </div>
                      )
                    })
                  }
                 
             </div>
              )}
              {selectedInfo === 'Other' && (
                 <div className="info-content"> 
                 <h3>Other Temples
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                 </h3>
                 <p>India is home to numerous sacred temples apart from the Jyotirlingas and UNESCO heritage temples. Here are some other important temples, including Pandharpur and others, that hold religious and cultural significance:</p>
                 {
                      otherTemples.map((temp , id) =>{
                        return(
                          <div key={id}>
                            {id % 2 === 0 ? (
                            <div className="main-container">
                                <div className="left">
                                    <img src={temp.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                    <p>{temp.description}</p>
                                </div>
                            </div>
                            ) : (
                            <div className="main-container">
                                <div className="left1">
                                    <Link to={`/temples/${temp.id}`}><h3>{temp.title} , {temp.location}</h3></Link>
                                    <p>{temp.description}</p>
                                </div>
                                <div className="right1">
                                    <img src={temp.img} alt="" />
                                </div>
                            </div>
                            )}
                        </div>
                        )
                      })
                    }
             </div>
              )}
            </div>
          )}
            </div>
        </div>
    </div>
  )
}

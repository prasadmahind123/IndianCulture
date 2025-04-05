import { useLocation , useNavigate } from 'react-router-dom'
import { WildData } from '../../Data/WildData';
import { PiGreaterThanThin } from "react-icons/pi";
import  NavBar from "../../Components/NavBar"
import { useEffect } from 'react';
import './WildPage.css'

export default function WildPage() {
        const navigate = useNavigate();
        let  location = useLocation();
        let currentId = (location.pathname.split('/')[2])
        let currentData = WildData.filter((item) => item.id == currentId)[0]
        // const handleBack = () => {
        //     navigate(-1);
        // }
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
        const handleHome = () => {
          navigate('/');
        }
        const handleHeritage = () => {
          navigate('/heritage');
        }
        const handleCuisine = () => {
          navigate('/architecture');
        }
        const handleWild= () => {
          navigate('/wild');
        }
  return (
    <div className='wild-1'>
      <div className="nav">
        <NavBar />
      </div>
      {/* <button className="button-hist" onClick={handleBack}>
          <div className="button-box" >
            <span className="button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                ></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path
                  d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                ></path>
              </svg>
            </span>
          </div>
        </button> */}
        <div className="info-container">
          <div className="top-img"><img src={currentData.img} alt="" /></div>
            <div className="heading">              
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                    <span onClick={handleWild}>Wild</span> <PiGreaterThanThin className='greater'/>
                    {currentData.title}
                </p>
            </div>
            <div className="title">
                <h1>{currentData.title}</h1>
            </div>
            <div className="wild-text1">
              <div className="text-left">
              {
                        currentData.info.map((info , i) => {
                            return (
                                <div className='info' key={i}>
                                    <p>{info}</p>
                                </div>
                            )
                        })
                    }
              </div>
              <div className="text-right">
              <address>
                  <iframe src={currentData.address} width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </address>
              </div>
                    
            </div>
            <div className="visit">
              <h3>Best Time to Visite : </h3>
              <p><span>Winter : </span>{currentData.bestTime.Winter}</p>
              <p><span>Monsoon : </span>{currentData.bestTime.Monsoon}</p>
              <p><span>Summer : </span>{currentData.bestTime.Summer}</p>
            </div>
        </div>
    </div>
  )
}

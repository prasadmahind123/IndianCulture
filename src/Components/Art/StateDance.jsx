import { TDance } from "../../Data/TDance"
import { useLocation , useNavigate} from 'react-router-dom'
import  NavBar from "../../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import { useEffect } from "react";
import './StateDance.css'
export default function StateDance() {
      let navigate = useNavigate();
      let  location = useLocation();
      let currentId = (location.pathname.split('/')[2])
      let currentData = TDance.filter((item) => item.dance == currentId)[0]
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      const handleHome = () => {
        navigate('/')
    }
    const handleHeritage = () => {
        navigate('/heritage')
    }
  
    const handleWild= () => {
        navigate('/art')
    }
  return (
    <div>
        <div className="nav">
          <NavBar />
        </div>
        <div className="info-container">
              <div className="top-img">
                <figure>
                  <img src={currentData.img} alt="" />
                  <figcaption><a href={currentData.caption}> {currentData.auth}</a> , <a href={currentData.caption2}> {currentData.licence}</a></figcaption>
                </figure>
              </div>
                <div className="heading">              
                    <p >
                        <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleWild}>Arts</span> <PiGreaterThanThin className='greater'/>
                        {currentData.dance}
                    </p>
                </div>
                
                <div className="title">
                    <h1>{currentData.dance}</h1>
                </div>
                <div className="dance-text">
                {
                        currentData.info.map((data, index) => (
                            <div className="dance-info" key={index}>
                              <p>{data}</p>
                            </div>
                        ))
                       }
                </div>
                <div className="dance-text">
                  <h2>Key Features</h2>
                    {
                      currentData.key_features.map((key, index) => {
                        return (
                          <p key={index}>{index + 1}. {key}</p>
                        )
                      })
                    }
                </div>

               
            </div>
    </div>
  )
}

import './SpeCave.css'
import { useLocation , useNavigate} from 'react-router-dom'
import { CavesData } from '../../Data/CavesData';
import  NavBar from "../../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import { useEffect } from 'react';
export default function SpeCave() {
    let navigate = useNavigate();
    let  location = useLocation();
    let currentId = (location.pathname.split('/')[2])
    let currentData = CavesData.filter((item) => item.index == currentId)[0]
    // const handleBack = () => {
    //     navigate('/caves')
    // }
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  const handleHome = () => {
      navigate('/')
  }
  const handleHeritage = () => {
      navigate('/heritage')
  }
  const handleCuisine = () => {
      navigate('/architecture')
  }
  const handleWild= () => {
      navigate('/caves')
  }
  return (
        <div className='wild-1'>
          <div className="nav">
            <NavBar />
          </div>
         
            <div className="info-container">
              <div className="top-img"><img src={currentData.img} alt="" /></div>
                <div className="heading">              
                    <p >
                        <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                        <span onClick={handleWild}>Caves</span> <PiGreaterThanThin className='greater'/>
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
                <div className="fort-history">
                  <h2>History :</h2>
                   
                       {
                        currentData.history.map((hist, index) => (
                            <div key={index}>
                              <p>{hist}</p>
                            </div>
                        ))
                       }
                </div>
                <div className="fact">
                  <div className="left">
                    <h2>Special Events :</h2>
                      <p> {currentData.specialEvents} </p>
                  </div>
                  <div className="right">
                    <h2>Significance :</h2>
                    <p> {currentData.numberofCaves} </p>
                  </div>
                </div>
            </div>
        </div>
  )
}

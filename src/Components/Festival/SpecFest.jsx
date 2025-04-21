import { useLocation , useNavigate} from 'react-router-dom'
import { FestivalData } from '../../Data/FestivalData';
import  NavBar from "../../Components/NavBar"
import { useEffect } from 'react';
import { PiGreaterThanThin } from "react-icons/pi";
import './specFest.css'
export default function SpecFest() {
    let navigate = useNavigate();
    let  location = useLocation();
    let currentId = (location.pathname.split('/')[2])
    let currentData = FestivalData.filter((item) => item.id == currentId)[0]
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
        navigate('/festivals')
    }
  return (
    <div className='wild-1'>
      <div className="nav">
        <NavBar />
      </div>
      
      <div className="info-container">
                <div className="top-img"><img src={currentData.img2} alt="" /></div>
                <div className="heading">              
                    <p >
                        <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleCuisine}>Architecture</span> <PiGreaterThanThin className='greater'/>
                        <span onClick={handleWild}>Festivals</span> <PiGreaterThanThin className='greater'/>
                        {currentData.name}
                        
                    </p>
                </div>
                <div className="fest-title">
                    <h1>{currentData.name}</h1>
                </div>
                <div className="wild-text2">

                    <p>
                      {currentData.info}
                    </p>
                    <div className="image-container">
                      <img src={currentData.img3} alt="" />
                      <img src={currentData.img1} alt="" />
                    </div>
                    
                </div>
                <div className="wild-text2">
                    <p>
                      {
                        currentData.info1.map((data , index) =>{
                           return(
                             <div className="fest-content" key={index}>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                             </div>
                           )
                        })
                      }
                    </p>
                </div>

      </div>
    </div>
  )
}

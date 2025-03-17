import { IndianCuisine } from "../../Data/IndianCuisine"
import { useLocation , useNavigate} from 'react-router-dom'
import  NavBar from "../../Components/NavBar"
import { PiGreaterThanThin } from "react-icons/pi";
import './stateFood.css';

export default function StateFood() {
  let navigate = useNavigate();
  let  location = useLocation();
  let currentId = (location.pathname.split('/')[2])
  let currentData = IndianCuisine.filter((item) => item.index == currentId)[0]

  const handleHome = () => {
    navigate('/')
  }
  const handleHeritage = () => {
      navigate('/heritage')
  }

  const handleWild= () => {
      navigate('/cuisine')
  }
  return (
    <div>
        <div className="nav">
          <NavBar />
        </div>
        <div className="info-container">
              <div className="top-img">
                  <img src={currentData.img} alt="" />
              </div>
                <div className="heading">              
                    <p >
                        <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                        <span onClick={handleWild}>Cuisine</span> <PiGreaterThanThin className='greater'/>
                        {currentData.title}
                    </p>
                </div>
                
                <div className="title">
                    <h1>{currentData.title}</h1>
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
                 
                </div>

               
            </div>
    </div>
  );
}
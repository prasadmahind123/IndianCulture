// TemplesPage.js
import  { useState , useEffect} from 'react';
import { otherTemples } from '../../Data/otherTemples';
// import { unescoTemples } from '../../Data/TempleList';
// import { Jyotirlings } from '../Jyotirlings';
import  NavBar from "../../Components/NavBar"
import './TemplesPage.css'
import { PiGreaterThanThin } from "react-icons/pi";
import { useLocation , useNavigate } from 'react-router-dom'

const TemplesPage = () => {
  const navigate = useNavigate();
  let  location = useLocation();
  let currentId = (location.pathname.split('/')[2])
  let currentData = otherTemples.filter((item) => item.id == currentId)[0] 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
 
  // const handleBack = () => {
  //     navigate('/temples')
  // }
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
    navigate('/temples')
  }
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    const loadData = async () => {
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
    <div className='wild-1'>
      <div className="nav">
        <NavBar></NavBar>
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
                    <span onClick={handleWild}>Temples</span> <PiGreaterThanThin className='greater'/>
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
                <h2>Interesting Facts :</h2>
                   {
                    currentData.interestingFacts.map((feat, index) => (
                        <div key={index}>
                          <p>{feat}</p>
                        </div>
                    ))
                   }
              </div>
              <div className="right">
                <h2>Significance :</h2>
                {
                    currentData.significance.map((feat, index) => (
                        <div key={index}>
                          <p>{feat}</p>
                        </div>
                    ))
                   }
              </div>
            </div>
        </div>
    </div>
  );
};

export default TemplesPage;
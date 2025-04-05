import './SetDate.css';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import {RealTimeDay} from '../Data/RealTimeDay.jsx';

export default function SetDate() {
     const [currentTime, setCurrentTime] = useState(new Date());
      let day = currentTime.getDate();
      let month = currentTime.getMonth() + 1;
      let year = currentTime.getFullYear();
      let str = year.toString() + '-' + month.toString() + '-' + day.toString();
      
      const hideInfo = () => {
        document.querySelector('.flip-card').style.display = 'none';
      }
      
  return (
    <div className='setData'>
      {
                RealTimeDay.map((data, index) => (
                  data.date === str ? 
              
                    <div className="flip-card" key={index}>
                        
                        <div className="flip-card-inner">
                            <span className='cross'><RxCross2 onClick={hideInfo} /></span>
                            <div className="flip-card-front">
                              <p> About Today </p>
                            <h2 className='title'>Today is {data.festival}! </h2>
                            <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                  : null
                ))
              }    
    </div>
  )
}

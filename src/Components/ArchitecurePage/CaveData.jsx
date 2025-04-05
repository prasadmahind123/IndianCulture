import { CavesData } from "../../Data/CavesData"
import { Link  } from 'react-router-dom'
export default function CaveData() {

  return (
    <div className="cave-container">
        {CavesData.map((item, i) => (

      <div className="cave-card" key={i}>
                    <div className="image">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="content">
                        
                        <span className="title">
                           {item.title}
                        </span>
                        

                        <p className="desc">
                            {item.location}
                        </p>
                        
                        <p className="desc">
                            {item.status}
                        </p>
                        <Link to={`/cavesData/${item.index}`}>
                            <button className="action">
                                    Learn more
                                <span aria-hidden="true">
                                    →
                                </span>
                            </button>
                        </Link>
                        
                    </div>
                </div> 
        ))}
    </div>
  )
}

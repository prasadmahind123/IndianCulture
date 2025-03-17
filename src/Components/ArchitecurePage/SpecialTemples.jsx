import PropTypes from 'prop-types';
//import { useState , useEffect } from 'react';
export default function SpecialTemples({ temple , onClose}) {
    SpecialTemples.propTypes = {
        temple: PropTypes.shape({
            //title: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            builtBy: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            architecturalStyle: PropTypes.string.isRequired,
            //staus: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
           // interestingFacts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            history: PropTypes.string.isRequired,
            significance: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            architecturalFeatures: PropTypes.object.isRequired,
            bestTimeToVisit: PropTypes.shape({
                months: PropTypes.string.isRequired,
                specialEvent: PropTypes.string.isRequired,
                }).isRequired,
           // img: PropTypes.string.isRequired,

        }).isRequired,
        onClose: PropTypes.func.isRequired,
    }
    // const [isLoading, setIsLoading] = useState(true);
    
  //   useEffect(() => {
  //     const loadData = async () => {
  //       // Simulate data loading
  //       await new Promise((resolve) => setTimeout(resolve,2000));
  //       setIsLoading(false);
  //     };
  //     loadData();
  //   }, []);
  // if (isLoading) {
  //     return (
  //       <div className="loader-container">
  //         <div className="three-body">
  //         <div className="three-body__dot"></div>
  //         <div className="three-body__dot"></div>
  //         <div className="three-body__dot"></div>
  //         </div>
  //       </div>
     
  //     );
  //     }
  return (
    <div className="stateFood-container">
      <div className="info-card">
        <div className="info-card-left">
            <div className="left-container-top">
                <p>
                    <span>Location:</span> {temple.location}
                </p>
                <p>
                    <span>Built By:</span> {temple.builtBy}  ({temple.year})
                </p>
            <p>
              <span>Architectural Style:</span> {temple.architecturalStyle}
            </p>
            {/* <p>
              <span>Status:</span> {item.status}
            </p> */}
            <p>
              <span>Description:</span> {temple.description}
            </p>
                      
     
            <p>
              <span>History:</span> {temple.history}
            </p>
       
            </div>
            
        </div>
        <div className="info-card-right">
          {/* <div className="info-card-title">
            <h2>{temple.title}</h2>
          </div> */}
          <div className="info-card-body">
       
 
            {/* <p>
              <span>Interesting Facts:</span>
              <ul>
                {temple.interestingFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </p> */}
            <div className="left-container-bottom">
                <p>
                    <span>Architectural Features:</span>
                    <ul>
                        {Object.keys(temple.architecturalFeatures).map((feature, index) => (
                        <li key={index}>
                            <strong>{feature}</strong>: {temple.architecturalFeatures[feature]}
                        </li>
                        ))}
                    </ul>
                </p>
                <p>
              <span>Significance:</span>
              <ul>
                {temple.significance.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </p>
            <p>
              <span>Best Time to Visit:</span>
              <p>Months: {temple.bestTimeToVisit.months}</p>
              <p>Special Event: {temple.bestTimeToVisit.specialEvent}</p>
            </p>
          </div>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

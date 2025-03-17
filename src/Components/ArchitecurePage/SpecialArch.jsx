import PropTypes from 'prop-types';
const SpecialArch = ({ item, onClose }) => {
    SpecialArch.propTypes = {
        item: PropTypes.shape({
          //title: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          builtBy: PropTypes.string.isRequired,
          year: PropTypes.string.isRequired,
          architecturalStyle: PropTypes.string.isRequired,
          //status: PropTypes.string.isRequired,
          //description: PropTypes.string.isRequired,
          history: PropTypes.string.isRequired,
          architecturalFeatures: PropTypes.object.isRequired,
          significance: PropTypes.arrayOf(PropTypes.string).isRequired,
          //interestingFacts: PropTypes.arrayOf(PropTypes.string).isRequired,
          bestTimeToVisit: PropTypes.shape({
            months: PropTypes.string.isRequired,
            specialEvent: PropTypes.string.isRequired,
          }).isRequired,
          img: PropTypes.string.isRequired,
        }).isRequired,
        onClose: PropTypes.func.isRequired,
      };

  return (
    <div className="stateFood-container">
      <div className="info-card">
        <div className="info-card-left">
            <div className="left-container-top">
                <p>
                    <span>Location:</span> {item.location}
                </p>
                <p>
                    <span>Built By:</span> {item.builtBy}  ({item.year})
                </p>
            <p>
              <span>Architectural Style:</span> {item.architecturalStyle}
            </p>
            {/* <p>
              <span>Status:</span> {item.status}
            </p> */}
            {/* <p>
              <span>Description:</span> {item.description}
            </p> */}
                      
     
            <p>
              <span>History:</span> {item.history}
            </p>
            <p>
              <span>Significance:</span>
              <ul>
                {item.significance.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </p>
            </div>
            
        </div>
        <div className="info-card-right">
          {/* <div className="info-card-title">
            <h2>{item.title}</h2>
          </div> */}
          <div className="info-card-body">
       
 
            {/* <p>
              <span>Interesting Facts:</span>
              <ul>
                {item.interestingFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </p> */}
            <div className="left-container-bottom">
                <p>
                    <span>Architectural Features:</span>
                    <ul>
                        {Object.keys(item.architecturalFeatures).map((feature, index) => (
                        <li key={index}>
                            <strong>{feature}</strong>: {item.architecturalFeatures[feature]}
                        </li>
                        ))}
                    </ul>
                </p>
            
            <p>
              <span>Best Time to Visit:</span>
              <p>Months: {item.bestTimeToVisit.months}</p>
              <p>Special Event: {item.bestTimeToVisit.specialEvent}</p>
            </p>
          </div>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialArch;
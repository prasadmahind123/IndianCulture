import { useNavigate } from 'react-router-dom';
export default function Footer() {
     const navigate = useNavigate();
    const handleMusic = () => {
    navigate('/music');
  }
  const handleForts = () => {
    navigate('/forts');
  }
  const handleLang = () => {
    navigate('/language');
  }
  const handlleHome = () => {
    navigate('/');
  }
  const handleHeritage = () => {
    navigate('/heritage');
  }
  const handleFest = () => {
    navigate('/festivals');
  }
  const handleContact = () => {
    navigate('/contact');
  }
  const handleArt = () => {
    navigate('/art');
  }
const handleTemples = () => {
     navigate('/temples');
}

  return (
    <div>
         <section className="newsletter-section">
            <div className="container">
                <div className="two-column-grid">
                    <div className="content-column">
                    <h2 className="section-title light">Any Suggestions to Us</h2>
                    <p className="section-description light">
                        Stay updated with the latest events, articles, and news about Indian culture and heritage
                    </p>
                    </div>
                    <div className="animation-column">
                    <div className="community-animation">
                        <div className="spinning-circle" />
                        <div className="community-card">
                        <div className="community-content">
                            <h3 className="community-title">Send Your opinion</h3>
                            <p className="community-description">Connect with fellow enthusiasts of Indian culture</p>
                            <button className="btn outline-btn light" onClick={() => navigate('/contact')}>Contact</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer">
        <div className="container footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <li className="logo" onClick={handleContact}>
                <div className="logo-icon">
                  <div className="logo-text">भा</div>
                </div>
                <span>भारतीय संस्कृति</span>
              </li>
              <p className="footer-description">Celebrating and preserving the rich cultural heritage of India</p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li className="footer-link" onClick={handlleHome}> 
                    Home
                </li>
                <li className="footer-link" onClick={handleHeritage}>
                   Heritage
                </li>
                <li className="footer-link" onClick={handleFest}>
                    Festivals
                </li>
                <li className="footer-link" onClick={handleTemples}>
                    Temples
                </li>
                <li className="footer-link" onClick={handleContact}>
                    Contact
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li className="footer-link" onClick={handleArt}>
                    Classical Arts
                </li>
                <li className="footer-link" onClick={handleForts}>
                    Forts
                </li>
                <li className="footer-link" onClick={handleHeritage}>
                    Heritage Sites
                </li>
                <li className="footer-link" onClick={handleMusic}>
                    Indian Music
                </li>
                <li className="footer-link" onClick={handleLang}>
                     Indian Languages
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Connect With Us</h3>
              <div className="contact-info">
                <p className="contact-text">Email: info@indianculture.org</p>
                <p className="contact-text">Phone: +91 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} Indian Culture & Heritage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

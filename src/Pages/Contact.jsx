import NavBar from '../Components/NavBar';
// import { PiGreaterThanThin } from 'react-icons/pi';
// import {  useNavigate} from 'react-router-dom';
import  { useRef , useEffect , useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import { app } from '../FireBase';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState('');
    const [suggestionType, setSuggestionType] = useState('');
    const [place, setPlace] = useState('');
    const form = useRef();
    const [user, setUser] = useState(null);
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
      }, []);
      const [isLoading, setIsLoading] = useState(true);
        
      useEffect(() => {
        const loadData = async () => {
          // Simulate data loading
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
    const sendEmail = (e) => {
        e.preventDefault();
        if (user === null) {
            alert('Please log in to send email');
            return;
          }
        emailjs
          .sendForm('service_1h0fuoq', 'template_slt5ipl', form.current, {
            publicKey: 'Pssk0rAPQC1enAs80',
          })
          .then(
            () => {
              toast.success('Email sent successfully');
              setName('');
              setEmail('');
              setMessage('');
            },
            (error) => {
              toast.error('Failed to send email. Please try again later.');
              console.error('Email sending error:', error);
            },
          );
      };
  return (
    <div>
       <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Connect with us to learn more about India&apos;s rich cultural heritage</p>
      </header>
        <div className="nav">
            <NavBar />
        </div>

        <main className="contact-main">
        {/* Contact Form */}
        <div className="formContainer">
          <div className="formCard">
            <h2>Send us a Message</h2>

            <div className="infoBox">
              <h3>Share Your Knowledge!</h3>
              <p>Help us expand our collection by suggesting:</p>
              <ul>
                <li>
                  <strong>Historical Places & Forts:</strong> Include the full address and historical significance
                </li>
                <li>
                  <strong>Temples & Cultural Sites:</strong> Share location details and religious importance
                </li>
                <li>
                  <strong>Indian Cuisine:</strong> Tell us about regional dishes and their cultural context
                </li>
                <li>
                  <strong>Cultural Practices:</strong> Share traditions from your region of India
                </li>
              </ul>
              <p>Your contributions help preserve and celebrate India&apos;s rich heritage!</p>
            </div>

            <form className="contact-form-fields" ref={form} onSubmit={sendEmail}>
              <div className="formGrid">
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" name='user_name' />
                </div>
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" name='user_email' />
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="suggestionType">Type of Suggestion</label>
                <select id="suggestionType" name='suggestionType' value={suggestionType} onChange={(e) => setSuggestionType(e.target.value)} required>
                  <option value="">-- Select an option --</option>
                  <option value="historical">Historical Place/Fort</option>
                  <option value="temple">Temple/Religious Site</option>
                  <option value="cuisine">Indian Cuisine</option>
                  <option value="cultural">Cultural Practice/Tradition</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="placeName">Name of Place/Dish/Tradition</label>
                <input name='place' id="placeName" value={place} onChange={(e) => setPlace(e.target.value)}  type="text" placeholder="E.g., Amer Fort, Masala Dosa, Kathakali Dance" />
              </div>

              <div className="formGroup">
                <label htmlFor="location">Location/Address (if applicable)</label>
                <input name='location' id="location" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Full address for historical sites, region for cuisine" />
              </div>

              <div className="formGroup">
                <label htmlFor="message">Description & Historical/Cultural Significance</label>
                <textarea
                  id="message"
                  placeholder="Please share details about the historical significance, cultural importance, or any interesting facts about your suggestion."
                  rows={5}
                  value={message}
                  name='message'
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submitButton">
                Send Suggestion
              </button>
            </form>
          </div>

          <div className="decorativeElement"></div>
        </div>
      </main>
      <ToastContainer className='toast'></ToastContainer>
    </div>
  )
}

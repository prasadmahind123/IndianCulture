import NavBar from '../Components/NavBar';
// import { PiGreaterThanThin } from 'react-icons/pi';
// import {  useNavigate} from 'react-router-dom';
import  { useRef , useEffect , useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import { app } from '../FireBase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    // const navigate = useNavigate();
    // const handleHome = () => {
    //     navigate('/');
    // }
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
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <div className="nav">
            <NavBar />
        </div>

        <div className="contact-card">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="contact-group">
                    <input placeholder="‎" type="text" required="" name='user_name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="contact-group">
                    <input placeholder="‎" type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}  required="" name ='user_email' />
                    <label htmlFor="email">Email</label>
                </div>
            <div className="contact-group">
                <textarea placeholder="‎" id="comment" name="message" rows="7" value={message} onChange={(e) => setMessage(e.target.value)} required=""></textarea>
                <label htmlFor="comment">Message</label>
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    </div>
  )
}

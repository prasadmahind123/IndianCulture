import NavBar from '../Components/NavBar';
import { PiGreaterThanThin } from 'react-icons/pi';
import {  useNavigate} from 'react-router-dom';
import  { useRef , useEffect , useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import { app } from '../FireBase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
export default function Contact() {
    const form = useRef();
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
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

        <div className="page-1"> 
            <div className="heading">               
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/>  Contact</p>
            </div>
        </div>

        <div className="contact-card">
            <form className="form" ref={form} onSubmit={sendEmail}>
                <div className="group">
                    <input placeholder="‎" type="text" required="" name='user_name' />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="group">
                    <input placeholder="‎" type="email" id="email"  required="" name ='user_email' />
                    <label htmlFor="email">Email</label>
                </div>
            <div className="group">
                <textarea placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
                <label htmlFor="comment">Comment</label>
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    </div>
  )
}

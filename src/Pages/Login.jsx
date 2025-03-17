import  { useEffect , useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,

} from 'firebase/auth';
import { app } from '../FireBase';
import { getDatabase, ref, set } from 'firebase/database';

const auth = getAuth(app);


const Login = () => {
  const navigate = useNavigate();
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const [Semail, SsetEmail] = useState('');
  const [Spassword, SsetPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [forgetPassword, setForgetPassword] = useState(true);
   const [forgetEmail, setForgetEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
 
    };
    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    if (Spassword !== Cpassword) {
      alert('Password does not match');
      setIsLoading(false);
      return;
    }
    try {
      await set(ref(getDatabase(app), 'users/' + Semail.split('@')[0]), {
        email: Semail,
        phone: phone,
        password: Spassword,
      });
      await createUserWithEmailAndPassword(auth, Semail, Spassword);
      navigate('/')
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  
    SsetEmail('');
    SsetPassword('');
    setCpassword('');
  };

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleForgetPassword = () => {
    setForgetPassword(!forgetPassword);
  };
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
    <div className="SignLogin">
        {/* {isLoading && (
           <div className="loader-container">
           <div className="three-body">
           <div className="three-body__dot"></div>
           <div className="three-body__dot"></div>
           <div className="three-body__dot"></div>
           </div>
         </div>
      )} */}
      <div className="container">
        <div className={`side-part ${showSignUp ? 'side-part-sign-up' : ''}`}>
          {showSignUp ? (
            <div>
              <h2>Hello! Friend</h2>
              <p>New here, enter your details and start exploring</p>
              <div className="acc-text">
                <button className="SignUp-Btn" onClick={handleToggleSignUp}>
                  Sign In
                </button>
              </div>
            </div>
          ) : forgetPassword ? (
            <div>
              <h2>Welcome back</h2>
              <p>Already have an account</p>
              <p>Please sign up to stay connected</p>
              <div className="acc-text">
                <button className="SignUp-Btn" onClick={handleToggleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Forget password</h2>
              <p>Enter your email to reset your password</p>
            </div>
          )}
        </div>
        <div className={`form-data ${showSignUp ? 'form-data-sign-up' : ''}`}>
          {showSignUp ? (
            <form className="form1" onSubmit={handleSubmit}>
              <div className="left">
                <img src="/images/logo.webp" alt="India" />
              </div>
              <p className="title">Register</p>


              <div className="email">
                <input
                  required
                  value={Semail}
                  onChange={(e) => SsetEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="input"
                />
              </div>
              <div className="phone">
                <input 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  type="text"
                  className="input"
                />
              </div>
              <div className="password">
                <input
                  required
                  value={Spassword}
                  onChange={(e) => SsetPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  className="input"
                />
              </div>
              <div className="Cpassword">
                <input
                  required
                  value={Cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  placeholder="Confirm password"
                  type="password"
                  className="input"
                />
              </div>

              <button className="submit" onClick={handleSignUp}>
                Submit
              </button>
              <div className="signIn-hide" onClick={handleToggleSignUp}>
                <p>Do you have an already account?</p>
                <p>Sign Up</p>
              </div>
            </form>
          ) : forgetPassword ? (
            <form className="form" onSubmit={handleSubmit}>
              <div className="left">
                <img src="/images/logo.webp" alt="India" />
              </div>
              <div className="head">Sign In to your account</div>
              <div className="input-field">
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field">
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="text"
                  className="password"
                  placeholder="Password"
                />
              </div>

              <div className="btn-container">
                <button onClick={handleSignIn} className="btn">
                  Submit
                </button>
              </div>
              <div className="forget-pass">
                <p onClick={handleForgetPassword}>Forget Password?</p>
              </div>
              <div className="signIn-hide" onClick={handleToggleSignUp}>
                <p>New here?</p>
                <p>Sign In</p>
              </div>
            </form>
          ) : (
            <div className="forget-form">
              <div className="left">
                <img src="/images/logo.webp" alt="India" />
              </div>
              <div className="head">Reset Password</div>
              <div className="input-field">
                <input
                  required
                  type="tel"
                  name="email"
                  className="email"
                  placeholder="Phone number"
                />
                <button className="btn" >
                  Send OTP
                </button>
              </div>

              <div className="otp-form">
                <div className="input-field">
                  <input
                    value={forgetEmail}
                    onChange={(e) => setForgetEmail(e.target.value)}
                    required
                    type="text"
                    name="otp"
                    className="otp"
                    placeholder="OTP"
                  />
                  <button className="btn">Submit</button>
                </div>
                {/* <div ref = {recaptcha}></div> */}
              </div>
              <div className="back-to-login" onClick={handleForgetPassword}>
                <p>Back to login</p>
              </div>
              <div className="signIn-hide" onClick={handleToggleSignUp}>
                <p>New here?</p>
                <p>Sign In</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

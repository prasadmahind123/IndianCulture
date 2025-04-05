
import { useState , useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../FireBase';
const auth = getAuth(app);
export default function LoginPage() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
        navigate('/');
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
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
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-back-link-container">
          <li className="auth-back-link" onClick={() => navigate('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="auth-icon-small"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </li>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">भ</div>
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-description">Enter your credentials to access your account</p>
          </div>
          <div className="auth-content">
            <form  className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-form-group">
                <label htmlFor="email" className="auth-form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder=""
                  className="auth-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="auth-form-group">
                <div className="auth-form-label-row">
                  <label htmlFor="password" className="auth-form-label">
                    Password
                  </label>
                  <li className="auth-forgot-password-link" onClick={() => navigate('/forgotPassword')} >
                    Forgot password?
                  </li>
                </div>
                <div className="auth-password-input-container">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="auth-form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="auth-password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="auth-icon-small"
                      >
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" x2="22" y1="2" y2="22" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="auth-icon-small"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="auth-checkbox-group">
                <input type="checkbox" id="remember" className="auth-checkbox" />
                <label htmlFor="remember" className="auth-checkbox-label">
                  Remember me
                </label>
              </div>
              <button type="submit" className="auth-btn btn-primary btn-block" onClick={handleSignIn}>
                Sign In
              </button>
            </form>

            <div className="auth-divider">
              <span className="auth-divider-text">Or continue with</span>
            </div>

            <div className="auth-social-buttons">
              <button className="auth-btn btn-social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="auth-icon-small"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </button>
              <button className="auth-btn btn-social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="auth-icon-small"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                Twitter
              </button>
            </div>
          </div>
          <div className="auth-footer">
            <div className="auth-footer-text">
              Don&apos;t have an account?{" "}
              <li className="auth-link" onClick={() => navigate('/register')}>
                Sign up
              </li>
            </div>
            <div className="auth-terms">
              By signing in, you agree to our{" "}
                Terms of Service
              and{" "}
                Privacy Policy
            </div>
          </div>
        </div>
      </div>

      <footer className="auth-footer-bar">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} भारतीय विरासत. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


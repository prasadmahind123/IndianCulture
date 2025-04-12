
import { useState , useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../FireBase';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
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
      const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          await set(ref(getDatabase(app), 'users/' + user.email.split('@')[0]), {
            name: user.displayName,
            email: user.email,
            password: user.uid,
          });
          navigate('/');
        } catch (error) {
          alert(error.message);
        } finally {
          setIsLoading(false);
        }
      }
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

            <div className="auth-social-buttons" onClick={handleGoogleSignIn}>
              <button className="auth-btn btn-social">
              <svg className="auth-icon-small" xmlns="http://www.w3.org/2000/svg" width="15" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                </svg>
                Google
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
          <p>&copy; {new Date().getFullYear()} भारतीय संस्कृति. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


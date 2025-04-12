

import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import {
  getAuth,
  sendPasswordResetEmail
} from 'firebase/auth';

import { app } from '../FireBase';
const auth = getAuth(app);
export default function ForgotPasswordPage() {
    const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const resetPassword = async (e) => {
    e.preventDefault()
    try {
      await sendPasswordResetEmail(auth, email)
      setIsSubmitted(true)
    } catch (error) {
      alert("Error ", error)
    }
  }


  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-back-link-container">
          <li className="auth-back-link" onClick={() => navigate('/loginPage')}>
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
            Back to Login
          </li>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">भ</div>
            <h2 className="auth-title">Forgot Password</h2>
            <p className="auth-description">
              {!isSubmitted
                ? "Enter your email and we'll send you a link to reset your password"
                : "Check your email for a password reset link"}
            </p>
          </div>
          <div className="auth-content">
            {!isSubmitted ? (
              <form  className="auth-form">
                <div className="auth-form-group">
                  <label htmlFor="email" className="auth-form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="auth-form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="auth-btn btn-primary btn-block" onClick={resetPassword}>
                  Send Reset Link
                </button>
              </form>
            ) : (
              <div className="auth-success-message">
                <div className="auth-success-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="auth-success-text">
                  We&apos;ve sent a password reset link to <span className="auth-email-highlight">{email}</span>
                </p>
                <p className="auth-success-hint">If you don&apos;t see the email in your inbox, please check your spam folder.</p>
                <div className="auth-success-actions">
                  <button className="auth-btn btn-outline btn-block" onClick={() => setIsSubmitted(false)}>
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="auth-footer">
            <div className="auth-footer-text">
              Remember your password?{" "}
              <li className="auth-link"  onClick={() => navigate("/loginPage")}>
                Back to login
              </li>
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


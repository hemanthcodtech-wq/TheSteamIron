import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles,
  RefreshCw,
  MapPin,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { PageTransition, ScrollReveal } from '../components/MotionSystem';
import heroImg from '../assets/hero_iron.jpg';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  return (
    <PageTransition className="auth-page">
      <div className="container auth-split-container">
        {/* Left Content Side */}
        <ScrollReveal className="auth-left-content" yOffset={20}>
          <div className="auth-welcome-pill">
            <Sparkles size={14} /> Welcome Back
          </div>

          <h1 className="auth-headline">
            Fresh Clothes <br />
            Are Just a <br />
            <span className="text-gradient">Login Away</span>
          </h1>

          <p className="auth-subtext">
            Continue your laundry journey. Manage orders, schedule pickups, and enjoy hassle-free service at your doorstep.
          </p>

          <div className="auth-feature-list">
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <CheckCircle2 size={15} />
              </div>
              <span>Track your orders</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <RefreshCw size={14} />
              </div>
              <span>Easy reordering</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <MapPin size={14} />
              </div>
              <span>Manage addresses</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <Tag size={14} />
              </div>
              <span>Exclusive offers</span>
            </div>
          </div>

          {/* Visual Showcase (Steam Iron & Folded Shirts with gentle steam) */}
          <div className="auth-visual-wrap">
            <img src={heroImg} alt="Steam Iron and Crisp Folded Clothes" />
            <div className="auth-floating-tags">
              <span className="floating-pill">
                <Sparkles size={13} /> Crisp & Wrinkle-Free
              </span>
              <span className="floating-pill">
                <ShieldCheck size={13} /> 100% Hygienic
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Form Card Side */}
        <ScrollReveal delay={0.1} yOffset={25} className="auth-card-panel">
          <h2 className="auth-card-title">Login to Your Account</h2>
          <p className="auth-card-desc">
            Access your account to manage your orders and book a new service.
          </p>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0f172a' }}>
                Welcome back!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 6 }}>
                Redirecting you to your basket...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              {/* Email / Phone input */}
              <div className="auth-input-group">
                <Mail size={18} className="auth-input-icon" />
                <input
                  type="text"
                  required
                  placeholder="Enter your email or phone number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="auth-input"
                />
              </div>

              {/* Password input */}
              <div className="auth-input-group">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="auth-pwd-toggle"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="auth-form-options">
                <label className="auth-remember-check">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/contact" className="auth-forgot-link">
                  Forgot password?
                </Link>
              </div>

              {/* Submit CTA */}
              <button type="submit" className="auth-btn-primary">
                <span>Login</span>
                <ArrowRight size={18} />
              </button>

              {/* Social Separator */}
              <div className="auth-separator">or continue with</div>

              {/* Google Button Only (Apple excluded as instructed) */}
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(true);
                  setTimeout(() => navigate('/cart'), 800);
                }}
                className="auth-social-btn"
              >
                <svg className="google-g-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Bottom Switch Link */}
              <div className="auth-card-footer">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}

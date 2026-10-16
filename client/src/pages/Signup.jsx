import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Clock,
  MapPin,
  Tag,
  ShieldCheck,
  Check
} from 'lucide-react';
import { PageTransition, ScrollReveal } from '../components/MotionSystem';
import heroImg from '../assets/hero_iron.jpg';
import './Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }
    if (!agreeTerms) {
      setErrorMsg('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }
    setErrorMsg('');
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
            <Sparkles size={14} /> Join The Steam Iron
          </div>

          <h1 className="auth-headline">
            Let's Make <br />
            <span className="text-gradient">Laundry</span> <br />
            Effortless
          </h1>

          <p className="auth-subtext">
            Create your account and enjoy premium laundry & dry cleaning services at your doorstep.
          </p>

          <div className="auth-feature-list">
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <Zap size={14} />
              </div>
              <span>Quick and easy booking</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <Clock size={14} />
              </div>
              <span>Track orders in real-time</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <MapPin size={14} />
              </div>
              <span>Save multiple addresses</span>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feat-icon">
                <Tag size={14} />
              </div>
              <span>Exclusive offers and discounts</span>
            </div>
          </div>

          {/* Visual Showcase (Steam Iron & Folded Shirts with badges) */}
          <div className="auth-visual-wrap">
            <img src={heroImg} alt="Fresh laundry on hangers and stacked clothes" />
            <div className="auth-floating-tags">
              <span className="floating-pill">
                <ShieldCheck size={13} /> Clean & Hygienic
              </span>
              <span className="floating-pill">
                <Sparkles size={13} /> Fresh Everyday
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Form Card Side */}
        <ScrollReveal delay={0.1} yOffset={25} className="auth-card-panel">
          <h2 className="auth-card-title">Create Your Account</h2>
          <p className="auth-card-desc">
            Join thousands of happy customers and experience hassle-free laundry service.
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
                Account Created Successfully!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 6 }}>
                Welcome to The Steam Iron. Redirecting you...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              {errorMsg && (
                <div style={{ background: '#fee2e2', color: '#dc2626', padding: '8px 14px', borderRadius: 10, fontSize: '0.82rem', fontWeight: 600 }}>
                  {errorMsg}
                </div>
              )}

              {/* Full Name */}
              <div className="auth-input-group">
                <User size={18} className="auth-input-icon" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="auth-input"
                />
              </div>

              {/* Email Address */}
              <div className="auth-input-group">
                <Mail size={18} className="auth-input-icon" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="auth-input"
                />
              </div>

              {/* Phone Number */}
              <div className="auth-input-group">
                <Phone size={18} className="auth-input-icon" />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="auth-input"
                />
              </div>

              {/* Create Password */}
              <div className="auth-input-group">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

              {/* Confirm Password */}
              <div className="auth-input-group">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="auth-input"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="auth-pwd-toggle"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Terms and conditions agreement */}
              <label className="auth-terms-check">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                </span>
              </label>

              {/* Submit CTA */}
              <button type="submit" className="auth-btn-primary">
                <span>Create Account</span>
                <ArrowRight size={18} />
              </button>

              {/* Social Separator */}
              <div className="auth-separator">or sign up with</div>

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
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}

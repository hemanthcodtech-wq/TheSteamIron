import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, User, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount } = useCart();
  const location = useLocation();

  // Close drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          {/* Brand Logo */}
          <Link to="/" className="header-logo-link">
            <img src={logoImg} alt="The Steam Iron Logo" className="header-logo-img" />
            <div className="header-logo-text">
              <span className="brand-title"> The Steam Iron</span>
              <span className="brand-subtitle">LAUNDRY & DRY CLEANING</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="header-nav desktop-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Services
            </NavLink>
            <NavLink 
              to="/how-it-works" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              How It Works
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contact
            </NavLink>
          </nav>

          {/* Right CTA section */}
          <div className="header-cta-group">
            <a href="tel:+919876543210" className="header-phone">
              <div className="phone-icon-wrap">
                <Phone size={15} />
              </div>
              <span>+91 98765 43210</span>
            </a>

            {/* Cart Icon */}
            <Link to="/cart" className="header-cart-btn" aria-label="View Cart">
              <ShoppingBag size={18} />
              {totalItemsCount > 0 && (
                <span className="header-cart-badge">{totalItemsCount}</span>
              )}
            </Link>

            {/* Login Link */}
            <Link to="/login" className="header-login-btn">
              <User size={16} />
              <span>Login</span>
            </Link>

            <Link to="/schedule" className="btn-primary header-schedule-btn">
              <Calendar size={16} />
              <span>Schedule a Pickup</span>
            </Link>

            {/* Mobile hamburger button */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <aside 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="header-logo-link">
            <img src={logoImg} alt="The Steam Iron Logo" className="header-logo-img" />
            <div className="header-logo-text">
              <span className="brand-title">Steam Iron</span>
              <span className="brand-subtitle">LAUNDRY & DRY CLEANING</span>
            </div>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
            end
          >
            <span>Home</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>Services</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/how-it-works" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>How It Works</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>Pricing</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>About Us</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>Contact</span>
            <ArrowRight size={16} />
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
          >
            <span>My Orders & Tracking</span>
            <ArrowRight size={16} />
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <a href="tel:+919876543210" className="drawer-phone-btn">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </a>
          <div className="drawer-auth-row">
            <Link to="/login" className="btn-outline drawer-auth-btn">
              <User size={16} />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="btn-outline drawer-auth-btn">
              <span>Sign Up</span>
            </Link>
          </div>
          <Link to="/schedule" className="btn-primary drawer-schedule-btn">
            <Calendar size={18} />
            <span>Schedule a Pickup</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

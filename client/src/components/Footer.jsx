import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="The Steam Iron" className="footer-logo-img" />
              <div>
                <span className="footer-brand-name">The Steam Iron</span>
                <span className="footer-tagline">Care for your clothes you can trust</span>
              </div>
            </Link>
            <p className="footer-desc">
              Premium steam ironing, dry cleaning, and wash & fold service delivered right to your doorstep with guaranteed fabric safety and wrinkle-free crisp finish.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={18} className="badge-icon" />
              <span>100% Quality & Hygiene Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link to="/services"><ArrowRight size={14} /> Our Services</Link></li>
              <li><Link to="/how-it-works"><ArrowRight size={14} /> How It Works</Link></li>
              <li><Link to="/pricing"><ArrowRight size={14} /> Pricing & Plans</Link></li>
              <li><Link to="/about"><ArrowRight size={14} /> About Our Team</Link></li>
              <li><Link to="/contact"><ArrowRight size={14} /> Contact & Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#steam-ironing"><ArrowRight size={14} /> Professional Steam Ironing</Link></li>
              <li><Link to="/services#wash-fold"><ArrowRight size={14} /> Wash & Fold</Link></li>
              <li><Link to="/services#dry-cleaning"><ArrowRight size={14} /> Delicate Dry Cleaning</Link></li>
              <li><Link to="/services#express"><ArrowRight size={14} /> Express 6-12h Delivery</Link></li>
              <li><Link to="/services#stain-removal"><ArrowRight size={14} /> Advanced Stain Treatment</Link></li>
              <li><Link to="/schedule"><ArrowRight size={14} /> Book a Doorstep Pickup</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Sector 14, Main Avenue, City Center, Hyderabad / Bangalore</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:support@thesteamiron.com">support@thesteamiron.com</a>
              </li>
              <li>
                <Clock size={18} className="contact-icon" />
                <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} The Steam Iron Services Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

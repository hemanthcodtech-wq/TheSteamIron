import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle, 
  Search, 
  AlertTriangle, 
  ArrowRight, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { 
  PageTransition, 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard, 
  AnimatedButton 
} from '../components/MotionSystem';

import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'general',
    orderId: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or query';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const contactCards = [
    {
      title: 'Call Us',
      desc: 'Speak directly with our support executive.',
      link: '+91 98765 43210',
      href: 'tel:+919876543210',
      icon: <Phone size={24} />
    },
    {
      title: 'Email Us',
      desc: 'Send detailed inquiries, receipts, or photos.',
      link: 'support@thesteamiron.com',
      href: 'mailto:support@thesteamiron.com',
      icon: <Mail size={24} />
    },
    {
      title: 'Business Hours',
      desc: 'Doorstep pickup & customer care timings.',
      link: 'Mon – Sun: 7:00 AM – 9:00 PM',
      icon: <Clock size={24} />
    },
    {
      title: 'Main Operations Hub',
      desc: 'Sector 14, Main Avenue, Tech Corridor.',
      link: 'Hyderabad & Bangalore',
      icon: <MapPin size={24} />
    }
  ];

  const quickSupportOptions = [
    {
      title: 'WhatsApp Support',
      desc: 'Fast, real-time replies on chat for urgent questions or quick reschedule requests.',
      actionText: 'Chat on WhatsApp',
      href: 'https://wa.me/919876543210',
      icon: <MessageSquare size={22} />,
      type: 'whatsapp'
    },
    {
      title: 'Call Customer Care',
      desc: 'Immediate assistance for ongoing orders, schedule changes, or payment queries.',
      actionText: 'Call Helpline',
      href: 'tel:+919876543210',
      icon: <Phone size={22} />,
      type: 'phone'
    },
    {
      title: 'Track My Order',
      desc: 'Check live status of your collected garments from in-wash to delivery.',
      actionText: 'Check Live Status',
      href: '/schedule',
      icon: <Search size={22} />,
      type: 'track'
    },
    {
      title: 'Report Pickup / Delivery Issue',
      desc: 'Report delayed pickups, missing items, or pressing concerns for fast investigation.',
      actionText: 'Report Issue',
      href: '#contact-form',
      icon: <AlertTriangle size={22} />,
      type: 'report'
    }
  ];

  const faqs = [
    {
      q: 'How do I schedule a laundry pickup?',
      a: 'You can easily book online via our Schedule a Pickup page or call us directly. Choose your address, preferred date, and morning/evening time slot in under a minute.'
    },
    {
      q: 'How long does cleaning and steam ironing take?',
      a: 'Our standard service turnaround is 24 to 48 hours. If you need clean clothes urgently, select our Express Turnaround for same-day delivery within 6 to 12 hours.'
    },
    {
      q: 'Can I reschedule my pickup or delivery?',
      a: 'Yes, absolutely! You can reschedule free of charge anytime prior to our valet departing for your location. Simply message us on WhatsApp or call our support desk.'
    },
    {
      q: 'How can I track my order?',
      a: 'As soon as your valet collects the garments, you receive an SMS with a tracking link showing current progress: Inspection, Washing, Steam Pressing, Packaging, and Out for Delivery.'
    },
    {
      q: 'What if my clothes are delayed due to bad weather?',
      a: 'In rare events like extreme weather or transport disruptions, we immediately notify you via SMS/WhatsApp with updated delivery estimates and priority dispatch.'
    },
    {
      q: 'How can I request a refund or report an issue?',
      a: 'You can report any issue directly via our contact form, email support@thesteamiron.com, or call us with your Order ID. Our grievance desk reviews and resolves claims in accordance with our transparent Refund Policy.'
    }
  ];

  return (
    <PageTransition className="contact-page">
      {/* 01. Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <ScrollReveal className="contact-hero-content" yOffset={20}>
            <span className="section-badge">
              <Sparkles size={14} /> CUSTOMER ASSISTANCE
            </span>
            <h1 className="contact-hero-title">We’re Here to Help</h1>
            <p className="contact-hero-subtitle">
              Questions about laundry, pickups, or deliveries? Our team is ready to assist you with friendly, dependable fabric care support.
            </p>
            <div className="contact-hero-ctas">
              <a href="tel:+919876543210" className="btn-primary">
                <Phone size={16} /> Contact Support
              </a>
              <Link to="/schedule" className="btn-outline">
                Schedule a Pickup
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 02. Contact Information Cards */}
      <section className="container">
        <StaggerContainer className="contact-cards-grid">
          {contactCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="contact-info-card">
                <div className="contact-card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                {card.href ? (
                  <a href={card.href} className="contact-card-link">{card.link}</a>
                ) : (
                  <span className="contact-card-link" style={{ textDecoration: 'none', color: '#0f172a' }}>{card.link}</span>
                )}
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 03 & 04. Send Us a Message + Find Us on the Map */}
      <section className="container" id="contact-form">
        <ScrollReveal className="form-map-layout">
          {/* Send Us a Message Form */}
          <div className="contact-form-box">
            <h3>Send Us a Message</h3>
            <p className="form-sub">
              Fill out the form below. We typically respond within 1–2 hours during business hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div style={{
                  width: 64,
                  height: 64,
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
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0f172a' }}>
                  Thank You, {formData.name}!
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: 8, maxWidth: 440, margin: '8px auto' }}>
                  Your message has been received. Our customer coordinator will call or email you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', inquiryType: 'general', orderId: '', message: '' });
                  }}
                  className="btn-outline" 
                  style={{ marginTop: 20 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-field-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Varma"
                    value={formData.name}
                    className={errors.name ? 'input-error' : ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                <div className="form-grid-2">
                  <div className="form-field-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      className={errors.phone ? 'input-error' : ''}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                  </div>

                  <div className="form-field-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      className={errors.email ? 'input-error' : ''}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field-group">
                    <label>Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pickup">Pickup / Delivery Scheduling</option>
                      <option value="pricing">Pricing & Subscription Plans</option>
                      <option value="order-issue">Existing Order Support</option>
                      <option value="feedback">Feedback / Suggestion</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label>Order ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. TSI-8921"
                      value={formData.orderId}
                      onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label>Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Please explain how we can help you..."
                    value={formData.message}
                    className={errors.message ? 'input-error' : ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  {errors.message && <span className="field-error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: 8 }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Find Us on the Map & Service Coverage */}
          <div className="map-location-box">
            <div>
              <span className="section-badge">CENTRAL SERVICE FACILITY</span>
              <h3 style={{ marginTop: 6 }}>Find Us on the Map</h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: 4 }}>
                We operate as a convenient doorstep-only valet service with central processing hubs in key city districts.
              </p>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                title="The Steam Iron Operating Hub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121817.43391741639!2d78.34288537618015!3d17.447753235773177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-details-card">
              <div className="location-address">
                <MapPin size={20} color="#0265d2" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Operations Facility:</strong> Plot 42, Innovation Hub, HITEC City / Whitefield Tech Zone, India
                </span>
              </div>
              <a 
                href="https://maps.google.com/?q=HITEC+City+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="get-directions-btn"
              >
                Get Directions <ExternalLink size={14} />
              </a>

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>Active Doorstep Service Zones:</strong>
                <div className="coverage-pill-row">
                  <span className="cov-pill">Hyderabad (All Zones)</span>
                  <span className="cov-pill">Bangalore (East & Central)</span>
                  <span className="cov-pill">Pune (East Corridor)</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 05. Quick Support Options */}
      <section className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <span className="section-badge">IMMEDIATE ACTIONS</span>
            <h2 className="section-title">Quick Support Options</h2>
            <p className="section-desc">
              Need an instant response? Choose one of our dedicated support channels.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="quick-support-grid">
          {quickSupportOptions.map((opt, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard>
                <a 
                  href={opt.href} 
                  className="quick-support-card"
                  target={opt.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{ display: 'block', height: '100%' }}
                >
                  <div className={`qs-icon ${opt.type}`}>{opt.icon}</div>
                  <h4>{opt.title}</h4>
                  <p>{opt.desc}</p>
                  <span className="qs-action">
                    {opt.actionText} <ArrowRight size={14} />
                  </span>
                </a>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 06. Frequently Asked Questions */}
      <section className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <span className="section-badge">QUICK ANSWERS</span>
            <h2 className="section-title">Support FAQs</h2>
            <p className="section-desc">
              Common answers regarding scheduling, rescheduling, and garment guarantees.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-faqs-wrap">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                className="faq-question-btn"
                onClick={() => toggleFaq(idx)}
                aria-expanded={activeFaq === idx}
              >
                <span>{faq.q}</span>
                {activeFaq === idx ? <ChevronUp size={18} color="#0265d2" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {activeFaq === idx && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 07. Final Call-to-Action */}
      <section className="container">
        <div className="contact-final-cta">
          <h2>Let Us Take Laundry Off Your Hands.</h2>
          <p>
            Join thousands of happy customers who trust The Steam Iron for hygienic washing and crisp steam pressing.
          </p>
          <div className="cta-row">
            <Link to="/schedule" className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 28px', fontWeight: 700 }}>
              Book a Pickup <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 26px' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

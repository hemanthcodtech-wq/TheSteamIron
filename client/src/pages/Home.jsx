import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Truck, 
  Shirt, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  Footprints, 
  Home as HomeIcon, 
  Briefcase, 
  Crown, 
  Flame, 
  Tag, 
  Search, 
  MapPin, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  PackageCheck, 
  Layers, 
  Users, 
  AlertCircle 
} from 'lucide-react';

import heroImg from '../assets/hero_iron.jpg';
import washFoldImg from '../assets/service_wash_fold.jpg';
import steamIronImg from '../assets/service_steam_iron.jpg';
import dryCleanImg from '../assets/service_dry_cleaning.jpg';
import expressImg from '../assets/service_express.jpg';
import footwearImg from '../assets/cat_footwear.jpg';
import homeEssentialsImg from '../assets/cat_home_essentials.jpg';
import accessoriesImg from '../assets/cat_accessories.jpg';
import priyaImg from '../assets/customer_priya.jpg';

import { 
  PageTransition, 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedCounter 
} from '../components/MotionSystem';

import './Home.css';

export default function Home() {
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleCheckPincode = (e) => {
    e.preventDefault();
    const cleanPin = pincode.trim();
    const validPrefixes = ['500', '560', '411', '501', '562'];
    if (cleanPin.length === 6 && validPrefixes.some(p => cleanPin.startsWith(p))) {
      setPincodeStatus('serviceable');
    } else {
      setPincodeStatus('not-serviceable');
    }
  };

  const categoryCards = [
    { title: 'Clothes', desc: 'Daily wear, shirts, trousers & cotton sarees.', img: steamIronImg, link: '/services#clothes-care' },
    { title: 'Footwear', desc: 'Sneaker restoration & leather shoe care.', img: footwearImg, link: '/services#footwear' },
    { title: 'Home Essentials', desc: 'Bed linens, duvets, blankets & towels.', img: homeEssentialsImg, link: '/services#home-essentials' },
    { title: 'Accessories', desc: 'Leather handbags, scarves, caps & belts.', img: accessoriesImg, link: '/services#accessories' },
    { title: 'Special Care', desc: 'Designer suits, blazers & bridal couture.', img: dryCleanImg, link: '/services#special-garment' }
  ];

  const popularServices = [
    {
      title: 'Wash & Fold',
      desc: 'Fresh, clean and neatly folded in isolated washer drums.',
      price: 'Starting from ₹99/kg',
      image: washFoldImg,
      link: '/schedule',
      tag: 'Eco Wash'
    },
    {
      title: 'Wash & Iron',
      desc: 'Complete wash cycle followed by commercial steam pressing.',
      price: 'Starting from ₹45/item',
      image: heroImg,
      link: '/schedule',
      tag: 'Everyday Value'
    },
    {
      title: 'Steam Ironing',
      desc: 'Crisp and wrinkle-free finish with zero fabric scorching.',
      price: 'Starting from ₹20/item',
      image: steamIronImg,
      link: '/schedule',
      tag: 'Best Seller'
    },
    {
      title: 'Dry Cleaning',
      desc: 'Special solvent care for delicate suits, blazers & silks.',
      price: 'Starting from ₹149/item',
      image: dryCleanImg,
      link: '/schedule',
      tag: 'Gentle Care'
    }
  ];

  const hiwSteps = [
    { num: '01', title: 'Schedule a Pickup', desc: 'Choose your preferred date and morning/evening time slot online.', icon: <Calendar size={22} /> },
    { num: '02', title: 'We Collect Clothes', desc: 'Our uniformed valet collects your garments in eco laundry bags.', icon: <Truck size={22} /> },
    { num: '03', title: 'Clean, Iron & QC', desc: 'Fabric-specific washing, commercial steam soleplate & inspection.', icon: <Flame size={22} /> },
    { num: '04', title: 'Doorstep Delivery', desc: 'Fresh, crisp, wrinkle-free clothes returned right on schedule.', icon: <PackageCheck size={22} /> }
  ];

  const whyPoints = [
    { icon: <Shirt size={24} />, title: 'Professional Garment Care', desc: 'Commercial soleplate micro-steam technology protects fabrics against burns and shine marks.' },
    { icon: <Layers size={24} />, title: 'Fabric-Specific Cleaning', desc: 'Individual washing cycles segregated by fabric sensitivity and colorfastness.' },
    { icon: <CheckCircle2 size={24} />, title: 'Transparent Pricing', desc: 'Clear per-piece and per-kg rates with zero hidden surge fees or weight rounding.' },
    { icon: <Truck size={24} />, title: 'Doorstep Valet Pickup', desc: 'Convenient collection and delivery right at your door with free slots above ₹299.' },
    { icon: <Clock size={24} />, title: 'Live Order Tracking', desc: 'Automated SMS updates from laundry intake to steam pressing and out-for-delivery.' },
    { icon: <ShieldCheck size={24} />, title: '3-Point Quality Checks', desc: 'Every garment is audited for button security, crease sharpness, and stain removal.' }
  ];

  const pricingPreview = [
    { name: 'Formal Shirt / T-Shirt', service: 'Steam Ironing', price: '₹20', unit: 'per item' },
    { name: 'Jeans / Formal Trousers', service: 'Steam Ironing', price: '₹25', unit: 'per item' },
    { name: 'Daily Mixed Wear Laundry', service: 'Wash & Fold', price: '₹99', unit: 'per kg' },
    { name: '2-Piece Men’s Formal Suit', service: 'Delicate Dry Clean', price: '₹280', unit: 'per suit' }
  ];

  const homeFaqs = [
    { q: 'How are laundry and steam ironing prices calculated?', a: 'Wash & Fold laundry is charged transparently by weight (from ₹99/kg). Steam ironing and delicate dry cleaning are priced per garment piece.' },
    { q: 'Are doorstep pickup and delivery free?', a: 'Yes, doorstep pickup and return are 100% free on all orders above ₹299. For smaller orders under ₹299, a nominal ₹40 logistics fee applies.' },
    { q: 'What are the turnaround times for my clothes?', a: 'Our standard turnaround is 24 to 48 hours. If you need clothes urgently, our Express Turnaround delivers within 6 to 12 hours on the same day.' },
    { q: 'How do you safeguard delicate fabrics like silks and wools?', a: 'Our stations use microprocessor temperature regulation with protective Teflon shoe covers to eliminate burn marks, fiber crushing, or shiny seams.' },
    { q: 'What payment methods do you accept?', a: 'We accept all digital payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and Cash on Delivery upon receiving your clothes.' },
    { q: 'How can I track the live status of my order?', a: 'As soon as your valet collects the clothes, you receive an SMS tracking link showing live progress: Pickup Scheduled → Picked Up → In Cleaning → Out for Delivery → Delivered.' }
  ];

  return (
    <PageTransition>
      <div className="home-page">
        {/* 02. Hero Banner with Staggered Motion */}
        <section className="hero-section">
          <div className="container hero-container">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-content"
            >
              <div className="hero-badge-pill">
                <Sparkles size={14} className="badge-sparkle" />
                <span>PROFESSIONAL LAUNDRY & DRY CLEANING SERVICES</span>
              </div>
              
              <h1 className="hero-title">
                Fresh Clothes. <br />
                <span className="text-gradient">Perfect Finish.</span>
              </h1>

              <p className="hero-subtitle">
                Premium laundry, steam ironing and dry cleaning at your doorstep. Clean. Crisp. Convenient.
              </p>

              <div className="hero-cta-row">
                <Link to="/schedule">
                  <AnimatedButton className="btn-primary hero-btn-main">
                    <span>Schedule a Pickup</span>
                    <ArrowRight size={18} />
                  </AnimatedButton>
                </Link>
                <Link to="/services">
                  <AnimatedButton className="btn-outline hero-btn-alt">
                    <span>Explore Services</span>
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual with Floating Steam Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hero-visual"
            >
              <div className="hero-image-wrapper">
                <img src={heroImg} alt="Steam Ironing & Pressed Clothes" className="hero-main-img" />
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="hero-floating-badge"
                >
                  <span className="badge-script">Crisp</span>
                  <span className="badge-script">Clean</span>
                  <span className="badge-script">Confident</span>
                  <span className="badge-subscript">Everyday</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 03. Trust & Benefits Bar with Animated Numbers */}
        <ScrollReveal>
          <div className="container">
            <div className="trust-bar-box">
              <div className="trust-item">
                <div className="trust-icon-circle"><Truck size={20} /></div>
                <div>
                  <strong>Doorstep Convenience</strong>
                  <span>Valet pickup & delivery</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon-circle"><Shirt size={20} /></div>
                <div>
                  <strong>Professional Care</strong>
                  <span>Zero scorch guarantee</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon-circle"><ShieldCheck size={20} /></div>
                <div>
                  <strong>Hygiene & Safety</strong>
                  <span>Segregated wash drums</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon-circle"><Clock size={20} /></div>
                <div>
                  <strong>Timely Delivery</strong>
                  <span>Always on schedule</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 04. Choose Your Category with Staggered Cards */}
        <section className="container">
          <ScrollReveal>
            <div className="text-center max-w-700">
              <span className="section-badge">SELECT YOUR NEEDS</span>
              <h2 className="section-title">Choose Your Category</h2>
              <p className="section-desc">
                Explore dedicated fabric and lifestyle cleaning solutions before booking.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="home-categories-grid">
            {categoryCards.map((cat, idx) => (
              <StaggerItem key={idx}>
                <Link to={cat.link}>
                  <AnimatedCard className="category-card">
                    <div className="cat-img-box">
                      <img src={cat.img} alt={cat.title} />
                    </div>
                    <div className="cat-body">
                      <h4 className="cat-title">{cat.title}</h4>
                      <p className="cat-desc">{cat.desc}</p>
                      <span className="cat-link">View Category <ArrowRight size={14} /></span>
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 05. Popular Services with Animated Cards */}
        <section className="container">
          <ScrollReveal>
            <div className="text-center max-w-700">
              <span className="section-badge">TOP RATED</span>
              <h2 className="section-title">Popular Services</h2>
              <p className="section-desc">
                Our most frequently requested laundry and garment pressing solutions.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="home-services-grid">
            {popularServices.map((svc, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="service-item-card">
                  <div className="service-img-wrap">
                    <img src={svc.image} alt={svc.title} />
                    <span className="service-tag">{svc.tag}</span>
                  </div>
                  <div className="service-card-body">
                    <h4 className="service-card-title">{svc.title}</h4>
                    <p className="service-card-desc">{svc.desc}</p>
                    <div className="service-card-bottom">
                      <span className="service-price">{svc.price}</span>
                      <Link to={svc.link} className="service-action-btn" aria-label={`Book ${svc.title}`}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 06. How It Works with Progressive Number Badges */}
        <section className="container">
          <ScrollReveal>
            <div className="text-center max-w-700">
              <span className="section-badge">SIMPLE 4-STEP PROCESS</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-desc">
                Enjoying crisp, clean clothes is as simple as a few taps on your screen.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="home-hiw-grid">
            {hiwSteps.map((step, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="hiw-step-unit">
                  <div className="hiw-step-header">
                    <div className="step-num-circle">{step.num}</div>
                    <div style={{ color: '#0265d2' }}>{step.icon}</div>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2} className="text-center" style={{ marginTop: 32 }}>
            <Link to="/how-it-works">
              <AnimatedButton className="btn-outline">
                Learn More About Our Process <ArrowRight size={16} />
              </AnimatedButton>
            </Link>
          </ScrollReveal>
        </section>

        {/* 07. Why Choose Us with Staggered Benefit Cards */}
        <section className="container">
          <ScrollReveal>
            <div className="text-center max-w-700">
              <span className="section-badge">THE ADVANTAGE</span>
              <h2 className="section-title">Why Choose The Steam Iron?</h2>
              <p className="section-desc">
                Setting the benchmark for hygiene, finish precision, and customer convenience.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="home-why-grid">
            {whyPoints.map((pt, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="why-card">
                  <div className="why-icon">{pt.icon}</div>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 08. Pricing Preview with Counter & Animated Items */}
        <section className="container">
          <ScrollReveal>
            <div className="pricing-preview-box">
              <div style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto 28px' }}>
                <span className="section-badge">HONEST RATES</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#091e42' }}>
                  Transparent Pricing Preview
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 4 }}>
                  Sample rates for our most popular everyday wardrobe garments.
                </p>
              </div>

              <StaggerContainer className="preview-items-row">
                {pricingPreview.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <AnimatedCard className="preview-item-card">
                      <div className="pi-name">{item.name}</div>
                      <div className="pi-service">{item.service}</div>
                      <div className="pi-price">{item.price}</div>
                      <div className="pi-unit">{item.unit}</div>
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div style={{ textAlign: 'center' }}>
                <Link to="/pricing">
                  <AnimatedButton className="btn-primary" style={{ padding: '12px 28px' }}>
                    View All Prices & Item Directory <ArrowRight size={16} />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 10. Real-time Live Order Tracking Timeline */}
        <section className="container">
          <ScrollReveal>
            <div className="home-tracking-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <span className="live-badge">
                    <span className="pulse-dot"></span> LIVE STATUS PROGRESSION
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
                    Track Your Laundry in Real Time
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: 4 }}>
                    Follow your garments through every milestone from collection to final doorstep drop-off.
                  </p>
                </div>

                <Link to="/dashboard">
                  <AnimatedButton className="btn-primary">
                    Login to Track Order <ArrowRight size={16} />
                  </AnimatedButton>
                </Link>
              </div>

              <div className="tracking-timeline-bar" style={{ marginTop: 32 }}>
                <div className="track-stage active">
                  <div className="stage-circle"><Calendar size={20} /></div>
                  <span className="stage-title">Pickup Scheduled</span>
                  <span className="stage-subtitle">Time slot confirmed</span>
                </div>
                <div className="track-stage active">
                  <div className="stage-circle"><Truck size={20} /></div>
                  <span className="stage-title">Picked Up</span>
                  <span className="stage-subtitle">Valet weighed items</span>
                </div>
                <div className="track-stage active">
                  <div className="stage-circle"><Flame size={20} /></div>
                  <span className="stage-title">In Cleaning</span>
                  <span className="stage-subtitle">Washed & steam ironed</span>
                </div>
                <div className="track-stage">
                  <div className="stage-circle"><PackageCheck size={20} /></div>
                  <span className="stage-title">Out for Delivery</span>
                  <span className="stage-subtitle">Courier en route</span>
                </div>
                <div className="track-stage">
                  <div className="stage-circle"><CheckCircle2 size={20} /></div>
                  <span className="stage-title">Delivered</span>
                  <span className="stage-subtitle">Crisp at your door</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 13. Service Area Checker */}
        <section className="container">
          <ScrollReveal>
            <div className="pincode-checker-box">
              <div>
                <span className="section-badge">DOORSTEP AVAILABILITY</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
                  Check Your Service Area
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: 4 }}>
                  Enter your 6-digit postal PIN code to confirm doorstep pickup and delivery availability.
                </p>

                <form onSubmit={handleCheckPincode} className="pincode-input-row">
                  <input
                    type="text"
                    placeholder="Enter 6-digit PIN Code (e.g. 500081)"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="pincode-input"
                  />
                  <AnimatedButton type="submit" className="btn-primary" style={{ padding: '12px 24px', flexShrink: 0 }}>
                    Check Availability
                  </AnimatedButton>
                </form>

                {pincodeStatus === 'serviceable' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pincode-result success"
                  >
                    <CheckCircle2 size={18} />
                    <span>Great news! Doorstep pickup and delivery is available in your area.</span>
                  </motion.div>
                )}

                {pincodeStatus === 'not-serviceable' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pincode-result error"
                  >
                    <AlertCircle size={18} />
                    <span>We currently do not service this PIN code. Expanding to your neighborhood soon!</span>
                  </motion.div>
                )}
              </div>

              <div className="active-zones-list">
                <h4>Primary Service Zones</h4>
                <div className="coverage-pill-row">
                  <span className="cov-pill">Hyderabad (HITEC City, Kondapur, Gachibowli, Madhapur)</span>
                  <span className="cov-pill">Bangalore (Indiranagar, Koramangala, Whitefield, HSR)</span>
                  <span className="cov-pill">Pune (Kalyani Nagar, Viman Nagar, Hinjewadi)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 14. Smooth Accordion FAQs */}
        <section className="container">
          <ScrollReveal>
            <div className="text-center max-w-700">
              <span className="section-badge">HAVE QUESTIONS?</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc">
                Answers to common questions about booking, turnaround, payments, and cancellations.
              </p>
            </div>
          </ScrollReveal>

          <div className="home-faqs-wrap">
            {homeFaqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={activeFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <motion.div 
                      animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} color={activeFaq === idx ? '#0265d2' : '#94a3b8'} />
                    </motion.div>
                  </button>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="faq-answer"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 15. Final Booking CTA */}
        <section className="container">
          <ScrollReveal>
            <div className="home-final-cta">
              <h2>Your Laundry Day, Made Effortless.</h2>
              <p>
                Join thousands of satisfied customers who enjoy crisp, hygienically steam-pressed clothes delivered right back to their doorstep.
              </p>
              <div className="home-cta-row">
                <Link to="/schedule">
                  <AnimatedButton className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 30px', fontWeight: 700 }}>
                    Schedule a Pickup <ArrowRight size={18} />
                  </AnimatedButton>
                </Link>
                <Link to="/services">
                  <AnimatedButton className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 28px' }}>
                    Explore All Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
}

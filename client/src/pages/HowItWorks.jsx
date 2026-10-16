import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Truck, 
  Shirt, 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  RotateCcw, 
  HelpCircle, 
  Layers, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  PackageCheck,
  Flame,
  Check
} from 'lucide-react';

import heroImg from '../assets/hero_iron.jpg';
import step1Img from '../assets/step1_schedule.jpg';
import step2Img from '../assets/step2_collect.jpg';
import step3Img from '../assets/step3_clean.jpg';
import steamIronImg from '../assets/service_steam_iron.jpg';
import footwearImg from '../assets/cat_footwear.jpg';
import homeEssentialsImg from '../assets/cat_home_essentials.jpg';
import accessoriesImg from '../assets/cat_accessories.jpg';
import dryCleanImg from '../assets/service_dry_cleaning.jpg';

import { 
  PageTransition, 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard, 
  AnimatedButton 
} from '../components/MotionSystem';

import './HowItWorks.css';

export default function HowItWorks() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // 02. Four-Step Process Overview
  const overviewSteps = [
    {
      num: '01',
      title: '1. Schedule a Pickup',
      desc: 'Select your preferred date, morning/evening time slot, and address in seconds.',
      icon: <Calendar size={22} />
    },
    {
      num: '02',
      title: '2. We Collect Your Clothes',
      desc: 'Our uniformed valet arrives with eco laundry totes to safely weigh and inspect your garments.',
      icon: <Truck size={22} />
    },
    {
      num: '03',
      title: '3. We Clean & Care',
      desc: 'Segregated hygienic wash batches and commercial-grade steam soleplate pressing.',
      icon: <Flame size={22} />
    },
    {
      num: '04',
      title: '4. We Deliver',
      desc: 'Pristine, crisp clothes returned right to your doorstep on custom hangers or folded boxes.',
      icon: <PackageCheck size={22} />
    }
  ];

  // 03. Step-by-Step Detailed Explanation (Large 4 Cards)
  const detailedSteps = [
    {
      step: '01',
      category: 'BOOKING & SELECTION',
      title: 'Select Categories & Services',
      desc: 'Browse through our easy-to-use booking portal. Choose whether you need daily wash & fold, crisp professional steam ironing, or delicate dry cleaning.',
      img: step1Img,
      bullets: [
        'Pay per item or per kilogram pricing transparency',
        'Specify starch levels & hanger packaging preferences',
        'Add special garment notes for delicate silks or wools'
      ]
    },
    {
      step: '02',
      category: 'DOORSTEP VALET',
      title: 'Choose Pickup Address, Date & Time',
      desc: 'Pick a convenient 3-hour morning or evening window. Our courteous courier arrives promptly with digital scales and tagged laundry totes.',
      img: step2Img,
      bullets: [
        'Real-time rider arrival alerts and ETA via SMS',
        'On-the-spot item count and physical condition logging',
        'Zero-touch sanitized garment handover'
      ]
    },
    {
      step: '03',
      category: 'FACILITY PROCESSING',
      title: 'Track Collection & Cleaning Progress',
      desc: 'Your clothes enter our temperature-controlled facility. Follow live milestones on your phone as your clothes move from sorting to steam pressing.',
      img: step3Img,
      bullets: [
        'Isolated drum washing — zero mixing with other clients',
        'High-pressure micro-steam removes stubborn wrinkles',
        'Anti-bacterial disinfectant rinse for fresh scent'
      ]
    },
    {
      step: '04',
      category: 'FINAL DELIVERY',
      title: 'Receive Freshly Cleaned Garments',
      desc: 'Enjoy that unmatched crisp feeling. Clothes return protected against dust and moisture, ready to hang straight into your wardrobe.',
      img: heroImg,
      bullets: [
        'Delivered within 24 to 48 hours (or 6–12h Express)',
        'OTP verified digital handover directly at your door',
        'Inspect first, then pay easily via UPI or cash'
      ]
    }
  ];

  // 04. Choose Your Laundry Service
  const serviceCategories = [
    { title: 'Clothes Care', desc: 'Everyday shirts, trousers, and sarees.', img: steamIronImg, link: '/services#clothes-care' },
    { title: 'Footwear Cleaning', desc: 'Sneaker restoration & leather shoe polish.', img: footwearImg, link: '/services#footwear' },
    { title: 'Home Essentials', desc: 'Bedsheets, duvets & plush towels.', img: homeEssentialsImg, link: '/services#home-essentials' },
    { title: 'Accessories', desc: 'Leather handbags, belts & silk scarves.', img: accessoriesImg, link: '/services#accessories' },
    { title: 'Special Care', desc: 'Designer suits, blazers & bridal couture.', img: dryCleanImg, link: '/services#special-garment' }
  ];

  // 05. Our Cleaning & Quality Process
  const qualitySteps = [
    {
      icon: <Search size={22} />,
      title: 'Garment Inspection & Sorting',
      desc: 'Each garment is examined under high-CRI lighting for fabric type, colorfastness, loose buttons, and collar stains.'
    },
    {
      icon: <Layers size={22} />,
      title: 'Fabric-Appropriate Cleaning',
      desc: 'Gentle, pH-balanced organic detergents matched precisely to water temperature and drum rotation speeds.'
    },
    {
      icon: <Flame size={22} />,
      title: 'Steam Ironing & Finishing',
      desc: 'Industrial boilers create dry micro-steam that relaxes fibers instantly without causing fabric shine or scorched seams.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Quality Check & Packaging',
      desc: '3-point supervisory audit checks seam sharpness and cleanliness before sealing in breathable, moisture-safe garment wraps.'
    }
  ];

  // 07. Pickup & Delivery Info
  const pickupInfoPoints = [
    {
      icon: <MapPin size={22} color="#0265d2" />,
      title: 'Serviceable Areas',
      desc: 'Active across prime residential zones in Hyderabad, Bangalore, and Pune with same-neighborhood local hubs.'
    },
    {
      icon: <Clock size={22} color="#0265d2" />,
      title: 'Available Time Slots',
      desc: 'Morning (8 AM – 11 AM), Afternoon (12 PM – 3 PM), Evening (5 PM – 8 PM), and Night (8 PM – 10 PM).'
    },
    {
      icon: <Truck size={22} color="#0265d2" />,
      title: 'Estimated Turnaround',
      desc: 'Standard orders completed in 24 to 48 hours. Express priority orders completed in 6 to 12 hours.'
    },
    {
      icon: <RotateCcw size={22} color="#0265d2" />,
      title: 'Free Rescheduling',
      desc: 'Unavailable at the doorstep? Reschedule with 1-click on WhatsApp or SMS with zero cancellation penalty.'
    }
  ];

  // 08. Why Customers Choose Us
  const benefitPoints = [
    { icon: <Smartphone size={22} />, title: 'Online Booking', desc: 'Book in under 60 seconds.' },
    { icon: <Shirt size={22} />, title: 'Garment Care', desc: 'Zero scorching guarantee.' },
    { icon: <CheckCircle2 size={22} />, title: 'Transparent Pricing', desc: 'No hidden line-item fees.' },
    { icon: <Clock size={22} />, title: 'Order Updates', desc: 'Real-time SMS alerts.' },
    { icon: <Truck size={22} />, title: 'Doorstep Pickup', desc: 'Safe valet collection & drop.' }
  ];

  // 09. FAQs
  const hiwFaqs = [
    {
      q: 'How do I book a pickup?',
      a: 'Simply click "Schedule a Pickup" on our website or call +91 98765 43210. Choose your address, date, and preferred morning or evening time slot.'
    },
    {
      q: 'Can I select multiple categories in a single order?',
      a: 'Yes! You can combine daily wash & fold, steam ironing for work shirts, footwear cleaning, and dry-cleaning in a single doorstep pickup. Our valet sorts them individually.'
    },
    {
      q: 'How are laundry and ironing prices calculated?',
      a: 'Regular laundry is weighed by kilogram (starting at ₹99/kg), steam ironing is charged per piece (starting at ₹20/item), and delicate dry cleaning is itemized transparently.'
    },
    {
      q: 'How long does cleaning and steam ironing take?',
      a: 'Our standard turnaround is 24 to 48 hours. We also offer an Express Turnaround option with same-day 6 to 12-hour delivery for urgent requirements.'
    },
    {
      q: 'Can I reschedule my pickup or delivery if I am not home?',
      a: 'Yes. If your plans change, message our WhatsApp support desk or call us to shift your slot to another convenient time free of charge.'
    },
    {
      q: 'How can I report an issue or missing item?',
      a: 'You can immediately reach our dedicated support desk via phone (+91 98765 43210), email (support@thesteamiron.com), or use our Contact Us form with your Order ID.'
    }
  ];

  return (
    <PageTransition className="hiw-page">
      {/* 01. Hero Section */}
      <section className="hiw-hero">
        <div className="container">
          <div className="hiw-hero-grid">
            <ScrollReveal className="hiw-hero-content" yOffset={20}>
              <span className="section-badge">
                <Sparkles size={14} /> SIMPLE & SEAMLESS
              </span>
              <h1 className="hiw-hero-title">How It Works</h1>
              <p className="hiw-hero-subtitle">Premium laundry care, made simple.</p>
              <p className="hiw-hero-desc">
                From doorstep pickup to commercial steam soleplate pressing and on-time return, see how easy it is to keep your wardrobe in pristine condition.
              </p>
              <Link to="/schedule" className="btn-primary" style={{ padding: '13px 28px', fontSize: '1rem' }}>
                Schedule a Pickup <ArrowRight size={18} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="hiw-hero-img-wrap" yOffset={25}>
              <img src={heroImg} alt="Crisp steam ironed clothes" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02. Four-Step Process Overview (Timeline) */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">THE CUSTOMER JOURNEY</span>
            <h2 className="section-title">Four-Step Process Overview</h2>
            <p className="section-desc">
              A quick bird’s-eye view of how we take laundry completely off your to-do list.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="overview-timeline">
          {overviewSteps.map((step, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="overview-card">
                <div className="overview-card-header">
                  <div className="overview-icon-wrap">{step.icon}</div>
                  <span className="overview-badge">{step.num}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 03. Step-by-Step Detailed Explanation */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">DETAILED BREAKDOWN</span>
            <h2 className="section-title">Step-by-Step Experience</h2>
            <p className="section-desc">
              Everything you need to know about each stage of our fabric care service.
            </p>
          </div>
        </ScrollReveal>

        <div className="detailed-steps-grid">
          {detailedSteps.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <AnimatedCard className="detailed-step-card">
                <div className="detailed-step-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="detailed-step-content">
                  <div className="step-meta-row">
                    <span className="step-num-tag">STEP {card.step}</span>
                    <span className="step-category-name">{card.category}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul className="step-bullet-list">
                    {card.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        <Check size={16} color="#0265d2" strokeWidth={3} style={{ flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 04. Choose Your Laundry Service */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">WARDROBE SOLUTIONS</span>
            <h2 className="section-title">Choose Your Laundry Service</h2>
            <p className="section-desc">
              Select the services you need before confirming your doorstep slot.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="categories-grid" style={{ marginTop: 32 }}>
          {serviceCategories.map((cat, idx) => (
            <StaggerItem key={idx}>
              <Link to={cat.link}>
                <AnimatedCard className="category-card">
                  <div className="cat-img-box">
                    <img src={cat.img} alt={cat.title} />
                  </div>
                  <div className="cat-body">
                    <h4 className="cat-title">{cat.title}</h4>
                    <p className="cat-desc">{cat.desc}</p>
                    <span className="cat-link">Explore Service <ArrowRight size={14} /></span>
                  </div>
                </AnimatedCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link to="/services" className="btn-outline">
            Explore All Services & Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 05. Our Cleaning & Quality Process */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">INSIDE THE FACILITY</span>
            <h2 className="section-title">Our Cleaning & Quality Process</h2>
            <p className="section-desc">
              Behind the scenes: the meticulous craftsmanship that protects your garments between pickup and delivery.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="process-qc-grid">
          {qualitySteps.map((q, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="qc-card">
                <div className="qc-icon-wrap">{q.icon}</div>
                <h4>{q.title}</h4>
                <p>{q.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 06. Track Your Order */}
      <section className="container">
        <ScrollReveal>
          <div className="tracking-showcase-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="live-badge">
                  <span className="pulse-dot"></span> LIVE ORDER TRACKING
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
                  Stay Informed Every Step of the Way
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: 4 }}>
                  No guesswork. Automated SMS and dashboard updates keep you updated in real-time.
                </p>
              </div>

              <Link to="/schedule" className="btn-primary">
                Track Order / Book Pickup
              </Link>
            </div>

            <div className="tracking-timeline-bar">
              <div className="track-stage active">
                <div className="stage-circle"><Calendar size={20} /></div>
                <span className="stage-title">Pickup Scheduled</span>
                <span className="stage-subtitle">Date & Time confirmed</span>
              </div>

              <div className="track-stage active">
                <div className="stage-circle"><Truck size={20} /></div>
                <span className="stage-title">Picked Up</span>
                <span className="stage-subtitle">Valet collected items</span>
              </div>

              <div className="track-stage active">
                <div className="stage-circle"><Flame size={20} /></div>
                <span className="stage-title">In Cleaning</span>
                <span className="stage-subtitle">Washed & steam ironed</span>
              </div>

              <div className="track-stage">
                <div className="stage-circle"><PackageCheck size={20} /></div>
                <span className="stage-title">Out for Delivery</span>
                <span className="stage-subtitle">Valet en route</span>
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

      {/* 07. Pickup & Delivery Information */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">LOGISTICS & DETAILS</span>
            <h2 className="section-title">Pickup & Delivery Information</h2>
            <p className="section-desc">
              Transparent scheduling guidelines designed around your day.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="pickup-info-grid">
          {pickupInfoPoints.map((info, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="p-info-card">
                {info.icon}
                <h4>{info.title}</h4>
                <p>{info.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 08. Why Customers Choose Us */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">THE VALUE PROPOSITION</span>
            <h2 className="section-title">Why Customers Choose Us</h2>
            <p className="section-desc">
              Over 10,000 households rely on The Steam Iron for consistent quality and total convenience.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="benefits-grid">
          {benefitPoints.map((b, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 09. Frequently Asked Questions */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">GOT QUESTIONS?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Quick answers to common questions about booking and service guarantees.
          </p>
        </div>

        <div className="hiw-faqs-wrap">
          {hiwFaqs.map((faq, idx) => (
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

      {/* 10. Final Call-to-Action */}
      <section className="container">
        <div className="hiw-final-cta">
          <h2>Your Laundry Day, Made Effortless.</h2>
          <p>
            Reclaim your weekends and enjoy the crisp luxury of professionally steam-ironed clothes delivered right back to your door.
          </p>
          <div className="hiw-cta-row">
            <Link to="/schedule" className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 28px', fontWeight: 700 }}>
              Schedule a Pickup <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 26px' }}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="sticky-mobile-cta">
        <Link to="/schedule" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Schedule a Pickup <ArrowRight size={16} />
        </Link>
      </div>
    </PageTransition>
  );
}

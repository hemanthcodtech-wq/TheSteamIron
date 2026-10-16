import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Target, 
  Eye, 
  Shirt, 
  Footprints, 
  Home as HomeIcon, 
  Briefcase, 
  Crown, 
  ShieldCheck, 
  Truck, 
  Clock, 
  CheckCircle2, 
  Smartphone, 
  CreditCard, 
  MapPin, 
  Calendar, 
  Star, 
  HeartHandshake, 
  Award, 
  Leaf, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  HelpCircle,
  PackageCheck
} from 'lucide-react';

import aboutHeroBg from '../assets/about_hero_bg.jpg';
import steamIronImg from '../assets/service_steam_iron.jpg';
import washFoldImg from '../assets/service_wash_fold.jpg';
import dryCleanImg from '../assets/service_dry_cleaning.jpg';
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
  AnimatedButton 
} from '../components/MotionSystem';

import './About.css';

export default function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const serviceCategories = [
    {
      title: 'Clothes Care',
      desc: 'Wrinkle-free steam pressing, everyday wash & fold, and starching.',
      img: steamIronImg,
      link: '/services#clothes-care'
    },
    {
      title: 'Footwear Cleaning',
      desc: 'Deep cleaning, deodorizing & restoration for sneakers and leather shoes.',
      img: footwearImg,
      link: '/services#footwear'
    },
    {
      title: 'Home Essentials',
      desc: 'Hygienic laundering for bedsheets, comforters, duvets & curtains.',
      img: homeEssentialsImg,
      link: '/services#home-essentials'
    },
    {
      title: 'Accessories Care',
      desc: 'Delicate care for luxury leather handbags, silk scarves & belts.',
      img: accessoriesImg,
      link: '/services#accessories'
    },
    {
      title: 'Special Garments',
      desc: 'Exclusive solvent dry cleaning for bridal lehengas, suits & silks.',
      img: dryCleanImg,
      link: '/services#special-garment'
    }
  ];

  const whyChooseUsPoints = [
    {
      icon: <Shirt size={24} />,
      title: 'Professional Garment Care',
      desc: 'Precision temperature soleplates ensure zero fabric scorching or shine marks on delicate wools and silks.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Doorstep Pickup & Delivery',
      desc: 'Punctual valet collection and return directly at your apartment or villa doorstep at your preferred hour.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Hygienic Cleaning Practices',
      desc: 'Dedicated wash batches with fabric sanitizers and germicidal steam disinfection for 100% skin safety.'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Transparent Pricing',
      desc: 'Clear, upfront itemized rates with zero surge pricing, weight rounding, or unexpected service fees.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Reliable Order Tracking',
      desc: 'Real-time SMS and dashboard status tracking from collection to steam pressing and out-for-delivery.'
    },
    {
      icon: <Leaf size={24} />,
      title: 'Careful Handling of Delicates',
      desc: 'Custom care labels, button protection shields, and anti-crease hanger packaging for luxury wardrobes.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Pickup & Inspection',
      desc: 'Our doorstep valet arrives with protective laundry totes to inspect tags, examine stains, and catalog your garments.',
      icon: <Calendar size={20} />
    },
    {
      num: '02',
      title: 'Fabric Sorting & Cleaning',
      desc: 'Clothes are separated by color and sensitivity. Processed in isolated drums using premium eco-safe detergents.',
      icon: <Leaf size={20} />
    },
    {
      num: '03',
      title: 'Steam Finishing & QC',
      desc: 'Commercial high-pressure micro-steam removes stubborn creases while 3-point inspection guarantees pristine output.',
      icon: <PackageCheck size={20} />
    },
    {
      num: '04',
      title: 'Doorstep Return',
      desc: 'Neatly folded in moisture-proof packaging or placed on custom hangers, delivered right back on schedule.',
      icon: <Truck size={20} />
    }
  ];

  const techFeatures = [
    {
      icon: <Smartphone size={22} />,
      title: 'Seamless Online Booking',
      desc: 'Book a pickup in under 60 seconds from your phone or desktop with flexible calendar time slots.'
    },
    {
      icon: <Clock size={22} />,
      title: 'Live Status Updates',
      desc: 'Automated SMS alerts notify you when your valet is on the way and when garments finish sanitization.'
    },
    {
      icon: <CreditCard size={22} />,
      title: 'Safe Digital Payments',
      desc: 'Pay easily via UPI, Google Pay, Credit/Debit cards, or Cash on Delivery after inspecting your clothes.'
    },
    {
      icon: <MapPin size={22} />,
      title: 'Smart Route Scheduling',
      desc: 'Optimized logistics guarantee 99.4% on-time pickup and prompt turnaround across all served localities.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      city: 'Hyderabad',
      role: 'Corporate Consultant',
      quote: 'The Steam Iron has completely freed up my weekends. The collar and cuff crispness on my formal work shirts is comparable to luxury hotel laundry!',
      rating: 5,
      image: priyaImg
    },
    {
      name: 'Vikramaditya Rao',
      city: 'Bangalore',
      role: 'Architect & Designer',
      quote: 'Sent two designer blazers and heavy silk sarees for dry cleaning. They arrived in dust covers, perfectly steam-pressed with zero shrinkage or odor. Highly dependable!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Ananya Deshmukh',
      city: 'Pune',
      role: 'Healthcare Professional',
      quote: 'What sets them apart is their hygiene guarantee. Knowing our family’s laundry is never mixed with anyone else’s clothes gives immense peace of mind.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Rajesh K. Varma',
      city: 'Hyderabad',
      role: 'Tech Lead, HITEC City',
      quote: 'I rely on their Express 8-hour turnaround for sudden client meetings. Clothes come back razor-sharp on hangers with zero scorch marks. Unbeatable consistency!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Meera Nambiar',
      city: 'Bangalore',
      role: 'Creative Director',
      quote: 'Their doorstep valet is always on time, courteous, and packs delicate woolens and linens with utmost respect. Truly premium laundry care for our home.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Siddharth Chopra',
      city: 'Pune',
      role: 'Fintech Founder',
      quote: 'Fair per-item pricing, real-time status updates via SMS, and impeccable steam press quality. They have completely replaced our household ironing hassles.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
    }
  ];

  const faqs = [
    {
      q: 'What is the standard turnaround time for steam ironing and laundry?',
      a: 'Our standard turnaround is 24 to 48 hours depending on your service tier. We also offer an Express Service with lightning-fast 6 to 12-hour same-day delivery.'
    },
    {
      q: 'Are there any doorstep pickup or delivery charges?',
      a: 'We offer free doorstep pickup and delivery on all standard orders above ₹299. For smaller orders, a nominal convenience fee of ₹40 applies.'
    },
    {
      q: 'How do you ensure delicate fabrics like silk and chiffon don’t get damaged?',
      a: 'Our steam iron stations use micro-filtered steam soleplates with precise digital temperature regulators. Silks and embroideries are pressed under Teflon protective shoe covers to eliminate burns or fabric shine.'
    },
    {
      q: 'Do you mix clothes with other customers during washing?',
      a: 'Never. We follow a strict hygiene protocol: each customer’s laundry is processed in dedicated, isolated washer drums with hospital-grade sanitizing rinses.'
    },
    {
      q: 'How can I track the live status of my laundry order?',
      a: 'Once your order is picked up, you receive an SMS with a direct tracking link displaying every milestone: Received, In-Wash, Steam Ironing, Packaging, and Out for Delivery.'
    }
  ];

  const coreValues = [
    { icon: <HeartHandshake size={20} />, title: 'Genuine Care', desc: 'Treating each fabric with tailored attention.' },
    { icon: <ShieldCheck size={20} />, title: 'Hygiene & Safety', desc: '100% segregated, sanitized batches.' },
    { icon: <Clock size={20} />, title: 'Punctual Reliability', desc: 'Doorstep pickup and return always on time.' },
    { icon: <CheckCircle2 size={20} />, title: 'Total Transparency', desc: 'No hidden charges or surprise line items.' },
    { icon: <Award size={20} />, title: 'Finishing Excellence', desc: 'Crisp, razor-sharp press every time.' }
  ];

  return (
    <PageTransition className="about-page">
      {/* 01. Hero Section */}
      <section 
        className="about-hero" 
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <ScrollReveal className="about-hero-content" yOffset={20}>
              <div className="hero-pill">
                <Sparkles size={14} />
                <span>ABOUT THE STEAM IRON</span>
              </div>
              <h1 className="about-hero-title">
                Redefining the Way You Care for Your Clothes
              </h1>
              <p className="about-hero-desc">
                Welcome to <strong>The Steam Iron</strong> — your modern garment grooming partner. We blend industrial-grade steam technology, fabric-specific care, and doorstep convenience to keep you looking crisp, clean, and confident every day.
              </p>
              <div className="about-hero-btns">
                <Link to="/services" className="btn-primary" style={{ padding: '13px 26px', fontSize: '1rem' }}>
                  Explore Our Services <ArrowRight size={18} />
                </Link>
                <Link to="/schedule" className="btn-outline" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', padding: '13px 26px', fontSize: '1rem' }}>
                  Schedule a Pickup
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02. Our Story */}
      <section className="container">
        <ScrollReveal>
          <div className="story-grid">
            <div className="story-text">
              <span className="section-badge">OUR FOUNDING STORY</span>
              <h2 className="section-title">A Better Way to Keep Your Clothes Fresh</h2>
              <p>
                For years, urban households faced the same weekend dilemma: spending precious leisure hours ironing piles of workwear, or relying on unorganized street vendors with coal irons that frequently burned delicate synthetics and ruined expensive silks.
              </p>
              <p>
                <strong>The Steam Iron</strong> was founded to solve this exact problem. We created a modern, professional laundry service designed around punctuality, modern steam engineering, and fabric hygiene.
              </p>
              <p>
                By combining commercial microprocessor-controlled steam stations with an intuitive doorstep valet system, we make crisp clothing completely effortless for working professionals, busy parents, and discerning individuals.
              </p>
            </div>

            <div className="story-stats-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#0f172a', marginBottom: 20 }}>
                The Challenges We Solved
              </h3>
              <div className="problem-solution-box">
                <div className="ps-item">
                  <div className="ps-icon-red"><AlertCircle size={20} /></div>
                  <div className="ps-content">
                    <h4>Old Way: Scorched Fabrics & Irregular Times</h4>
                    <p>Uncontrolled coal iron heat causing shiny burn marks, lost buttons, and uncertain delays.</p>
                  </div>
                </div>
                <div className="ps-item">
                  <div className="ps-icon-green"><CheckCircle2 size={20} /></div>
                  <div className="ps-content">
                    <h4>The Steam Iron Way: Precision Fabric Care</h4>
                    <p>Regulated temperature steam soleplates, digital tracking, and guaranteed on-time doorstep return.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 03. Mission & Vision */}
      <section className="container">
        <ScrollReveal>
          <div className="mv-grid">
            <AnimatedCard className="mv-card mission">
              <div className="mv-icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>
                To deliver reliable, hygienic, and convenient garment care through advanced steam technology, transparent customer communication, and spotless doorstep service — making laundry day completely stress-free.
              </p>
            </AnimatedCard>

            <AnimatedCard className="mv-card vision">
              <div className="mv-icon"><Eye size={28} /></div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted destination for premium laundry, steam ironing, and dry-cleaning services across modern urban communities, celebrated for fabric preservation and operational excellence.
              </p>
            </AnimatedCard>
          </div>
        </ScrollReveal>
      </section>

      {/* 04. Our Services at a Glance */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">SPECIALIZED CATEGORIES</span>
            <h2 className="section-title">Our Services at a Glance</h2>
            <p className="section-desc">
              Explore our curated garment and lifestyle fabric grooming categories, tailored to every wardrobe requirement.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="categories-grid">
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
                    <span className="cat-link">View Service <ArrowRight size={14} /></span>
                  </div>
                </AnimatedCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 05. Why Choose The Steam Iron? */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">THE ADVANTAGE</span>
            <h2 className="section-title">Why Choose The Steam Iron?</h2>
            <p className="section-desc">
              Engineered from the ground up to give your wardrobe the highest standards of safety, crispness, and convenience.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="why-grid">
          {whyChooseUsPoints.map((pt, idx) => (
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

      {/* 06. Our Cleaning Process (Horizontal 4-Step Animated Timeline) */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">SYSTEMATIC METHODOLOGY</span>
            <h2 className="section-title">Our 4-Step Cleaning & Ironing Process</h2>
            <p className="section-desc">
              Every garment passes through our transparent, quality-controlled 4-stage pipeline.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="timeline-track">
          {processSteps.map((step, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="timeline-step">
                <div className="timeline-header">
                  <span className="step-num-pill">{step.num}</span>
                  <span className="step-svg-icon">{step.icon}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 07. Quality & Hygiene Promise */}
      <section className="container">
        <ScrollReveal>
          <div className="promise-box">
            <div style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto' }}>
              <span style={{ 
                background: 'rgba(56, 189, 248, 0.2)', 
                color: '#38bdf8', 
                padding: '6px 16px', 
                borderRadius: 20, 
                fontSize: '0.8rem', 
                fontWeight: 700 
              }}>
                OUR UNCOMPROMISING STANDARD
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, marginTop: 12 }}>
                Quality & Hygiene Promise
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.98rem', marginTop: 8 }}>
                We follow rigorous procedures that protect fabric integrity and ensure optimal skin hygiene.
              </p>
            </div>

            <div className="promise-grid">
              <div className="promise-item">
                <div className="promise-item-icon"><ShieldCheck size={22} /></div>
                <div>
                  <h4>Zero Garment Mixing</h4>
                  <p>Every customer’s laundry is washed and treated in isolated cycles. Your clothes are never mixed with anyone else’s.</p>
                </div>
              </div>

              <div className="promise-item">
                <div className="promise-item-icon"><Leaf size={22} /></div>
                <div>
                  <h4>Allergen-Safe & Eco Detergents</h4>
                  <p>We use gentle, pH-balanced organic solutions that soften fibers without harsh chlorine, skin irritants, or strong artificial odors.</p>
                </div>
              </div>

              <div className="promise-item">
                <div className="promise-item-icon"><PackageCheck size={22} /></div>
                <div>
                  <h4>3-Point Pre-Delivery Inspection</h4>
                  <p>Before packaging, our fabric supervisor checks button integrity, seam press lines, and stain clearance. Repressed if not 100% crisp.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 08. Customer Convenience & Technology */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">SMART TECH</span>
          <h2 className="section-title">Customer Convenience & Technology</h2>
          <p className="section-desc">
            Technology designed to make laundry fit naturally into your busy lifestyle.
          </p>
        </div>

        <div className="tech-grid">
          {techFeatures.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-icon-wrap">{tech.icon}</div>
              <h4>{tech.title}</h4>
              <p>{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 09. Customer Testimonials */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">CUSTOMER STORIES</span>
          <h2 className="section-title">Real Feedback from Real Customers</h2>
          <p className="section-desc">
            See how our crisp steam ironing and dependable doorstep service has won customer trust.
          </p>
        </div>

        <div className="reviews-grid">
          {testimonials.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="review-verified-badge">✓ Verified Order</span>
              </div>
              <p className="review-quote">"{rev.quote}"</p>
              <div className="reviewer-profile">
                <img src={rev.image} alt={rev.name} className="reviewer-img" />
                <div>
                  <div className="reviewer-name">{rev.name}</div>
                  <div className="reviewer-city">{rev.role ? `${rev.role} • ` : ''}{rev.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">OUR FOUNDATIONAL PILLARS</span>
          <h2 className="section-title">The Values That Guide Every Press</h2>
        </div>

        <div className="values-grid">
          {coreValues.map((val, idx) => (
            <div key={idx} className="val-pill-card">
              <div className="val-icon">{val.icon}</div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage & FAQs */}
      <section className="container">
        <div className="coverage-faq-grid">
          {/* Coverage & Contact */}
          <div className="coverage-box">
            <span className="section-badge">WHERE WE SERVE</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#0f172a', marginTop: 8 }}>
              Active Service Coverage
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: 6 }}>
              We currently operate dedicated doorstep collection hubs across major urban zones:
            </p>

            <div className="city-tags">
              <span className="city-tag">Hyderabad (Hitec City, Gachibowli, Kondapur)</span>
              <span className="city-tag">Bangalore (Indiranagar, Koramangala, Whitefield)</span>
              <span className="city-tag">Pune (Kalyani Nagar, Viman Nagar, Hinjewadi)</span>
            </div>

            <div style={{ marginTop: 24, padding: 18, background: '#f8fafc', borderRadius: 16 }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: '#0f172a', marginBottom: 6 }}>
                Need help or custom arrangements?
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.84rem' }}>
                Call our support desk at <strong style={{ color: '#0265d2' }}>+91 98765 43210</strong> (7 AM - 9 PM) or email <strong style={{ color: '#0265d2' }}>support@thesteamiron.com</strong>.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <span className="section-badge">FREQUENT QUESTIONS</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#0f172a', marginTop: 8, marginBottom: 18 }}>
              Frequently Asked Questions
            </h3>

            <div className="faq-list">
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
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="container">
        <div className="about-final-cta">
          <h2>Your Laundry Day, Made Effortless.</h2>
          <p>
            Experience the crisp luxury of professionally steam-ironed clothes delivered right back to your door. Book your collection in seconds.
          </p>
          <div className="cta-action-row">
            <Link to="/schedule" className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 30px', fontSize: '1.05rem', fontWeight: 700 }}>
              Book a Pickup <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 28px', fontSize: '1.05rem' }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

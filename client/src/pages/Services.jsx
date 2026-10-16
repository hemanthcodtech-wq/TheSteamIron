import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Shirt, 
  Footprints, 
  Home as HomeIcon, 
  Briefcase, 
  Crown, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Flame, 
  PackageCheck, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  HelpCircle,
  Check
} from 'lucide-react';

import heroImg from '../assets/hero_iron.jpg';
import washFoldImg from '../assets/service_wash_fold.jpg';
import steamIronImg from '../assets/service_steam_iron.jpg';
import dryCleanImg from '../assets/service_dry_cleaning.jpg';
import expressImg from '../assets/service_express.jpg';
import footwearImg from '../assets/cat_footwear.jpg';
import homeEssentialsImg from '../assets/cat_home_essentials.jpg';
import accessoriesImg from '../assets/cat_accessories.jpg';

import { 
  PageTransition, 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard, 
  AnimatedButton 
} from '../components/MotionSystem';

import './Services.css';

export default function Services() {
  // Active Category Filter Tab
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'clothes' | 'footwear' | 'home' | 'accessories' | 'special'

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // 02. Browse by Category Config
  const categoryCards = [
    { id: 'clothes', title: 'Clothes Care', desc: 'Wash & fold, steam pressing, and formal wear.', img: steamIronImg },
    { id: 'footwear', title: 'Footwear Care', desc: 'Sneakers, sports shoes, and leather restoration.', img: footwearImg },
    { id: 'home', title: 'Home Essentials', desc: 'Bedsheets, duvets, blankets & window drapes.', img: homeEssentialsImg },
    { id: 'accessories', title: 'Accessories Care', desc: 'Handbags, silk scarves, belts, and caps.', img: accessoriesImg },
    { id: 'special', title: 'Special Garments', desc: 'Bridal wear, suits, blazers & pure silk sarees.', img: dryCleanImg }
  ];

  // 03. Clothes Care Services
  const clothesServices = [
    {
      title: 'Wash & Fold',
      desc: 'Everyday clothing washed in segregated machines with gentle detergents and neatly squared for wardrobe storage.',
      price: '₹99',
      unit: 'per kg',
      turnaround: '24–48 hours',
      tag: 'Everyday',
      image: washFoldImg
    },
    {
      title: 'Wash & Iron',
      desc: 'Cleaned with hypoallergenic conditioners and finished with high-pressure steam soleplate pressing.',
      price: '₹45',
      unit: 'per item',
      turnaround: '24–48 hours',
      tag: 'Full Service',
      image: heroImg
    },
    {
      title: 'Professional Steam Ironing',
      desc: 'Wrinkle reduction and razor-sharp crease finish without burning delicate fabrics or producing shiny marks.',
      price: '₹20',
      unit: 'per item',
      turnaround: '24–48 hours',
      tag: 'Best Seller',
      image: steamIronImg
    },
    {
      title: 'Delicate Dry Cleaning',
      desc: 'Specialized organic solvent treatment for formal blazers, gowns, suits, and sensitive fabric blends.',
      price: '₹149',
      unit: 'per item',
      turnaround: '48–72 hours',
      tag: 'Gentle Care',
      image: dryCleanImg
    },
    {
      title: 'Targeted Stain Treatment',
      desc: 'Precision pre-spotting for eligible stubborn stains (coffee, food oil, wine, collar grime) prior to cleaning.',
      price: 'Included / Free',
      unit: 'per order',
      turnaround: 'Same as service',
      tag: 'Stain Care',
      image: heroImg
    },
    {
      title: 'Delicate Garment Care',
      desc: 'Special low-temperature handling under Teflon shoe covers for georgette, organza, and fine knitwear.',
      price: '₹90',
      unit: 'per piece',
      turnaround: '48 hours',
      tag: 'Couture',
      image: accessoriesImg
    }
  ];

  // 04. Footwear Care Services
  const footwearServices = [
    {
      title: 'Sneaker Deep Cleaning',
      desc: 'Midsole scrubbing, upper foam treatment, lace brightening, and deodorization for canvas, mesh, and knit sneakers.',
      price: '₹249',
      unit: 'per pair',
      turnaround: '48 hours',
      tag: 'Sneaker Spa',
      image: footwearImg,
      method: 'Ultrasonic foam extraction, anti-microbial UV sterilization.',
      limit: 'Not suitable for severely dry-rotted vintage midsoles.'
    },
    {
      title: 'Sports & Running Shoes',
      desc: 'Dirt removal, sweat extraction, deodorizing sanitization, and tread cleansing for performance footwear.',
      price: '₹249',
      unit: 'per pair',
      turnaround: '48 hours',
      tag: 'Sport Care',
      image: footwearImg,
      method: 'High-power air drying and fabric rejuvenation.',
      limit: 'Severe rubber delamination must be fixed by cobbler.'
    },
    {
      title: 'Formal Leather Shoes',
      desc: 'Deep surface dirt cleaning, cream hydration, color nourishment, and buffed wax shine for dress oxfords and brogues.',
      price: '₹299',
      unit: 'per pair',
      turnaround: '48 hours',
      tag: 'Leather Polish',
      image: footwearImg,
      method: 'Natural beeswax nourishers and horsehair hand buffing.',
      limit: 'Suede and nubuck require specialized velvet brush care.'
    },
    {
      title: 'Sandals & Slippers Cleaning',
      desc: 'Footbed scrub, strap sanitization, and sole freshening for leather, cork, and rubber lifestyle sandals.',
      price: '₹179',
      unit: 'per pair',
      turnaround: '48 hours',
      tag: 'Sanitized',
      image: footwearImg,
      method: 'Gentle antibacterial foaming and natural room-temp curing.',
      limit: 'Severe cork cracking can only be superficially conditioned.'
    }
  ];

  // 05. Home Essentials Services
  const homeServices = [
    {
      title: 'Bedsheets & Pillowcases',
      desc: 'Hygienic high-temp thermal washing and large-roller steam ironing for single and double cotton/linen bed sets.',
      price: '₹90',
      unit: 'per set (Sheet + 2 Pillows)',
      turnaround: '48 hours',
      tag: 'Sanitized',
      image: homeEssentialsImg
    },
    {
      title: 'Blankets & Heavy Quilts',
      desc: 'Deep drum wash with dust-mite eradication and fiber-softening tumble dry for plush mink and fleece blankets.',
      price: '₹249',
      unit: 'per piece',
      turnaround: '48–72 hours',
      tag: 'Deep Wash',
      image: homeEssentialsImg
    },
    {
      title: 'Curtains & Drapes Care',
      desc: 'Gentle dust extraction and steam pressing to restore vertical pleats without shrinking hem dimensions.',
      price: '₹140',
      unit: 'per panel',
      turnaround: '48 hours',
      tag: 'Home Care',
      image: homeEssentialsImg
    },
    {
      title: 'Plush Bath Towels Batch',
      desc: 'Disinfectant hygienic rinse that fluffs fiber terry loops and eliminates musty damp odors completely.',
      price: '₹99',
      unit: 'per kg',
      turnaround: '24–48 hours',
      tag: 'Fluffy Clean',
      image: washFoldImg
    },
    {
      title: 'Duvets & Down Comforters',
      desc: 'Even-fill down distribution washing and low-heat hypoallergenic drying for lightweight feather comforters.',
      price: '₹299',
      unit: 'per duvet',
      turnaround: '48–72 hours',
      tag: 'Comforter Care',
      image: homeEssentialsImg
    }
  ];

  // 06. Accessories & Special Care Services
  const accessoriesServices = [
    {
      title: 'Designer Handbags & Backpacks',
      desc: 'Interior vacuuming, lining wipe, exterior leather/canvas conditioning, and metal hardware brightening.',
      price: '₹499',
      unit: 'per bag',
      turnaround: '72 hours',
      tag: 'Luxury Spa',
      image: accessoriesImg,
      condition: 'Availability depends on leather grade and structural condition.'
    },
    {
      title: 'Fabric Caps, Hats & Belts',
      desc: 'Shape-retaining sweatband cleansing, brim restoration, and leather belt edge touch-up.',
      price: '₹120',
      unit: 'per item',
      turnaround: '48 hours',
      tag: 'Accessories',
      image: accessoriesImg,
      condition: 'Cardboard brim caps cleaned with dry moisture foam only.'
    },
    {
      title: 'Suits, Blazers & Tuxedos',
      desc: 'Multi-stage organic solvent dry-cleaning, lapel shaping, chest piece revival, and shoulder pad alignment.',
      price: '₹280',
      unit: 'per 2-piece suit',
      turnaround: '48–72 hours',
      tag: 'Executive',
      image: dryCleanImg,
      condition: '100% pure wool, cashmere, and blended tuxedos supported.'
    },
    {
      title: 'Bridal Sarees & Occasion Wear',
      desc: 'Expert care for Kanjeevaram silks, Banarasi brocades, and designer embroidered lehengas.',
      price: '₹350',
      unit: 'starting per piece',
      turnaround: '72 hours',
      tag: 'Couture',
      image: dryCleanImg,
      condition: 'Hand-sewn zari and stone embroidery handled under protective covers.'
    }
  ];

  // 07. Popular Services Highlight
  const popularHighlights = [
    {
      name: 'Steam Ironing (Daily Shirts/Trousers)',
      price: '₹20',
      unit: 'per item',
      turnaround: '24–48h (or 6–12h Express)',
      img: steamIronImg
    },
    {
      name: 'Wash & Fold Everyday Laundry',
      price: '₹99',
      unit: 'per kg',
      turnaround: '24–48 hours',
      img: washFoldImg
    },
    {
      name: 'Men’s 2-Piece Formal Suit',
      price: '₹280',
      unit: 'per suit',
      turnaround: '48 hours',
      img: dryCleanImg
    },
    {
      name: 'Sneakers & Sports Shoes Care',
      price: '₹249',
      unit: 'per pair',
      turnaround: '48 hours',
      img: footwearImg
    }
  ];

  // 08. How to Book a Service Steps
  const bookingSteps = [
    { num: '01', title: '1. Choose Your Category', desc: 'Select from Clothes, Footwear, Home Essentials, Accessories, or Special Care.' },
    { num: '02', title: '2. Select Service & Items', desc: 'Pick steam ironing, wash & fold, or dry cleaning and indicate estimated count.' },
    { num: '03', title: '3. Choose Address & Slot', desc: 'Enter your doorstep pickup location and select your convenient 3-hour window.' },
    { num: '04', title: '4. Confirm & Track', desc: 'Follow real-time status updates via SMS from doorstep collection to return.' }
  ];

  // 09. Our Care Process Steps
  const careProcessList = [
    { icon: <Search size={22} />, title: 'Intake & Fabric Inspection', desc: 'Careful check for care tags, fabric sensitivity, existing stains, and tears before sorting.' },
    { icon: <Layers size={22} />, title: 'Fabric-Appropriate Cleaning', desc: 'Individual washer batches using pH-balanced hypoallergenic detergents suited to fiber type.' },
    { icon: <Flame size={22} />, title: 'High-Pressure Steam Finishing', desc: 'Micro-filtered dry steam soleplates remove creases cleanly without fabric burn or shine.' },
    { icon: <PackageCheck size={22} />, title: 'Supervisory QC & Packaging', desc: 'Final check for seam press sharpness and packing in breathable dust-proof garment bags.' }
  ];

  // 11. FAQs
  const serviceFaqs = [
    {
      q: 'Which laundry service should I choose?',
      a: 'Choose Wash & Fold for daily clothes (t-shirts, shorts, pajamas, gym wear). Choose Steam Ironing for crisp business shirts, trousers, and sarees. Choose Dry Cleaning for delicate fabrics, suits, blazers, and silks.'
    },
    {
      q: 'What is the difference between wash & iron and dry cleaning?',
      a: 'Wash & Iron uses water, hypoallergenic soap, and steam soleplates for washable garments. Dry Cleaning uses gentle organic solvents instead of water to protect structured jackets, silks, and wools from shrinkage and fiber distortion.'
    },
    {
      q: 'How are prices calculated?',
      a: 'Wash & Fold is weighed by the kilogram (starting at ₹99/kg). Steam Ironing and Dry Cleaning are priced per garment piece. All prices include taxes with zero hidden fees.'
    },
    {
      q: 'Can I book multiple categories in one single order?',
      a: 'Yes, absolutely! You can combine shirts for steam ironing, home bedsheets, sneakers, and suits for dry cleaning in one scheduled doorstep pickup. Our valet tags each category individually.'
    },
    {
      q: 'How long does each service take?',
      a: 'Standard services take 24 to 48 hours. Shoe cleaning and heavy dry-cleaning take 48 to 72 hours. We also provide a same-day Express option with 6 to 12-hour turnaround.'
    },
    {
      q: 'Can you treat delicate garments like silk and organza?',
      a: 'Yes. Our steam iron soleplates feature digital temperature controls and Teflon protective shoes specifically designed to press pure silks, organzas, and chiffons without burning or fabric shine.'
    },
    {
      q: 'How do I track my order?',
      a: 'Once collected by our courier, you receive an SMS with a live tracking link displaying each phase: Received, In-Wash, Steam Pressing, Packaging, and Out for Delivery.'
    }
  ];

  return (
    <PageTransition className="services-page">
      {/* 01. Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-grid">
            <ScrollReveal className="services-hero-content" yOffset={20}>
              <span className="section-badge">
                <Sparkles size={14} /> FULL FABRIC SPECTRUM
              </span>
              <h1 className="services-hero-title">
                Complete Garment Care, <br />
                <span className="text-gradient">All in One Place</span>
              </h1>
              <p className="services-hero-desc">
                From everyday washing and expert ironing to delicate dry cleaning, The Steam Iron keeps your clothes and essentials fresh, clean, and ready to wear.
              </p>
              <div className="services-hero-ctas">
                <a href="#category-browse" className="btn-primary" style={{ padding: '13px 28px', fontSize: '1rem' }}>
                  Explore Services <ArrowRight size={18} />
                </a>
                <Link to="/schedule" className="btn-outline">
                  Schedule a Pickup
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="services-hero-visual" yOffset={25}>
              <img src={heroImg} alt="Crisp steam ironed clothes" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02. Browse by Category */}
      <section className="container" id="category-browse">
        <ScrollReveal className="text-center max-w-700">
          <span className="section-badge">WARDROBE DIVISIONS</span>
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-desc">
            Choose a category to explore dedicated fabric care, footwear spa, and household textiles.
          </p>
        </ScrollReveal>

        {/* Horizontal Category Filter Strip (Scrollable on mobile) */}
        <div className="categories-filter-strip" style={{ marginTop: 24 }}>
          <button 
            className={`category-pill-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Sparkles size={16} /> All Services
          </button>
          <button 
            className={`category-pill-btn ${activeTab === 'clothes' ? 'active' : ''}`}
            onClick={() => setActiveTab('clothes')}
          >
            <Shirt size={16} /> Clothes Care
          </button>
          <button 
            className={`category-pill-btn ${activeTab === 'footwear' ? 'active' : ''}`}
            onClick={() => setActiveTab('footwear')}
          >
            <Footprints size={16} /> Footwear Care
          </button>
          <button 
            className={`category-pill-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <HomeIcon size={16} /> Home Essentials
          </button>
          <button 
            className={`category-pill-btn ${activeTab === 'accessories' ? 'active' : ''}`}
            onClick={() => setActiveTab('accessories')}
          >
            <Briefcase size={16} /> Accessories Care
          </button>
          <button 
            className={`category-pill-btn ${activeTab === 'special' ? 'active' : ''}`}
            onClick={() => setActiveTab('special')}
          >
            <Crown size={16} /> Special Garment Care
          </button>
        </div>

        {/* Visual Category Showcase Cards */}
        <StaggerContainer className="category-showcase-grid">
          {categoryCards.map((cat) => (
            <StaggerItem key={cat.id}>
              <AnimatedCard 
                className={`cat-showcase-card ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(cat.id);
                  const section = document.getElementById(`section-${cat.id}`);
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="cat-showcase-img">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <div className="cat-showcase-body">
                  <h4 className="cat-showcase-title">{cat.title}</h4>
                  <p className="cat-showcase-desc">{cat.desc}</p>
                  <span className="cat-showcase-action">
                    Explore Category <ArrowRight size={14} />
                  </span>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 03. Clothes Care Services */}
      {(activeTab === 'all' || activeTab === 'clothes') && (
        <section className="container" id="section-clothes">
          <div className="text-center max-w-700">
            <span className="section-badge">WARDROBE ESSENTIALS</span>
            <h2 className="section-title">Clothes Care Services</h2>
            <p className="section-desc">
              Everyday shirts, trousers, jeans, and workwear pressed and washed with zero fabric scorching.
            </p>
          </div>

          <StaggerContainer className="service-cards-section-grid">
            {clothesServices.map((svc, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="svc-detail-card">
                  <div className="svc-detail-img">
                    <img src={svc.image} alt={svc.title} />
                    <span className="svc-badge-tag">{svc.tag}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h4 className="svc-detail-title">{svc.title}</h4>
                    <p className="svc-detail-desc">{svc.desc}</p>
                    <div className="svc-detail-rate">
                      <span className="svc-price-num">{svc.price}</span>
                      <span className="svc-unit-label">/ {svc.unit}</span>
                    </div>
                    <div className="svc-turnaround-badge">
                      <Clock size={14} /> Turnaround: {svc.turnaround}
                    </div>
                    <Link to="/schedule" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* 04. Footwear Care */}
      {(activeTab === 'all' || activeTab === 'footwear') && (
        <section className="container" id="section-footwear">
          <div className="text-center max-w-700">
            <span className="section-badge">SHOES & SNEAKERS</span>
            <h2 className="section-title">Footwear Care & Restoration</h2>
            <p className="section-desc">
              Professional shoe laundry: deep cleaning, foam extraction, and leather conditioning.
            </p>
          </div>

          <div className="service-cards-section-grid">
            {footwearServices.map((svc, idx) => (
              <div key={idx} className="svc-detail-card">
                <div className="svc-detail-img">
                  <img src={svc.image} alt={svc.title} />
                  <span className="svc-badge-tag">{svc.tag}</span>
                </div>
                <div className="svc-detail-body">
                  <h4 className="svc-detail-title">{svc.title}</h4>
                  <p className="svc-detail-desc">{svc.desc}</p>
                  <div style={{ fontSize: '0.78rem', color: '#0265d2', marginBottom: 6 }}>
                    <strong>Method:</strong> {svc.method}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginBottom: 14 }}>
                    <strong>Note:</strong> {svc.limit}
                  </div>
                  <div className="svc-detail-rate">
                    <span className="svc-price-num">{svc.price}</span>
                    <span className="svc-unit-label">/ {svc.unit}</span>
                  </div>
                  <div className="svc-turnaround-badge">
                    <Clock size={14} /> Turnaround: {svc.turnaround}
                  </div>
                  <Link to="/schedule" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    Book Shoe Care <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 05. Home Essentials */}
      {(activeTab === 'all' || activeTab === 'home') && (
        <section className="container" id="section-home">
          <div className="text-center max-w-700">
            <span className="section-badge">HOUSEHOLD TEXTILES</span>
            <h2 className="section-title">Home Essentials & Bedding</h2>
            <p className="section-desc">
              Hygienic high-capacity wash and steam press for bedding, heavy comforters, and curtains.
            </p>
          </div>

          <div className="service-cards-section-grid">
            {homeServices.map((svc, idx) => (
              <div key={idx} className="svc-detail-card">
                <div className="svc-detail-img">
                  <img src={svc.image} alt={svc.title} />
                  <span className="svc-badge-tag">{svc.tag}</span>
                </div>
                <div className="svc-detail-body">
                  <h4 className="svc-detail-title">{svc.title}</h4>
                  <p className="svc-detail-desc">{svc.desc}</p>
                  <div className="svc-detail-rate">
                    <span className="svc-price-num">{svc.price}</span>
                    <span className="svc-unit-label">/ {svc.unit}</span>
                  </div>
                  <div className="svc-turnaround-badge">
                    <Clock size={14} /> Turnaround: {svc.turnaround}
                  </div>
                  <Link to="/schedule" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    Book Linen Wash <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 06. Accessories & Special Care */}
      {(activeTab === 'all' || activeTab === 'accessories' || activeTab === 'special') && (
        <section className="container" id="section-accessories">
          <div className="text-center max-w-700">
            <span className="section-badge">LUXURY & COUTURE</span>
            <h2 className="section-title">Accessories & Special Garment Care</h2>
            <p className="section-desc">
              Delicate organic solvent dry cleaning for tailored suits, designer bags, pure silks, and bridal wear.
            </p>
          </div>

          <div className="service-cards-section-grid">
            {accessoriesServices.map((svc, idx) => (
              <div key={idx} className="svc-detail-card">
                <div className="svc-detail-img">
                  <img src={svc.image} alt={svc.title} />
                  <span className="svc-badge-tag">{svc.tag}</span>
                </div>
                <div className="svc-detail-body">
                  <h4 className="svc-detail-title">{svc.title}</h4>
                  <p className="svc-detail-desc">{svc.desc}</p>
                  <div style={{ fontSize: '0.78rem', color: '#0284c7', marginBottom: 14 }}>
                    <strong>Requirement:</strong> {svc.condition}
                  </div>
                  <div className="svc-detail-rate">
                    <span className="svc-price-num">{svc.price}</span>
                    <span className="svc-unit-label">/ {svc.unit}</span>
                  </div>
                  <div className="svc-turnaround-badge">
                    <Clock size={14} /> Turnaround: {svc.turnaround}
                  </div>
                  <Link to="/schedule" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    Book Special Care <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 07. Popular Services & Pricing */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">FREQUENTLY BOOKED</span>
          <h2 className="section-title">Popular Services & Pricing</h2>
          <p className="section-desc">
            Quick access to our highest rated day-to-day fabric grooming choices.
          </p>
        </div>

        <div className="service-cards-section-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {popularHighlights.map((pop, idx) => (
            <div key={idx} className="svc-detail-card">
              <div className="svc-detail-img" style={{ height: 140 }}>
                <img src={pop.img} alt={pop.name} />
              </div>
              <div className="svc-detail-body">
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>
                  {pop.name}
                </h4>
                <div className="svc-detail-rate" style={{ marginBottom: 6 }}>
                  <span className="svc-price-num" style={{ fontSize: '1.4rem' }}>{pop.price}</span>
                  <span className="svc-unit-label">/ {pop.unit}</span>
                </div>
                <div className="svc-turnaround-badge" style={{ marginBottom: 14 }}>
                  <Clock size={14} /> {pop.turnaround}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 'auto' }}>
                  <Link to="/pricing" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 10px', justifyContent: 'center' }}>
                    View Price
                  </Link>
                  <Link to="/schedule" className="btn-primary" style={{ fontSize: '0.8rem', padding: '8px 10px', justifyContent: 'center' }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/pricing" className="btn-outline" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
            View Full Price Directory & Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 08. How to Book a Service */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">FOUR EASY STEPS</span>
          <h2 className="section-title">How to Book a Service</h2>
          <p className="section-desc">
            A frictionless booking experience designed for busy lifestyles.
          </p>
        </div>

        <div className="how-to-book-strip">
          {bookingSteps.map((st, idx) => (
            <div key={idx} className="book-step-card">
              <div className="book-step-num">{st.num}</div>
              <h4>{st.title}</h4>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/schedule" className="btn-primary" style={{ padding: '13px 30px', fontSize: '1rem' }}>
            Start Your Booking <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 09. Our Care Process */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">METICULOUS WORKFLOW</span>
          <h2 className="section-title">Our Garment Care Process</h2>
          <p className="section-desc">
            How our master pressers and fabric specialists handle every garment.
          </p>
        </div>

        <div className="care-process-grid">
          {careProcessList.map((cp, idx) => (
            <div key={idx} className="qc-card">
              <div className="qc-icon-wrap">{cp.icon}</div>
              <h4>{cp.title}</h4>
              <p>{cp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Doorstep Pickup & Delivery */}
      <section className="container">
        <div className="logistics-details-box">
          <div>
            <span className="section-badge">DOORSTEP LOGISTICS</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
              Doorstep Pickup & Delivery
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '8px 0 24px' }}>
              We bring laundry care straight to your door. Enjoy scheduled valet collection, live status SMS alerts, and prompt returns.
            </p>
            <Link to="/schedule" className="btn-primary">
              Check Service Availability <ArrowRight size={16} />
            </Link>
          </div>

          <div className="logistics-features">
            <div className="log-feat-item">
              <div className="log-feat-icon"><Truck size={20} /></div>
              <div>
                <h4>Supported Locations</h4>
                <p>Hyderabad, Bangalore, and Pune with dedicated neighborhood valet hubs.</p>
              </div>
            </div>

            <div className="log-feat-item">
              <div className="log-feat-icon"><Clock size={20} /></div>
              <div>
                <h4>Available Time Slots</h4>
                <p>Morning (8–11 AM), Afternoon (12–3 PM), and Evening (5–8 PM) slots.</p>
              </div>
            </div>

            <div className="log-feat-item">
              <div className="log-feat-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Free Delivery Above ₹299</h4>
                <p>Zero delivery charges on all regular orders meeting our threshold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions */}
      <section className="container">
        <ScrollReveal className="text-center max-w-700">
          <span className="section-badge">COMMON INQUIRIES</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about fabric care options, pricing, and tracking.
          </p>
        </ScrollReveal>

        <div className="services-faqs-wrap">
          {serviceFaqs.map((faq, idx) => (
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

      {/* 12. Final CTA */}
      <section className="container">
        <ScrollReveal yOffset={25} className="services-final-cta">
          <h2>Your Clothes Deserve the Best Care.</h2>
          <p>
            Choose your service, schedule a pickup, and leave the laundry to us. Experience the crisp confidence of professionally steam-ironed clothes.
          </p>
          <div className="services-cta-row">
            <Link to="/schedule" className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 28px', fontWeight: 700 }}>
              Schedule a Pickup <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 26px' }}>
              View Pricing
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}

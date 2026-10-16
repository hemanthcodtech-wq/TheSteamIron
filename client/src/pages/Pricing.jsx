import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  Clock, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Check, 
  ShieldCheck, 
  Truck, 
  AlertCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Tag, 
  DollarSign,
  Shirt,
  Footprints,
  Home as HomeIcon,
  Briefcase,
  Crown
} from 'lucide-react';

import steamIronImg from '../assets/service_steam_iron.jpg';
import washFoldImg from '../assets/service_wash_fold.jpg';
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

import './Pricing.css';

export default function Pricing() {
  const navigate = useNavigate();

  // 02. Active Category for filtering
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 04. Search & filter in item list
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceTypeFilter, setServiceTypeFilter] = useState('all');
  const [sortByPrice, setSortByPrice] = useState('none');

  // 07. Order Builder items state
  const [cartQuantities, setCartQuantities] = useState({
    'shirt-steam': 2,
    'jeans-steam': 1,
    'wash-fold-kg': 3,
    'suit-dry-clean': 0,
    'shoes-clean': 0,
    'bedsheet-steam': 0
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Categories list
  const categoryTabs = [
    { id: 'all', label: 'All Services', icon: <Sparkles size={16} /> },
    { id: 'clothes', label: 'Clothes', icon: <Shirt size={16} /> },
    { id: 'footwear', label: 'Footwear', icon: <Footprints size={16} /> },
    { id: 'home', label: 'Home Essentials', icon: <HomeIcon size={16} /> },
    { id: 'accessories', label: 'Accessories', icon: <Briefcase size={16} /> },
    { id: 'special', label: 'Special Care', icon: <Crown size={16} /> }
  ];

  // 03. Detailed Services list
  const detailedServices = [
    {
      id: 'steam-iron',
      category: 'clothes',
      name: 'Steam Ironing',
      desc: 'High-pressure commercial micro-steam for crisp, wrinkle-free business attire & formals.',
      price: '₹20',
      unit: 'per piece',
      turnaround: '24–48 hours',
      tag: 'Best Seller',
      img: steamIronImg,
      builderKey: 'shirt-steam'
    },
    {
      id: 'wash-fold',
      category: 'clothes',
      name: 'Wash & Fold Laundry',
      desc: 'Segregated individual machine wash with hypoallergenic detergent & neat folding.',
      price: '₹99',
      unit: 'per kg',
      turnaround: '24–48 hours',
      tag: 'Eco Wash',
      img: washFoldImg,
      builderKey: 'wash-fold-kg'
    },
    {
      id: 'dry-clean',
      category: 'special',
      name: 'Delicate Dry Cleaning',
      desc: 'Eco-safe organic solvents for designer suits, blazers, silks, and evening gowns.',
      price: '₹149',
      unit: 'starting per piece',
      turnaround: '48–72 hours',
      tag: 'Gentle Care',
      img: dryCleanImg,
      builderKey: 'suit-dry-clean'
    },
    {
      id: 'express',
      category: 'clothes',
      name: 'Express Same-Day Turnaround',
      desc: 'Lightning fast priority line processing returned right to your doorstep within 6 to 12 hours.',
      price: '+30%',
      unit: 'on standard service',
      turnaround: '6–12 hours',
      tag: 'Superfast',
      img: expressImg
    },
    {
      id: 'footwear-clean',
      category: 'footwear',
      name: 'Sneaker & Shoe Care',
      desc: 'Deep ultrasonic sole wash, leather hydration conditioning, and microbial deodorization.',
      price: '₹249',
      unit: 'per pair',
      turnaround: '48 hours',
      tag: 'Restoration',
      img: footwearImg,
      builderKey: 'shoes-clean'
    },
    {
      id: 'home-textiles',
      category: 'home',
      name: 'Bedding & Home Essentials',
      desc: 'Hygienic high-capacity wash for duvets, thick blankets, bedsheets, and window drapes.',
      price: '₹149',
      unit: 'per set / piece',
      turnaround: '48 hours',
      tag: 'Sanitized',
      img: homeEssentialsImg,
      builderKey: 'bedsheet-steam'
    },
    {
      id: 'accessories-spa',
      category: 'accessories',
      name: 'Luxury Accessories Spa',
      desc: 'Handcrafted cleaning, edge touch-up, and nourishment for leather bags & silk scarves.',
      price: '₹349',
      unit: 'per item',
      turnaround: '72 hours',
      tag: 'Luxury',
      img: accessoriesImg
    }
  ];

  // Filtered detailed services based on selected category tab
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return detailedServices;
    return detailedServices.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  // 04. Searchable Item-Wise Price List
  const itemWiseList = [
    { name: 'Formal Shirt / Casual T-Shirt', category: 'clothes', service: 'Steam Ironing', price: 20, unit: 'per item' },
    { name: 'Formal Shirt / Casual T-Shirt', category: 'clothes', service: 'Wash & Iron', price: 45, unit: 'per item' },
    { name: 'Jeans / Formal Trousers', category: 'clothes', service: 'Steam Ironing', price: 25, unit: 'per item' },
    { name: 'Jeans / Formal Trousers', category: 'clothes', service: 'Wash & Iron', price: 55, unit: 'per item' },
    { name: 'Kurta / Pyjama Set', category: 'clothes', service: 'Steam Ironing', price: 30, unit: 'per set' },
    { name: 'Traditional Cotton / Silk Saree', category: 'clothes', service: 'Steam Ironing', price: 60, unit: 'per item' },
    { name: 'Daily Mixed Wear Laundry', category: 'clothes', service: 'Wash & Fold', price: 99, unit: 'per kg' },
    { name: '2-Piece Men’s Formal Suit', category: 'special', service: 'Dry Cleaning', price: 280, unit: 'per suit' },
    { name: 'Blazer / Winter Coat', category: 'special', service: 'Dry Cleaning', price: 180, unit: 'per piece' },
    { name: 'Bridal / Heavy Embroidered Saree', category: 'special', service: 'Dry Cleaning', price: 350, unit: 'per piece' },
    { name: 'Sneakers (Canvas / Sport)', category: 'footwear', service: 'Shoe Spa', price: 249, unit: 'per pair' },
    { name: 'Formal Leather Oxford Shoes', category: 'footwear', service: 'Leather Care', price: 299, unit: 'per pair' },
    { name: 'Double Bedsheet + 2 Pillow Covers', category: 'home', service: 'Wash & Iron', price: 90, unit: 'per set' },
    { name: 'Heavy Blanket / Quilt / Comforter', category: 'home', service: 'Deep Sanitization', price: 249, unit: 'per piece' },
    { name: 'Designer Leather Handbag', category: 'accessories', service: 'Restoration', price: 499, unit: 'per item' },
    { name: 'Pure Silk Scarf / Stole', category: 'accessories', service: 'Dry Cleaning', price: 99, unit: 'per piece' }
  ];

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return itemWiseList.filter((item) => {
      const matchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.service.toLowerCase().includes(searchQuery.toLowerCase());
      const matchService = serviceTypeFilter === 'all' || item.service === serviceTypeFilter;
      return matchQuery && matchService;
    }).sort((a, b) => {
      if (sortByPrice === 'asc') return a.price - b.price;
      if (sortByPrice === 'desc') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, serviceTypeFilter, sortByPrice]);

  // 05. Packages & Special Offers
  const packagesList = [
    {
      title: 'Weekly Laundry Care',
      price: '₹449',
      period: '/ week',
      desc: 'Perfect for working singles needing crisp shirts and fresh clothes for the week.',
      features: [
        'Up to 15 Steam Ironed clothes',
        '3 kg Wash & Fold Included',
        '1 Free Scheduled Doorstep Pickup',
        '24h delivery turnaround'
      ],
      validity: 'Billed weekly, pause or cancel anytime.',
      highlight: false
    },
    {
      title: 'Monthly Subscription',
      price: '₹1,599',
      period: '/ month',
      desc: 'Our most loved plan. Comprehensive fabric grooming for a family of 3–4 members.',
      features: [
        'Up to 90 Steam Ironed garments',
        '10 kg Wash & Fold Included',
        'Unlimited Free Scheduled Pickups',
        'Priority 24h turnaround',
        'Free hanger packaging'
      ],
      validity: 'Save ₹600/mo compared to individual piece rates.',
      highlight: true
    },
    {
      title: 'Family Bulk Pack',
      price: '₹2,699',
      period: '/ month',
      desc: 'Extensive wardrobe maintenance including home linens, formal wear & dry cleaning.',
      features: [
        'Up to 160 Steam Ironed garments',
        '20 kg Wash & Fold Included',
        '4 Dry Cleaning pieces (Blazers/Sarees)',
        'Express 12-hour turnaround priority'
      ],
      validity: 'Valid for 45 days from purchase.',
      highlight: false
    }
  ];

  // 06. Charges
  const charges = [
    {
      icon: <Truck size={22} color="#0265d2" />,
      title: 'Pickup & Delivery Fees',
      desc: 'FREE doorstep pickup and return on all orders above ₹299. For smaller batches, a nominal ₹40 fee applies.',
      highlight: 'FREE above ₹299'
    },
    {
      icon: <DollarSign size={22} color="#0265d2" />,
      title: 'Minimum Order Value',
      desc: 'Our minimum order value is ₹149. No maximum cap — order as much or as little as you need.',
      highlight: 'Minimum ₹149'
    },
    {
      icon: <Zap size={22} color="#0265d2" />,
      title: 'Express Service Charges',
      desc: 'Need same-day turnaround in 6–12 hours? A flat 30% priority surcharge applies to express requests.',
      highlight: '+30% Priority Rate'
    },
    {
      icon: <Tag size={22} color="#0265d2" />,
      title: 'Taxes & Stain Treatment',
      desc: 'All listed prices are inclusive of GST. Stubborn spot pre-treatment (grease/wine) carries zero hidden surcharge.',
      highlight: 'GST Included'
    }
  ];

  // 07. Price Calculator Items Config
  const builderCatalog = [
    { key: 'shirt-steam', name: 'Shirts / T-Shirts (Steam Iron)', rate: 20, unit: 'per item' },
    { key: 'jeans-steam', name: 'Jeans / Trousers (Steam Iron)', rate: 25, unit: 'per item' },
    { key: 'wash-fold-kg', name: 'Wash & Fold Laundry', rate: 99, unit: 'per kg' },
    { key: 'suit-dry-clean', name: '2-Piece Suit (Dry Clean)', rate: 280, unit: 'per suit' },
    { key: 'shoes-clean', name: 'Sneakers / Shoes Care', rate: 249, unit: 'per pair' },
    { key: 'bedsheet-steam', name: 'Bedsheet + Pillows (Wash & Iron)', rate: 90, unit: 'per set' }
  ];

  const updateQty = (key, delta) => {
    setCartQuantities(prev => ({
      ...prev,
      [key]: Math.max(0, (prev[key] || 0) + delta)
    }));
  };

  // Calculation
  const subtotal = useMemo(() => {
    return builderCatalog.reduce((sum, item) => {
      const qty = cartQuantities[item.key] || 0;
      return sum + (qty * item.rate);
    }, 0);
  }, [cartQuantities]);

  const deliveryFee = subtotal >= 299 || subtotal === 0 ? 0 : 40;
  // First order discount: 15% off if subtotal > 0
  const discount = subtotal > 0 ? Math.round(subtotal * 0.15) : 0;
  const estimatedTotal = Math.max(0, subtotal - discount + deliveryFee);

  // 09. Pricing FAQs
  const pricingFaqs = [
    {
      q: 'Is laundry charged per item or per kilogram?',
      a: 'We offer the best of both! Everyday wear laundry is charged by weight at ₹99/kg. Professional steam ironing and dry-cleaning are charged per piece so you only pay for what you iron.'
    },
    {
      q: 'Are doorstep pickup and delivery free?',
      a: 'Yes, doorstep collection and return are 100% free on all orders above ₹299. For smaller orders under ₹299, a nominal ₹40 logistics fee is added.'
    },
    {
      q: 'Do you offer monthly subscription packages?',
      a: 'Yes! Our Monthly Subscription at ₹1,599 covers 90 steam-ironed garments and 10 kg of wash & fold with unlimited free pickups, saving you up to 30% each month.'
    },
    {
      q: 'Are taxes included in the displayed prices?',
      a: 'Yes, all prices displayed across our website include applicable GST with zero hidden fees or surprise fuel charges.'
    },
    {
      q: 'Can the final amount change after weighing at the doorstep?',
      a: 'For per-kilogram orders, our valet carries a certified digital scale to weigh your garments in your presence and logs the exact weight on your digital receipt.'
    },
    {
      q: 'What happens if I cancel my order?',
      a: 'You can cancel free of charge anytime before our courier starts traveling for pickup. If pre-paid, an immediate full refund is returned to your original payment method.'
    }
  ];

  return (
    <PageTransition className="pricing-page">
      {/* 01. Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <ScrollReveal className="pricing-hero-content" yOffset={20}>
            <span className="section-badge">
              <Sparkles size={14} /> HONEST & TRANSPARENT PRICING
            </span>
            <h1 className="pricing-hero-title">
              Premium Care. <span className="text-gradient">Transparent Pricing.</span>
            </h1>
            <p className="pricing-hero-subtitle">
              Discover the right laundry service for every fabric and budget. No surprise weight rounding, hidden taxes, or unexpected fees.
            </p>
            <div className="pricing-hero-ctas">
              <Link to="/schedule" className="btn-primary" style={{ padding: '13px 28px', fontSize: '1rem' }}>
                Schedule a Pickup <ArrowRight size={18} />
              </Link>
              <a href="#quick-calculator" className="btn-outline">
                Use Price Calculator
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 02. Category Navigation */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">FILTER BY CATEGORY</span>
            <h2 className="section-title">Select a Wardrobe Category</h2>
            <p className="section-desc">
              Filter our service pricing instantly without page reloads.
            </p>
          </div>
        </ScrollReveal>

        <div className="category-nav-bar">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`category-nav-btn ${selectedCategory === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 03. Detailed Service Pricing Cards */}
        <StaggerContainer className="detailed-pricing-grid">
          {filteredServices.map((svc) => (
            <StaggerItem key={svc.id}>
              <AnimatedCard className="detailed-price-card">
                <div className="d-card-img">
                  <img src={svc.img} alt={svc.name} />
                  <span className="d-card-tag">{svc.tag}</span>
                </div>
                <div className="d-card-body">
                  <h4>{svc.name}</h4>
                  <p className="d-card-desc">{svc.desc}</p>
                  <div className="d-card-rate-row">
                    <span className="d-card-price">{svc.price}</span>
                    <span className="d-card-unit">/ {svc.unit}</span>
                  </div>
                  <div className="d-card-turnaround">
                    <Clock size={14} /> Turnaround: {svc.turnaround}
                  </div>
                  {svc.builderKey ? (
                    <button 
                      className="btn-add-cart"
                      onClick={() => {
                        updateQty(svc.builderKey, 1);
                        const el = document.getElementById('quick-calculator');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ShoppingCart size={16} /> Add to Calculator
                    </button>
                  ) : (
                    <Link to="/schedule" className="btn-add-cart">
                      Book Service <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 04. Item-Wise Price List (Searchable & Filterable) */}
      <section className="container">
        <div className="text-center max-w-700">
          <span className="section-badge">INDIVIDUAL GARMENT RATES</span>
          <h2 className="section-title">Item-Wise Price Directory</h2>
          <p className="section-desc">
            Search exact rates for shirts, trousers, designer sarees, bedsheets, or footwear.
          </p>
        </div>

        <div className="item-table-container">
          <div className="table-filter-bar">
            {/* Search Input */}
            <div className="search-input-wrap">
              <Search size={18} className="search-icon-inside" />
              <input
                type="text"
                placeholder="Search item (e.g. Shirt, Saree, Shoes, Suit)..."
                className="search-input-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Service Filter */}
            <select
              className="filter-select"
              value={serviceTypeFilter}
              onChange={(e) => setServiceTypeFilter(e.target.value)}
            >
              <option value="all">All Service Types</option>
              <option value="Steam Ironing">Steam Ironing</option>
              <option value="Wash & Iron">Wash & Iron</option>
              <option value="Wash & Fold">Wash & Fold</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
              <option value="Shoe Spa">Shoe Spa</option>
            </select>

            {/* Sort by price */}
            <select
              className="filter-select"
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option value="none">Sort By Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Garment / Item</th>
                  <th>Service Type</th>
                  <th>Pricing Unit</th>
                  <th style={{ textAlign: 'right' }}>Price (INR)</th>
                  <th style={{ textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700, color: '#0f172a' }}>{row.name}</td>
                      <td>
                        <span style={{ 
                          background: '#eaf3fe', 
                          color: '#0265d2', 
                          padding: '3px 10px', 
                          borderRadius: 20, 
                          fontSize: '0.78rem',
                          fontWeight: 700
                        }}>
                          {row.service}
                        </span>
                      </td>
                      <td style={{ color: '#64748b' }}>{row.unit}</td>
                      <td className="col-price" style={{ textAlign: 'right', fontSize: '1rem' }}>₹{row.price}</td>
                      <td style={{ textAlign: 'center' }}>
                        <Link to="/schedule" className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                          Book
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                      No items matched your search. Try searching for "Shirt", "Saree", or "Suit".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 05. Packages & Special Offers */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">VALUE BUNDLES</span>
            <h2 className="section-title">Packages & Special Subscriptions</h2>
            <p className="section-desc">
              Save up to 30% with our weekly and monthly wardrobe plans with free doorstep valet collections.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="packages-grid">
          {packagesList.map((pkg, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className={`package-card ${pkg.highlight ? 'highlight' : ''}`}>
                {pkg.highlight && <span className="pkg-featured-badge">MOST POPULAR</span>}
                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-desc">{pkg.desc}</p>

                <div className="pkg-price-row">
                  <span className="pkg-amount">{pkg.price}</span>
                  <span className="pkg-period">{pkg.period}</span>
                </div>

                <ul className="pkg-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} color="#0265d2" strokeWidth={3} style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/schedule" 
                  className={pkg.highlight ? 'btn-primary' : 'btn-outline'} 
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Choose {pkg.title}
                </Link>
                <span className="pkg-validity-note">{pkg.validity}</span>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 06. Pickup, Delivery & Additional Charges */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">ZERO HIDDEN SURCHARGES</span>
            <h2 className="section-title">Pickup, Delivery & Additional Charges</h2>
            <p className="section-desc">
              Full transparency on delivery conditions, minimum thresholds, and express fees.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="charges-grid">
          {charges.map((c, idx) => (
            <StaggerItem key={idx}>
              <AnimatedCard className="charge-card">
                {c.icon}
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className="charge-highlight">{c.highlight}</span>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 07. Interactive Price Calculator / Quick Order Builder */}
      <section className="container" id="quick-calculator">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">ESTIMATE YOUR ORDER</span>
            <h2 className="section-title">Quick Order Price Builder</h2>
            <p className="section-desc">
              Select items to view an instant estimate with first-order discounts and delivery applied.
            </p>
          </div>
        </ScrollReveal>

        <div className="order-builder-layout">
          {/* Items Selector */}
          <div className="builder-items-box">
            <h3>Add Items to Estimate</h3>
            {builderCatalog.map((item) => (
              <div key={item.key} className="builder-item-row">
                <div>
                  <div className="b-item-name">{item.name}</div>
                  <div className="b-item-rate">₹{item.rate} / {item.unit}</div>
                </div>

                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.key, -1)}
                    aria-label={`Decrease ${item.name}`}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-count">{cartQuantities[item.key] || 0}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.key, 1)}
                    aria-label={`Increase ${item.name}`}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Summary Card */}
          <div className="builder-summary-card">
            <h3 className="summary-heading">Order Estimate Summary</h3>
            <div className="summary-line">
              <span>Items Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-line discount">
              <span>Welcome Discount (15% OFF)</span>
              <span>-₹{discount}</span>
            </div>

            <div className="summary-line">
              <span>Doorstep Pickup & Delivery</span>
              <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total-line">
              <span className="total-label">Estimated Total</span>
              <span className="total-val">₹{estimatedTotal}</span>
            </div>

            <button 
              className="btn-primary btn-proceed-booking"
              onClick={() => navigate('/schedule')}
            >
              Proceed to Booking <ArrowRight size={18} />
            </button>
            <p style={{ fontSize: '0.74rem', color: '#94a3b8', textAlign: 'center', marginTop: 12 }}>
              *Final amount calculated on exact item count or digital scale weight upon doorstep collection.
            </p>
          </div>
        </div>
      </section>

      {/* 08. What's Included in the Price? */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">FULL VALUE PROMISE</span>
            <h2 className="section-title">What’s Included in Your Service?</h2>
            <p className="section-desc">
              Clear guidelines on our standard inclusions and specialized care exclusions.
            </p>
          </div>

          <div className="included-grid">
            <div className="included-box inclusions">
              <h4>✓ Standard Inclusions</h4>
              <ul className="included-list">
                <li>
                  <Check size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Micro-steam pressing:</strong> High-pressure soleplates remove deep wrinkles without shiny fabric scorch marks.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Segregated hygienic cycles:</strong> Individual washing drums with organic fabric softener.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Quality Packaging:</strong> Anti-dust garment covers or neat folded cardboard boxes.</span>
                </li>
                <li>
                  <Check size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Live SMS Tracking:</strong> Instant milestone alerts from pickup to doorstep delivery.</span>
                </li>
              </ul>
            </div>

            <div className="included-box exclusions">
              <h4>⚠ Exclusions & Specialized Care</h4>
              <ul className="included-list">
                <li>
                  <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Extreme Stain Restoration:</strong> Permanent dye transfers, chemical bleaches, or decade-old ink stains may carry a custom restorative fee.</span>
                </li>
                <li>
                  <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Designer Couture / Heavy Zari:</strong> Intricate bridal lehengas with precious stonework require custom solvent inspection.</span>
                </li>
                <li>
                  <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Express Delivery Surcharge:</strong> Orders requested within 6–12 hours carry a flat 30% priority expediting fee.</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 09. Pricing FAQs */}
      <section className="container">
        <ScrollReveal>
          <div className="text-center max-w-700">
            <span className="section-badge">PRICING QUESTIONS</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Transparent answers to all pricing, weighing, and cancellation questions.
            </p>
          </div>
        </ScrollReveal>

        <div className="pricing-faqs-wrap">
          {pricingFaqs.map((faq, idx) => (
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
        <div className="pricing-final-cta">
          <h2>Ready for a Fresh Start?</h2>
          <p>
            Book your doorstep pickup today. Enjoy crisp, professionally steam-ironed clothes with zero hassle and complete peace of mind.
          </p>
          <div className="pricing-cta-row">
            <Link to="/schedule" className="btn-outline" style={{ background: '#ffffff', color: '#0265d2', border: 'none', padding: '14px 28px', fontWeight: 700 }}>
              Schedule a Pickup <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: '#ffffff', padding: '14px 26px' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

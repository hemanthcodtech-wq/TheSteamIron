import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Shirt, 
  Truck, 
  Cookie, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Lock,
  ChevronRight
} from 'lucide-react';
import { PageTransition } from '../components/MotionSystem';
import './Policies.css';

export default function Policies() {
  const [activeTab, setActiveTab] = useState('privacy');

  const policyTabs = [
    { id: 'privacy', title: '1. Privacy Policy', icon: <ShieldCheck size={18} /> },
    { id: 'terms', title: '2. Terms & Conditions', icon: <FileText size={18} /> },
    { id: 'cancellation', title: '3. Cancellation & Refund', icon: <RotateCcw size={18} /> },
    { id: 'garment-care', title: '4. Garment Care Policy', icon: <Shirt size={18} /> },
    { id: 'pickup-delivery', title: '5. Pickup & Delivery', icon: <Truck size={18} /> },
    { id: 'cookies', title: '6. Cookie Policy', icon: <Cookie size={18} /> }
  ];

  return (
    <PageTransition className="policies-page">
      {/* Policy Hero Header */}
      <section className="policy-hero">
        <div className="container">
          <div className="policy-hero-content">
            <span className="policy-badge">LEGAL & COMPLIANCE</span>
            <h1 className="policy-hero-title">Website Policies & Terms</h1>
            <p className="policy-hero-subtitle">
              Transparent, fair, and secure policies designed to protect our customers and ensure seamless garment care.
            </p>
            <div className="policy-meta-strip">
              <span><strong>Business:</strong> The Steam Iron – Laundry & Dry Cleaning</span>
              <span><strong>Effective Date:</strong> October 2026</span>
              <span><strong>Contact:</strong> support@thesteamiron.com | +91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content with Sticky Sidebar */}
      <section className="container policy-body-container">
        <div className="policy-layout">
          {/* Navigation Sidebar */}
          <aside className="policy-nav-sidebar">
            {/* Mobile Policy Selector */}
            <div className="policy-mobile-selector">
              <label htmlFor="policy-select" className="policy-select-label">Select Policy Section:</label>
              <div className="policy-select-wrapper">
                <select
                  id="policy-select"
                  className="policy-select-dropdown"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                >
                  {policyTabs.map((tab) => (
                    <option key={tab.id} value={tab.id}>
                      {tab.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Desktop / Tablet Sidebar Box */}
            <div className="sidebar-sticky-box">
              <h4 className="sidebar-heading">Policy Sections</h4>
              <nav className="policy-nav-links">
                {policyTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`policy-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-icon">{tab.icon}</span>
                    <span className="tab-text">{tab.title}</span>
                    <ChevronRight size={15} className="tab-arrow" />
                  </button>
                ))}
              </nav>

              <div className="sidebar-help-card">
                <Mail size={18} className="help-icon" />
                <h5>Have Questions?</h5>
                <p>Reach out to our compliance and grievances desk at support@thesteamiron.com</p>
              </div>
            </div>
          </aside>

          {/* Active Content Area */}
          <main className="policy-content-area">
            {/* 1. Privacy Policy */}
            {activeTab === 'privacy' && (
              <article className="policy-article">
                <h2>1. Privacy Policy</h2>
                
                <h3>1.1 Introduction</h3>
                <p>
                  The Steam Iron (“we,” “our,” or “us”) respects the privacy of our customers and is committed to protecting the personal information shared through our website, mobile application, and laundry services.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, and disclose information when you visit our website, create an account, book a pickup, or use our services.
                </p>

                <h3>1.2 Information We Collect</h3>
                <p>Depending on the services you use, we may collect:</p>
                <ul>
                  <li><strong>Personal information:</strong> Name, phone number, email address, and account details.</li>
                  <li><strong>Address information:</strong> Pickup and delivery addresses and relevant delivery instructions.</li>
                  <li><strong>Order information:</strong> Selected services, garment quantities, preferences, order status, and transaction history.</li>
                  <li><strong>Payment information:</strong> Payment status, transaction references, and information provided through our payment service providers.</li>
                  <li><strong>Technical information:</strong> IP address, browser type, device information, and website usage data where applicable.</li>
                  <li><strong>Communication information:</strong> Messages, support requests, feedback, and complaints.</li>
                </ul>
                <p>We aim to collect only information reasonably necessary to provide and improve our services.</p>

                <h3>1.3 How We Use Your Information</h3>
                <p>We may use your information to:</p>
                <ul>
                  <li>Create and manage customer accounts.</li>
                  <li>Schedule and process laundry orders.</li>
                  <li>Arrange pickups and deliveries.</li>
                  <li>Send order confirmations, receipts, and status updates.</li>
                  <li>Process payments, refunds, and eligible adjustments.</li>
                  <li>Respond to customer queries and complaints.</li>
                  <li>Improve our website, service quality, and customer experience.</li>
                  <li>Detect fraud, protect accounts, and comply with applicable legal obligations.</li>
                </ul>
                <p>Marketing communications will be sent where permitted by applicable law and subject to any required consent or opt-out mechanism.</p>

                <h3>1.4 Payments</h3>
                <p>
                  Online payments may be processed through third-party payment service providers. We do not store complete payment card details or CVVs on our own systems. All payment processing conforms to PCI-DSS standards.
                </p>

                <h3>1.5 Sharing of Information</h3>
                <p>We may share relevant information with:</p>
                <ul>
                  <li>Authorized staff handling your order.</li>
                  <li>Delivery personnel who need pickup and delivery details.</li>
                  <li>Payment providers processing transactions or refunds.</li>
                  <li>Technology providers supporting hosting, communications, and order management.</li>
                  <li>Authorities where disclosure is required by law.</li>
                </ul>
                <p><strong>We do not sell customers' personal information as a business practice.</strong></p>

                <h3>1.6 Data Security and Retention</h3>
                <p>
                  We use reasonable technical and organizational safeguards to protect personal information against unauthorized access, alteration, disclosure, and loss. Information is retained only as long as reasonably necessary for service delivery, records, dispute resolution, and legal compliance.
                </p>

                <h3>1.7 Your Privacy Rights</h3>
                <p>
                  Subject to applicable law, you may request access to, correction of, or deletion of your personal information and may exercise applicable consent withdrawal rights.
                </p>

                <h3>1.8 Contact & Privacy Grievances</h3>
                <p>
                  Email: <strong>support@thesteamiron.com</strong><br />
                  Phone: <strong>+91 98765 43210</strong><br />
                  Address: <strong>The Steam Iron Services, Sector 14, Main Avenue, Hyderabad / Bangalore, India</strong>
                </p>
              </article>
            )}

            {/* 2. Terms & Conditions */}
            {activeTab === 'terms' && (
              <article className="policy-article">
                <h2>2. Terms & Conditions</h2>

                <h3>2.1 Acceptance of Terms</h3>
                <p>
                  These Terms & Conditions govern your access to and use of The Steam Iron website, application, and laundry, ironing, dry-cleaning, and related services. By accessing our platform or placing an order, you agree to these terms.
                </p>

                <h3>2.2 Our Services</h3>
                <p>
                  The Steam Iron provides services including Wash & Fold, Wash & Iron, Professional Steam Ironing, Dry Cleaning, Stain Treatment, Footwear Cleaning, and Curtains/Bedding textile cleaning. Availability depends on service area and operational capacity.
                </p>

                <h3>2.3 Customer Account</h3>
                <p>
                  Customers must provide accurate contact information and keep credentials secure. You are responsible for activity carried out through your account.
                </p>

                <h3>2.4 Orders and Pricing</h3>
                <p>
                  Customers should review selected services, item quantities, and pricing units before confirming. Where final charges depend on actual weight or special stain treatments, we communicate pricing and seek customer approval before proceeding.
                </p>

                <h3>2.5 Customer Responsibilities</h3>
                <ul>
                  <li>Provide accurate pickup and delivery details.</li>
                  <li>Remove all personal belongings, cash, coins, and pins from pockets prior to handover.</li>
                  <li>Disclose known special-care instructions and fabric concerns.</li>
                  <li>Be available or arrange an authorized recipient for collection and delivery.</li>
                </ul>

                <h3>2.6 Governing Law and Disputes</h3>
                <p>
                  These terms are governed by the laws of India, subject to applicable mandatory consumer protections and jurisdictional requirements.
                </p>
              </article>
            )}

            {/* 3. Cancellation & Refund Policy */}
            {activeTab === 'cancellation' && (
              <article className="policy-article">
                <h2>3. Cancellation & Refund Policy</h2>

                <h3>3.1 Cancellation Requests</h3>
                <p>
                  Customers may request cancellation through their account, customer support, or WhatsApp helpline. Cancellation eligibility depends on order status.
                </p>

                <h3>3.2 Before Pickup</h3>
                <p>
                  Orders may be cancelled free of charge anytime before the valet starts traveling for pickup. If pre-paid, an immediate full refund will be initiated.
                </p>

                <h3>3.3 After Pickup but Before Cleaning</h3>
                <p>
                  If garments have been collected but cleaning has not started, please contact customer support immediately. A nominal logistics fee of ₹50 may apply to return unprocessed clothes.
                </p>

                <h3>3.4 After Cleaning Has Started</h3>
                <p>
                  Once garments are tagged, sorted, washed, or steam-ironed, cancellation is not possible. Charges for completed work apply.
                </p>

                <h3>3.5 Refund Eligibility & Timelines</h3>
                <p>Refunds are processed for:</p>
                <ul>
                  <li>Duplicate payments or transaction billing discrepancies.</li>
                  <li>Orders cancelled prior to processing as per policy terms.</li>
                  <li>Service quality issues approved by our supervisory review.</li>
                </ul>
                <p>
                  Approved refunds are credited to the original payment method within 5–7 banking days.
                </p>
              </article>
            )}

            {/* 4. Garment Care Policy */}
            {activeTab === 'garment-care' && (
              <article className="policy-article">
                <h2>4. Laundry Service & Garment Care Policy</h2>

                <h3>4.1 Garment Inspection</h3>
                <p>
                  Garments are inspected for visible stains, care labels, color bleed risks, tears, and missing buttons at intake. Where significant pre-existing issues are identified, we notify the customer before proceeding.
                </p>

                <h3>4.2 Fabric & Cleaning Methods</h3>
                <p>
                  Cleaning methods are chosen based on fabric characteristics and care tags. Microprocessor-regulated steam prevents scorching on fine silks, wools, and synthetics.
                </p>

                <h3>4.3 Stains and Existing Damage</h3>
                <p>
                  While our specialists apply gentle, organic pre-spotters, complete stain removal cannot be guaranteed for old stains, oxidized residues, or dye bleeds without risking fabric fiber integrity.
                </p>

                <h3>4.4 Personal Belongings</h3>
                <p>
                  Customers must check pockets and remove cash, coins, pens, and jewelry. The Steam Iron cannot assume liability for items lost due to being left inside garment pockets.
                </p>
              </article>
            )}

            {/* 5. Pickup & Delivery Policy */}
            {activeTab === 'pickup-delivery' && (
              <article className="policy-article">
                <h2>5. Pickup & Delivery Policy</h2>

                <h3>5.1 Service Areas</h3>
                <p>
                  Pickup and delivery are currently active across serviceable pincodes in Hyderabad, Bangalore, and Pune.
                </p>

                <h3>5.2 Charges & Minimums</h3>
                <p>
                  Free doorstep pickup and delivery is provided on all orders meeting the minimum order value of ₹299. Express same-day turnaround includes a nominal priority surcharge.
                </p>

                <h3>5.3 Delivery Confirmation & Handover</h3>
                <p>
                  Deliveries are confirmed via digital recipient verification or OTP. Customers are encouraged to verify garment count upon handover.
                </p>
              </article>
            )}

            {/* 6. Cookie Policy */}
            {activeTab === 'cookies' && (
              <article className="policy-article">
                <h2>6. Cookie Policy</h2>

                <h3>6.1 What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your browser to remember your sessions, address preferences, and improve booking performance.
                </p>

                <h3>6.2 Types of Cookies Used</h3>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required to keep your booking cart, login session, and secure checkout running smoothly.</li>
                  <li><strong>Performance Cookies:</strong> Anonymous analytics that help us understand page loading speeds and optimize interface responsiveness.</li>
                </ul>
                <p>
                  You can manage or disable non-essential cookies via your browser settings at any time.
                </p>
              </article>
            )}
          </main>
        </div>
      </section>
    </PageTransition>
  );
}

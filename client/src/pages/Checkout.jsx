import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Truck,
  DollarSign
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import MapboxLocationPicker from '../components/MapboxLocationPicker';
import { PageTransition } from '../components/MotionSystem';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, subtotal, discount, deliveryFee, grandTotal, totalItemsCount, clearCart } = useCart();

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Rahul Varma',
    phone: '+91 98765 43210',
    email: 'rahul.varma@example.com',
    address: 'Flat 402, Cyber Heights, Kondapur Main Road',
    city: 'Hyderabad',
    pincode: '500084',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupSlot: 'Morning (08:00 AM - 11:00 AM)',
    paymentMethod: 'razorpay', // 'razorpay' | 'cod'
    notes: ''
  });

  const handleLocationPicked = (loc) => {
    setFormData(prev => ({
      ...prev,
      address: loc.address || prev.address
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = `TSI-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(generatedId);
    setOrderConfirmed(true);
    clearCart();
  };

  if (orderConfirmed) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div style={{
          maxWidth: 600,
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: 24,
          padding: '48px 36px',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 12px 40px rgba(2, 101, 210, 0.08)'
        }}>
          <div style={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: '#dcfce7',
            color: '#16a34a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <CheckCircle2 size={44} />
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#091e42' }}>
            Pickup Order Placed!
          </h2>

          <div style={{
            display: 'inline-block',
            background: '#eaf3fe',
            color: '#0265d2',
            fontWeight: 800,
            fontSize: '0.92rem',
            padding: '6px 18px',
            borderRadius: 20,
            margin: '14px 0'
          }}>
            ORDER ID: {confirmedOrderId}
          </div>

          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: 24 }}>
            Thank you, <strong>{formData.fullName}</strong>. Our uniformed doorstep valet will collect your clothes on <strong>{formData.pickupDate}</strong> during <strong>{formData.pickupSlot}</strong>.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 16, padding: 18, textAlign: 'left', marginBottom: 28, fontSize: '0.86rem', color: '#334155' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <MapPin size={18} color="#0265d2" style={{ flexShrink: 0, marginTop: 2 }} />
              <span><strong>Pickup Address:</strong> {formData.address}, {formData.city} - {formData.pincode}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <CreditCard size={18} color="#0265d2" style={{ flexShrink: 0 }} />
              <span>
                <strong>Payment Selected:</strong> {formData.paymentMethod === 'razorpay' ? 'Razorpay Secure Gateway (Test simulation / Pending on Delivery)' : 'Pay on Delivery (Cash / UPI QR Scan)'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link to="/" className="btn-primary" style={{ padding: '12px 26px' }}>
              Back to Home
            </Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '12px 26px' }}>
              Track Live Order
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageTransition className="container" style={{ padding: '40px 20px 70px' }}>
      <div style={{ marginBottom: 20 }}>
        <Link to="/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Basket
        </Link>
      </div>

      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: '#091e42', marginBottom: 28 }}>
        Confirm Doorstep Pickup & Checkout
      </h1>

      <form onSubmit={handlePlaceOrder} className="checkout-layout-grid">
        {/* Left Form details */}
        <div className="checkout-panel-box" style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: 32,
          border: '1px solid #e2e8f0',
          boxShadow: '0 6px 24px rgba(2, 101, 210, 0.05)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 18 }}>
            1. Contact & Pickup Details
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
              COMPLETE ADDRESS / APARTMENT *
            </label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none' }}
            />
          </div>

          {/* Mapbox Integration for Location Pinning */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 4 }}>
              MAPBOX EXACT LOCATION MAPPING
            </label>
            <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: 8 }}>
              Pin your location on the map so our doorstep courier reaches without having to call for directions.
            </p>
            <MapboxLocationPicker 
              defaultAddress={formData.address}
              onLocationSelect={handleLocationPicked}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                CITY *
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none', background: '#ffffff' }}
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                PIN CODE *
              </label>
              <input
                type="text"
                required
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none' }}
              />
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 18, paddingTop: 18, borderTop: '1px solid #e2e8f0' }}>
            2. Choose Pickup Schedule
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                PICKUP DATE *
              </label>
              <input
                type="date"
                required
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                TIME SLOT *
              </label>
              <select
                value={formData.pickupSlot}
                onChange={(e) => setFormData({ ...formData, pickupSlot: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', outline: 'none', background: '#ffffff' }}
              >
                <option>Morning (08:00 AM - 11:00 AM)</option>
                <option>Afternoon (12:00 PM - 03:00 PM)</option>
                <option>Evening (05:00 PM - 08:00 PM)</option>
                <option>Night (08:00 PM - 10:00 PM)</option>
              </select>
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 18, paddingTop: 18, borderTop: '1px solid #e2e8f0' }}>
            3. Payment Method
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 18px',
              borderRadius: 14,
              border: formData.paymentMethod === 'razorpay' ? '2px solid #0265d2' : '1.5px solid #cbd5e1',
              background: formData.paymentMethod === 'razorpay' ? '#eaf3fe' : '#ffffff',
              cursor: 'pointer'
            }}>
              <input
                type="radio"
                name="payment"
                checked={formData.paymentMethod === 'razorpay'}
                onChange={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}
              />
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>Razorpay Online Gateway (Cards / UPI / NetBanking)</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Instant secure checkout (Razorpay test gateway integration ready)</span>
              </div>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 18px',
              borderRadius: 14,
              border: formData.paymentMethod === 'cod' ? '2px solid #0265d2' : '1.5px solid #cbd5e1',
              background: formData.paymentMethod === 'cod' ? '#eaf3fe' : '#ffffff',
              cursor: 'pointer'
            }}>
              <input
                type="radio"
                name="payment"
                checked={formData.paymentMethod === 'cod'}
                onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
              />
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>Pay on Delivery (Cash or Valet UPI QR)</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Inspect your crisp pressed garments before completing payment</span>
              </div>
            </label>
          </div>
        </div>

        {/* Right Sticky Summary */}
        <div className="checkout-summary-card">
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#091e42', marginBottom: 16 }}>
            Order Summary
          </h3>

          <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 16, paddingRight: 6 }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: 8 }}>
                <span>{item.qty} × {item.name}</span>
                <span style={{ fontWeight: 700 }}>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: '#e2e8f0', margin: '14px 0' }}></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#64748b', marginBottom: 8 }}>
            <span>Items Subtotal</span>
            <span style={{ fontWeight: 700, color: '#0f172a' }}>₹{subtotal}</span>
          </div>

          {discount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#16a34a', fontWeight: 700, marginBottom: 8 }}>
              <span>Welcome Discount (15%)</span>
              <span>-₹{discount}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#64748b', marginBottom: 8 }}>
            <span>Doorstep Valet Fee</span>
            <span style={{ fontWeight: 700, color: deliveryFee === 0 ? '#16a34a' : '#0f172a' }}>
              {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
            </span>
          </div>

          <div style={{ height: 1, background: '#e2e8f0', margin: '14px 0' }}></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
              Total Payable
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0265d2' }}>
              ₹{grandTotal}
            </span>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1.05rem' }}
          >
            Confirm & Place Order <ArrowRight size={18} />
          </button>

          <div style={{ marginTop: 16, textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8' }}>
            <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
            100% Satisfaction & Zero Clothes Mixing Guarantee
          </div>
        </div>
      </form>
    </PageTransition>
  );
}

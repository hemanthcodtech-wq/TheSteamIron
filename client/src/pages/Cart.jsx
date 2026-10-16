import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  ShieldCheck, 
  Truck,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageTransition } from '../components/MotionSystem';
import './Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const { 
    cartItems, 
    updateQty, 
    removeFromCart, 
    clearCart, 
    subtotal, 
    discount, 
    deliveryFee, 
    grandTotal, 
    totalItemsCount,
    appliedCoupon,
    setAppliedCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState(appliedCoupon);
  const [couponMsg, setCouponMsg] = useState('Code STEAM15 applied: 15% Welcome Discount!');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'STEAM15') {
      setAppliedCoupon('STEAM15');
      setCouponMsg('Code STEAM15 applied: 15% discount!');
    } else {
      setCouponMsg('Invalid coupon code. Try STEAM15.');
    }
  };

  return (
    <PageTransition className="cart-page">
      <div className="container">
        {/* Breadcrumb / Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Continue Adding Items
          </Link>
          {cartItems.length > 0 && (
            <button 
              onClick={clearCart} 
              style={{ background: 'transparent', color: '#ef4444', fontSize: '0.82rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <Trash2 size={14} /> Clear Cart
            </button>
          )}
        </div>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: '#091e42' }}>
          Your Laundry Basket ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
        </h1>

        {cartItems.length === 0 ? (
          <div className="cart-items-panel cart-empty-state">
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#eaf3fe',
              color: '#0265d2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <ShoppingBag size={34} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0f172a' }}>
              Your basket is currently empty
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: 440, margin: '8px auto 24px' }}>
              Add steam ironing, wash & fold, or dry cleaning garments to proceed with your doorstep booking.
            </p>
            <Link to="/pricing" className="btn-primary" style={{ padding: '12px 28px' }}>
              Browse Price Directory <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="cart-layout-grid">
            {/* Left Items Panel */}
            <div className="cart-items-panel">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Selected Service / Item</th>
                    <th>Rate</th>
                    <th style={{ textAlign: 'center' }}>Quantity</th>
                    <th style={{ textAlign: 'right' }}>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="cart-row">
                      <td>
                        <div className="cart-item-info">
                          <img src={item.img} alt={item.name} className="cart-item-thumb" />
                          <div>
                            <div className="cart-item-title">{item.name}</div>
                            <div className="cart-item-service">{item.service}</div>
                            <div className="cart-item-rate">Unit: {item.unit}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.95rem' }}>
                        ₹{item.price}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div className="cart-qty-ctrl">
                          <button
                            className="cart-qty-btn"
                            onClick={() => updateQty(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="cart-qty-val">{item.qty}</span>
                          <button
                            className="cart-qty-btn"
                            onClick={() => updateQty(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </td>
                      <td className="cart-item-total" style={{ textAlign: 'right' }}>
                        ₹{item.price * item.qty}
                      </td>
                      <td style={{ textAlign: 'right', paddingLeft: 12 }}>
                        <button
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: 24, padding: 16, background: '#f8fafc', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: '#475569' }}>
                <ShieldCheck size={18} color="#0265d2" style={{ flexShrink: 0 }} />
                <span>Zero clothes mixing guarantee: Your order is processed in its own dedicated wash and steam cycle.</span>
              </div>
            </div>

            {/* Right Summary Panel */}
            <div className="cart-summary-panel">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#091e42', marginBottom: 16 }}>
                Order Summary
              </h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#64748b', marginBottom: 10 }}>
                <span>Subtotal ({totalItemsCount} items)</span>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>₹{subtotal}</span>
              </div>

              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#16a34a', fontWeight: 700, marginBottom: 10 }}>
                  <span>Welcome Discount (15%)</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#64748b', marginBottom: 10 }}>
                <span>Doorstep Valet Collection & Drop</span>
                <span style={{ fontWeight: 700, color: deliveryFee === 0 ? '#16a34a' : '#0f172a' }}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>

              {subtotal < 299 && subtotal > 0 && (
                <p style={{ fontSize: '0.78rem', color: '#0284c7', background: '#eaf3fe', padding: '6px 10px', borderRadius: 8, marginBottom: 14 }}>
                  Tip: Add ₹{299 - subtotal} more items to get <strong>FREE Doorstep Delivery</strong>!
                </p>
              )}

              {/* Promo Coupon Box */}
              <form onSubmit={handleApplyCoupon} className="coupon-box">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="coupon-input"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="submit" className="coupon-btn">Apply</button>
              </form>
              {couponMsg && (
                <span style={{ display: 'block', fontSize: '0.78rem', color: couponMsg.includes('Invalid') ? '#ef4444' : '#16a34a', marginTop: -10, marginBottom: 14 }}>
                  {couponMsg}
                </span>
              )}

              <div style={{ height: 1, background: '#e2e8f0', margin: '16px 0' }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                  Total Payable
                </span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 800, color: '#0265d2' }}>
                  ₹{grandTotal}
                </span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1.05rem' }}
              >
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <div style={{ marginTop: 18, textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8' }}>
                Taxes (GST) included • Razorpay Online & Cash on Delivery supported
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

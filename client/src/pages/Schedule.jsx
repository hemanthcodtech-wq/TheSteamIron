import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    service: 'steam-ironing',
    date: '',
    timeSlot: 'Morning (08:00 AM - 11:00 AM)',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="container" style={{ padding: '40px 20px 60px' }}>
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
        <span style={{ 
          background: 'rgba(2, 101, 210, 0.1)', 
          color: '#0265d2', 
          padding: '6px 14px', 
          borderRadius: 20, 
          fontSize: '0.8rem', 
          fontWeight: 700 
        }}>
          DOORSTEP PICKUP
        </span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, marginTop: 12, color: '#091e42' }}>
          Schedule a Clothes Pickup
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: 8 }}>
          Book a free pickup at your doorstep. We pick up, sanitize, steam iron or wash, and deliver crisp clothes back.
        </p>
      </div>

      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: 24,
        padding: '36px 32px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 36px rgba(2, 101, 210, 0.08)'
      }}>
        {booked ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={40} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>
              Pickup Confirmed!
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: 12, maxWidth: 500, margin: '12px auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our driver will reach <strong>{formData.address}</strong> on <strong>{formData.date || 'the selected date'}</strong> during <strong>{formData.timeSlot}</strong>.
            </p>
            <div style={{
              marginTop: 24,
              padding: 16,
              background: '#f8fafc',
              borderRadius: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '0.9rem',
              color: '#0265d2'
            }}>
              <ShieldCheck size={20} />
              <span>A confirmation SMS with live rider tracking has been sent to {formData.phone}.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  FULL NAME
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  PHONE NUMBER
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                COMPLETE PICKUP ADDRESS
              </label>
              <input 
                type="text" 
                required 
                placeholder="Flat / House No, Building, Street / Area"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  PINCODE / POSTAL CODE
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. 500081"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  PRIMARY SERVICE
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    background: '#ffffff'
                  }}
                >
                  <option value="steam-ironing">Steam Ironing (₹20/item)</option>
                  <option value="wash-fold">Wash & Fold (₹99/kg)</option>
                  <option value="dry-cleaning">Dry Cleaning (from ₹149)</option>
                  <option value="express">Express 6-12h Delivery</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  PICKUP DATE
                </label>
                <input 
                  type="date" 
                  required 
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  PREFERRED TIME SLOT
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    background: '#ffffff'
                  }}
                >
                  <option>Morning (08:00 AM - 11:00 AM)</option>
                  <option>Afternoon (12:00 PM - 03:00 PM)</option>
                  <option>Evening (05:00 PM - 08:00 PM)</option>
                  <option>Night (08:00 PM - 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                SPECIAL NOTES (OPTIONAL)
              </label>
              <textarea 
                rows={3} 
                placeholder="Any delicate items, specific starch preference, or landmark directions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '14px', fontSize: '1.05rem', marginTop: 10 }}>
              Confirm Doorstep Pickup <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

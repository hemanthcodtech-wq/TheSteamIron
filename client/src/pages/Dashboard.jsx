import React, { useState } from 'react';
import { 
  Package, 
  Clock, 
  MapPin, 
  Calendar, 
  CreditCard, 
  ChevronRight, 
  CheckCircle2, 
  Truck, 
  Flame, 
  User, 
  Settings, 
  HelpCircle,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem, AnimatedButton } from '../components/MotionSystem';
import { useCart } from '../context/CartContext';

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const { totalItemsCount } = useCart();

  const mockOrders = [
    {
      id: 'TSI-89104',
      date: '14 Oct 2026',
      service: 'Professional Steam Ironing (8 garments)',
      status: 'In Cleaning',
      stageIndex: 2,
      total: '₹190',
      pickupSlot: 'Morning (08:00 AM - 11:00 AM)',
      deliveryETA: 'Tomorrow, 5:00 PM'
    },
    {
      id: 'TSI-87622',
      date: '08 Oct 2026',
      service: 'Wash & Fold Laundry (4 kg)',
      status: 'Delivered',
      stageIndex: 4,
      total: '₹396',
      pickupSlot: 'Evening (05:00 PM - 08:00 PM)',
      deliveryETA: 'Completed'
    }
  ];

  return (
    <PageTransition>
      <div className="container" style={{ padding: '40px 20px 70px' }}>
        {/* Top greeting & stats header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
          <div>
            <span style={{ background: '#eaf3fe', color: '#0265d2', padding: '4px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 800 }}>
              CUSTOMER DASHBOARD
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
              Hello, Rahul Varma
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
              Manage your active pickups, laundry status, and saved addresses.
            </p>
          </div>

          <Link to="/schedule" className="btn-primary" style={{ padding: '12px 24px' }}>
            <Plus size={16} /> Book New Doorstep Pickup
          </Link>
        </div>

        {/* Dashboard Tabs & Content Layout */}
        <div className="dashboard-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
          {/* Sidebar Nav (converts to horizontal pills on mobile) */}
          <div style={{ background: '#ffffff', borderRadius: 20, padding: 14, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(2, 101, 210, 0.04)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button
              onClick={() => setActiveTab('orders')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                borderRadius: 12,
                background: activeTab === 'orders' ? '#eaf3fe' : 'transparent',
                color: activeTab === 'orders' ? '#0265d2' : '#475569',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Package size={18} /> My Laundry Orders
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                borderRadius: 12,
                background: activeTab === 'addresses' ? '#eaf3fe' : 'transparent',
                color: activeTab === 'addresses' ? '#0265d2' : '#475569',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <MapPin size={18} /> Saved Addresses
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                borderRadius: 12,
                background: activeTab === 'profile' ? '#eaf3fe' : 'transparent',
                color: activeTab === 'profile' ? '#0265d2' : '#475569',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <User size={18} /> Profile & Settings
            </button>
          </div>

          {/* Main Display Area */}
          <div style={{ minWidth: 0 }}>
            {activeTab === 'orders' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: 18 }}>
                  Active & Past Orders
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {mockOrders.map((order) => (
                    <div key={order.id} style={{
                      background: '#ffffff',
                      borderRadius: 22,
                      padding: 26,
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 18px rgba(2, 101, 210, 0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                        <div>
                          <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>{order.id}</strong>
                          <span style={{ color: '#94a3b8', fontSize: '0.84rem', marginLeft: 10 }}>Placed on {order.date}</span>
                        </div>
                        <span style={{
                          background: order.status === 'In Cleaning' ? '#fef3c7' : '#dcfce7',
                          color: order.status === 'In Cleaning' ? '#d97706' : '#16a34a',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          padding: '4px 14px',
                          borderRadius: 20
                        }}>
                          {order.status}
                        </span>
                      </div>

                      <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: 14 }}>
                        {order.service} • <strong style={{ color: '#0265d2' }}>{order.total}</strong>
                      </p>

                      {/* Live milestone progression */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 8,
                        padding: '16px 0',
                        borderTop: '1px solid #f1f5f9',
                        borderBottom: '1px solid #f1f5f9',
                        margin: '14px 0'
                      }}>
                        <div style={{ fontSize: '0.78rem', color: order.stageIndex >= 1 ? '#0265d2' : '#94a3b8', fontWeight: 700 }}>
                          ✓ Pickup Done
                        </div>
                        <div style={{ fontSize: '0.78rem', color: order.stageIndex >= 2 ? '#0265d2' : '#94a3b8', fontWeight: 700 }}>
                          ✓ Steam Cleaning
                        </div>
                        <div style={{ fontSize: '0.78rem', color: order.stageIndex >= 3 ? '#0265d2' : '#94a3b8', fontWeight: 700 }}>
                          {order.stageIndex >= 3 ? '✓ Out for Delivery' : '• Out for Delivery'}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: order.stageIndex >= 4 ? '#16a34a' : '#94a3b8', fontWeight: 700 }}>
                          {order.stageIndex >= 4 ? '✓ Delivered' : '• Delivered'}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem', color: '#64748b' }}>
                        <span>ETA: {order.deliveryETA}</span>
                        <Link to="/contact" style={{ color: '#0265d2', fontWeight: 700 }}>
                          Contact Courier Support →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div style={{ background: '#ffffff', borderRadius: 22, padding: 28, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                  Saved Doorstep Addresses
                </h3>
                <div style={{ padding: 18, background: '#f8fafc', borderRadius: 16, border: '1.5px solid #0265d2', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>Home (Default)</strong>
                    <span style={{ background: '#eaf3fe', color: '#0265d2', fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: 12 }}>PRIMARY</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: 4 }}>
                    Flat 402, Cyber Heights, Kondapur Main Road, Hyderabad - 500084
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div style={{ background: '#ffffff', borderRadius: 22, padding: 28, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                  Profile Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>NAME</label>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>Rahul Varma</div>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>PHONE</label>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>+91 98765 43210</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Edit, 
  Trash2, 
  Plus, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { PageTransition } from '../components/MotionSystem';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    { id: 'TSI-9012', customer: 'Priya Sharma', service: 'Steam Ironing', items: 8, amount: '₹160', status: 'In Cleaning', date: 'Today, 10:15 AM' },
    { id: 'TSI-9011', customer: 'Vikramaditya Rao', service: 'Dry Cleaning', items: 2, amount: '₹460', status: 'Picked Up', date: 'Today, 09:30 AM' },
    { id: 'TSI-9010', customer: 'Ananya Deshmukh', service: 'Wash & Fold', items: 5, amount: '₹495', status: 'Delivered', date: 'Yesterday' }
  ];

  const servicesCatalog = [
    { name: 'Steam Ironing', price: '₹20 / item', active: true },
    { name: 'Wash & Fold Laundry', price: '₹99 / kg', active: true },
    { name: 'Delicate Dry Cleaning', price: '₹149 / item', active: true },
    { name: 'Sneakers & Shoes Care', price: '₹249 / pair', active: true }
  ];

  return (
    <PageTransition>
      <div className="container" style={{ padding: '40px 20px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ background: '#0f172a', color: '#38bdf8', padding: '4px 12px', borderRadius: 20, fontSize: '0.74rem', fontWeight: 800 }}>
              ADMIN OPERATIONS PORTAL
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#091e42', marginTop: 8 }}>
              Business Operations & Dispatch
            </h1>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setActiveTab('orders')}
              style={{
                padding: '8px 18px',
                borderRadius: 20,
                background: activeTab === 'orders' ? '#0265d2' : '#ffffff',
                color: activeTab === 'orders' ? '#ffffff' : '#475569',
                border: '1.5px solid #cbd5e1',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}
            >
              Live Orders
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              style={{
                padding: '8px 18px',
                borderRadius: 20,
                background: activeTab === 'catalog' ? '#0265d2' : '#ffffff',
                color: activeTab === 'catalog' ? '#ffffff' : '#475569',
                border: '1.5px solid #cbd5e1',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}
            >
              Services & Pricing
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
          <div style={{ background: '#ffffff', borderRadius: 20, padding: 22, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>TODAY'S ORDERS</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>38 Orders</div>
          </div>
          <div style={{ background: '#ffffff', borderRadius: 20, padding: 22, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>PROCESSING IN STEAM PRESS</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0265d2', marginTop: 4 }}>14 Active</div>
          </div>
          <div style={{ background: '#ffffff', borderRadius: 20, padding: 22, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>DELIVERIES SCHEDULED</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#16a34a', marginTop: 4 }}>21 Drops</div>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'orders' ? (
          <div style={{ background: '#ffffff', borderRadius: 24, padding: '24px 20px', border: '1px solid #e2e8f0', boxShadow: '0 6px 24px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 18 }}>
              Active Client Orders
            </h3>
            <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>ORDER ID</th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>CUSTOMER</th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>SERVICE</th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>AMOUNT</th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((ord) => (
                    <tr key={ord.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 800, color: '#0265d2' }}>{ord.id}</td>
                      <td style={{ padding: '14px 16px', fontWeight: 600, color: '#0f172a' }}>{ord.customer}</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>{ord.service} ({ord.items} items)</td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0f172a' }}>{ord.amount}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          background: ord.status === 'In Cleaning' ? '#fef3c7' : ord.status === 'Delivered' ? '#dcfce7' : '#eaf3fe',
                          color: ord.status === 'In Cleaning' ? '#d97706' : ord.status === 'Delivered' ? '#16a34a' : '#0265d2',
                          padding: '4px 10px',
                          borderRadius: 14,
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap'
                        }}>
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div style={{ background: '#ffffff', borderRadius: 24, padding: '24px 20px', border: '1px solid #e2e8f0', boxShadow: '0 6px 24px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 18 }}>
              Service Catalog & Live Price Controls
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {servicesCatalog.map((svc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: '#f8fafc', borderRadius: 14, border: '1px solid #e2e8f0', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>{svc.name}</strong>
                    <span style={{ marginLeft: 12, color: '#0265d2', fontWeight: 700 }}>{svc.price}</span>
                  </div>
                  <span style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.82rem' }}>✓ Active</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

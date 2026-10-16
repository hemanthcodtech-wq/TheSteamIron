
import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Clock, 
  Navigation, 
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { PageTransition } from '../components/MotionSystem';

export default function DeliveryPanel() {
  const [tasks, setTasks] = useState([
    {
      id: 'DEL-101',
      orderId: 'TSI-9012',
      type: 'Pickup',
      customer: 'Priya Sharma',
      phone: '+91 98765 43210',
      address: 'Plot 42, Green Glen Layout, Kondapur',
      timeSlot: 'Morning (08:00 AM - 11:00 AM)',
      status: 'Assigned',
      itemsCount: '8 pieces estimated'
    },
    {
      id: 'DEL-102',
      orderId: 'TSI-9010',
      type: 'Delivery',
      customer: 'Ananya Deshmukh',
      phone: '+91 98765 43211',
      address: 'Flat 204, Fortune Residency, HITEC City',
      timeSlot: 'Afternoon (12:00 PM - 03:00 PM)',
      status: 'En Route',
      itemsCount: '5 kg wash & fold (Crisp Packed)'
    }
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <PageTransition>
      <div className="container" style={{ padding: '36px 20px 70px', maxWidth: 740 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <span style={{ background: '#eaf3fe', color: '#0265d2', padding: '4px 12px', borderRadius: 20, fontSize: '0.74rem', fontWeight: 800 }}>
              VALET LOGISTICS APP
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#091e42', marginTop: 6 }}>
              Doorstep Valet Dispatch
            </h1>
          </div>
          <span style={{ background: '#dcfce7', color: '#16a34a', padding: '6px 14px', borderRadius: 20, fontWeight: 700, fontSize: '0.82rem' }}>
            ● Online & Active
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {tasks.map((task) => (
            <div key={task.id} style={{
              background: '#ffffff',
              borderRadius: 22,
              padding: 24,
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(2, 101, 210, 0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{
                  background: task.type === 'Pickup' ? '#eaf3fe' : '#fef3c7',
                  color: task.type === 'Pickup' ? '#0265d2' : '#d97706',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  padding: '4px 12px',
                  borderRadius: 14
                }}>
                  {task.type.toUpperCase()}: {task.orderId}
                </span>

                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: task.status === 'Completed' ? '#16a34a' : '#0f172a'
                }}>
                  Status: {task.status}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#0f172a', marginBottom: 4 }}>
                {task.customer}
              </h3>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#475569', fontSize: '0.88rem', margin: '6px 0' }}>
                <MapPin size={16} color="#0265d2" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{task.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: '0.82rem', marginBottom: 16 }}>
                <Clock size={15} /> Slot: {task.timeSlot} • ({task.itemsCount})
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, paddingTop: 14, borderTop: '1px solid #f1f5f9' }}>
                <a
                  href={`tel:${task.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '12px',
                    borderRadius: 12,
                    background: '#f1f5f9',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  <Phone size={15} /> Call Client
                </a>

                {task.status !== 'Completed' ? (
                  <button
                    onClick={() => handleUpdateStatus(task.id, 'Completed')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '12px',
                      borderRadius: 12,
                      background: '#16a34a',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}
                  >
                    <CheckCircle2 size={16} /> Mark Complete
                  </button>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', fontWeight: 700, fontSize: '0.88rem' }}>
                    ✓ Handover Finished
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

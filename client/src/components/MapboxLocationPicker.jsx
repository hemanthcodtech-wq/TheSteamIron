import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';

export default function MapboxLocationPicker({ onLocationSelect, defaultAddress }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Default coordinate: Hyderabad HITEC City / Kondapur
  const [coords, setCoords] = useState({ lng: 78.3800, lat: 17.4483 });
  const [addressPreview, setAddressPreview] = useState(defaultAddress || 'HITEC City, Hyderabad, Telangana');
  const [mapLoaded, setMapLoaded] = useState(false);

  // Public token from environment variable or demo key
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

  useEffect(() => {
    if (mapboxToken) {
      mapboxgl.accessToken = mapboxToken;
    }

    if (mapContainerRef.current && !mapRef.current) {
      try {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [coords.lng, coords.lat],
          zoom: 13
        });

        // Add navigation controls (zoom in / out)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Create draggable marker
        const marker = new mapboxgl.Marker({
          color: '#0265d2',
          draggable: true
        })
          .setLngLat([coords.lng, coords.lat])
          .addTo(map);

        marker.on('dragend', () => {
          const lngLat = marker.getLngLat();
          setCoords({ lng: lngLat.lng, lat: lngLat.lat });
          const newAddr = `Lat: ${lngLat.lat.toFixed(4)}, Lng: ${lngLat.lng.toFixed(4)} (Selected via Mapbox Pin)`;
          setAddressPreview(newAddr);
          if (onLocationSelect) {
            onLocationSelect({ lng: lngLat.lng, lat: lngLat.lat, address: newAddr });
          }
        });

        map.on('click', (e) => {
          marker.setLngLat(e.lngLat);
          setCoords({ lng: e.lngLat.lng, lat: e.lngLat.lat });
          const newAddr = `Lat: ${e.lngLat.lat.toFixed(4)}, Lng: ${e.lngLat.lng.toFixed(4)} (Pinned Location)`;
          setAddressPreview(newAddr);
          if (onLocationSelect) {
            onLocationSelect({ lng: e.lngLat.lng, lat: e.lngLat.lat, address: newAddr });
          }
        });

        map.on('load', () => {
          setMapLoaded(true);
        });

        mapRef.current = map;
        markerRef.current = marker;
      } catch (err) {
        console.warn('Mapbox initialization notice:', err);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { longitude, latitude } = pos.coords;
          setCoords({ lng: longitude, lat: latitude });
          if (mapRef.current) {
            mapRef.current.flyTo({ center: [longitude, latitude], zoom: 15 });
          }
          if (markerRef.current) {
            markerRef.current.setLngLat([longitude, latitude]);
          }
          const detectedAddr = `Current Location Coordinates (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
          setAddressPreview(detectedAddr);
          if (onLocationSelect) {
            onLocationSelect({ lng: longitude, lat: latitude, address: detectedAddr });
          }
        },
        (err) => {
          console.warn('Geolocation error:', err.message);
        }
      );
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 18,
      border: '1.5px solid #e2e8f0',
      overflow: 'hidden',
      marginTop: 12
    }}>
      <div style={{
        padding: '14px 18px',
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.86rem', color: '#0f172a', fontWeight: 700 }}>
          <MapPin size={16} color="#0265d2" />
          <span>Pin Exact Doorstep Location</span>
        </div>
        <button
          type="button"
          onClick={handleUseCurrentLocation}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#eaf3fe',
            color: '#0265d2',
            padding: '6px 14px',
            borderRadius: 20,
            fontSize: '0.78rem',
            fontWeight: 700,
            transition: 'all 0.2s ease'
          }}
        >
          <Navigation size={13} /> Detect GPS Location
        </button>
      </div>

      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: 260, position: 'relative' }} 
      />

      <div style={{
        padding: '12px 18px',
        background: '#ffffff',
        borderTop: '1px solid #f1f5f9',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: '0.8rem',
        color: '#64748b'
      }}>
        <CheckCircle2 size={15} color="#16a34a" style={{ flexShrink: 0 }} />
        <span><strong>Pinned Coordinates:</strong> {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)} • Drag pin or click map to adjust</span>
      </div>
    </div>
  );
}

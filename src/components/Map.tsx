import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string>('1');

  const locations = [
    {
      id: '1',
      name: 'Türkiye',
      flag: '🇹🇷',
      companyName: 'Koray Çetintaş Danışmanlık',
      description: 'Türkiye genelinde dijital dönüşüm ve ERP danışmanlık hizmetleri',
      coordinates: [39.0, 35.0] as [number, number]
    },
    {
      id: '2', 
      name: 'Kuzey Kıbrıs',
      flag: '🇨🇾',
      companyName: 'KKTC Ofis',
      description: 'Kuzey Kıbrıs Türk Cumhuriyeti\'nde ERP ve dijital dönüşüm projeleri',
      coordinates: [35.2, 33.4] as [number, number]
    }
  ];

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId);
  };

  return (
    <section id="map" className="map-compact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lokasyonlar</h2>
          <p className="section-description">
            Türkiye ve Kuzey Kıbrıs'ta hizmet verdiğimiz lokasyonlar
          </p>
        </div>

        <div className="map-content-wrapper">
          <div className="map-locations-compact">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className={`location-compact ${activeLocation === location.id ? 'active' : ''}`}
                onClick={() => handleLocationClick(location.id)}
              >
                <div className="location-flag-large">{location.flag}</div>
                <div className="location-info">
                  <strong>{location.name}</strong>
                  <span className="company-name">{location.companyName}</span>
                  <span className="location-description">{location.description}</span>
                </div>
              </div>
            ))}
          </div>

          <MapContainer
            center={[37.0, 34.0]}
            zoom={6}
            style={{ height: '500px', width: '100%' }}
            id="compactMap"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker key={location.id} position={location.coordinates}>
                <Popup>
                  <div style={{ textAlign: 'center', padding: '5px' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{location.flag}</div>
                    <strong>{location.name}</strong><br />
                    <span style={{ fontSize: '0.9rem', color: '#4a90e2' }}>{location.companyName}</span><br />
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{location.description}</span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="map-cta">
          <a href="#contact" className="btn btn-primary">
            Lokasyonunuza Özel Çözüm İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
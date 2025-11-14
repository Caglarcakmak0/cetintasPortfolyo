import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle map view changes
const MapViewController: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1 });
  }, [center, zoom, map]);
  
  return null;
};

const Map: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string>('1');
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.0, 20.0]);
  const [mapZoom, setMapZoom] = useState<number>(3);

  const whatsappNumber = '905492211008';
  const whatsappMessage = 'Merhaba Koray bey, erp danışmanlığı hakkında bilgi almak istiyorum';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const locations = [
    {
      id: '1',
      name: 'Türkiye',
      flag: '🇹🇷',
      companyName: 'Koray Çetintaş Danışmanlık',
      description: 'Türkiye genelinde dijital dönüşüm ve ERP danışmanlık hizmetleri',
      address: 'İstiklal Mahallesi Piyalepaşa Bulvarı 22/1 Ticari, B Blok, 34440 Beyoğlu/İstanbul',
      mapUrl: 'https://maps.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cab7cd80b350a7:0xb19c7ca87e9d7486',
      coordinates: [41.0602, 28.9744] as [number, number]
    },
    {
      id: '2', 
      name: 'Kuzey Kıbrıs',
      flag: '🇨🇾',
      companyName: 'KKTC Ofis',
      description: 'Kuzey Kıbrıs Türk Cumhuriyeti\'nde ERP ve dijital dönüşüm projeleri',
      address: 'Dijital Dönüşüm Mimarı & ERP Danışmanı',
      coordinates: [35.2, 33.4] as [number, number]
    },
    {
      id: '3',
      name: 'San Francisco',
      flag: '🇺🇸',
      companyName: 'Silikon Vadisi Ofis',
      description: 'Silikon Vadisi\'nde yapay zekâ ve inovasyon projeleri',
      address: '1875 Mission St Ste 103 # 421 San Francisco, CA 94103-3561',
      coordinates: [37.7627, -122.4194] as [number, number]
    },
    {
      id: '4',
      name: 'İngiltere',
      flag: '🇬🇧',
      companyName: 'Londra Ofis',
      description: 'Birleşik Krallık\'ta kurumsal danışmanlık ve stratejik yönetim',
      address: '88 Park Lane N17 0JR London',
      coordinates: [51.6050, -0.0745] as [number, number]
    },

  ];

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId);
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setMapCenter(location.coordinates);
      setMapZoom(6);
    }
  };

  return (
    <section id="map" className="map-compact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lokasyonlar</h2>
          <p className="section-description">
            Türkiye, KKTC, ABD ve İngiltere'de hizmet verdiğimiz global lokasyonlar
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
                <div className="location-info">
                  <strong>{location.name}</strong>
                  <span className="company-name">{location.companyName}</span>
                  <span className="location-description">{location.description}</span>
                  <span className="location-address">{location.address}</span>
                </div>
              </div>
            ))}
          </div>

          <MapContainer
            center={[40.0, 20.0]}
            zoom={3}
            style={{ height: '500px', width: '100%' }}
            id="compactMap"
          >
            <MapViewController center={mapCenter} zoom={mapZoom} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker key={location.id} position={location.coordinates}>
                <Popup>
                  <div style={{ textAlign: 'center', padding: '5px' }}>
                    <strong>{location.name}</strong><br />
                    <span style={{ fontSize: '0.9rem', color: '#4a90e2' }}>{location.companyName}</span><br />
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{location.description}</span><br />
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '5px', display: 'block' }}>{location.address}</span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="map-cta">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Lokasyonunuza Özel Çözüm İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
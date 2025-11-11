import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  id: string;
  name: string;
  company: string;
  description: string;
  coords: [number, number];
  flag: string;
}

const MapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Array<{ marker: L.Marker; location: Location }>>([]);

  const locations: Location[] = [
    {
      id: 'turkey',
      name: 'Türkiye - İstanbul',
      company: 'Didoda Bilgi Teknolojileri A.Ş.',
      description: 'Türkiye\'deki ana operasyon merkezi olarak ERP, dijital dönüşüm ve kurumsal yazılım projelerini yönetiyoruz.',
      coords: [41.0082, 28.9784],
      flag: '🇹🇷'
    },
    {
      id: 'cyprus',
      name: 'KKTC - Lefkoşa',
      company: 'Didoda Bilgi Teknolojileri Ltd.',
      description: 'Kuzey Kıbrıs\'ta teknoloji danışmanlığı, yazılım geliştirme ve dijital veri köprüsü çözümleri.',
      coords: [35.1856, 33.3823],
      flag: '🇨🇾'
    },
    {
      id: 'uk',
      name: 'İngiltere - Londra',
      company: 'Çetintaş Consulting UK',
      description: 'Avrupa pazarında dijital dönüşüm danışmanlığı, stratejik iş geliştirme ve uluslararası ERP projeleri.',
      coords: [51.5074, -0.1278],
      flag: '🇬🇧'
    },
    {
      id: 'usa',
      name: 'ABD - San Francisco',
      company: 'Çetintaş Tech Solutions',
      description: 'Yapay zeka, IoT ve endüstriyel elektronik çözümlerinde Amerika pazarına özel teknoloji danışmanlığı.',
      coords: [37.7749, -122.4194],
      flag: '🇺🇸'
    }
  ];

  const focusOnLocation = (locationId: string) => {
    const location = locations.find(loc => loc.id === locationId);
    if (!location || !mapInstanceRef.current) return;

    const map = mapInstanceRef.current;
    
    // Zoom to location with animation
    map.setView(location.coords, 6, {
      animate: true,
      duration: 1
    });

    // Open popup for the marker
    const markerObj = markersRef.current.find(m => m.location.id === locationId);
    if (markerObj) {
      markerObj.marker.openPopup();
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [40.0, 20.0],
      zoom: 3,
      scrollWheelZoom: false,
      zoomControl: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    // Custom marker icon with flag
    const createCustomIcon = (flag: string) => {
      return L.divIcon({
        html: `<div style="font-size: 24px;">${flag}</div>`,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
    };

    // Clear previous markers
    markersRef.current = [];

    // Add markers to map
    locations.forEach(location => {
      const marker = L.marker(location.coords, { icon: createCustomIcon(location.flag) }).addTo(map);
      
      const popupContent = `
        <div class="map-popup">
          <h4>${location.flag} ${location.name}</h4>
          <p><strong>${location.company}</strong></p>
          <p>${location.description}</p>
        </div>
      `;
      
      marker.bindPopup(popupContent);
      markersRef.current.push({ marker, location });
    });

    // Fit map to show all markers
    const group = L.featureGroup(markersRef.current.map(m => m.marker));
    map.fitBounds(group.getBounds().pad(0.1));

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-intro">
            <h1>🌍 Global Operasyonlarımız</h1>
            <p>
              Türkiye, Kuzey Kıbrıs, İngiltere ve ABD'de faaliyet gösteren şirketlerimiz ile 
              dijital dönüşüm ve ERP danışmanlığı hizmetlerimizi sunuyoruz.
            </p>
          </div>
          
          {/* Interactive Map */}
          <div id="map" ref={mapRef} style={{ width: '100%', height: '600px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', margin: '2rem 0' }}></div>
          
          {/* Location Cards */}
          <div className="location-cards">
            {locations.map(location => (
              <div 
                key={location.id}
                className="location-card location-compact"
                onClick={() => focusOnLocation(location.id)}
                data-location={location.id}
              >
                <h3><span className="location-flag">{location.flag}</span> {location.name}</h3>
                <div className="company-name">{location.company}</div>
                <p>{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .map-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .map-intro {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .map-intro h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }
        
        .map-intro p {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .location-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .location-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .location-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .location-compact.highlighted {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-color: #3b82f6;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }
        
        .location-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .location-flag {
          font-size: 1.8rem;
        }
        
        .location-card .company-name {
          font-weight: 600;
          color: #4a90e2;
          margin-bottom: 0.5rem;
        }
        
        .location-card p {
          color: #666;
          line-height: 1.6;
          margin: 0.5rem 0;
        }
        
        /* Custom Leaflet Popup Styling */
        :global(.leaflet-popup-content-wrapper) {
          border-radius: 8px;
          padding: 0;
        }
        
        :global(.leaflet-popup-content) {
          margin: 1rem;
          font-family: 'Inter', sans-serif;
        }

        :global(.custom-marker) {
          background: transparent !important;
          border: none !important;
          border-radius: 50% !important;
        }

        .map-popup {
          font-family: 'Inter', sans-serif;
          max-width: 250px;
        }

        .map-popup h4 {
          margin: 0 0 8px 0;
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
        }

        .map-popup p {
          margin: 4px 0;
          color: #4b5563;
          font-size: 12px;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
};

export default MapPage;
import React from 'react';
import clientsData from '@/data/clients.json';

const ClientsMarquee: React.FC = () => {
  const { row1, row2 } = clientsData as { row1: any[], row2: any[] };

  return (
    <section className="clients-section">
      <div className="container">
        <p className="section-subtitle">Güvenilen İş Ortaklarım</p>
        
        <div className="marquee">
          <div className="marquee-content">
            {[...row1, ...row1].map((client, index) => (
              <div key={`row1-${index}`} className="marquee-item">
                <div className="logo-card">
                  <img 
                    src={`/${client.logo}`} 
                    alt={client.name}
                    className="client-logo"
                    onError={(e) => {
                      console.log(`Failed to load: /${client.logo}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee marquee-reverse">
          <div className="marquee-content">
            {[...row2, ...row2].map((client, index) => (
              <div key={`row2-${index}`} className="marquee-item">
                <div className="logo-card">
                  <img 
                    src={`/${client.logo}`} 
                    alt={client.name}
                    className="client-logo"
                    onError={(e) => {
                      console.log(`Failed to load: /${client.logo}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
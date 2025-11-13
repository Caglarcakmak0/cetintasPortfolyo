import React from 'react';
import clientsData from '@/data/clients.json';
import SplitText from '@/animations/SplitText';
import AnimatedContent from '@/animations/AnimatedContent';
import Breadcrumb from '@/components/Breadcrumb';

interface Client {
  id: number;
  name: string;
  logo: string;
  sector: string;
}

const ReferencesPage: React.FC = () => {
  // Combine all clients from both rows
  const allClients: Client[] = [...clientsData.row1, ...clientsData.row2];

  // Group clients by sector
  const clientsBySector = allClients.reduce((acc, client) => {
    if (!acc[client.sector]) {
      acc[client.sector] = [];
    }
    acc[client.sector].push(client);
    return acc;
  }, {} as Record<string, Client[]>);

  // Sort sectors alphabetically
  const sortedSectors = Object.keys(clientsBySector).sort();

  return (
    <div className="references-page">
      <Breadcrumb
        title="Referanslar"
        breadcrumb={[
          { label: 'Referanslar' }
        ]}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920"
      />

      <div className="references-header">
        <SplitText
          text="KURUMSAL İŞ ORTAKLARIM"
          className="sectors-label"
          delay={200}
          duration={1.5}
          ease="back.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
        <SplitText
          text="TÜM REFERANSLARIM"
          className="black-title"
          delay={70}
          duration={0.5}
          ease="back.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
      </div>

      <div className="references-content">
        {sortedSectors.map((sector, sectorIndex) => (
          <AnimatedContent
            key={sector}
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={sectorIndex * 0.1}
          >
            <div className="sector-section">
              <h2 className="sector-title">{sector}</h2>
              <div className="clients-grid">
                {clientsBySector[sector].map((client) => (
                  <div key={client.id} className="client-card">
                    <div className="client-logo-wrapper">
                      <img
                        src={`/${client.logo}`}
                        alt={client.name}
                        className="client-logo-full"
                        onError={(e) => {
                          console.log(`Failed to load: /${client.logo}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="client-name">{client.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default ReferencesPage;

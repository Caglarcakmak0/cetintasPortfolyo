import { Helmet } from 'react-helmet-async';

interface HelmetProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
  locale?: string;
}

export const HelmetComponent: React.FC<HelmetProps> = ({
  title,
  description,
  keywords,
  ogImage = '/assets/koray1.png',
  canonical,
  type = 'website',
  locale = 'tr_TR'
}) => {
  const fullTitle = title.includes('Koray Çetintaş') 
    ? title 
    : `${title} | Koray Çetintaş`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};
import { HelmetComponent } from './Helmet';
import { seoMetadata, getSectorSEO, getCaseStudySEO } from '@/data/seo-metadata';
import { useLocation } from 'react-router-dom';
import caseStudies from '@/data/case-studies.json';

interface PageSEOProps {
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  customImage?: string;
}

export const PageSEO: React.FC<PageSEOProps> = ({
  customTitle,
  customDescription,
  customKeywords,
  customImage
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Dinamik sayfalar için meta veri belirleme
  let seoData = seoMetadata[currentPath];
  
  // Sektör detay sayfası
  if (currentPath.startsWith('/sector/')) {
    const sectorId = currentPath.split('/')[2];
    const sector = caseStudies.find(study => study.id === sectorId);
    if (sector) {
      seoData = getSectorSEO(sectorId, sector.title);
    }
  }
  
  // Case study sayfası
  if (currentPath.startsWith('/case-study/')) {
    const caseId = currentPath.split('/')[2];
    const caseStudy = caseStudies.find(study => study.id === caseId);
    if (caseStudy) {
      seoData = getCaseStudySEO(caseStudy);
    }
  }
  
  // Varsayılan meta veri
  if (!seoData) {
    seoData = seoMetadata['/'];
  }
  
  const canonicalUrl = `https://koraycetintas.com${currentPath}`;
  
  return (
    <HelmetComponent
      title={customTitle || seoData.title}
      description={customDescription || seoData.description}
      keywords={customKeywords || seoData.keywords}
      ogImage={customImage || seoData.ogImage}
      canonical={canonicalUrl}
    />
  );
};
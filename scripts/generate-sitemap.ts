import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

const generateSitemap = (): void => {
  const baseUrl = 'https://koraycetintas.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/sectors`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/map`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    }
  ];

  // Case studies (dynamik sayfalar)
  const caseStudies = [
    'uretim-sektoru',
    'lojistik-dagitim', 
    'perakende-eticaret',
    'profesyonel-hizmetler',
    'saglik-hizmetleri'
  ];

  const caseStudyPages: SitemapEntry[] = caseStudies.map(id => ({
    url: `${baseUrl}/sector/${id}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }));

  const allPages = [...staticPages, ...caseStudyPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Sitemap'i public klasörüne yaz
  const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${allPages.length}`);
};

// Script'i çalıştır
generateSitemap();
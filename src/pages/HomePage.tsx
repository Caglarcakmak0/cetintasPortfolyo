import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Sectors from '../components/Sectors';
// import Blog from '../components/Blog';

// Lazy loading for heavy components
const ClientsMarquee = lazy(() => import('../components/ClientsMarquee'));
const Map = lazy(() => import('../components/Map'));

const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<div className="component-loading">Yükleniyor...</div>}>
      <ClientsMarquee />
    </Suspense>
    <About />
    <Sectors />
    {/* <Blog /> */}
    <Suspense fallback={<div className="component-loading">Harita yükleniyor...</div>}>
      <Map />
    </Suspense>
  </>
);

export default HomePage;
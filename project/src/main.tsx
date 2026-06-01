import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import ScrollToTop from './ScrollToTop.tsx';
import SeoCityPage from './SeoCityPage.tsx';
import SeoKeywordPage from './SeoKeywordPage.tsx';
import SitemapPage from './SitemapPage.tsx';
import './index.css';

import { Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/kontejner/:slug" element={<SeoCityPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          {[
            'kontejner-cena',
            'ladijski-kontejner',
            'kontejner-za-skladiscenje',
            'kontejner-za-gradbiscite',
            'rabljeni-kontejnerji',
            'kontejner-20ft',
            'kontejner-40ft',
            'high-cube-kontejner',
            'hladilni-kontejner',
            'kontejner-dostava',
          ].map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<SeoKeywordPage />} />
          ))}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

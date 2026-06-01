import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { keywords, cities, containerTypes } from './seoData';
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Container,
  CheckCircle,
  Shield,
  Truck,
  Layers,
} from 'lucide-react';

export default function SeoKeywordPage() {
  const { slug } = useParams<{ slug: string }>();
  const kw = keywords.find((k) => k.slug === slug);

  if (!kw) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stran ni najdena</h1>
          <Link to="/" className="text-orange-500 hover:underline">Nazaj na domačo stran</Link>
        </div>
      </div>
    );
  }

  const paragraphs = kw.content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Helmet>
        <title>{kw.title}</title>
        <meta name="description" content={kw.description} />
        <meta name="keywords" content={kw.keywords.join(', ')} />
        <meta property="og:title" content={kw.title} />
        <meta property="og:description" content={kw.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://starcontainers.si/${kw.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": kw.h1,
          "description": kw.description,
          "isPartOf": {
            "@type": "WebSite",
            "name": "STAR Containers",
            "url": "https://starcontainers.si"
          }
        })}</script>
      </Helmet>

      {/* Nav */}
      <header className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-8 w-auto" />
              <span className="hidden sm:block font-black text-lg transition-colors duration-300 text-gray-900 dark:text-white">
                STAR <span className="text-orange-500">CONTAINERS</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Domov</Link>
              <a href="/#kontejnerji" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Kontejnerji</a>
              <a href="/#kontakt" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Kontakt</a>
            </div>
            <a href="/#kontakt" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
              Povpraševanje
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Vodnik
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {kw.h1}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            {kw.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#kontakt" className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1">
              Brezplačno povpraševanje
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+38630555001" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1">
              <Phone className="w-4 h-4" />
              Pokličite nas
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {/* Feature image */}
              <div className="mb-8 rounded-2xl overflow-hidden h-80 bg-gray-100 dark:bg-gray-800">
                <img src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800" alt={kw.h1} className="w-full h-full object-cover" />
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-5">
                {paragraphs.slice(0, 2).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Price table (for relevant pages) */}
              {(kw.slug === 'kontejner-cena' || kw.slug === 'ladijski-kontejner') && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-3">Cene kontejnerjev</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 px-3 font-bold">Tip</th>
                          <th className="text-left py-2 px-3 font-bold">Kapaciteta</th>
                          <th className="text-right py-2 px-3 font-bold">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        {containerTypes.slice(0, 6).map((ct) => (
                          <tr key={ct.slug} className="border-b border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                            <td className="py-2 px-3 font-semibold text-sm">{ct.name}</td>
                            <td className="py-2 px-3 text-gray-600 dark:text-gray-400 text-sm">{ct.capacity}</td>
                            <td className="py-2 px-3 font-bold text-orange-500 text-right">€{ct.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Quick features */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Truck, title: 'Dostava 48h', desc: 'Po vsej Sloveniji' },
                  { icon: Shield, title: 'ISO certificirani', desc: 'Jamčena kakovost' },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-100 dark:border-orange-900/30">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <b.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{b.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Brezplačno povpraševanje</h3>
                <div className="space-y-3 text-sm">
                  <a href="tel:+38641000000" className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <Phone className="w-4 h-4 text-orange-500" />
                    +386 30 555 001
                  </a>
                </div>
                <a href="/#kontakt" className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
                  Pošlji povpraševanje
                </a>
              </div>

              {/* City links */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Kontejnerji po mestih</h3>
                <div className="space-y-2">
                  {cities.slice(0, 8).map((c) => (
                    <Link
                      key={c.slug}
                      to={`/kontejner/${c.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500" />
                      Kontejner {c.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other keyword links */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Povezane teme</h3>
                <div className="space-y-2">
                  {keywords.filter((k) => k.slug !== kw.slug).slice(0, 6).map((k) => (
                    <Link
                      key={k.slug}
                      to={`/${k.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500" />
                      {k.h1.split(' – ')[0]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 rounded-full opacity-30" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">{kw.h1.split(' – ')[0]} – Kontaktirajte nas</h2>
          <p className="text-orange-100 mb-6">Brezplačno povpraševanje brez obveznosti. Odgovorimo v 2 urah.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#kontakt" className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-all hover:-translate-y-0.5">
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+38641000000" className="flex items-center gap-2 bg-black/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full hover:bg-black/30 transition-all hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
              +386 41 000 000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 dark:bg-navy-950 text-gray-400 py-8 border-t border-navy-800/50 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-600">
          <div className="mb-4">
            <a href="https://skladiscko.si/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
              Obiščite skladiscko.si →
            </a>
          </div>
          &copy; 2026 STAR Containers d.o.o. Vse pravice pridržane.
        </div>
      </footer>
    </div>
  );
}

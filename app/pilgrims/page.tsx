import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle, SiteFooter, SiteHeader } from '@/components/site-shell';
import { pilgrims } from '@/lib/pilgrims';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Pilgrims | The Broken Year',
  description:
    'Meet the six ancient seasonal Pilgrims whose roads shape the world of The Broken Year.',
  alternates: { canonical: '/pilgrims' },
  openGraph: {
    title: 'The Pilgrims | The Broken Year',
    description:
      'Frost, Bloom, Heat, Gale, Rain, and Harvest walk roads older than kingdoms.',
    type: 'website',
    images: [
      {
        url: '/assets/pilgrim-frost.png',
        width: 1024,
        height: 1536,
        alt: 'Frost, one of the six Pilgrims of The Broken Year',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pilgrims | The Broken Year',
    description:
      'Frost, Bloom, Heat, Gale, Rain, and Harvest walk roads older than kingdoms.',
    images: ['/assets/pilgrim-frost.png'],
  },
};

export default function PilgrimsPage() {
  return (
    <main className="pilgrims-page">
      <section className="pilgrims-page-hero">
        <SiteHeader active="pilgrims" />
        <div className="pilgrims-page-hero-art" aria-hidden="true">
          {pilgrims.map((pilgrim) => (
            <Image
              src={pilgrim.image}
              alt=""
              width={480}
              height={720}
              key={pilgrim.id}
            />
          ))}
        </div>
        <div className="page-shell pilgrims-page-hero-copy">
          <p className="pilgrims-page-eyebrow">The Pilgrims</p>
          <h1>
            The year walks
            <br />
            ancient roads.
          </h1>
          <p className="pilgrims-page-deck">
            Ancient forces follow roads older than kingdoms. Their passing
            shapes the seasons—and every life built around them.
          </p>
          <Link className="button button-outline" href="/world">
            Trace their roads
          </Link>
        </div>
      </section>

      <section className="page-shell pilgrims-page-section">
        <SectionTitle>The Six Roads</SectionTitle>
        <div className="pilgrim-guide-grid">
          {pilgrims.map((pilgrim) => (
            <article
              className="pilgrim-guide-card"
              id={pilgrim.id}
              key={pilgrim.id}
            >
              <figure className="pilgrim-guide-art">
                <Image
                  src={pilgrim.image}
                  alt={`${pilgrim.name}, one of the six Pilgrims`}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 900px) 38vw, 30vw"
                />
              </figure>
              <div className="pilgrim-guide-copy">
                <p className="pilgrim-guide-kicker">
                  <span>{pilgrim.number}</span>
                  {pilgrim.aspect}
                </p>
                <h2>{pilgrim.name}</h2>
                <div className="pilgrim-guide-rule" aria-hidden="true">
                  <span />◇
                </div>
                <p>{pilgrim.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pilgrims-map-cta">
        <div>
          <p className="panel-kicker">The World</p>
          <h2>Trace the old roads.</h2>
          <p>
            See the lands, cities, and waterworks shaped by the passage of the
            six Pilgrims.
          </p>
        </div>
        <Link className="button button-gold" href="/world">
          Explore the map
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

import type { Metadata } from 'next';
import { SiteFooter, SiteHeader, SectionTitle } from '@/components/site-shell';
import { WorldMapExplorer } from '@/components/world-map-explorer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The World | The Broken Year',
  description:
    'Explore an interactive atlas of the lands, roads, and people of The Broken Year.',
  alternates: { canonical: '/world' },
  openGraph: {
    title: 'The World | The Broken Year',
    description:
      'Explore the lands, roads, and people shaped by the six seasonal Pilgrims.',
    type: 'website',
    images: [
      {
        url: '/assets/world-map.png',
        width: 1025,
        height: 1535,
        alt: 'Map of The Broken Year',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The World | The Broken Year',
    description:
      'Explore the lands, roads, and people shaped by the six seasonal Pilgrims.',
    images: ['/assets/world-map.png'],
  },
};

export default function WorldPage() {
  return (
    <main className="world-page">
      <section className="world-page-hero">
        <SiteHeader active="world" />
        <div className="page-shell world-page-hero-copy">
          <p className="world-page-eyebrow">The World</p>
          <h1>
            Six seasons.
            <br />
            Infinite stories.
          </h1>
          <p className="world-page-deck">
            From the White Stair to the Amber Plain, explore the lands, peoples,
            and histories that shape <em>The Broken Year.</em>
          </p>
          <p className="world-page-instruction">
            <span aria-hidden="true">◇</span> Location names reveal the world.
            Pilgrim names open their guide.
          </p>
        </div>
      </section>

      <section className="page-shell world-page-section">
        <SectionTitle>Explore the World</SectionTitle>
        <WorldMapExplorer />
      </section>

      <SiteFooter />
    </main>
  );
}

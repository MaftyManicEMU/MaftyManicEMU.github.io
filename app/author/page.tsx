import type { Metadata } from 'next';
import { NewsletterForm } from '@/components/newsletter-form';
import {
  AmazonBrandIcon,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from '@/components/site-shell';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'M. Laurence Scott | Author of The Broken Year',
  description:
    'Meet M. Laurence Scott, the Southern California fantasy writer behind The Broken Year.',
  alternates: { canonical: '/author' },
  openGraph: {
    title: 'M. Laurence Scott | The Broken Year',
    description:
      'Meet the author of The Broken Year, an epic-fantasy series about ordinary people facing forces larger than themselves.',
    type: 'profile',
    images: [
      {
        url: '/assets/m-laurence-scott-portrait.jpg',
        width: 1024,
        height: 1365,
        alt: 'M. Laurence Scott, author of The Broken Year',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Laurence Scott | The Broken Year',
    description:
      'Meet the Southern California fantasy writer behind The Broken Year.',
    images: ['/assets/m-laurence-scott-portrait.jpg'],
  },
};

const books = [
  { title: 'The Chained Rain', image: '/assets/chained-rain.png' },
  { title: 'The Hollow Season', image: '/assets/hollow-season.png' },
  { title: 'The Last Godroad', image: '/assets/last-godroad.png' },
] as const;

export default function AuthorPage() {
  return (
    <main className="author-page">
      <section className="author-page-hero">
        <SiteHeader active="author" />
        <div className="page-shell author-page-hero-copy">
          <p className="author-page-eyebrow">The Author</p>
          <h1>
            <span>M. Laurence</span>
            <span>Scott</span>
          </h1>
          <p className="author-page-deck">
            A Southern California writer drawn to sprawling worlds, complicated
            people, and the systems they build to survive one another.
          </p>
          <div className="author-page-actions">
            <a className="button button-gold" href="#about">
              About the author
            </a>
            <a
              className="button button-outline hero-amazon-button author-amazon-button"
              href="https://www.amazon.com/author/mlaurencescott"
              target="_blank"
              rel="noreferrer"
              aria-label="View M. Laurence Scott's Author Central page on Amazon"
            >
              <AmazonBrandIcon className="amazon-button-mark" />
              <span>
                View Author Central<small>on Amazon</small>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="page-shell author-page-section" id="about">
        <SectionTitle>The Author</SectionTitle>
        <article className="author-profile">
          <figure className="author-profile-portrait">
            <img
              src="/assets/m-laurence-scott-portrait.jpg"
              alt="M. Laurence Scott"
            />
          </figure>
          <div className="author-profile-copy">
            <p className="panel-kicker">M. Laurence Scott</p>
            <h2>Worlds built around the people who must live in them.</h2>
            <div className="author-profile-rule" aria-hidden="true" />
            <div className="author-profile-bio">
              <p>
                M. Laurence Scott is a Southern California writer drawn to
                sprawling worlds, complicated people, and the systems they build
                to survive one another.
              </p>
              <p>
                A lifelong lover of fantasy and storytelling, Scott is
                interested in the parts of imagined worlds that continue after
                the map is drawn: who controls what people need, how communities
                preserve memory, which traditions hold a society together, and
                what happens when those traditions stop working. In his fiction,
                worldbuilding is more than scenery. It is a source of
                pressure—something his characters must live inside, push
                against, and sometimes choose to change.
              </p>
              <p>
                His stories center on ordinary people facing forces much larger
                than themselves. They are apprentices, travelers, couriers, and
                others without easy power, asked to decide what they owe one
                another when survival, duty, and love pull in different
                directions. Responsibility, grief, family, and consequence
                remain close to the center of those choices.
              </p>
              <p>
                In <em>The Broken Year</em>, those interests unfold across a
                world governed by six seasons and bound together by ancient
                roads and promises. The series follows people navigating failing
                systems, inherited obligations, and the unsettling possibility
                that preserving a world may require allowing part of it to
                change.
              </p>
              <p>
                <em>The Broken Year</em> is M. Laurence Scott&apos;s first
                published fantasy series. Across the trilogy and the stories
                that follow, he writes fantasy that is expansive in scope but
                intimate in consequence—stories where history matters, choices
                endure, and no road leaves the traveler unchanged.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="page-shell author-page-section">
        <SectionTitle>The Work</SectionTitle>
        <article className="author-work-panel">
          <div className="author-work-copy">
            <p className="panel-kicker">His first published fantasy series</p>
            <h2>The Broken Year</h2>
            <p>
              A complete epic-fantasy trilogy shaped by ancient powers,
              impossible choices, and stories that follow the road forward.
            </p>
            <div className="author-work-actions">
              <a className="button button-gold button-small" href="/#books">
                Explore the series
              </a>
              <a className="button button-outline button-small" href="#letters">
                Get the letters
              </a>
            </div>
          </div>
          <div
            className="author-work-covers"
            aria-label="The Broken Year trilogy"
          >
            {books.map((book) => (
              <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                key={book.title}
              />
            ))}
          </div>
        </article>
      </section>

      <section className="page-shell newsletter" id="letters">
        <div className="newsletter-mark" aria-hidden="true">
          ⌾
        </div>
        <div className="newsletter-copy">
          <h2>Walk the road. Get the letters.</h2>
          <p>News, lore drops, and behind-the-scenes stories.</p>
        </div>
        <NewsletterForm />
        <div className="newsletter-mark" aria-hidden="true">
          ⌾
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

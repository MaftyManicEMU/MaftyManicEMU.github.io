import { NewsletterForm } from '@/components/newsletter-form';
import { BookSampleReader } from '@/components/book-sample-reader';
import {
  AmazonBrandIcon,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from '@/components/site-shell';

const trilogy = [
  {
    id: 'the-chained-rain',
    volume: '1',
    accent: 'red',
    title: 'The Chained Rain',
    titleLines: ['The', 'Chained Rain'],
    image: '/assets/chained-rain.png',
    alt: 'Cover of The Chained Rain',
    sample: { slug: 'the-chained-rain', firstPage: 30, lastPage: 39 },
    copy: 'A canal apprentice discovers an ancient force held against its nature, drawing her into a struggle over water, authority, and a promise buried beneath centuries of law.',
  },
  {
    id: 'the-hollow-season',
    volume: '2',
    accent: 'green',
    title: 'The Hollow Season',
    titleLines: ['The', 'Hollow Season'],
    image: '/assets/hollow-season.png',
    alt: 'Cover of The Hollow Season',
    sample: { slug: 'the-hollow-season', firstPage: 8, lastPage: 17 },
    copy: 'The old order is failing and the seasons no longer obey. One young woman becomes entangled with a power others are desperate to understand, use, and control.',
  },
  {
    id: 'the-last-godroad',
    volume: '3',
    accent: 'gold',
    title: 'The Last Godroad',
    titleLines: ['The', 'Last Godroad'],
    image: '/assets/last-godroad.png',
    alt: 'Cover of The Last Godroad',
    sample: { slug: 'the-last-godroad', firstPage: 6, lastPage: 15 },
    copy: 'As ancient roads reopen and rival nations search for stability, one dangerous question remains: if a single person could hold everything together, should they?',
  },
];

const pilgrims = [
  { id: 'frost', name: 'Frost', image: '/assets/pilgrim-frost.png' },
  { id: 'bloom', name: 'Bloom', image: '/assets/pilgrim-bloom-v3.png' },
  { id: 'heat', name: 'Heat', image: '/assets/pilgrim-heat.png' },
  { id: 'gale', name: 'Gale', image: '/assets/pilgrim-gale.png' },
  { id: 'rain', name: 'Rain', image: '/assets/pilgrim-rain.png' },
  { id: 'harvest', name: 'Harvest', image: '/assets/pilgrim-harvest.png' },
];

const comingSoon = [
  {
    title: 'The Burning Promise',
    titleLines: ['The', 'Burning Promise'],
    image: '/assets/burning-promise.png',
    alt: 'Cover of The Burning Promise',
    copy: [
      'A thousand years before the year broke, a boy, a monk, and a bard become unlikely travelers in the making of a promise meant to protect generations—and perhaps end an age.',
    ],
  },
  {
    title: 'The White Stair',
    titleLines: ['The', 'White Stair'],
    image: '/assets/white-stair.png',
    alt: 'Cover of The White Stair',
    copy: [
      'When ancient protections fail in the northern mountains, a young courier and stranded travelers must cross the White Stair, discovering that Frost has preserved things never meant to remain unchanged.',
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <SiteHeader active="home" />

        <div className="hero-copy page-shell">
          <p className="hero-eyebrow">A world shaped by</p>
          <h1>
            <span>Roads. Seasons.</span>
            <span>Promises.</span>
          </h1>
          <p className="hero-intro">
            <span>Ancient powers. Impossible choices.</span>
            <span>Stories that follow the road forward.</span>
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#books">
              Start the series
            </a>
            <a
              className="button button-outline hero-amazon-button"
              href="#contact"
            >
              <AmazonBrandIcon className="amazon-button-mark" />
              <span>
                Buy the first book<small>on Amazon</small>
              </span>
            </a>
          </div>
          <p className="hero-proof">
            <span aria-hidden="true">✓</span>Three epic novels. One complete
            story.
          </p>
        </div>
      </section>

      <section className="page-shell saga" id="books">
        <SectionTitle>Walk the Road</SectionTitle>
        <div className="book-grid">
          {trilogy.map((book) => (
            <article
              className={`book-card series-card book-accent-${book.accent}`}
              id={book.id}
              key={book.title}
            >
              <img className="book-cover" src={book.image} alt={book.alt} />
              <div className="book-copy">
                <span
                  className="volume-number"
                  aria-label={`Book ${book.volume}`}
                >
                  {book.volume}
                </span>
                <h3>
                  {book.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <div className="book-rule" aria-hidden="true" />
                <p>{book.copy}</p>
                <a className="learn-link" href="#contact">
                  Learn more <span aria-hidden="true">›</span>
                </a>
                <div className="book-cta-stack">
                  <a
                    className="book-cta book-cta-amazon"
                    href="#contact"
                    aria-label={`Buy ${book.title} on Amazon`}
                  >
                    <AmazonBrandIcon className="amazon-button-mark" />
                    <span>Buy on Amazon</span>
                  </a>
                  <BookSampleReader
                    title={book.title}
                    slug={book.sample.slug}
                    firstPage={book.sample.firstPage}
                    lastPage={book.sample.lastPage}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pilgrims-section" id="pilgrims">
        <SectionTitle>The Pilgrims</SectionTitle>
        <div className="pilgrim-grid">
          {pilgrims.map((pilgrim) => (
            <a
              className="pilgrim-card"
              href={`/pilgrims#${pilgrim.id}`}
              aria-label={`Explore ${pilgrim.name}`}
              key={pilgrim.name}
            >
              <img
                src={pilgrim.image}
                alt={`${pilgrim.name}, one of the six Pilgrims`}
              />
            </a>
          ))}
        </div>
      </section>

      <section className="page-shell lore-grid">
        <article className="world-panel" id="world">
          <div className="world-art" aria-hidden="true">
            <img src="/assets/world-map.png" alt="" />
          </div>
          <div className="panel-copy">
            <p className="panel-kicker">The World</p>
            <h2>Six seasons. Infinite stories.</h2>
            <p>
              From the Frost holds to the distant Harvest, explore the lands,
              peoples, and histories that shape <em>The Broken Year.</em>
            </p>
            <a className="button button-gold button-small" href="/world">
              Enter the world
            </a>
          </div>
        </article>

        <article className="author-panel" id="author">
          <div className="panel-copy">
            <p className="panel-kicker">The Author</p>
            <h2>M. Laurence Scott</h2>
            <div className="author-bio">
              <p>
                M. Laurence Scott is a Southern California writer drawn to
                sprawling worlds, complicated people, and the systems they build
                to survive one another.
              </p>
              <p>
                A lifelong lover of fantasy and storytelling, he writes about
                ordinary people facing forces larger than themselves, with
                themes of responsibility, grief, family, and consequence at the
                heart of his work.
              </p>
              <p>
                <em>The Broken Year</em> is his first published fantasy series.
              </p>
            </div>
            <a className="button button-gold button-small" href="/author">
              About the author
            </a>
          </div>
          <div className="author-art" aria-hidden="true">
            <img src="/assets/author-world.png" alt="" />
          </div>
        </article>
      </section>

      <section className="page-shell news-section" id="news">
        <SectionTitle>News From the Road</SectionTitle>
        <div className="news-panel">
          <div className="news-intro">
            <p className="panel-kicker">Coming Soon</p>
            <h2>Beyond the trilogy</h2>
            <p>
              Two new titles wait beyond the horizon. Join the letters for
              release announcements, cover notes, and the first word when these
              roads open.
            </p>
            <a className="button button-outline button-small" href="#contact">
              Get the letters
            </a>
          </div>
          <div className="coming-grid">
            {comingSoon.map((book) => (
              <article className="book-card coming-card" key={book.title}>
                <img className="book-cover" src={book.image} alt={book.alt} />
                <div className="book-copy coming-copy">
                  <span className="coming-label">Coming soon</span>
                  <h3>
                    {book.titleLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                  <div className="book-rule" aria-hidden="true" />
                  <div className="coming-description">
                    {book.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <a className="book-cta coming-cta" href="#contact">
                    Get updates
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell newsletter" id="contact">
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

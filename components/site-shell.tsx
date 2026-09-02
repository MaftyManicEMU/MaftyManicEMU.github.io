import { Menu } from 'lucide-react';

type NavKey =
  | 'home'
  | 'books'
  | 'world'
  | 'pilgrims'
  | 'author'
  | 'news'
  | 'contact';

const navItems: ReadonlyArray<{ label: string; href: string; key: NavKey }> = [
  { label: 'Books', href: '/#books', key: 'books' },
  { label: 'World', href: '/world', key: 'world' },
  { label: 'Pilgrims', href: '/pilgrims', key: 'pilgrims' },
  { label: 'Author', href: '/author', key: 'author' },
  { label: 'News', href: '/#news', key: 'news' },
  { label: 'Contact', href: '/#contact', key: 'contact' },
];

function currentPageProps(isCurrent: boolean) {
  return isCurrent
    ? { className: 'active', 'aria-current': 'page' as const }
    : {};
}

export function Wordmark() {
  return (
    <a className="wordmark" href="/#home" aria-label="The Broken Year home">
      <img src="/assets/logo.png" alt="The Broken Year" />
    </a>
  );
}

export function AmazonBrandIcon({ className = '' }: { className?: string }) {
  return (
    <span className={`amazon-brand-mark ${className}`} aria-hidden="true" />
  );
}

export function SiteHeader({ active = 'home' }: { active?: NavKey }) {
  return (
    <header className="site-header page-shell">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/#home" {...currentPageProps(active === 'home')}>
          Home
        </a>
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.key}
            {...currentPageProps(active === item.key)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </summary>
        <nav aria-label="Mobile navigation">
          <a href="/#home" {...currentPageProps(active === 'home')}>
            Home
          </a>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.key}
              {...currentPageProps(active === item.key)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title">
      <span aria-hidden="true" />
      <b aria-hidden="true">◇</b>
      <h2>{children}</h2>
      <b aria-hidden="true">◇</b>
      <span aria-hidden="true" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="page-shell site-footer">
      <Wordmark />
      <nav aria-label="Footer navigation">
        {navItems.slice(0, 5).map((item) => (
          <a href={item.href} key={item.key}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="socials" aria-label="Social links">
        <a href="/#books" aria-label="Amazon">
          <AmazonBrandIcon className="social-icon amazon-brand" />
        </a>
        <a
          href="https://www.instagram.com/thebrokenyear?utm_source=qr"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle className="social-icon-fill" cx="17.45" cy="6.6" r="1.1" />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@the.broken.year"
          aria-label="TikTok"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="social-icon tiktok-mark"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.53.02c1.3-.02 2.6-.01 3.9-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.08 2.7 1.57 4.24 1.74v4.03a9.92 9.92 0 0 1-4.2-.97c-.57-.27-1.1-.61-1.62-.93-.01 2.92.01 5.84-.02 8.75a7.2 7.2 0 0 1-1.35 3.94 7.37 7.37 0 0 1-5.91 3.21 7.06 7.06 0 0 1-4.08-1.03 7.42 7.42 0 0 1-3.65-5.72c-.02-.5-.03-1-.01-1.48a7.47 7.47 0 0 1 2.58-4.96 7.15 7.15 0 0 1 6.15-1.72c.02 1.48-.04 2.96-.04 4.44a3.23 3.23 0 0 0-3.02.37 3.12 3.12 0 0 0-1.36 1.75c-.21.51-.15 1.07-.14 1.61a3.4 3.4 0 0 0 3.5 2.87 3.5 3.5 0 0 0 2.77-1.61c.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.03-12.07Z" />
          </svg>
        </a>
      </div>
      <p className="copyright">
        <span aria-hidden="true" />◇ © 2026 M. Laurence Scott. All rights
        reserved. ◇<span aria-hidden="true" />
      </p>
    </footer>
  );
}

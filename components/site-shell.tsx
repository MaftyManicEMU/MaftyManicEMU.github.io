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
        <a href="/#contact" aria-label="Instagram">
          <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle className="social-icon-fill" cx="17.45" cy="6.6" r="1.1" />
          </svg>
        </a>
        <a href="/#contact" aria-label="X">
          <svg
            className="social-icon x-mark"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 3.5h4.4l4.77 6.38L18.7 3.5H20l-6.23 7.28 6.73 9.72h-4.4l-5.12-6.86L5.1 20.5H3.8l6.58-7.75L4 3.5Zm3.68 1.4 9.1 14.2h2.03L9.7 4.9H7.68Z" />
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

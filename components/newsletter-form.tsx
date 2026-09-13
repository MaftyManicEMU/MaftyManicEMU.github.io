export function NewsletterForm() {
  // Restore email collection only after a real subscription provider is connected.
  // Never display a successful signup without storing the subscription.
  return (
    <p className="newsletter-pending">
      Newsletter signup is coming soon. In the meantime,{' '}
      <a href="mailto:mlaurencescott@thebrokenyear.com">get in touch</a>.
    </p>
  );
}

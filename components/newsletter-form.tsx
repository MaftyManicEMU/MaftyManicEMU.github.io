'use client';

import { useEffect } from 'react';

// Public embed identifiers from Kit. Subscriber data is stored by Kit, never in
// the static website or Git repository. Kit owns confirmation and unsubscribe.
const options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Check your email to confirm your place on the road.',
      redirect_url: '',
    },
    analytics: {},
    recaptcha: { enabled: false },
    return_visitor: { action: 'show', custom_content: '' },
    powered_by: { show: true, url: 'https://kit.com/features/forms' },
  },
  version: '5',
};

export function NewsletterForm() {
  useEffect(() => {
    // Official Kit enhancement handles provider errors and confirmed receipt.
    // The native POST action remains available if the script is blocked.
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="newsletter-signup">
      <form
        action="https://app.kit.com/forms/9912660/subscriptions"
        method="post"
        className="seva-form formkit-form"
        data-sv-form="9912660"
        data-uid="bfe01ba0aa"
        data-format="inline"
        data-version="5"
        data-options={JSON.stringify(options)}
      >
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" role="alert" />
        <div className="newsletter-form formkit-fields" data-element="fields">
          <label className="sr-only" htmlFor="reader-email">Email address</label>
          <input id="reader-email" className="formkit-input" name="email_address" type="email" autoComplete="email" placeholder="Enter your email" required aria-describedby="newsletter-consent" />
          <button type="submit" className="formkit-submit" data-element="submit">
            <span>Join the road</span>
          </button>
        </div>
        <p className="newsletter-note" id="newsletter-consent">
          Get news, lore, and book updates from M. Laurence Scott. Confirm by email; unsubscribe anytime.
        </p>
        <a className="newsletter-provider" href="https://kit.com/features/forms" data-element="powered-by" target="_blank" rel="noopener noreferrer">Built with Kit</a>
      </form>
    </div>
  );
}

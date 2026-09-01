'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  if (joined) {
    return (
      <p className="newsletter-success" role="status">
        Your place on the road is reserved.
      </p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="reader-email">Email address</label>
      <input id="reader-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required />
      <button type="submit">Join the road</button>
    </form>
  );
}

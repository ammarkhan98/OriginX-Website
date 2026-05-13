'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from './ContactForm';

export default function CTA() {
  const ref = useScrollAnimation();

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let&apos;s discuss how OriginX can help you achieve your technology
            goals. Fill out the form below and we&apos;ll be in touch within 24 hours.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

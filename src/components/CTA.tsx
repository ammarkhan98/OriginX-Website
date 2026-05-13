import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let&apos;s discuss how OriginX can help you achieve your technology
            goals. Our team will respond within 24 hours.
          </p>
          <div className="cta-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'OriginX transformed our entire infrastructure. Their team is professional, responsive, and truly understands enterprise needs.',
    author: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechCorp Inc.',
    rating: 5,
  },
  {
    quote:
      'Working with OriginX was a game-changer. They delivered our AI solution on time and exceeded our expectations.',
    author: 'Michael Chen',
    title: 'VP of Operations',
    company: 'DataFlow Systems',
    rating: 5,
  },
  {
    quote:
      'Their security expertise and consulting services helped us achieve compliance with zero issues. Highly recommended!',
    author: 'Emma Williams',
    title: 'Head of Security',
    company: 'FinanceSecure Ltd.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p className="subtitle">
            Trusted by industry leaders for delivering exceptional results
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-quote">&quot;{testimonial.quote}&quot;</p>
              <div className="testimonial-author">
                <div>
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-title">{testimonial.title}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

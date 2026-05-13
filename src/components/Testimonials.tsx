type Testimonial = {
  name: string
  title: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'Tech Innovations Inc',
    content:
      'OriginX transformed our legacy system into a modern, scalable platform. Their technical expertise and proactive approach made all the difference. Highly recommended!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    title: 'VP of Operations',
    company: 'Global Finance Corp',
    content:
      'Working with OriginX was seamless. They understood our complex requirements and delivered on time, every time. Their support team is exceptional.',
    avatar: '👨‍💼',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Founder & CEO',
    company: 'StartupHub',
    content:
      'From concept to launch, OriginX guided us through every step. Their cloud solutions reduced our infrastructure costs by 40% while improving performance.',
    avatar: '👩‍💻',
  },
  {
    name: 'David Thompson',
    title: 'Engineering Lead',
    company: 'Enterprise Systems Ltd',
    content:
      'The AI automation solutions OriginX implemented saved us countless hours per month. Their team is knowledgeable, responsive, and genuinely invested in our success.',
    avatar: '👨‍💻',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Leading Companies</h2>
          <p className="subtitle">
            See what our clients say about working with OriginX
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-title">{testimonial.title}</div>
                  <div className="testimonial-company">{testimonial.company}</div>
                </div>
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      setState('error');
      return;
    }

    setState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setState('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setState('idle'), 5000);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
        setState('error');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setState('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={5}
          required
        />
      </div>

      {state === 'error' && (
        <div className="form-message error">{errorMessage}</div>
      )}

      {state === 'success' && (
        <div className="form-message success">
          Thank you! We'll be in touch soon.
        </div>
      )}

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={state === 'submitting' || state === 'success'}
      >
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

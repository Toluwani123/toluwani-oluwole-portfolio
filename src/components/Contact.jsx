import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

  // ...existing code...

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(''); // Clear previous messages
        
        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitMessage('Please fill in all required fields.');
            setIsSubmitting(false); // Reset submitting state
            return;
        }

        const payload = {
            service_id: import.meta.env.VITE_SERVICE_ID,
            template_id: import.meta.env.VITE_TEMPLATE_ID,
            user_id: import.meta.env.VITE_PUBLIC_KEY,
            template_params: {
            ...formData
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            });

            if (response.ok) {
            setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
            } else {
            throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitMessage('An error occurred while sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false); // Always reset submitting state
        }
    };

// ...existing code...

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'oluwoletoluwani@gmail.com', href: 'mailto:oluwoletoluwani@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (806) 224-9344', href: 'tel:+18062249344' },
    { icon: MapPin, label: 'Location', value: 'Dallas, TX', href: null }
  ];
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm actively seeking internship opportunities. Let's connect and discuss 
            how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="text-lg text-gray-900 hover:text-blue-600 transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What I'm Looking For
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Software Development Internships</li>
                <li>• Fullstack Engineering Opportunities</li>
                <li>• Projects with Real-World Impact</li>
                <li>• Collaborative Development Teams</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none resize-none"
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">{submitMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
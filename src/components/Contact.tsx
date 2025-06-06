import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend or a form service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">Get In Touch</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Interested in working together? Fill out the form below with some info about your project, 
          and I'll get back to you as soon as possible.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors duration-300"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
                
                {isSubmitted && (
                  <p className="text-green-600 mt-2">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-gold mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:contact@janedoe.com" className="text-gray-600 hover:text-gold transition-colors duration-300">
                      contact@janedoe.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-gold mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gold transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-gold mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-gray-600">New York City, NY</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-gold mt-1">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Instagram</p>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors duration-300">
                      @janedoemodel
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Agency Representation</h3>
                <p className="text-gray-600 mb-2">Elite Model Management</p>
                <p className="text-gray-600">
                  245 Fifth Avenue, New York, NY<br />
                  +1 (212) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
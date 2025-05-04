import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about Confluenxe? We're here to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy resize-none"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-navy text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-navy rounded-xl shadow-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-full mr-4">
                      <MapPin size={20} className="text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-blue-100">123 Innovation Drive, San Francisco, CA 94107</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-full mr-4">
                      <Phone size={20} className="text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-full mr-4">
                      <Mail size={20} className="text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-100">info@confluenxe.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-full mr-4">
                      <MessageSquare size={20} className="text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-blue-100">support@confluenxe.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-medium mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Instagram size={20} className="text-blue-200" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Twitter size={20} className="text-blue-200" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Facebook size={20} className="text-blue-200" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Linkedin size={20} className="text-blue-200" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news, features, and success stories.
                </p>
                
                <div className="flex">
                  <input
                    type="email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your email address"
                  />
                  <button
                    className="px-4 py-2 bg-navy text-white rounded-r-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
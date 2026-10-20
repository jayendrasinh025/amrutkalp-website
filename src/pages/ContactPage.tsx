import React, { useState } from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, AlertCircle, Instagram, Facebook } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in your name, phone, and message first.');
      return;
    }
    const text = `*New Customer Inquiry - Amrutkalp Website*\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Topic: ${formData.topic.toUpperCase()}\n• Message: ${formData.message}`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Surat Dispensary & Care Desk
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight">
          Connect with Amrutkalp
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Whether you need personalized dosage advice, wish to verify a batch report, or want to visit our physical showroom in Surat, our team is directly reachable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Showroom Address Card */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Surat Showroom & Dispensary
                </h3>
                <span className="text-xs text-stone-500">Registered Office</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong>AMRUTKALP (Pure Ayurvedic Herbals)</strong><br />
              {BRAND.address.shop},<br />
              {BRAND.address.landmark},<br />
              {BRAND.address.area}, {BRAND.address.city},<br />
              {BRAND.address.state} - {BRAND.address.pincode}, India.
            </p>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BRAND.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#b3832f] font-semibold hover:underline"
            >
              <span>Open in Google Maps →</span>
            </a>
          </div>

          {/* Direct Channels Card */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
              Direct Phone & WhatsApp Helplines
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">Direct Hotline</span>
                  <a href={`tel:${BRAND.phone}`} className="font-semibold text-stone-900 hover:text-amber-900">
                    {BRAND.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">WhatsApp Advisory</span>
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp team, I would like to consult with an Ayurvedic specialist.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 hover:underline"
                  >
                    +91 {BRAND.phone} (Tap to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">Consultation Timings</span>
                  <span className="text-stone-800 font-medium">
                    Monday to Saturday: 9:30 AM – 8:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3 border-t border-stone-100 flex items-center gap-4 text-xs">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900"
              >
                <Instagram className="w-4 h-4" />
                <span>{BRAND.social.instagramHandle}</span>
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900"
              >
                <Facebook className="w-4 h-4" />
                <span>{BRAND.social.facebookName}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Send an Ayurvedic Inquiry
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Have questions about dosage, batch certificates, or shipping status? Leave your message below.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-emerald-950">
                Inquiry Received!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. An Amrutkalp representative from our Surat center will reach out to you at <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', topic: 'consultation', message: '' }); }}
                className="mt-3 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg hover:bg-emerald-900"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Topic of Consultation *
                </label>
                <select
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                >
                  <option value="consultation">Ayurvedic Dosage & Regimen Advice</option>
                  <option value="order">Order Dispatch & Delivery Tracking</option>
                  <option value="challenge">₹5,51,000 Authenticity Challenge Inquiry</option>
                  <option value="bulk">Wholesale / Practitioner Partnership</option>
                  <option value="other">General Feedback / Store Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Your Message or Health Query *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your health question, joint stiffness duration, or inquiry..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#c99a45]" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp (+91 {BRAND.phone})</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};

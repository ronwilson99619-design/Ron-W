import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, User, CheckCircle2, MapPin, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';
import { COMPANY_INFO, StoredEnquiry } from '../data/danceToursData';

interface EnquirySectionProps {
  initialSubject?: string;
  initialCustomTour?: {
    destination: string;
    duration: string;
    groupSize: string;
    focus: string;
    estimatedCost: string;
    addons: string[];
  } | null;
  onAddEnquiry?: (enquiry: StoredEnquiry) => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialSubject = '',
  initialCustomTour = null,
  onAddEnquiry,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: initialSubject || 'Dance Workshops',
    groupSize: '',
    destination: '',
    message: '',
  });

  useEffect(() => {
    if (initialCustomTour) {
      setFormData((prev) => ({
        ...prev,
        interest: 'Dance & Tourism (Custom Itinerary)',
        destination: `${initialCustomTour.destination} (${initialCustomTour.duration})`,
        groupSize: initialCustomTour.groupSize,
        message: `Custom Tour Request:\n• Destination: ${initialCustomTour.destination}\n• Duration: ${initialCustomTour.duration}\n• Group Size: ${initialCustomTour.groupSize}\n• Pedagogical Focus: ${initialCustomTour.focus}\n• Budget Estimate: ${initialCustomTour.estimatedCost}\n• Selected Add-ons: ${initialCustomTour.addons.join(', ')}\n\nPlease advise available dates and studio schedules.`,
      }));
    } else if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        interest: initialSubject,
      }));
    }
  }, [initialCustomTour, initialSubject]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const newEnquiry: StoredEnquiry = {
      id: `enq-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization || 'Independent Troupe',
      interest: formData.interest,
      destination: formData.destination || 'Unspecified / Flexible',
      groupSize: formData.groupSize || 'Ensemble',
      message: formData.message,
      status: 'New',
    };

    if (onAddEnquiry) {
      onAddEnquiry(newEnquiry);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      interest: 'Dance Workshops',
      groupSize: '',
      destination: '',
      message: '',
    });
  };

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Dance Tours Enquiry: ${formData.interest} - ${formData.organization || formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nInterest: ${formData.interest}\nDestination/Dates: ${formData.destination}\nGroup Size: ${formData.groupSize}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="enquire" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#B8975A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Start the Dialogue
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-4">
            Tell Us About Your Group or Event
          </h2>

          <div className="opera-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base text-[#57534E] leading-relaxed text-balance">
            Whether you are a dance school director planning an overseas tour, an academy hosting a Royal Ballet masterclass, or a promoter curating a stage gala, we warmly invite your enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Owner Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#B8975A]/35 p-8 rounded-xs shadow-md relative">
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="absolute transform rotate-45 bg-[#7B1030] text-[#FAF6F0] text-[9px] font-sans font-semibold uppercase tracking-wider py-0.5 right-[-35px] top-[18px] w-[120px] text-center shadow-xs">
                  Direct Line
                </div>
              </div>

              <h3 className="font-serif text-2xl text-[#2B2B2B] mb-2 font-medium">
                Personal Artistic Consultation
              </h3>
              <p className="text-sm font-sans text-[#57534E] leading-relaxed mb-6">
                All tours and bespoke workshops are coordinated directly by founder and artistic director <strong className="text-[#7B1030]">{COMPANY_INFO.owner}</strong> to ensure highest British standards.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#B8975A]/25">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xs hover:bg-[#FAF6F0] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] group-hover:bg-[#7B1030] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#57534E] font-medium font-sans">
                      Telephone
                    </p>
                    <p className="font-serif text-lg text-[#2B2B2B] font-semibold group-hover:text-[#7B1030] transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xs hover:bg-[#FAF6F0] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] group-hover:bg-[#7B1030] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#57534E] font-medium font-sans">
                      Email Address
                    </p>
                    <p className="font-sans text-sm font-medium text-[#2B2B2B] group-hover:text-[#7B1030] transition-colors break-all">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xs">
                  <div className="w-10 h-10 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#57534E] font-medium font-sans">
                      Direct Contact
                    </p>
                    <p className="font-serif text-base text-[#2B2B2B] font-semibold">
                      {COMPANY_INFO.owner} (Artistic Director)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xs">
                  <div className="w-10 h-10 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#57534E] font-medium font-sans">
                      Headquarters
                    </p>
                    <p className="font-serif text-base text-[#2B2B2B]">
                      London, United Kingdom · Touring Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Trust Note */}
            <div className="p-6 bg-white border border-[#B8975A]/25 rounded-xs">
              <p className="text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-3">
                Follow Dance Tours Worldwide
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xs bg-[#FAF6F0] text-[#7B1030] hover:bg-[#7B1030] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xs bg-[#FAF6F0] text-[#7B1030] hover:bg-[#7B1030] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xs bg-[#FAF6F0] text-[#7B1030] hover:bg-[#7B1030] hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Welcoming Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#B8975A]/35 p-8 sm:p-10 rounded-xs shadow-xl">
            {submitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-[#7B1030]/10 text-[#7B1030] flex items-center justify-center mx-auto mb-5 border border-[#B8975A]/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#2B2B2B] mb-2 font-normal">
                  Thank You, {formData.name || 'Friend'}
                </h3>
                <p className="text-[#57534E] text-sm max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  Your enquiry regarding <strong>{formData.interest}</strong> has been received. Justin will review your requirements and respond within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={mailtoLink}
                    className="px-6 py-3 bg-[#7B1030] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#580B22] transition-colors"
                  >
                    Open in Your Email Client
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border border-[#B8975A] text-[#2B2B2B] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#FAF6F0] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      Your Name <span className="text-[#7B1030]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      Email Address <span className="text-[#7B1030]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@balletacademy.org"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 or international number"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      School / Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. St. Andrews Dance Academy"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      Primary Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    >
                      <option value="Dance Workshops">Dance Workshops (British Style)</option>
                      <option value="Dance & Tourism">Dance & Tourism Experience</option>
                      <option value="Ballet Productions">Ballet Productions & Galas</option>
                      <option value="General Tour Enquiry">General Tour / Cultural Journey</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                      Target Destination / Dates
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Japan (Spring 2027) or London"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                    Approximate Group Size or Dancer Age Group
                  </label>
                  <input
                    type="text"
                    value={formData.groupSize}
                    onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                    placeholder="e.g. 15 dancers (Ages 12-18) + 2 chaperones"
                    className="w-full px-4 py-2.5 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1.5">
                    Tell Us About Your Vision <span className="text-[#7B1030]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your dancers, preferred itinerary, workshop focus, or production requirements..."
                    className="w-full px-4 py-3 bg-[#FAF6F0]/60 border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] focus:ring-1 focus:ring-[#7B1030] resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-xs border border-[#B8975A] shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>{submitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                  </button>

                  <a
                    href={mailtoLink}
                    className="text-xs font-sans text-[#7B1030] hover:text-[#580B22] underline underline-offset-4"
                  >
                    Prefer to email Justin directly?
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

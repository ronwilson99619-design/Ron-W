import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Printer, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { UpcomingWorkshop, COMPANY_INFO } from '../data/danceToursData';

interface WorkshopRegisterModalProps {
  workshop: UpcomingWorkshop | null;
  onClose: () => void;
  onConfirmRegistration: (workshopId: string, dancerName: string) => void;
}

export const WorkshopRegisterModal: React.FC<WorkshopRegisterModalProps> = ({
  workshop,
  onClose,
  onConfirmRegistration,
}) => {
  const [formData, setFormData] = useState({
    dancerName: '',
    age: '',
    studio: '',
    experienceYears: '',
    parentName: '',
    email: '',
    phone: '',
    medicalNotes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (workshop) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [workshop, onClose]);

  if (!workshop) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `DT-${workshop.city.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(generatedRef);
    setIsSuccess(true);
    onConfirmRegistration(workshop.id, formData.dancerName);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[92vh] bg-[#FAF6F0] rounded-xs overflow-y-auto border border-[#B8975A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#3D0A1A] text-[#FAF6F0] border-b border-[#B8975A]/40 sticky top-0 z-10">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D4BA83] font-semibold block">
              Official Masterclass Registration
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF6F0]">
              {workshop.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#FAF6F0]/80 hover:text-[#FAF6F0] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation Ticket Pass */
          <div className="p-8 sm:p-10 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#7B1030]/10 text-[#7B1030] flex items-center justify-center mx-auto mb-4 border border-[#B8975A]/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-3xl text-[#2B2B2B] font-normal mb-1">
                Registration Confirmed
              </h4>
              <p className="text-xs font-sans uppercase tracking-widest text-[#7B1030] font-semibold">
                Reference ID: {bookingRef}
              </p>
            </div>

            {/* Opera Pass Certificate Box */}
            <div className="bg-white border-2 border-[#B8975A] p-6 rounded-xs relative shadow-md">
              <div className="absolute top-2 right-2 text-[10px] uppercase tracking-wider text-[#B8975A] font-sans font-semibold">
                Royal Masterclass Pass
              </div>

              <div className="flex items-center gap-3 border-b border-[#B8975A]/25 pb-4 mb-4">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Dance Tours"
                  className="h-10 w-auto"
                />
                <div>
                  <h5 className="font-serif text-lg font-bold text-[#7B1030] leading-none">
                    Dance Tours London
                  </h5>
                  <p className="text-[10px] text-[#57534E] uppercase tracking-widest font-sans mt-0.5">
                    British Classical Ballet Intensive
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans text-[#2B2B2B]">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Dancer:</p>
                  <p className="font-semibold text-sm">{formData.dancerName} ({formData.age} yrs)</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Home Studio:</p>
                  <p className="font-semibold text-sm">{formData.studio || 'Private Candidate'}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Dates & City:</p>
                  <p className="font-semibold">{workshop.dates} · {workshop.city}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Venue:</p>
                  <p className="font-semibold">{workshop.venue}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Lead Faculty:</p>
                  <p className="font-semibold text-[#7B1030]">{workshop.faculty.join(', ')}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#57534E]">Tuition Fee:</p>
                  <p className="font-semibold text-[#B8975A]">{workshop.tuition}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#B8975A]/20 text-[10px] text-[#57534E] text-center font-sans">
                Confirmation packet & studio syllabus will be emailed to <strong>{formData.email}</strong> by Justin.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#B8975A] text-[#2B2B2B] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 hover:bg-[#FAF6F0] transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#7B1030]" />
                <span>Print Pass</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#7B1030] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#580B22] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="bg-white p-4 border border-[#B8975A]/30 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7B1030] font-semibold block">
                  Selected Intensive:
                </span>
                <p className="font-serif text-lg font-medium text-[#2B2B2B]">
                  {workshop.title}
                </p>
                <p className="text-[#57534E] mt-0.5">
                  {workshop.dates} · {workshop.venue}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[11px] text-[#57534E] uppercase tracking-wider block">Tuition:</span>
                <span className="font-serif text-xl font-bold text-[#7B1030]">{workshop.tuition}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Dancer Full Name <span className="text-[#7B1030]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.dancerName}
                  onChange={(e) => setFormData({ ...formData, dancerName: e.target.value })}
                  placeholder="e.g. Clara Wood"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Dancer Age <span className="text-[#7B1030]">*</span>
                </label>
                <input
                  type="number"
                  min="10"
                  max="28"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="e.g. 15"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Current Ballet Studio / School <span className="text-[#7B1030]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.studio}
                  onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                  placeholder="e.g. Royal Academy Affiliated"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Years of Classical Training
                </label>
                <input
                  type="text"
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                  placeholder="e.g. 7 years (En Pointe 3 yrs)"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Contact Email <span className="text-[#7B1030]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. parent@example.com"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                  Contact Phone / WhatsApp <span className="text-[#7B1030]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +44 7855 000000"
                  className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#2B2B2B] mb-1">
                Parent / Guardian Name (if under 18)
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="Parent full name"
                className="w-full px-3.5 py-2 bg-white border border-[#B8975A]/30 rounded-xs text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
              />
            </div>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#B8975A]/25">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-[#B8975A]/40 text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] rounded-xs hover:bg-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
                <span>Confirm Registration</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

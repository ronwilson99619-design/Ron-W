import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { QuickFilterStrip } from './components/QuickFilterStrip';
import { TourCustomizer } from './components/TourCustomizer';
import { TourismSection } from './components/TourismSection';
import { ProductionsSection } from './components/ProductionsSection';
import { DestinationsSection } from './components/DestinationsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ServiceModal } from './components/ServiceModal';
import { ProductionModal } from './components/ProductionModal';
import { WorkshopRegisterModal } from './components/WorkshopRegisterModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { AmbientPlayer } from './components/AmbientPlayer';
import { WatermarkOverlay } from './components/WatermarkOverlay';
import {
  GalleryItem,
  ServiceItem,
  UpcomingWorkshop,
  UPCOMING_WORKSHOPS,
  StoredEnquiry,
  INITIAL_STORED_ENQUIRIES,
} from './data/danceToursData';

export default function App() {
  // Modal states
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isProductionModalOpen, setIsProductionModalOpen] = useState(false);
  const [registeringWorkshop, setRegisteringWorkshop] = useState<UpcomingWorkshop | null>(null);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);

  // Dynamic enquiry & custom tour draft
  const [enquirySubject, setEnquirySubject] = useState<string>('General Enquiry');
  const [customTourDraft, setCustomTourDraft] = useState<{
    destination: string;
    duration: string;
    groupSize: string;
    focus: string;
    estimatedCost: string;
    addons: string[];
  } | null>(null);

  // Dynamic persistent state for workshops & enquiries
  const [workshops, setWorkshops] = useState<UpcomingWorkshop[]>(() => {
    try {
      const saved = localStorage.getItem('dt_workshops_data');
      return saved ? JSON.parse(saved) : UPCOMING_WORKSHOPS;
    } catch {
      return UPCOMING_WORKSHOPS;
    }
  });

  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem('dt_enquiries_data');
      return saved ? JSON.parse(saved) : INITIAL_STORED_ENQUIRIES;
    } catch {
      return INITIAL_STORED_ENQUIRIES;
    }
  });

  // Save to localStorage when state updates
  useEffect(() => {
    try {
      localStorage.setItem('dt_workshops_data', JSON.stringify(workshops));
    } catch {
      // ignore
    }
  }, [workshops]);

  useEffect(() => {
    try {
      localStorage.setItem('dt_enquiries_data', JSON.stringify(enquiries));
    } catch {
      // ignore
    }
  }, [enquiries]);

  // Open Enquiry with smooth scroll
  const handleOpenEnquire = (subject: string = 'General Enquiry') => {
    setEnquirySubject(subject);
    const element = document.getElementById('enquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Applied from TourCustomizer
  const handleApplyCustomItinerary = (details: {
    destination: string;
    duration: string;
    groupSize: string;
    focus: string;
    estimatedCost: string;
    addons: string[];
  }) => {
    setCustomTourDraft(details);
    const element = document.getElementById('enquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When dancer registers for a workshop
  const handleConfirmWorkshopRegistration = (workshopId: string, dancerName: string) => {
    const targetWs = workshops.find((w) => w.id === workshopId);
    
    // Decrement spots
    setWorkshops((prev) =>
      prev.map((w) =>
        w.id === workshopId ? { ...w, spotsLeft: Math.max(0, w.spotsLeft - 1) } : w
      )
    );

    // Auto-create an internal enquiry/record in Justin's portal
    const newEnq: StoredEnquiry = {
      id: `reg-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      name: dancerName,
      email: 'Registered via Masterclass Portal',
      phone: 'Direct Pass',
      organization: 'Dancer Registration',
      interest: targetWs ? `Workshop Registration: ${targetWs.title}` : 'Workshop Registration',
      destination: targetWs ? `${targetWs.city}, ${targetWs.country}` : 'Workshop',
      groupSize: '1 Dancer',
      message: `Confirmed registration for ${targetWs?.title} (${targetWs?.dates}). Spot reserved in live roster.`,
      status: 'Confirmed',
    };

    setEnquiries((prev) => [newEnq, ...prev]);
  };

  // Add new enquiry from public form
  const handleAddEnquiry = (newEnq: StoredEnquiry) => {
    setEnquiries((prev) => [newEnq, ...prev]);
  };

  // Director portal status update
  const handleUpdateEnquiryStatus = (id: string, status: StoredEnquiry['status'], notes?: string) => {
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status, ...(notes !== undefined ? { notes } : {}) } : e
      )
    );
  };

  // Director portal spot updates
  const handleUpdateWorkshopSpots = (id: string, newSpots: number) => {
    setWorkshops((prev) =>
      prev.map((w) => (w.id === id ? { ...w, spotsLeft: newSpots } : w))
    );
  };

  // Reset to demo data
  const handleResetData = () => {
    setWorkshops(UPCOMING_WORKSHOPS);
    setEnquiries(INITIAL_STORED_ENQUIRIES);
    localStorage.removeItem('dt_workshops_data');
    localStorage.removeItem('dt_enquiries_data');
  };

  const handleQuickFilter = (criteria: { destination: string; type: string; season: string }) => {
    if (criteria.type === 'workshops') {
      const el = document.getElementById('workshops');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (criteria.type === 'productions') {
      const el = document.getElementById('productions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (criteria.destination !== 'all' || criteria.type === 'tourism') {
      const el = document.getElementById('destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2B2B2B] font-sans flex flex-col selection:bg-[#7B1030] selection:text-[#FAF6F0]">
      {/* Navigation with Director Portal Link & Quick Search */}
      <Navbar
        onOpenEnquire={handleOpenEnquire}
        onOpenAdmin={() => setIsAdminPortalOpen(true)}
        onQuickSearch={() => {
          const el = document.getElementById('quick-filter');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenEnquire={handleOpenEnquire} />

        {/* 2. Modern Quick Discovery Strip */}
        <div id="quick-filter">
          <QuickFilterStrip onSearch={handleQuickFilter} />
        </div>

        {/* 3. Three Tall Service Cards */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 3. Dance Workshops: British Style, Technique & Dynamic Upcoming Schedule */}
        <WorkshopsSection
          onOpenEnquire={handleOpenEnquire}
          workshopsList={workshops}
          onSelectRegister={(ws) => setRegisteringWorkshop(ws)}
        />

        {/* 4. Interactive Tour & Budget Customizer for Schools/Ensembles */}
        <TourCustomizer onApplyItinerary={handleApplyCustomItinerary} />

        {/* 5. Dance & Tourism: Full-Width Image Band */}
        <TourismSection onOpenEnquire={handleOpenEnquire} />

        {/* 6. Productions: Dramatic Dark Plum Section */}
        <ProductionsSection
          onOpenProductionsModal={() => setIsProductionModalOpen(true)}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 7. Destinations: Countries Visited & Day-by-Day Schedules */}
        <DestinationsSection onOpenEnquire={handleOpenEnquire} />

        {/* 8. Gallery: Masonry Style Photo Grid */}
        <GallerySection onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* 9. Testimonials: Refined Opera Programme Slider */}
        <TestimonialsSection />

        {/* 10. About Section: Founding Story & Justin's Direction */}
        <AboutSection onOpenEnquire={handleOpenEnquire} />

        {/* 11. Enquiry Section: Welcoming Form & Direct Contact */}
        <EnquirySection
          initialSubject={enquirySubject}
          initialCustomTour={customTourDraft}
          onAddEnquiry={handleAddEnquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Atmospheric Ballet Studio Piano Accompaniment */}
      <AmbientPlayer />

      {/* Low-Opacity Site-Wide Watermark Overlay */}
      <WatermarkOverlay />

      {/* Interactive Modals */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onOpenEnquire={handleOpenEnquire}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenEnquire={handleOpenEnquire}
      />

      <ProductionModal
        isOpen={isProductionModalOpen}
        onClose={() => setIsProductionModalOpen(false)}
        onOpenEnquire={handleOpenEnquire}
      />

      <WorkshopRegisterModal
        workshop={registeringWorkshop}
        onClose={() => setRegisteringWorkshop(null)}
        onConfirmRegistration={handleConfirmWorkshopRegistration}
      />

      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
        enquiries={enquiries}
        workshops={workshops}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        onUpdateWorkshopSpots={handleUpdateWorkshopSpots}
        onResetData={handleResetData}
      />
    </div>
  );
}

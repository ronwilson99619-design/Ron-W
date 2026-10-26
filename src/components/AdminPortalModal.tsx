import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, Clock, User, Mail, Phone, MapPin, Download, Save, RefreshCw, Plus, Filter, MessageSquare } from 'lucide-react';
import { StoredEnquiry, UpcomingWorkshop, COMPANY_INFO } from '../data/danceToursData';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: StoredEnquiry[];
  workshops: UpcomingWorkshop[];
  onUpdateEnquiryStatus: (id: string, status: StoredEnquiry['status'], notes?: string) => void;
  onUpdateWorkshopSpots: (id: string, newSpots: number) => void;
  onResetData: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  workshops,
  onUpdateEnquiryStatus,
  onUpdateWorkshopSpots,
  onResetData,
}) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'workshops'>('enquiries');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState<string>('');

  if (!isOpen) return null;

  const filteredEnquiries = filterStatus === 'all'
    ? enquiries
    : enquiries.filter((e) => e.status === filterStatus);

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Organisation', 'Interest', 'Destination', 'Group Size', 'Status'];
    const rows = enquiries.map((e) => [
      e.id,
      e.createdAt,
      `"${e.name}"`,
      e.email,
      e.phone,
      `"${e.organization}"`,
      `"${e.interest}"`,
      `"${e.destination}"`,
      `"${e.groupSize}"`,
      e.status,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dance_tours_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#FAF6F0] rounded-xs overflow-hidden border border-[#B8975A] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#3D0A1A] text-[#FAF6F0] border-b border-[#B8975A]/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#7B1030] border border-[#B8975A]/60 flex items-center justify-center text-[#D4BA83]">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D4BA83] font-semibold block">
                Artistic Director Management Suite
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF6F0]">
                {COMPANY_INFO.owner}’s Tour & Booking Portal
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="px-3 py-1.5 bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 text-xs text-[#FAF6F0] rounded-xs border border-[#B8975A]/40 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#B8975A]" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xs text-[#FAF6F0]/80 hover:text-[#FAF6F0] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real-time KPI Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#B8975A]/30 border-b border-[#B8975A]/30 shrink-0">
          <div className="bg-[#FAF6F0] p-4 text-center">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#57534E] block">
              Active Enquiries
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7B1030]">
              {enquiries.length}
            </span>
          </div>

          <div className="bg-[#FAF6F0] p-4 text-center">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#57534E] block">
              New Unreviewed
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-700">
              {enquiries.filter((e) => e.status === 'New').length}
            </span>
          </div>

          <div className="bg-[#FAF6F0] p-4 text-center">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#57534E] block">
              Workshops Active
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2B2B]">
              {workshops.length}
            </span>
          </div>

          <div className="bg-[#FAF6F0] p-4 text-center">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#57534E] block">
              Spots Remaining
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-700">
              {workshops.reduce((sum, w) => sum + w.spotsLeft, 0)}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-[#B8975A]/25 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeTab === 'enquiries'
                  ? 'bg-[#7B1030] text-[#FAF6F0]'
                  : 'text-[#57534E] hover:text-[#2B2B2B] hover:bg-[#FAF6F0]'
              }`}
            >
              Tour & Group Enquiries ({enquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-[#7B1030] text-[#FAF6F0]'
                  : 'text-[#57534E] hover:text-[#2B2B2B] hover:bg-[#FAF6F0]'
              }`}
            >
              Workshop Capacities & Dates ({workshops.length})
            </button>
          </div>

          {activeTab === 'enquiries' && (
            <div className="flex items-center gap-2 text-xs">
              <Filter className="w-3.5 h-3.5 text-[#B8975A]" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#FAF6F0] border border-[#B8975A]/30 rounded-xs px-2 py-1 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Itinerary Sent">Itinerary Sent</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FAF6F0]/60 space-y-4">
          {activeTab === 'enquiries' ? (
            filteredEnquiries.length === 0 ? (
              <div className="text-center py-12 text-[#57534E]">
                No enquiries found under this filter.
              </div>
            ) : (
              filteredEnquiries.map((enq) => {
                const isEditing = editingNotesId === enq.id;
                return (
                  <div
                    key={enq.id}
                    className="bg-white border border-[#B8975A]/30 rounded-xs p-5 shadow-xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#B8975A]/20">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg font-bold text-[#2B2B2B]">{enq.name}</span>
                          <span className="text-xs text-[#57534E]">({enq.organization || 'Private Individual'})</span>
                        </div>
                        <span className="text-[10px] text-[#57534E] font-sans">
                          Received: {enq.createdAt} · Ref: {enq.id}
                        </span>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-sans text-[#57534E] uppercase">Status:</span>
                        <select
                          value={enq.status}
                          onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value as any)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-xs border cursor-pointer ${
                            enq.status === 'New'
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : enq.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800 border-blue-300'
                              : enq.status === 'Itinerary Sent'
                              ? 'bg-purple-100 text-purple-800 border-purple-300'
                              : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Itinerary Sent">Itinerary Sent</option>
                          <option value="Confirmed">Confirmed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#57534E] font-sans">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#B8975A]" />
                        <a href={`mailto:${enq.email}`} className="text-[#7B1030] hover:underline truncate">
                          {enq.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#B8975A]" />
                        <span>{enq.phone || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#B8975A]" />
                        <span className="truncate">{enq.destination}</span>
                      </div>
                    </div>

                    {/* Interest & Group size */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-sans">
                      <span className="px-2 py-0.5 bg-[#FAF6F0] border border-[#B8975A]/25 rounded-xs text-[#7B1030] font-medium">
                        Interest: {enq.interest}
                      </span>
                      {enq.groupSize && (
                        <span className="text-[#57534E]">
                          Group: <strong>{enq.groupSize}</strong>
                        </span>
                      )}
                    </div>

                    {/* Message body */}
                    <div className="p-3 bg-[#FAF6F0]/60 rounded-xs border border-[#B8975A]/20 text-xs font-sans text-[#2B2B2B] leading-relaxed">
                      {enq.message}
                    </div>

                    {/* Justin's internal notes */}
                    <div className="pt-2 border-t border-[#B8975A]/15 text-xs font-sans">
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="Add internal note..."
                            className="flex-1 px-3 py-1 bg-white border border-[#B8975A]/40 rounded-xs text-xs focus:outline-none focus:border-[#7B1030]"
                          />
                          <button
                            onClick={() => {
                              onUpdateEnquiryStatus(enq.id, enq.status, noteText);
                              setEditingNotesId(null);
                            }}
                            className="px-3 py-1 bg-[#7B1030] text-[#FAF6F0] rounded-xs text-xs cursor-pointer"
                          >
                            Save Note
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-[#57534E]">
                          <span className="italic">
                            Director’s Note: {enq.notes || 'No notes added yet.'}
                          </span>
                          <button
                            onClick={() => {
                              setEditingNotesId(enq.id);
                              setNoteText(enq.notes || '');
                            }}
                            className="text-[#7B1030] hover:underline cursor-pointer"
                          >
                            {enq.notes ? 'Edit Note' : '+ Add Note'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )
          ) : (
            /* Workshop capacities tab */
            <div className="space-y-4">
              {workshops.map((ws) => (
                <div
                  key={ws.id}
                  className="bg-white border border-[#B8975A]/30 rounded-xs p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#2B2B2B]">{ws.title}</h4>
                    <p className="text-xs text-[#57534E] font-sans">
                      {ws.dates} · {ws.city}, {ws.country} · {ws.venue}
                    </p>
                    <p className="text-xs text-[#7B1030] font-sans mt-1">
                      Faculty: {ws.faculty.join(', ')}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] uppercase font-sans text-[#57534E]">Spots Left / Max</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <button
                          onClick={() => onUpdateWorkshopSpots(ws.id, Math.max(0, ws.spotsLeft - 1))}
                          className="w-6 h-6 rounded-xs bg-[#FAF6F0] border border-[#B8975A]/40 text-[#7B1030] font-bold text-xs flex items-center justify-center cursor-pointer hover:bg-[#7B1030] hover:text-white"
                        >
                          -
                        </button>
                        <span className="font-serif text-xl font-bold text-[#7B1030] w-12 text-center">
                          {ws.spotsLeft} / {ws.capacity}
                        </span>
                        <button
                          onClick={() => onUpdateWorkshopSpots(ws.id, Math.min(ws.capacity, ws.spotsLeft + 1))}
                          className="w-6 h-6 rounded-xs bg-[#FAF6F0] border border-[#B8975A]/40 text-[#7B1030] font-bold text-xs flex items-center justify-center cursor-pointer hover:bg-[#7B1030] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-[#B8975A]/30 flex items-center justify-between shrink-0 text-xs font-sans text-[#57534E]">
          <span>Logged in as: <strong>{COMPANY_INFO.owner}</strong> ({COMPANY_INFO.email})</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onResetData}
              className="text-[#7B1030] hover:underline cursor-pointer flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Demo Seed Data</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#7B1030] text-[#FAF6F0] rounded-xs uppercase tracking-wider text-xs font-semibold cursor-pointer"
            >
              Close Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

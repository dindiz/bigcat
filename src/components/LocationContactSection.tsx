import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/presentationData';
import { MapPin, Mail, Phone, Building, CheckCircle2, Send, Clock, Globe } from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: '5g-oru',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        interest: '5g-oru',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="space-y-2 mb-3">
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
              SLIDES 03 & 19 • CONTACT & HEADQUARTERS
            </span>
            <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
            R&D Headquarters & Inquiries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            Located at the prestigious IIT Madras Research Park. Connect directly with our RF engineering and wireless systems leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Location & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB] shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
                <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center rounded-sm text-white">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] uppercase tracking-tight">
                    {COMPANY_INFO.name}
                  </h3>
                  <span className="text-xs text-[#2563EB] font-mono font-bold">
                    IIT Madras Research Park
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-xs text-[#4B5563]">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="font-mono space-y-0.5">
                  <p className="text-[#1A1A1A] font-bold">{COMPANY_INFO.location.address}</p>
                  <p>{COMPANY_INFO.location.street}</p>
                  <p className="text-[#1A1A1A] font-semibold">{COMPANY_INFO.location.city}</p>
                </div>
              </div>

              {/* Email Direct Contacts */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB] text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <div>
                    <span className="text-[#6B7280] block text-[10px] uppercase font-bold">General & Business Inquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.contacts.general}`} className="text-[#1A1A1A] hover:text-[#2563EB] font-bold">
                      {COMPANY_INFO.contacts.general}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <div>
                    <span className="text-[#6B7280] block text-[10px] uppercase font-bold">Executive R&D Leadership:</span>
                    <a href={`mailto:${COMPANY_INFO.contacts.executive}`} className="text-[#1A1A1A] hover:text-[#2563EB] font-bold">
                      {COMPANY_INFO.contacts.executive}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operational Telemetry */}
              <div className="p-4 rounded-sm bg-white border border-[#E5E7EB] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Facility:</span>
                  <span className="text-[#1A1A1A] font-bold">RF Anechoic & 5G Lab</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Standards:</span>
                  <span className="text-[#2563EB] font-bold">3GPP / O-RAN Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Manufacturing:</span>
                  <span className="text-[#059669] font-bold">Make in India Tier-1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB] shadow-xl">
              <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tight mb-1">
                Technical Inquiry & Collaboration Request
              </h3>
              <p className="text-xs text-[#6B7280] font-mono mb-6">
                Request full datasheets, evaluation kits, or custom FPGA/RF PHY hardware design.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-sm bg-white border border-[#A7F3D0] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#1A1A1A]">Inquiry Logged Successfully</h4>
                  <p className="text-xs text-[#4B5563] max-w-md mx-auto">
                    Thank you. The BigCat Wireless engineering team at IIT Madras Research Park has received your inquiry and will follow up shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#4B5563] mb-1 font-bold">Your Name / Contact Person *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. A. Sharma"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#4B5563] mb-1 font-bold">Organization / Entity *</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Defense Lab / Telecom OEM"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#4B5563] mb-1 font-bold">Official Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#4B5563] mb-1 font-bold">Primary Technology Domain</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      >
                        <option value="5g-oru">5G O-RU Massive MIMO Baseband</option>
                        <option value="5g-test">5G Fronthaul 100GbE Test Equipment</option>
                        <option value="defense-sdr">Tactical VHF/UHF SDR & MANET</option>
                        <option value="satcom">Satellite NTN Modems (CatLink)</option>
                        <option value="custom">Custom Physical Layer FPGA / ASIC IP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#4B5563] mb-1 font-bold">Inquiry Details / Specific Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required frequency bands, interface standards, form factors, or target evaluation timeline..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-sm bg-[#1A1A1A] hover:bg-black text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official R&D Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

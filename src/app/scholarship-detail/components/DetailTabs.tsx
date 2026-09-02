'use client';
import React, { useState } from 'react';
import { CheckCircle, AlertCircle, FileText, BookOpen, Calendar, HelpCircle } from 'lucide-react';

type TabId = 'overview' | 'eligibility' | 'documents' | 'process' | 'dates' | 'faqs';

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'Overview', icon: <BookOpen size={14} /> },
  { id: 'eligibility', label: 'Eligibility Criteria', icon: <CheckCircle size={14} /> },
  { id: 'documents', label: 'Documents Required', icon: <FileText size={14} /> },
  { id: 'process', label: 'Application Process', icon: <AlertCircle size={14} /> },
  { id: 'dates', label: 'Important Dates', icon: <Calendar size={14} /> },
  { id: 'faqs', label: 'FAQs', icon: <HelpCircle size={14} /> },
];

const eligibilityCriteria = [
  { label: 'Caste Category', value: 'Scheduled Caste (SC) or Scheduled Tribe (ST)', met: true },
  { label: 'Domicile', value: 'Karnataka state resident for minimum 5 years', met: true },
  { label: 'Education Level', value: 'Class 11, Class 12, or Undergraduate (any year)', met: true },
  { label: 'Minimum Marks', value: '60% in previous qualifying examination', met: true },
  { label: 'Family Annual Income', value: 'Below ₹2,50,000 per annum', met: true },
  { label: 'Age Limit', value: '18–30 years for UG; 16–21 for Class 11-12', met: true },
  { label: 'Employment', value: 'Should not be employed full-time', met: true },
  { label: 'Other Scholarship', value: 'Should not be availing any other state scholarship', met: false },
];

const documentsRequired = [
  { name: 'Caste Certificate', issuer: 'Tahsildar / Revenue Dept.', mandatory: true, format: 'PDF', maxSize: '2MB' },
  { name: 'Income Certificate', issuer: 'Tahsildar / Revenue Dept.', mandatory: true, format: 'PDF', maxSize: '2MB' },
  { name: 'Domicile / Residential Certificate', issuer: 'Gram Panchayat / Municipal Corp.', mandatory: true, format: 'PDF', maxSize: '2MB' },
  { name: 'Previous Year Marksheet', issuer: 'Board / University', mandatory: true, format: 'PDF/JPG', maxSize: '5MB' },
  { name: 'Aadhaar Card', issuer: 'UIDAI', mandatory: true, format: 'PDF/JPG', maxSize: '2MB' },
  { name: 'Bank Passbook (first page)', issuer: 'Bank', mandatory: true, format: 'PDF/JPG', maxSize: '2MB' },
  { name: 'College Bonafide Certificate', issuer: 'College / Institution', mandatory: true, format: 'PDF', maxSize: '2MB' },
  { name: 'Passport Size Photograph', issuer: 'Self', mandatory: true, format: 'JPG/PNG', maxSize: '500KB' },
  { name: 'Fee Receipt (current year)', issuer: 'College', mandatory: false, format: 'PDF', maxSize: '2MB' },
  { name: 'Migration Certificate (if applicable)', issuer: 'Previous Institution', mandatory: false, format: 'PDF', maxSize: '2MB' },
];

const processSteps = [
  { step: 1, title: 'Register on ScholarshipHub', desc: 'Create a free student account and complete your profile with accurate personal, education, and financial details.' },
  { step: 2, title: 'Check Eligibility', desc: 'Use the Eligibility Wizard or view your match score on this page. Ensure all criteria are met before applying.' },
  { step: 3, title: 'Upload Documents', desc: 'Upload all required documents to your document locker. Once uploaded, they can be reused across all applications.' },
  { step: 4, title: 'Fill Application Form', desc: 'Complete the multi-step application: personal details, education info, financial details, and custom questions.' },
  { step: 5, title: 'Review & Submit', desc: 'Review your complete application, verify documents, and submit. You will receive an Application ID immediately.' },
  { step: 6, title: 'Track Application Status', desc: 'Monitor your application status from your Student Dashboard. You will be notified of any status changes via email and in-app.' },
];

const importantDates = [
  { event: 'Application Window Opens', date: '01 Aug 2026', status: 'completed' },
  { event: 'Last Date to Apply', date: '30 Sep 2026', status: 'upcoming', urgent: true },
  { event: 'Document Verification', date: 'Oct 2026', status: 'upcoming' },
  { event: 'Shortlisting & Review', date: 'Oct – Nov 2026', status: 'upcoming' },
  { event: 'Results Announcement', date: 'Dec 2026', status: 'upcoming' },
  { event: 'Scholarship Disbursement', date: 'Jan 2027', status: 'upcoming' },
];

const faqs = [
  { q: 'Can I apply for this scholarship if I am already receiving a Central Government scholarship?', a: 'No. This scholarship cannot be combined with other state government scholarships. However, it can be combined with some central government scholarships. Check the official notification for the complete list.' },
  { q: 'Is this scholarship renewable every year?', a: 'Yes, this scholarship is renewable annually subject to satisfactory academic performance (minimum 60% marks) and continued eligibility. Students must re-apply each academic year.' },
  { q: 'How long does the verification process take?', a: 'Document verification typically takes 15–30 working days after submission. You will be notified via email and SMS about your verification status.' },
  { q: 'Can I edit my application after submission?', a: 'Applications cannot be edited after final submission. However, if the provider requests additional information, you will be able to upload additional documents.' },
  { q: 'What if my income certificate is older than 3 months?', a: 'Income certificates must be issued within the current financial year. Certificates older than 12 months from the date of application will not be accepted.' },
];

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="card">
      {/* Tab nav */}
      <div className="border-b border-border overflow-x-auto scrollbar-hide">
        <div className="flex px-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? 'tab-item-active' : 'tab-item'} flex items-center gap-2`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6 lg:p-8">
        {activeTab === 'overview' && (
          <div className="prose prose-sm max-w-none">
            <p className="text-sm text-foreground leading-relaxed mb-4">
              The <strong>Karnataka Rajyotsava Scholarship</strong> is a flagship state government scholarship program administered by the Department of Social Welfare, Government of Karnataka. It provides financial assistance to meritorious SC/ST students pursuing post-matric education across Karnataka.
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              The scholarship aims to reduce dropout rates among Scheduled Caste and Scheduled Tribe students by providing direct financial support to cover tuition fees, examination fees, and maintenance allowance. It is disbursed directly to the student&apos;s bank account via DBT (Direct Benefit Transfer).
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-3">Benefits Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose">
              {[
                { label: 'Tuition Fee', value: 'Up to ₹8,000', note: 'Actual fees or ceiling, whichever is lower' },
                { label: 'Maintenance Allowance', value: '₹3,500', note: 'Annual maintenance support' },
                { label: 'Study Tour Allowance', value: '₹500', note: 'For field/study tours' },
              ].map((b) => (
                <div key={`benefit-${b.label}`} className="p-4 rounded-xl bg-success/5 border border-success/20">
                  <p className="text-xs font-semibold text-muted-foreground">{b.label}</p>
                  <p className="text-base font-bold text-success mt-1">{b.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{b.note}</p>
                </div>
              ))}
            </div>
            <h3 className="text-base font-bold text-foreground mt-6 mb-3">About the Provider</h3>
            <p className="text-sm text-foreground leading-relaxed">
              The Department of Social Welfare, Government of Karnataka, is responsible for the welfare of Scheduled Caste, Scheduled Tribe, and other backward communities in the state. The department administers over 40 scholarship programs benefiting more than 5 lakh students annually across Karnataka.
            </p>
          </div>
        )}

        {activeTab === 'eligibility' && (
          <div>
            <div className="flex items-center gap-2 p-4 rounded-xl bg-success/10 border border-success/20 mb-6">
              <CheckCircle size={18} className="text-success shrink-0" />
              <p className="text-sm font-semibold text-success">Based on your profile, you meet 7 out of 8 eligibility criteria</p>
            </div>
            <div className="flex flex-col gap-3">
              {eligibilityCriteria.map((c, i) => (
                <div key={`elig-${i}`} className={`flex items-start gap-3 p-4 rounded-xl border ${c.met ? 'bg-success/5 border-success/20' : 'bg-danger/5 border-danger/20'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.met ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                    {c.met ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{c.value}</p>
                    {!c.met && <p className="text-xs text-danger font-semibold mt-1">⚠ Your profile indicates you may be receiving another state scholarship</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div>
            <p className="text-sm text-muted-foreground mb-5">Upload these documents to your ScholarshipHub document locker. Once uploaded, they can be reused for all future applications.</p>
            <div className="flex flex-col gap-3">
              {documentsRequired.map((doc, i) => (
                <div key={`doc-${i}`} className="flex items-center justify-between gap-3 p-4 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${doc.mandatory ? 'bg-primary/10' : 'bg-muted'}`}>
                      <FileText size={15} className={doc.mandatory ? 'text-primary' : 'text-muted-foreground'} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-foreground">{doc.name}</p>
                        {doc.mandatory ? (
                          <span className="badge bg-danger/10 text-danger border-danger/20 text-xs">Required</span>
                        ) : (
                          <span className="badge bg-muted text-muted-foreground border-border text-xs">Optional</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">Issued by: {doc.issuer}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted-foreground">{doc.format}</p>
                    <p className="text-xs text-muted-foreground">Max {doc.maxSize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => (
                <div key={`step-${step.step}`} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && <div className="w-0.5 flex-1 bg-border my-1" />}
                  </div>
                  <div className={`pb-6 ${i === processSteps.length - 1 ? 'pb-0' : ''}`}>
                    <p className="font-bold text-sm text-foreground mt-1.5">{step.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dates' && (
          <div className="flex flex-col gap-3">
            {importantDates.map((d, i) => (
              <div key={`date-${i}`} className={`flex items-center justify-between gap-4 p-4 rounded-xl border ${d.urgent ? 'bg-danger/5 border-danger/20' : d.status === 'completed' ? 'bg-muted/50 border-border opacity-70' : 'bg-card border-border'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${d.status === 'completed' ? 'bg-muted-foreground' : d.urgent ? 'bg-danger' : 'bg-primary'}`} />
                  <p className={`text-sm font-semibold ${d.status === 'completed' ? 'text-muted-foreground line-through' : 'text-foreground'}`}>{d.event}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-sm font-bold ${d.urgent ? 'text-danger' : d.status === 'completed' ? 'text-muted-foreground' : 'text-foreground'}`}>{d.date}</p>
                  {d.urgent && <p className="text-xs text-danger font-semibold">29 days left!</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={`faq-${i}`} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground">{faq.q}</p>
                  <span className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 border-t border-border bg-muted/20">
                    <p className="text-sm text-muted-foreground leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
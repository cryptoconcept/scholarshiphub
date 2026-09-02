'use client';
import React from 'react';
import { Eye, CheckCircle, XCircle, Award } from 'lucide-react';

import { toast } from 'sonner';

const scholarships = [
  { id: 'saq-001', title: 'Rural Girl Child Higher Education Grant', provider: 'Karnataka Rajyotsava Trust', category: 'Girl Child', amount: '₹18,000', submittedOn: '30 Aug 2026', educationLevel: 'UG' },
  { id: 'saq-002', title: 'Mysuru District Merit Scholarship 2026', provider: 'Mysuru Zilla Panchayat', category: 'Merit', amount: '₹10,000', submittedOn: '28 Aug 2026', educationLevel: 'Class 11-12' },
  { id: 'saq-003', title: 'Infosys Foundation STEM Girls Scholarship', provider: 'Infosys Foundation', category: 'Girl Child + Merit', amount: '₹75,000', submittedOn: '26 Aug 2026', educationLevel: 'B.E / B.Tech' },
  { id: 'saq-004', title: 'VTU Research Excellence Fellowship', provider: 'Visvesvaraya Technological University', category: 'Merit', amount: '₹40,000', submittedOn: '24 Aug 2026', educationLevel: 'M.Tech / PhD' },
  { id: 'saq-005', title: 'Azim Premji Foundation Rural Education Grant', provider: 'Azim Premji Foundation', category: 'Income-based', amount: '₹22,000', submittedOn: '22 Aug 2026', educationLevel: 'Class 9-12' },
  { id: 'saq-006', title: 'HDFC Parivartan Scholarship for SC/ST', provider: 'HDFC Bank Parivartan', category: 'SC/ST', amount: '₹30,000', submittedOn: '20 Aug 2026', educationLevel: 'UG / PG' },
  { id: 'saq-007', title: 'Manipal Academic Excellence Award', provider: 'Manipal Academy', category: 'Merit', amount: '₹50,000', submittedOn: '18 Aug 2026', educationLevel: 'UG' },
  { id: 'saq-008', title: 'Karnataka Minority Students Support Grant', provider: 'Tumkur Minority Welfare Samiti', category: 'Minority', amount: '₹12,000', submittedOn: '15 Aug 2026', educationLevel: 'Class 11-12 / UG' },
  { id: 'saq-009', title: 'Karnataka Samaja Seva OBC Scholarship', provider: 'Karnataka Samaja Seva Trust', category: 'OBC', amount: '₹9,000', submittedOn: '12 Aug 2026', educationLevel: 'UG' },
  { id: 'saq-010', title: 'Belagavi District Sports Excellence Grant', provider: 'Belagavi Sports Authority', category: 'Sports', amount: '₹15,000', submittedOn: '10 Aug 2026', educationLevel: 'Any' },
  { id: 'saq-011', title: 'Hubli-Dharwad Engineering Merit Scholarship', provider: 'HubDha Education Foundation', category: 'Merit', amount: '₹20,000', submittedOn: '08 Aug 2026', educationLevel: 'B.E / B.Tech' },
  { id: 'saq-012', title: 'Shivamogga Rural Talent Scholarship', provider: 'Shivamogga Taluk Trust', category: 'Rural + Merit', amount: '₹8,000', submittedOn: '05 Aug 2026', educationLevel: 'Class 9-12' },
  { id: 'saq-013', title: 'Davangere EWS Student Support Grant', provider: 'Davangere District Foundation', category: 'EWS', amount: '₹11,000', submittedOn: '03 Aug 2026', educationLevel: 'UG' },
  { id: 'saq-014', title: 'Kalaburagi Backward Class Scholarship', provider: 'Kalaburagi BC Welfare Board', category: 'OBC', amount: '₹7,500', submittedOn: '01 Aug 2026', educationLevel: 'Class 11-12' },
];

export default function ScholarshipApprovalQueue() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <h2 className="text-sm font-bold text-foreground">Scholarship Approval Queue</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{scholarships?.length} scholarships pending review</p>
        </div>
        <span className="badge bg-warning/10 text-warning border-warning/20 text-xs">{scholarships?.length} pending</span>
      </div>
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="border-b border-border bg-muted/80 backdrop-blur-sm">
              {['Scholarship', 'Provider', 'Category', 'Amount', 'Level', 'Submitted', 'Actions']?.map((h) => (
                <th key={`saqh-${h}`} className="text-left px-5 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scholarships?.map((s, i) => (
              <tr key={s?.id} className={`border-b border-border last:border-0 hover:bg-muted/40 transition-colors ${i % 2 !== 0 ? 'bg-muted/10' : ''}`}>
                <td className="px-5 py-3 max-w-[180px]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award size={11} className="text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-foreground line-clamp-1">{s?.title}</p>
                  </div>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{s?.provider}</span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="badge bg-secondary text-secondary-foreground border-secondary text-xs">{s?.category}</span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="text-xs font-bold text-success tabular-nums">{s?.amount}</span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{s?.educationLevel}</span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{s?.submittedOn}</span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="Review scholarship">
                      <Eye size={13} />
                    </button>
                    <button
                      onClick={() => toast?.success(`"${s?.title}" approved and published!`)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-success hover:bg-success/5 transition-colors"
                      title="Approve and publish"
                    >
                      <CheckCircle size={13} />
                    </button>
                    <button
                      onClick={() => toast?.error(`"${s?.title}" rejected`)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 transition-colors"
                      title="Reject scholarship"
                    >
                      <XCircle size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
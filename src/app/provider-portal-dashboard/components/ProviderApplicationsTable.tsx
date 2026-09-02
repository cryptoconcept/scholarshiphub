'use client';
import React, { useState } from 'react';
import { Eye, CheckCircle, XCircle, MessageSquare, Download } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import AppImage from '@/components/ui/AppImage';
import { toast } from 'sonner';

const applications = [
  { id: 'papp-001', studentName: 'Priya Sharma', avatar: 'https://i.pravatar.cc/36?img=47', scholarship: 'Karnataka Rajyotsava Scholarship', caste: 'SC', income: '₹1.8L', marks: '78%', district: 'Bangalore Urban', submittedOn: '15 Aug 2026', status: 'Under Review', matchScore: 94 },
  { id: 'papp-002', studentName: 'Karthik Gowda', avatar: 'https://i.pravatar.cc/36?img=15', scholarship: 'Karnataka Rajyotsava Scholarship', caste: 'ST', income: '₹2.1L', marks: '82%', district: 'Mysuru', submittedOn: '14 Aug 2026', status: 'Shortlisted', matchScore: 91 },
  { id: 'papp-003', studentName: 'Meera Nair', avatar: 'https://i.pravatar.cc/36?img=32', scholarship: 'Vidyarthi Protsaha Scholarship', caste: 'SC', income: '₹1.4L', marks: '71%', district: 'Mangaluru', submittedOn: '13 Aug 2026', status: 'Under Review', matchScore: 87 },
  { id: 'papp-004', studentName: 'Rahul Naik', avatar: 'https://i.pravatar.cc/36?img=52', scholarship: 'Karnataka Rajyotsava Scholarship', caste: 'ST', income: '₹2.4L', marks: '65%', district: 'Belagavi', submittedOn: '12 Aug 2026', status: 'Additional Info Required', matchScore: 72 },
  { id: 'papp-005', studentName: 'Divya Hegde', avatar: 'https://i.pravatar.cc/36?img=23', scholarship: 'Rural Girl Child Grant', caste: 'OBC', income: '₹1.9L', marks: '88%', district: 'Shivamogga', submittedOn: '11 Aug 2026', status: 'Shortlisted', matchScore: 95 },
  { id: 'papp-006', studentName: 'Suresh Patil', avatar: 'https://i.pravatar.cc/36?img=61', scholarship: 'Karnataka Rajyotsava Scholarship', caste: 'SC', income: '₹2.3L', marks: '59%', district: 'Kalaburagi', submittedOn: '10 Aug 2026', status: 'Rejected', matchScore: 54 },
  { id: 'papp-007', studentName: 'Anitha Kumari', avatar: 'https://i.pravatar.cc/36?img=38', scholarship: 'Merit Scholarship SC/ST PG', caste: 'SC', income: '₹1.2L', marks: '91%', district: 'Tumkur', submittedOn: '09 Aug 2026', status: 'Approved', matchScore: 98 },
  { id: 'papp-008', studentName: 'Mohammed Farouk', avatar: 'https://i.pravatar.cc/36?img=17', scholarship: 'Vidyarthi Protsaha Scholarship', caste: 'OBC', income: '₹2.0L', marks: '74%', district: 'Hubli-Dharwad', submittedOn: '08 Aug 2026', status: 'Under Review', matchScore: 83 },
];

export default function ProviderApplicationsTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === applications.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(applications.map((a) => a.id)));
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-wrap gap-3">
        <div>
          <h2 className="text-base font-bold text-foreground">Recent Applications</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Review, shortlist, and manage applicants</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => toast.success('Exporting applicant data...')} className="btn-outline text-xs px-3 py-2 gap-1.5">
            <Download size={13} /> Export CSV
          </button>
          <select className="input-field py-2 text-xs w-auto">
            <option>All Scholarships</option>
            <option>Karnataka Rajyotsava</option>
            <option>Vidyarthi Protsaha</option>
          </select>
        </div>
      </div>

      {/* Bulk action bar */}
      {selectedRows.size > 0 && (
        <div className="px-6 py-3 bg-primary/5 border-b border-primary/20 flex items-center gap-3 animate-fade-in">
          <span className="text-xs font-bold text-primary">{selectedRows.size} selected</span>
          <button onClick={() => { toast.success(`${selectedRows.size} applications shortlisted`); setSelectedRows(new Set()); }} className="btn-primary text-xs px-3 py-1.5">Shortlist</button>
          <button onClick={() => { toast.error(`${selectedRows.size} applications rejected`); setSelectedRows(new Set()); }} className="btn-danger text-xs px-3 py-1.5">Reject</button>
          <button onClick={() => setSelectedRows(new Set())} className="btn-ghost text-xs">Cancel</button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-5 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.size === applications.length}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
              </th>
              {['Student', 'Scholarship', 'Category', 'Income', 'Marks', 'District', 'Submitted', 'Match', 'Status', 'Actions'].map((h) => (
                <th key={`ah-${h}`} className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={app.id} className={`border-b border-border last:border-0 hover:bg-muted/40 transition-colors ${selectedRows.has(app.id) ? 'bg-primary/5' : i % 2 !== 0 ? 'bg-muted/10' : ''}`}>
                <td className="px-5 py-3.5">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(app.id)}
                    onChange={() => toggleRow(app.id)}
                    className="w-4 h-4 rounded accent-primary cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <AppImage src={app.avatar} alt={`${app.studentName} avatar`} width={28} height={28} className="w-7 h-7 rounded-full object-cover shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{app.studentName}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5 max-w-[160px]">
                  <span className="text-xs text-muted-foreground line-clamp-1">{app.scholarship}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="badge bg-secondary text-secondary-foreground border-secondary text-xs">{app.caste}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-xs font-semibold text-foreground tabular-nums">{app.income}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className={`text-xs font-bold tabular-nums ${Number(app.marks) >= 80 ? 'text-success' : Number(app.marks) >= 65 ? 'text-foreground' : 'text-warning'}`}>{app.marks}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{app.district}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{app.submittedOn}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className={`badge text-xs ${app.matchScore >= 85 ? 'match-excellent' : app.matchScore >= 70 ? 'match-good' : 'match-possible'}`}>
                    {app.matchScore}%
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <StatusBadge status={app.status} />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="View application">
                      <Eye size={13} />
                    </button>
                    <button onClick={() => toast.success(`${app.studentName} shortlisted`)} className="p-1.5 rounded-lg text-muted-foreground hover:text-success hover:bg-success/5 transition-colors" title="Shortlist applicant">
                      <CheckCircle size={13} />
                    </button>
                    <button onClick={() => toast.error(`Application rejected`)} className="p-1.5 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 transition-colors" title="Reject application">
                      <XCircle size={13} />
                    </button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Request info">
                      <MessageSquare size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-muted-foreground">Showing 1–8 of 312 applications</p>
        <div className="flex items-center gap-2">
          <select className="input-field py-1.5 text-xs w-auto">
            <option>10 per page</option>
            <option>25 per page</option>
            <option>50 per page</option>
          </select>
          <div className="flex gap-1">
            {[1, 2, 3, '...', 32].map((p, i) => (
              <button
                key={`prov-page-${i}`}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${p === 1 ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground hover:bg-muted'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
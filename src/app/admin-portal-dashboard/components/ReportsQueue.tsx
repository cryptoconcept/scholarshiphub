'use client';
import React from 'react';
import { Eye, CheckCircle, Trash2, Flag } from 'lucide-react';
import { toast } from 'sonner';

const reports = [
  { id: 'rep-001', type: 'Incorrect Information', scholarship: 'Rajiv Gandhi National Fellowship', reporter: 'Karthik Gowda', reportedOn: '31 Aug 2026', desc: 'The eligibility criteria listed are outdated. Income limit was revised to ₹3L in 2025.', severity: 'Medium' },
  { id: 'rep-002', type: 'Suspicious Provider', scholarship: 'Karnataka Youth Talent Fund', reporter: 'Meera Nair', reportedOn: '30 Aug 2026', desc: 'Provider website is not accessible and contact number is not working.', severity: 'High' },
  { id: 'rep-003', type: 'Expired Scholarship', scholarship: 'NMMS 2024 Scholarship', reporter: 'Suresh Patil', reportedOn: '29 Aug 2026', desc: 'This scholarship cycle ended in 2024. The 2026 cycle listing is incorrect.', severity: 'Low' },
  { id: 'rep-004', type: 'Broken External Link', scholarship: 'PM e-VIDYA Scholarship', reporter: 'Divya Hegde', reportedOn: '28 Aug 2026', desc: 'The Apply Now link redirects to a 404 page on the provider website.', severity: 'Medium' },
  { id: 'rep-005', type: 'Misleading Information', scholarship: 'Belagavi Sports Excellence Grant', reporter: 'Rahul Naik', reportedOn: '27 Aug 2026', desc: 'The scholarship is listed as ₹50,000 but the actual amount is ₹15,000.', severity: 'High' },
  { id: 'rep-006', type: 'Duplicate Listing', scholarship: 'Karnataka Rajyotsava Scholarship', reporter: 'Anitha Kumari', reportedOn: '26 Aug 2026', desc: 'This scholarship appears twice in search results under different provider names.', severity: 'Low' },
];

const severityClass: Record<string, string> = {
  High: 'bg-danger/10 text-danger border-danger/20',
  Medium: 'bg-warning/10 text-warning border-warning/20',
  Low: 'bg-muted text-muted-foreground border-border',
};

export default function ReportsQueue() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Flag size={15} className="text-danger" />
          <h2 className="text-sm font-bold text-foreground">Reports Queue</h2>
        </div>
        <span className="badge bg-danger/10 text-danger border-danger/20 text-xs">6 unresolved</span>
      </div>
      <div className="divide-y divide-border">
        {reports.map((r) => (
          <div key={r.id} className="px-5 py-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`badge text-xs ${severityClass[r.severity]}`}>{r.severity}</span>
                  <span className="text-xs font-bold text-foreground">{r.type}</span>
                </div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">{r.scholarship}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{r.desc}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span>By {r.reporter}</span>
                  <span>·</span>
                  <span>{r.reportedOn}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="Review report">
                  <Eye size={13} />
                </button>
                <button
                  onClick={() => toast.success('Report resolved')}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-success hover:bg-success/5 transition-colors"
                  title="Mark resolved"
                >
                  <CheckCircle size={13} />
                </button>
                <button
                  onClick={() => toast.error('Report dismissed')}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 transition-colors"
                  title="Dismiss report"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
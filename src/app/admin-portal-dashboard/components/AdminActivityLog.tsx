import React from 'react';
import { ShieldCheck, Award, FileText, Flag, User, AlertCircle } from 'lucide-react';

const activities = [
  { id: 'act-001', type: 'provider-verified', icon: <ShieldCheck size={13} />, iconBg: 'bg-success/10 text-success', text: 'Verified provider: Azim Premji Foundation', time: '12 min ago', by: 'Rahul Verma' },
  { id: 'act-002', type: 'scholarship-approved', icon: <Award size={13} />, iconBg: 'bg-primary/10 text-primary', text: 'Approved scholarship: VTU Research Excellence Fellowship', time: '34 min ago', by: 'Rahul Verma' },
  { id: 'act-003', type: 'scholarship-rejected', icon: <Award size={13} />, iconBg: 'bg-danger/10 text-danger', text: 'Rejected scholarship: Fake Trust Scholarship 2026', time: '1h ago', by: 'Preethi Rao' },
  { id: 'act-004', type: 'report-resolved', icon: <Flag size={13} />, iconBg: 'bg-warning/10 text-warning', text: 'Resolved report on: NMMS 2024 Scholarship (expired)', time: '2h ago', by: 'Rahul Verma' },
  { id: 'act-005', type: 'provider-suspended', icon: <AlertCircle size={13} />, iconBg: 'bg-danger/10 text-danger', text: 'Suspended provider: Karnataka Youth Talent Fund — suspicious activity', time: '3h ago', by: 'Preethi Rao' },
  { id: 'act-006', type: 'user-flagged', icon: <User size={13} />, iconBg: 'bg-muted text-muted-foreground', text: 'Flagged duplicate student account: priya.sharma.dup@gmail.com', time: '4h ago', by: 'System' },
  { id: 'act-007', type: 'scholarship-approved', icon: <Award size={13} />, iconBg: 'bg-primary/10 text-primary', text: 'Approved scholarship: Infosys Foundation STEM Girls Scholarship', time: '5h ago', by: 'Rahul Verma' },
  { id: 'act-008', type: 'provider-verified', icon: <ShieldCheck size={13} />, iconBg: 'bg-success/10 text-success', text: 'Verified provider: HDFC Bank Parivartan CSR Division', time: '6h ago', by: 'Preethi Rao' },
  { id: 'act-009', type: 'report-resolved', icon: <Flag size={13} />, iconBg: 'bg-warning/10 text-warning', text: 'Resolved report: Broken link on PM e-VIDYA Scholarship', time: '8h ago', by: 'Rahul Verma' },
  { id: 'act-010', type: 'category-updated', icon: <FileText size={13} />, iconBg: 'bg-muted text-muted-foreground', text: 'Updated category: Added "Transgender" to gender filter options', time: '12h ago', by: 'Preethi Rao' },
];

export default function AdminActivityLog() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h2 className="text-sm font-bold text-foreground">Activity Log</h2>
        <button className="text-xs font-semibold text-primary hover:underline">View full log</button>
      </div>
      <div className="divide-y divide-border overflow-y-auto max-h-[420px]">
        {activities?.map((a) => (
          <div key={a?.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-muted/30 transition-colors">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${a?.iconBg}`}>
              {a?.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground leading-relaxed">{a?.text}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <span className="font-medium">{a?.by}</span>
                <span>·</span>
                <span>{a?.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
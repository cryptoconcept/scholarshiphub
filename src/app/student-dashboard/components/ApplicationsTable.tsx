'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, MoreHorizontal } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';

const applications = [
  { id: 'app-001', scholarshipName: 'Karnataka Rajyotsava Scholarship for SC/ST', provider: 'Dept. of Social Welfare, KA', submittedOn: '12 Aug 2026', amount: '₹12,000', status: 'Shortlisted', appId: 'SCH-APP-7841' },
  { id: 'app-002', scholarshipName: 'AICTE Pragati Scholarship for Girls', provider: 'AICTE', submittedOn: '05 Aug 2026', amount: '₹50,000', status: 'Under Review', appId: 'SCH-APP-7622' },
  { id: 'app-003', scholarshipName: 'Vidyasiri Post-Matric OBC Scholarship', provider: 'BC Welfare Dept., KA', submittedOn: '28 Jul 2026', amount: '₹8,500', status: 'Approved', appId: 'SCH-APP-7104' },
  { id: 'app-004', scholarshipName: 'Indira Gandhi Single Girl Child Scholarship', provider: 'UGC', submittedOn: '20 Jul 2026', amount: '₹36,200', status: 'Under Review', appId: 'SCH-APP-6982' },
  { id: 'app-005', scholarshipName: 'Karnataka Minority Welfare Scholarship', provider: 'Minority Welfare Dept., KA', submittedOn: '15 Jul 2026', amount: '₹10,000', status: 'Additional Info Required', appId: 'SCH-APP-6781' },
  { id: 'app-006', scholarshipName: 'PM Scholarship for CAPF', provider: 'Ministry of Home Affairs', submittedOn: '10 Jul 2026', amount: '₹36,000', status: 'Rejected', appId: 'SCH-APP-6534' },
  { id: 'app-007', scholarshipName: 'Dr. Ambedkar Post-Matric Scholarship', provider: 'Dept. of Social Justice, KA', submittedOn: '01 Jul 2026', amount: '₹15,000', status: 'Approved', appId: 'SCH-APP-6211' },
  { id: 'app-008', scholarshipName: 'NMMS National Means-cum-Merit Scholarship', provider: 'Ministry of Education', submittedOn: '22 Jun 2026', amount: '₹12,000', status: 'Draft', appId: 'SCH-APP-5988' },
];

export default function ApplicationsTable() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="card">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h2 className="text-base font-bold text-foreground">My Applications</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{applications?.length} total applications this year</p>
        </div>
        <Link href="/student-dashboard" className="btn-outline text-xs px-3 py-2">
          View All Applications
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-6 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Application ID</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Scholarship</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Provider</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Amount</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Submitted</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Status</th>
              <th className="text-right px-6 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((app, i) => (
              <tr
                key={app?.id}
                className={`border-b border-border last:border-0 hover:bg-muted/40 transition-colors ${i % 2 === 0 ? '' : 'bg-muted/10'}`}
              >
                <td className="px-6 py-3.5 whitespace-nowrap">
                  <span className="font-mono text-xs font-semibold text-primary">{app?.appId}</span>
                </td>
                <td className="px-4 py-3.5 max-w-[220px]">
                  <Link href="/scholarship-detail" className="font-semibold text-sm text-foreground hover:text-primary transition-colors line-clamp-1">
                    {app?.scholarshipName}
                  </Link>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{app?.provider}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-sm font-bold text-foreground tabular-nums">{app?.amount}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{app?.submittedOn}</span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <StatusBadge status={app?.status} />
                </td>
                <td className="px-6 py-3.5 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1 relative">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="View application">
                      <Eye size={14} />
                    </button>
                    <button
                      onClick={() => setOpenMenu(openMenu === app?.id ? null : app?.id)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      title="More options"
                    >
                      <MoreHorizontal size={14} />
                    </button>
                    {openMenu === app?.id && (
                      <div className="absolute right-0 top-full mt-1 w-40 card shadow-dropdown z-20 py-1 animate-scale-in">
                        {['View Details', 'Download PDF', 'Withdraw Application']?.map((action) => (
                          <button
                            key={`action-${app?.id}-${action}`}
                            onClick={() => setOpenMenu(null)}
                            className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-muted transition-colors ${action === 'Withdraw Application' ? 'text-danger' : 'text-foreground'}`}
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
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